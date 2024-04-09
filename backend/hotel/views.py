from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RoomsSerializer, RoomDetailSerializer, ImageSerializer
from .models import Rooms, Images


class RoomsListView(generics.ListAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomsSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Rooms.objects.filter(status=1)


class RoomDetailsView(generics.RetrieveAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomDetailSerializer


class ImagesList(generics.ListAPIView):
    queryset = Images.objects.all()
    serializer_class = ImageSerializer


class RoomUpdateView(generics.UpdateAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomDetailSerializer


class RoomCreateView(generics.CreateAPIView):
    serializer_class = RoomsSerializer
    permission_classes = [AllowAny]
