from django.db import models
from datetime import datetime

from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    class Meta:
        verbose_name_plural = "Clients"

    id = models.AutoField(primary_key=True)

    class UserType(models.TextChoices):
        BUYER = 'BUY', _('Buyer')
        SELLER = 'SELL', _('Seller')

    user_type = models.CharField(
        max_length=4,
        choices=UserType.choices,
        default=UserType.BUYER,
    )

    def is_type(self):
        return self.user_type in {
            self.UserType.BUYER,
            self.UserType.SELLER,
        }

    phoneNumber = PhoneNumberField(blank=False)
    secondPhoneNumber = PhoneNumberField(blank=True)

    class IdCardType(models.TextChoices):
        nhis = 'NHIS', _('NHIS')
        passport = 'PASS', _('PASSPORT')
        voters_id_card = 'VOTE', _('VOTERS ID CARD')

    id_card_type = models.CharField(
        max_length=4,
        choices=IdCardType.choices,
        default=IdCardType.voters_id_card,
    )

    def is_type(self):
        return self.id_card_type in {
            self.IdCardType.nhis,
            self.IdCardType.passport,
            self.IdCardType.voters_id_card,
        }

    id_number = models.CharField(max_length=50)

    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    photo = models.ImageField(upload_to='photos/%Y%m%d/')
    created_on = models.DateTimeField(default=datetime.now, blank=True)

    # def __str__(self):
    #     return self.first_name + ' ' + self.last_name

    def __str__(self):
        return self.user_type


    