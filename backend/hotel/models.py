from django.db import models


class Room(models.Model):
    number = models.IntegerField(unique=True)
    description = models.TextField()
    price = models.FloatField(default=0)
    status = models.BooleanField(default=False)
    is_cottage = models.BooleanField(default=False)


class Image(models.Model):
    url = models.TextField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE)


class Services(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
