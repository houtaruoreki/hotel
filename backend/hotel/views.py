from rest_framework import viewsets, permissions, generics, mixins
from . import models, serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser



class PermissionMixin:
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [permissions.AllowAny]  
        else:
            permission_classes = [permissions.AllowAny] 
        return [permission() for permission in permission_classes]
    
class RoomViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Room.objects.all()
    serializer_class = serializers.RoomDetailSerializer
    

class ImageViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Image.objects.all()
    serializer_class = serializers.ImageSerializer

class BookingViewSet(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.Booking.objects.all()
    serializer_class = serializers.BookingSerializer

class ReviewViewSet(PermissionMixin,mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

class AvailableRoomListView(generics.ListAPIView):
    serializer_class = serializers.RoomSerializer
    queryset= models.Room.objects.all()
    def list(self, request, *args, **kwargs):
        checkin_date = self.kwargs.get("checkin_date")
        checkout_date = self.kwargs.get('checkout_date')

        if not (checkin_date and checkout_date):
            return Response({'error': checkin_date}, status=400)

        available_rooms = []

        rooms = models.Room.objects.all()

        for room in rooms:
            # Check if there are any bookings that overlap with the requested period
            overlapping_bookings = models.Booking.objects.filter(
                room_id=room.id,
                checkin_time__lt=checkout_date,
                checkout_time__gt=checkin_date
            )

            # If no overlapping bookings, mark room as available
            if not overlapping_bookings.exists():
                available_rooms.append({
                    'room_id': room.id,
                    'availability_status': 'available'
                })
            else:
                # If there are overlapping bookings, mark room as not available
                available_rooms.append({
                    'room_id': room.id,
                    'availability_status': 'not_available',
                    'closest_room_checkin': overlapping_bookings.order_by('checkin_time').first().checkin_time,
                    'closest_room_checkout': overlapping_bookings.order_by('-checkout_time').first().checkout_time
                })

        return Response(available_rooms)
    


class ContactInfoViewset(PermissionMixin,viewsets.ModelViewSet):
    queryset = models.ContactInfo.objects.all()
    serializer_class= serializers.ContactInfoSerializer

class BookingListViewset(PermissionMixin, viewsets.ModelViewSet):
    queryset = models.Booking.objects.all()
    serializer_class = serializers.BookingListSerializer