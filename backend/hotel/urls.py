from django.urls import path
from . import views

urlpatterns = [
    #  Room Urls
    path('rooms/', views.RoomsListView.as_view(), name='homePage'),
    path('rooms/add', views.RoomCreateView.as_view(), name='room-create'),
    path('rooms/<int:pk>/', views.RoomDetailsView.as_view(), name='room-details'),
    path('rooms/<int:pk>/', views.RoomUpdateView.as_view(), name='room-update'),
    path('rooms/<int:pk>/', views.RoomDeleteView.as_view(), name='room-delete'),

    # Image Urls
    path('images/', views.ImageCreateView.as_view(), name='image-create'),
    path('images/<int:pk>/', views.ImageView.as_view(), name='image'),
    path('images/<int:pk>/', views.ImageDeleteView.as_view(), name='image-delete'),
    path('images/<int:pk>/', views.ImageUpdateView.as_view(), name='image-update'),
    path('images/<int:pk>/', views.ImageDeleteView.as_view(), name='image-delete'),

    # Booking Views
    path('booking/', views.BookingListView.as_view(), name='bookings'),
    path('booking/', views.BookingView.as_view(), name='book-room'),
    path('booking/<int:pk>/', views.BookingStatusUpdateView.as_view(), name='booking-update'),
    path('booking/<int:pk>/', views.BookingDeleteView.as_view(), name='booking-delete'),

    # reviews
    path('review/', views.ReviewListView.as_view(), name='reviews'),
    path('review/', views.ReviewView.as_view(), name='review-add'),
    path('review/<int:pk>/', views.ReviewDetailView.as_view(), name='review-details'),
    path('review/<int:pk>/', views.ReviewDeleteView.as_view(), name='review-delete'),
]
