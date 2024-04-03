from django.db import models


class Rooms(models.Model):
    number = models.IntegerField()
    description = models.TextField()
    price = models.FloatField(default=0)
    status = models.BooleanField(default=False)


class Cottages(models.Model):
    number = models.IntegerField()
    description = models.TextField()
    price = models.FloatField(default=0)
    status = models.BooleanField(default=False)


