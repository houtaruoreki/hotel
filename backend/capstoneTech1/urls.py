from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from .schema import CustomSchemaGenerator


urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("user.urls")),
    path("", include("hotel.urls")),
    path("auth/token/refresh", TokenRefreshView.as_view(), name="refresh-token"),
    path('api/schema', SpectacularAPIView.as_view(generator_class=CustomSchemaGenerator), name='schema'),
    path('api', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('docs/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

