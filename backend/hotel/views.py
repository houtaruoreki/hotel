from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RoomsSerializer, RoomDetailSerializer, ImageSerializer
from .models import Room, Image


class RoomsListView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomsSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Room.objects.filter(status=1)


class RoomDetailsView(generics.RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomDetailSerializer


class RoomUpdateView(generics.UpdateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomDetailSerializer


class RoomCreateView(generics.CreateAPIView):
    serializer_class = RoomsSerializer
    permission_classes = [AllowAny]


class RoomDeleteView(generics.DestroyAPIView):
    serializer_class = RoomDetailSerializer
    permission_classes = [AllowAny]


class ImagesList(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageCreateView(generics.CreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageDeleteView(generics.DestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageView(generics.RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
