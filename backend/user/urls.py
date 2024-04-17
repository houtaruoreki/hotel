from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from . import views

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
    path("auth/register/", views.UserRegisterView.as_view(), name='register'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("user/messages/add/", views.MessageView.as_view(), name="add_message"),
    path("user/messages/", views.MessageListView.as_view(), name="messages"),
    path("user/messages/<int:pk>/", views.MessageDetailView.as_view(), name="message_detail"),


]
