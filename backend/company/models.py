from django.db import models
from datetime import datetime
from users.models import User
from django.utils.translation import gettext_lazy as _


class Company(models.Model):
    class Meta:
        verbose_name_plural = "Company"

    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, to_field='user_id', on_delete=models.CASCADE, verbose_name="User")
    name = models.CharField(max_length=200, verbose_name="Company name")

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

    registration_number = models.CharField(max_length=20)
    vat = models.CharField(max_length=50, verbose_name="VAT")
    tin = models.CharField(max_length=50, verbose_name="TIN")
    registration_certificate = models.FileField(upload_to='documents/')
    created_on = models.DateTimeField(default=datetime.now, blank=True, verbose_name="Details added on")

    # description = models.TextField(blank=True)

    def __str__(self):
        return self.name
