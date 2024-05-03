from rest_framework import viewsets, permissions, generics
from . import models, serializers

class PermissionMixin:
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [permissions.AllowAny]  
        else:
            permission_classes = [permissions.AllowAny] 
        return [permission() for permission in permission_classes]
    
class RoomViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Room.objects.all()
    serializer_class = serializers.RoomsSerializer
    

class ImageViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Image.objects.all()
    serializer_class = serializers.ImageSerializer

class BookingViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Booking.objects.all()
    serializer_class = serializers.BookingSerializer

class ReviewViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

class AvailableRoomsView(generics.ListAPIView):
    queryset = models.Booking.objects.all()
    serializer_class = serializers.AvailableRoomSerializer

    def get_queryset(self):
        check_in_date = self.request.query_params.get('checkin_time')
        check_out_date = self.request.query_params.get('checkout_time')
        
        if check_in_date and check_out_date:
            available_rooms = models.Booking.objects.exclude(
                checkin_time__lt=check_in_date,
                checkout_time__gt=check_out_date
            )
            if available_rooms.exists():
                return available_rooms
            else:
                closest_room_checkin = models.Booking.objects.aggregate(Min('checkin_time'))['checkin_time__min']
                closest_room = models.Booking.objects.filter(checkin_time=closest_room_checkin).first()
                return models.Booking.objects.filter(pk=closest_room.pk)
        else:
            return models.Booking.objects.none()