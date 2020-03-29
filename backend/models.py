from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class RequestItem(models.Model):
    items = models.TextField()
    address = models.TextField()
    addressGeolocation = models.TextField()
    refID = models.CharField(max_length=16, unique=True)
    assignedUser = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdDate = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)


class UserExtended(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField()


class SystemMessage(models.Model):
    healthReminderMessage = models.TextField()
