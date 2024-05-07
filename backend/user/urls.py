from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"message", views.MessageViewSet, basename="message")

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
    path("auth/register/", views.UserRegisterView.as_view(), name='register'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]

urlpatterns += router.urls
