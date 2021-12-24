from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, AbstractUser
from django.utils.translation import gettext_lazy as _
from datetime import datetime
from phonenumber_field.modelfields import PhoneNumberField
from django_countries.fields import CountryField


class Profile(models.Model):
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

    secondPhoneNumber = PhoneNumberField(blank=True)
    id_number = models.CharField(max_length=50, blank=False)
    profile_photo = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
    created_on = models.DateTimeField(default=datetime.now, blank=True)

    company_name = models.CharField(max_length=200, verbose_name="Company name", blank=True)

    class CompanyType(models.TextChoices):
        limited_liability = 'LTD', _('Limited Liability')
        partnership = 'PTN', _('Partnership')
        sole_proprietorship = 'soleprop', _('Sole Proprietorship')

    company_type = models.CharField(
        max_length=50,
        choices=CompanyType.choices,
        default=CompanyType.limited_liability,
    )

    def is_type(self):
        return self.company_type in {
            self.CompanyType.limited_liability,
            self.CompanyType.partnership,
            self.CompanyType.sole_proprietorship,
        }

    registration_number = models.CharField(max_length=20, blank=True)
    vat = models.CharField(max_length=50, verbose_name="VAT", blank=True)
    tin = models.CharField(max_length=50, verbose_name="TIN", blank=True)
    registration_certificate = models.FileField(upload_to='documents/', blank=True)

    country = CountryField(blank_label='(select country)', blank=True)
    region = models.CharField(max_length=200, blank=True)
    town_or_city = models.CharField(max_length=20, blank=True)
    address_1 = models.CharField(max_length=50, blank=True)
    address_2 = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.company_name
