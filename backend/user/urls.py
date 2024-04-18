from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from . import views

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
    path("auth/register/", views.UserRegisterView.as_view(), name='register'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # user messages
    path("user/messages/", views.MessageView.as_view(), name="add_message"),
    path("user/messages/", views.MessageListView.as_view(), name="messages_list"),
    path("user/messages/<int:pk>/", views.MessageDetailView.as_view(), name="message_detail"),
    path('user/messages/<int:pk>/', views.MessageDeleteView.as_view(), name='message_delete'),
    path('user/messages/<int:pk>/', views.MessageUpdateView.as_view(), name='message_update'),

]
