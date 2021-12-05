from django.db import models
from datetime import datetime
from users.models import User


class Stock(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True) #blank=True makes this field optional
    price = models.IntegerField()
    photo_main = models.ImageField(upload_to='photos/%Y%m%d/', default=False)
    photo_1 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True) #blank=True indicates this photo is optional
    photo_1 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    is_published = models.BooleanField(default=True)
    added_on = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title