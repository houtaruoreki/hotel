from rest_framework import status, generics
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from .serializers import UserRegisterSerializer, UserLoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from rest_framework.response import Response


# Create your views here.
class UserLoginView(APIView):
    serializer_class = UserLoginSerializer

    @staticmethod
    def post(request):
        email = request.data['email']
        user = User.objects.filter(email=email).first()
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            "user_id": user.id
        })


class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]
