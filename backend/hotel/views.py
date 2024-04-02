from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView


class HomePageView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = None

    @staticmethod
    def get(request):
        return Response("This is the Home page")

    @staticmethod
    def post(request):
        return Response("Form submitted successfully")
