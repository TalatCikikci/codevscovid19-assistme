from django.urls import path
from .views import RequestItemViewset, UserViewset, UserExtendedViewset, SystemMessageViewset

urlpatterns = [
    path('systemmessages', SystemMessageViewset),
    path('user', UserViewset),
    path('userx', UserExtendedViewset),
    path('requestitem', RequestItemViewset),
]
