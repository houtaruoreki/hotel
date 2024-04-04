from rest_framework import generics

from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import RoomSerializer, RoomDetailSerializer
from .models import Rooms, Images


class RoomsListView(generics.ListAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Rooms.objects.filter(status=1)


class RoomDetailsView(generics.RetrieveAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomDetailSerializer


class RoomUpdateView(generics.UpdateAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer
