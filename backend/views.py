from django.shortcuts import render
from rest_framework import viewsets

from .models import RequestItem, UserExtended, SystemMessage
from django.contrib.auth.models import User

from .serializers import RequestSerializer, UserSerializer, UserExtendedSerializer, SystemMessageSerializer


# Create your views here.
class RequestItemViewset(viewsets.ModelViewSet):
    queryset = RequestItem.objects.all()
    serializer_class = RequestSerializer


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserExtendedViewset(viewsets.ModelViewSet):
    queryset = UserExtended.objects.all()
    serializer_class = UserExtendedSerializer


class SystemMessageViewset(viewsets.ModelViewSet):
    queryset = SystemMessage.objects.all()
    serializer_class = SystemMessageSerializer
