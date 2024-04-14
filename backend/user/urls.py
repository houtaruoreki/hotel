from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from . import views

urlpatterns = [
    path('auth/login/', views.TokenObtainPairView.as_view(), name='login'),
    path("auth/register/", views.UserRegisterView.as_view(), name='register'),
    path("user/messages/add/", views.MessageView.as_view(), name="add_message"),
    path("user/messages/", views.MessageListView.as_view(), name="messages"),
    path("user/messages/<int:pk>/", views.MessageDetailView.as_view(), name="message_detail"),


]
