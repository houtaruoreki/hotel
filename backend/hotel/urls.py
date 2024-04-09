from django.urls import path
from . import views

urlpatterns = [
    path('', views.RoomsListView.as_view(), name='homePage'),
    path('<int:pk>', views.RoomDetailsView.as_view(), name='room-details'),
    path('add', views.RoomCreateView.as_view(), name='room-create'),
    path('update/<int:pk>', views.RoomUpdateView.as_view(), name='room-update'),

]
