from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RoomsSerializer, RoomDetailSerializer, ImageSerializer, ImageListSerializer, BookingSerializer
from .models import Room, Image, Booking


class BaseRoomView(generics.GenericAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomsSerializer
    permission_classes = [AllowAny]


class BaseImageView(generics.GenericAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageMixin(generics.GenericAPIView):
    def get_queryset(self):
        return Image.objects.filter(pk=self.kwargs['pk'])


class RoomsListView(BaseRoomView, generics.ListAPIView):
    def get_queryset(self):
        return Room.objects.filter(status=1)


class RoomDetailsView(BaseRoomView, generics.RetrieveAPIView):
    serializer_class = RoomDetailSerializer


class RoomUpdateView(BaseRoomView, generics.UpdateAPIView):
    serializer_class = RoomsSerializer


class RoomCreateView(generics.CreateAPIView):
    serializer_class = RoomDetailSerializer


class RoomDeleteView(BaseRoomView, generics.DestroyAPIView):
    pass


class ImagesListView(BaseImageView, generics.ListAPIView):
    pass


class ImageCreateView(generics.CreateAPIView):
    serializer_class = ImageSerializer

    def get_serializer_class(self):
        data = self.request.data
        if isinstance(data, list):
            return ImageListSerializer
        return ImageSerializer


class ImageDeleteView(BaseImageView, generics.DestroyAPIView):
    pass


class ImageView(ImageMixin, BaseImageView, generics.RetrieveAPIView):
    pass


class ImageUpdateView(ImageMixin, BaseImageView, generics.UpdateAPIView):
    pass


class BookingView(generics.CreateAPIView):
    serializer_class = BookingSerializer


class BookingListView(generics.ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class BookingStatusUpdateView(generics.UpdateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class BookingDeleteView(generics.DestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
