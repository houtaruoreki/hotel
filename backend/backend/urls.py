from django.contrib import admin
from django.urls import path, include, reverse_lazy
from django.views.generic import RedirectView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.views.generic import TemplateView


urlpatterns = [
    path('robots.txt', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    path("admin/", admin.site.urls),
    path('', RedirectView.as_view(url=reverse_lazy('swagger-ui'), permanent=False)),
    path("", include("user.urls")),
    path("", include("hotel.urls")),
    path('api/schema', SpectacularAPIView.as_view(), name='schema'),
    path('api/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
   

]

