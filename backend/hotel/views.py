from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
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


class PermissionMixin:
    permission_classes = [IsAdminUser]


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


class RoomUpdateView(PermissionMixin, BaseRoomView, generics.UpdateAPIView):
    pass


class RoomCreateView(PermissionMixin, BaseRoomView, generics.CreateAPIView):
    pass


class RoomDeleteView(PermissionMixin, BaseRoomView, generics.DestroyAPIView):
    pass


class ImagesListView(BaseImageView, generics.ListAPIView):
    pass


class ImageCreateView(PermissionMixin, BaseImageView, generics.CreateAPIView):
    pass


class ImageDeleteView(PermissionMixin, BaseImageView, generics.DestroyAPIView):
    pass


class ImageView(BaseImageView, generics.RetrieveAPIView):
    pass


class ImageUpdateView(PermissionMixin, BaseImageView, generics.UpdateAPIView):
    pass


# Booking views list create update delete
class BookingListView(BaseBookingView, generics.ListAPIView):
    pass


class BookingView(BaseBookingView, generics.CreateAPIView):
    pass


class BookingStatusUpdateView(PermissionMixin, BaseBookingView, generics.UpdateAPIView):
    pass


class BookingDeleteView(PermissionMixin, BaseBookingView, generics.DestroyAPIView):
    pass


# Review views: list create delete
class ReviewListView(BaseReviewView, generics.ListAPIView):
    pass


class ReviewDetailView(BaseReviewView, generics.RetrieveAPIView):
    pass


class ReviewView(BaseReviewView, generics.CreateAPIView):
    pass


class ReviewDeleteView(PermissionMixin, BaseReviewView, generics.DestroyAPIView):
    pass
