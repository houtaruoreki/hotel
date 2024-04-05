from django.urls import path
from . import views

urlpatterns = [
    path('login', views.UserLoginView.as_view(), name='login'),
    path("register", views.UserRegisterView.as_view(), name='register'),
    path("message/" ,views.MessageView.as_view(),name= "let's talk")
]
