from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserRegisterSerializer, UserLoginSerializer, MessageSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, Message
from rest_framework.response import Response


class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]


class MessageView(generics.CreateAPIView):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]


class MessageDetailView(generics.RetrieveAPIView):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]


class MessageListView(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
