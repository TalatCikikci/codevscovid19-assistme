from django.urls import path
from .views import InventoryItemViewset

urlpatterns = [
    path('', InventoryItemViewset),
]
