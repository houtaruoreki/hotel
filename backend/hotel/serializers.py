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

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'number']  

from django.utils import timezone

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = ['total_price']

    def create(self, validated_data):
        room = validated_data['room']
        checkin_new = validated_data['checkin_time']
        checkout_new = validated_data['checkout_time']

        # Check if the room is available for the specified time period
        overlapping_bookings = Booking.objects.filter(room=room, 
                                                      checkin_time__lt=checkout_new, 
                                                      checkout_time__gt=checkin_new)
        if overlapping_bookings.exists():
            overlapping_booking = overlapping_bookings.first()
            overlap = f"{max(checkin_new, overlapping_booking.checkin_time)} - {min(checkout_new, overlapping_booking.checkout_time)}"
            raise serializers.ValidationError({
                "error":'The room is already booked',
                'on this date': overlap
            })

        return Booking.objects.create(**validated_data)

    def update(self, instance, validated_data):
        status = validated_data.get('status')
        if status == 'confirmed':
            room = instance.room
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
