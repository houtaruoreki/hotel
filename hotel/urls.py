from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'rooms', views.RoomViewSet, basename='room')
router.register(r'images', views.ImageViewSet, basename='image')
router.register(r'booking', views.BookingViewSet, basename='booking')
router.register(r'review', views.ReviewViewSet, basename='review')

urlpatterns = router.urls
