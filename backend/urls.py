from django.urls import path
from .views import RequestListViewset, RequestListItemViewset, UserViewset, UserExtendedViewset, SystemMessageViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('systemmessages', SystemMessageViewset)
router.register('user', UserViewset)
router.register('userx', UserExtendedViewset)
router.register('requestlist', RequestListViewset)
router.register('requestlistitem', RequestListItemViewset)

urlpatterns = router.urls
