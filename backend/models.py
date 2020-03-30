from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class RequestList(models.Model):
    requesterName = models.CharField(max_length=250)
    requesterPhone = models.CharField(max_length=250)
    addressLine = models.CharField(max_length=250)
    addressPostalCode = models.IntegerField()
    addressCity = models.CharField(max_length=250)
    addressCountry = models.CharField(max_length=250)
    refID = models.CharField(max_length=16, unique=True)
    createdDate = models.DateTimeField(auto_now_add=True)
    completeRequested = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    cancelRequested = models.BooleanField(default=False)
    cancelled = models.BooleanField(default=False)
    assignedUser = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)


class RequestListItem(models.Model):
    itemName = models.CharField(max_length=250)
    amount = models.CharField(max_length=250)
    list = models.ForeignKey(RequestList, on_delete=models.CASCADE)


class UserExtended(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    requesterName = models.CharField(max_length=250)
    requesterPhone = models.CharField(max_length=250)
    addressLine = models.CharField(max_length=250)
    addressPostalCode = models.IntegerField()
    addressCity = models.CharField(max_length=250)
    addressCountry = models.CharField(max_length=250)
    points = models.IntegerField()
    avatar = models.ImageField(upload_to='avatars/')


class SystemMessage(models.Model):
    healthReminderMessage = models.TextField()
