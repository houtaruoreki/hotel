from rest_framework import viewsets, permissions
from . import models, serializers

class PermissionMixin:
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAuthenticated]  
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
