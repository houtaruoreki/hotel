from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from .serializers import RoomCottageSerializer
from .models import Rooms, Cottages


class HomePageView(APIView):
    permission_classes = [AllowAny]
    serializer_class = None

    @staticmethod
    def get(request):
        serializer_class = RoomCottageSerializer(data=request)
        return Response("This is the Home page")

    @staticmethod
    def post(request):
        permission_classes = [AllowAny]
        return Response("Form submitted successfully")
