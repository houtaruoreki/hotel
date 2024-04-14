from django.urls import path
from . import views

urlpatterns = [
    #  Room Urls
    path('rooms/', views.RoomsListView.as_view(), name='homePage'),
    path('rooms/<int:pk>/', views.RoomDetailsView.as_view(), name='room-details'),
    path('rooms/add/', views.RoomCreateView.as_view(), name='room-create'),
    path('rooms/update/<int:pk>/', views.RoomUpdateView.as_view(), name='room-update'),
    path('rooms/delete/<int:pk>/', views.RoomDeleteView.as_view(), name='room-delete'),

    # Image Urls
    path('images/<int:pk>/', views.ImageView.as_view(), name='image'),
    path('images/add/', views.ImageCreateView.as_view(), name='image-create'),
    path('images/delete/<int:pk>/', views.ImageDeleteView.as_view(), name='image-delete'),
    path('images/update/<int:pk>/', views.ImageUpdateView.as_view(), name='image-update'),
    path('images/delete/<int:pk>/', views.ImageDeleteView.as_view(), name='image-delete'),

    # Booking Views
    path('booking/add/', views.BookingView.as_view(), name='book-room'),
    path('booking/', views.BookingListView.as_view(), name='bookings'),
    path('booking/update/<int:pk>/', views.BookingStatusUpdateView.as_view(), name='booking-update'),
    path('booking/delete/<int:pk>/', views.BookingDeleteView.as_view(), name='booking-delete'),

    # reviews
    path('review/', views.ReviewListView.as_view(), name='reviews'),
    path('review/add/', views.ReviewView.as_view(), name='review-add'),
    path('review/delete/<int:pk>/', views.ReviewDeleteView.as_view(), name='review-delete'),
]
