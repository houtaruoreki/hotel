from django.urls import path
from . import views

urlpatterns = [
    path('rooms', views.RoomsListView.as_view(), name='homePage'),
    path('rooms/<int:pk>', views.RoomDetailsView.as_view(), name='room-details'),
    path('rooms/update/<int:pk>', views.RoomUpdateView.as_view(), name='room-update')
]
