from rest_framework import serializers

from .models import Rooms, Cottages


class RoomCottageSerializer(serializers.Serializer):
    number = serializers.IntegerField()
    description = serializers.CharField()

    def __init__(self, *args, **kwargs):
        super(RoomCottageSerializer, self).__init__(*args, **kwargs)
        if 'context' in kwargs and 'request' in kwargs['context']:
            request = kwargs['context']['request']
            queryset = None
            if 'rooms' in request.path:
                queryset = Rooms.objects.filter(status=True)
            elif 'cottages' in request.path:
                queryset = Cottages.objects.filter(status=True)
            self.fields['data'] = self.get_data(queryset)

    @staticmethod
    def get_data(queryset):
        data = []
        for obj in queryset:
            data.append({
                'number': obj.number,
                'description': obj.description
            })
        return serializers.ListField(child=serializers.DictField(), read_only=True)
