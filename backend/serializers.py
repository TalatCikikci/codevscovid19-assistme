from rest_framework import serializers
from django.contrib.auth.models import User
from .models import RequestList, RequestListItem, UserExtended, SystemMessage


class RequestListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestList
        fields = '__all__'


class RequestListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestListItem
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserExtendedSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExtended
        fields = '__all__'


class SystemMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMessage
        fields = '__all__'
