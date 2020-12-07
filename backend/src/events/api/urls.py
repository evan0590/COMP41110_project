from events.api.views import EventViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', EventViewSet, basename='events')
urlpatterns = router.urls

# from django.urls import path

# from .views import (
#     EventListView,
#     EventDetailView,
#     EventCreateView,
#     EventUpdateView,
#     EventDeleteView
# )


# urlpatterns = [
#     path('', EventListView.as_view()),
#     path('create/', EventCreateView.as_view()),
#     path('<pk>', EventDetailView.as_view()),
#     path('<pk>/update', EventUpdateView.as_view()),
#     path('<pk>/delete', EventDeleteView.as_view())
# ]
