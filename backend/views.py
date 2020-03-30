from django.shortcuts import render
from rest_framework import viewsets

from .models import RequestList, RequestListItem, UserExtended, SystemMessage
from django.contrib.auth.models import User

from .serializers import RequestListItemSerializer, RequestListSerializer, UserSerializer, UserExtendedSerializer, \
    SystemMessageSerializer


# Create your views here.
class RequestListViewset(viewsets.ModelViewSet):
    queryset = RequestList.objects.all()
    serializer_class = RequestListSerializer


class RequestListItemViewset(viewsets.ModelViewSet):
    queryset = RequestListItem.objects.all()
    serializer_class = RequestListItemSerializer


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserExtendedViewset(viewsets.ModelViewSet):
    queryset = UserExtended.objects.all()
    serializer_class = UserExtendedSerializer


class SystemMessageViewset(viewsets.ModelViewSet):
    queryset = SystemMessage.objects.all()
    serializer_class = SystemMessageSerializer
