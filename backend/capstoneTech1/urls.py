from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("user.urls")),
    path("", include("hotel.urls")),
    path('api/schema', SpectacularAPIView.as_view(), name='schema'),
    path('api', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

]
