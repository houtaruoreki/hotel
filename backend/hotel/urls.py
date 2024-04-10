from django.urls import path
from . import views

urlpatterns = [
    path('', views.RoomsListView.as_view(), name='homePage'),
    path('<int:pk>', views.RoomDetailsView.as_view(), name='room-details'),
    path('add', views.RoomCreateView.as_view(), name='room-create'),
    path('update/<int:pk>', views.RoomUpdateView.as_view(), name='room-update'),
    path('delete/<int:pk>', views.RoomDeleteView.as_view(), name='room-delete'),
    path('images/<int:pk>', views.ImageView.as_view(), name='image'),
    path('images/add', views.ImageCreateView.as_view(), name='image-create'),
    path('images/delete/<int:pk>', views.ImageDeleteView.as_view(), name='image-delete'),
]
