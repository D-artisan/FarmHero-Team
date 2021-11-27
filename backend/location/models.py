from django.db import models
from datetime import datetime
from users.models import User
from django_countries.fields import CountryField


class Location(models.Model):
    id = models.AutoField(primary_key=True)

    class Meta:
        verbose_name_plural = "Client Location"

    user_id = models.ForeignKey(User, to_field='user_id', on_delete=models.CASCADE, verbose_name="User")

    country = CountryField(blank_label='(select country)')
    region = models.CharField(max_length=200)
    town_or_city = models.CharField(max_length=20)
    address_1 = models.CharField(max_length=50)
    address_2 = models.CharField(max_length=50, blank=True)
    created_on = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.user_id) + ' : Address'
