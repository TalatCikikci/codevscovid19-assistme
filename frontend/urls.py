from django.urls import path
from .views import HomeView, RequesterView, ProviderView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('requester', RequesterView.as_view(), name='requesterHome'),
    path('provider', ProviderView.as_view(), name='providerHome')
]