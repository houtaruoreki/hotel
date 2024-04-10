from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from .serializers import UserRegisterSerializer, UserLoginSerializer, MessageSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, Message
from rest_framework.response import Response


# Create your views here.
class UserLoginView(APIView):
    serializer_class = UserLoginSerializer

    @staticmethod
    def post(request):
        email = request.data['email']
        user = User.objects.filter(email=email).first()
        if not user:
            return Response('User does not exist', status=status.HTTP_404_NOT_FOUND)
        else:

            if user.check_password(request.data['password']):
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    "user_id": user.id
                })
            else:
                return Response('Invalid credentials', status=status.HTTP_401_UNAUTHORIZED)


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

