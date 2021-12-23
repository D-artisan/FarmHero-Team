from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, AbstractUser
from django.utils.translation import gettext_lazy as _
from datetime import datetime
from phonenumber_field.modelfields import PhoneNumberField
from django_countries.fields import CountryField


# Create your models here.
class MyAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, password=None):
        if not email:
            raise ValueError('User must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, password):
        user = self.create_user(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            password=password,
        )

        user.is_admin = True
        user.is_staff = True
        user.is_active = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user


class Account(AbstractUser):
    username = models.CharField(max_length=50, null=True, blank=True, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)

    ''' ******************************************************************************************************** '''

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

    phoneNumber = PhoneNumberField(blank=True)
    secondPhoneNumber = PhoneNumberField(blank=True)
    id_number = models.CharField(max_length=50, blank=True)
    photo = models.ImageField(upload_to='photos/%Y%m%d/', blank=True)
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

    ''' ******************************************************************************************************** '''

    # required
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = MyAccountManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, add_label):
        return True

    def __str__(self):
        if self.first_name and self.last_name:
            return f'{self.id} - {self.first_name} {self.last_name}'
        return self.username


