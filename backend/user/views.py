from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser
from .serializers import UserRegisterSerializer, MessageSerializer
from .models import User, Message


class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]


class BaseMessageMixin:
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class PermissionMixin:
    permission_classes = [IsAdminUser]


class MessageView(BaseMessageMixin, generics.CreateAPIView):
    pass


class MessageDetailView(BaseMessageMixin, generics.RetrieveAPIView):
    pass


class MessageListView(BaseMessageMixin, generics.ListAPIView):
    pass


class MessageDeleteView(PermissionMixin, BaseMessageMixin, generics.DestroyAPIView):
    pass

