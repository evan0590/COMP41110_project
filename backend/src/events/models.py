from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=120)
    start_date = models.IntegerField()
    end_date = models.IntegerField()
    location = models.CharField(max_length=120)
    user_token = models.CharField(max_length=120)

    def __str__(self):
        return self.title
