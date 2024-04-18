from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import UserRegisterSerializer, MessageSerializer, CategorySerializer
from .models import User, Message, Category


class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]


class BaseMessageMixin:
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class MessageView(BaseMessageMixin, generics.CreateAPIView):
    pass


class MessageDetailView(BaseMessageMixin, generics.RetrieveAPIView):
    pass


class MessageListView(BaseMessageMixin, generics.ListAPIView):
    pass


class MessageDeleteView(BaseMessageMixin, generics.DestroyAPIView):
    pass


class MessageUpdateView(BaseMessageMixin, generics.UpdateAPIView):
    pass


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryUpdateView(generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
