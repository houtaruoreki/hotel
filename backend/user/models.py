from django.db import models
from django.contrib.auth.hashers import check_password as auth_check_password


class User(models.Model):
    name = models.CharField(max_length=150)
    number = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=150)

    def check_password(self, raw_password):
        return auth_check_password(raw_password, self.password)

    def __str__(self):
        return f"{self.number} - {self.email}"


class Message(models.Model):
    fullname = models.CharField(max_length=150)
    email = models.EmailField()
    satisfied = models.CharField(max_length=255)
    message = models.TextField()
