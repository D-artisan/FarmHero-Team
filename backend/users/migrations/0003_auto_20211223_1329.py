# Generated by Django 3.1.4 on 2021-12-23 13:29

from django.db import migrations, models
import django.utils.timezone
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20211223_1305'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='address_1',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='address_2',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='account',
            name='company_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=200, verbose_name='Company name'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='company_type',
            field=models.CharField(choices=[('LTD', 'Limited Liability'), ('PTN', 'Partnership'), ('soleprop', 'Sole Proprietorship')], default='LTD', max_length=50),
        ),
        migrations.AddField(
            model_name='account',
            name='country',
            field=django_countries.fields.CountryField(default=django.utils.timezone.now, max_length=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='region',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='registration_certificate',
            field=models.FileField(default=django.utils.timezone.now, upload_to='documents/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='registration_number',
            field=models.CharField(default=django.utils.timezone.now, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='tin',
            field=models.CharField(default=django.utils.timezone.now, max_length=50, verbose_name='TIN'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='town_or_city',
            field=models.CharField(default=django.utils.timezone.now, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='vat',
            field=models.CharField(default=django.utils.timezone.now, max_length=50, verbose_name='VAT'),
            preserve_default=False,
        ),
    ]