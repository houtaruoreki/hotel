from rest_framework import serializers

from .models import Room, Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'


class RoomDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, source='images_set', read_only=True)

    class Meta:
        model = Room
        fields = ['id', 'number', 'description', 'status', 'is_cottage', 'images']

    def create(self, validated_data):
        images_data = validated_data.pop('images_set', None)
        room = Room.objects.create(**validated_data)

        if images_data:
            print(images_data)
            for image_data in images_data:
                Image.objects.create(room=room, **image_data)
        return room


class RoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        exclude = ['price']
