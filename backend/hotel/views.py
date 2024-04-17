from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import (RoomsSerializer, RoomDetailSerializer, ImageSerializer,
                          ImageListSerializer, BookingSerializer, ReviewSerializer)
from .models import Room, Image, Booking, Review


class BaseRoomView:
    queryset = Room.objects.all()
    serializer_class = RoomsSerializer


class BaseImageView:
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def get_serializer_class(self):
        data = self.request.data
        if isinstance(data, list):
            return ImageListSerializer
        return ImageSerializer

    def get_queryset(self):
        return Image.objects.filter(pk=self.kwargs['pk'])


class BaseBookingView:
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]


class BaseReviewView:
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]


class RoomsListView(BaseRoomView, generics.ListAPIView):
    pass


class RoomDetailsView(BaseRoomView, generics.RetrieveAPIView):
    serializer_class = RoomDetailSerializer


class RoomUpdateView(BaseRoomView, generics.UpdateAPIView):
    pass


class RoomCreateView(BaseRoomView, generics.CreateAPIView):
    pass


class RoomDeleteView(BaseRoomView, generics.DestroyAPIView):
    pass


class ImagesListView(BaseImageView, generics.ListAPIView):
    pass


class ImageCreateView(BaseImageView, generics.CreateAPIView):
    pass


class ImageDeleteView(BaseImageView, generics.DestroyAPIView):
    pass


class ImageView(BaseImageView, generics.RetrieveAPIView):
    pass


class ImageUpdateView(BaseImageView, generics.UpdateAPIView):
    pass


# Booking views list create update delete
class BookingListView(BaseBookingView, generics.ListAPIView):
    pass


class BookingView(BaseBookingView, generics.CreateAPIView):
    pass


class BookingStatusUpdateView(BaseBookingView, generics.UpdateAPIView):
    pass


class BookingDeleteView(BaseBookingView, generics.DestroyAPIView):
    pass


# Review views: list create delete
class ReviewListView(BaseReviewView, generics.ListAPIView):
    pass


class ReviewDetailView(BaseReviewView, generics.RetrieveAPIView):
    pass


class ReviewView(BaseReviewView, generics.CreateAPIView):
    pass


class ReviewDeleteView(BaseReviewView, generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
