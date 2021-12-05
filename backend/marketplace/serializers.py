from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class StockSerializer(serializers.ModelSerializer):
      class Meta:
            model = Stock
            fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
      class Meta:
            model = Transaction
            fields = '__all__'

class ShipmentSerializer(serializers.ModelSerializer):
      class Meta:
            model = Shipment
            fields = '__all__'