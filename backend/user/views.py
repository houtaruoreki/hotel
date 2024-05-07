from rest_framework import generics, viewsets, mixins
from rest_framework.permissions import AllowAny, IsAdminUser
from .serializers import UserRegisterSerializer, MessageSerializer
from .models import User, Message


class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]



class MessageViewSet(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

