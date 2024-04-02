from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from rest_framework.response import Response


# Create your views here.
class UserLoginView(APIView):
    serializer_class = None

    @staticmethod
    def post(request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()
        if not user:
            raise AuthenticationFailed('Invalid username')

        if not user.check_password(password):
            raise AuthenticationFailed('Invalid password')

        refresh = RefreshToken.for_user(user)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            "user_id": user.id
        })


class UserRegisterView(APIView):
    @staticmethod
    def post(request):
        serializer_class = UserSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response({"message": "User created",
                             "status": status.HTTP_201_CREATED})
        else:
            return Response({
                "message": serializer_class.errors
            })
