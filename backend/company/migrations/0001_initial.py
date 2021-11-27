# Generated by Django 3.1.6 on 2021-11-27 12:04

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, verbose_name='Company name')),
                ('company_type', models.CharField(choices=[('LTD', 'Limited Liability'), ('PTN', 'Partnership'), ('soleprop', 'Sole Proprietorship')], default='LTD', max_length=50)),
                ('registration_number', models.CharField(max_length=20)),
                ('vat', models.CharField(max_length=50, verbose_name='VAT')),
                ('tin', models.CharField(max_length=50, verbose_name='TIN')),
                ('registration_certificate', models.FileField(upload_to='documents/')),
                ('created_on', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='Details added on')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User')),
            ],
            options={
                'verbose_name_plural': 'Company',
            },
        ),
    ]
