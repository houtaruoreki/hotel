from rest_framework import serializers, status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from .models import Room, Image, Booking


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


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = ['total_price']

    def create(self, validated_data):
        room = validated_data['room']
        status = validated_data['status']

        if room and room.status != 1:
            raise ValidationError("Cannot create booking: Room is not available.")
        if status == 'confirmed':
            room.status = 0
            room.save()

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
