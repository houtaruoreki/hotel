from rest_framework import serializers

from .models import Rooms, Images


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['url']


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        exclude = ['price']
        # fields = ['number', 'description', 'status', 'is_cottage']


class RoomDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, source='images_set')

    class Meta:
        model = Rooms
        fields = ['id', 'number', 'description', 'status', 'is_cottage', 'images']

    def create(self, validated_data):
        images_data = self.context.get('request').data.get('images')
        room = Rooms.objects.create(**validated_data)
        for image_data in images_data:
            Images.objects.create(room_id=room, **image_data)
        return room
