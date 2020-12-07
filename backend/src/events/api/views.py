from rest_framework import viewsets
from events.models import Event
from .serializers import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )

# class EventListView(ListAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer


# class EventDetailView(RetrieveAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer


# class EventCreateView(CreateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer


# class EventUpdateView(UpdateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer


# class EventDeleteView(DestroyAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer
