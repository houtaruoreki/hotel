from datetime import timezone, datetime

from rest_framework import serializers


from .models import Room, Image, Booking, Review


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['url']


class ImageListSerializer(serializers.ListSerializer):
    child = ImageSerializer()

    def create(self, validated_data):
        return [self.child.create(item) for item in validated_data]


class RoomDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, source='image_set')

    class Meta:
        model = Room
        fields = ['id', 'number', 'description', 'status', 'is_cottage', 'images']

    def create(self, validated_data):
        images = validated_data.pop('image_set')
        room = Room.objects.create(**validated_data)
        if images:
            for image in images:
                Image.objects.create(room=room, url=image['url'])
        return room


class RoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        exclude = ['price']

class AvailableRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['room_id', 'checkin_time', 'checkout_time']

    def to_representation(self, instance):
        if isinstance(instance, Booking):
            return {
                'room_id': instance.room_id,
                'availability_status': 'available'
            }
        else:
            return {
                'room_id': instance['room_id'],
                'availability_status': 'not_available',
                'closest_room_checkin': instance['checkin_time'],
                'closest_room_checkout': instance['checkout_time']
            }

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = ['total_price']

    def create(self, validated_data):
        room = validated_data['room']
        checkin_new = validated_data['checkin_time']
        checkout_new = validated_data['checkout_time']
        if room and room.status != 1:
            booking = Booking.objects.filter(room=room).order_by('-id')[0]
            if checkin_new >= booking.checkin_time:
                if checkout_new > booking.checkout_time:
                    overlap = f"{checkin_new} - {booking.checkout_time}"
                    available = f"{booking.checkout_time} - {checkout_new}"
                    raise serializers.ValidationError({'overlap': overlap,
                                                       'available': available})
                else:
                    raise serializers.ValidationError("Room is not available in that period")
        return Booking.objects.create(**validated_data)

    def update(self, instance, validated_data):
        room = instance.room
        status = validated_data['status']
        if status == 'confirmed':
            room.status = 0
            room.save()
        elif status == 'canceled':
            instance.delete()
        return super().update(instance, validated_data)


class BookingListSerializer(serializers.ListSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'text', 'rating']
