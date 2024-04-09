from rest_framework import serializers

from .models import Rooms, Images


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['url']


class RoomDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, source='images_set')

    class Meta:
        model = Rooms
        fields = ['id', 'number', 'description', 'status', 'is_cottage', 'images']

    def create(self, validated_data):
        images_data = validated_data.pop('images_set', None)
        room = Rooms.objects.create(**validated_data)

        if images_data:
            print(images_data)
            for image_data in images_data:
                Images.objects.create(room=room, **image_data)
        return room


class RoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        exclude = ['price']
