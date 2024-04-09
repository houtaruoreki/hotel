from django.urls import path
from . import views

urlpatterns = [
    path('login', views.UserLoginView.as_view(), name='login'),
    path("register", views.UserRegisterView.as_view(), name='register'),
    path("messages/add", views.MessageView.as_view(), name="add_message"),
    path("messages", views.MessageListView.as_view(), name="messages"),
    path("messages/<int:pk>", views.MessageDetailView.as_view(), name="message_detail"),
]
