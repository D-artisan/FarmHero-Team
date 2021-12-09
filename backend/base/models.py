from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Stock(models.Model):
      User = get_user_model()
      pro_name = models.CharField(max_length=200, null=True, blank=True)
      image = models.ImageField( null=True,blank=True)
      nature = models.CharField(max_length=200, null=True,blank=True)
      unit = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      createdAt = models.DateTimeField(auto_now_add=True,blank=True)
      _id = models.AutoField(primary_key=True, editable=False)
      unit_price = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      per_kg = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      per_mg = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      available = models.IntegerField(null=True, default=0,blank=True)

      def __str__(self) -> str:
          return self.pro_name

class Transaction(models.Model):
      stock = models.ForeignKey(Stock, on_delete=models.SET_NULL, null=True)
      User = get_user_model()
      buyer_name = models.CharField(max_length=200, null=True,blank=True)
      pro_name = models.CharField(max_length=200, null=True,blank=True)
      unit = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      unit_price = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      isPending = models.BooleanField(default=False)
      _id = models.AutoField(primary_key=True, editable=False)
      transactedAt = models.DateTimeField(auto_now_add=True)

      def __str__(self) -> str:
          return self.buyer_name

class Shipment(models.Model):
      stock = models.ForeignKey(Stock, on_delete=models.SET_NULL, null=True)
      User = get_user_model()
      driver_name = models.CharField(max_length=200, null=True,blank=True)
      pro_name = models.CharField(max_length=200, null=True,blank=True)
      unit = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      unit_price = models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
      isDelivered = models.BooleanField(default=False)
      _id = models.AutoField(primary_key=True, editable=False)
      num_plate = models.CharField(max_length=200, null=True,blank=True)
      colour = models.CharField(max_length=200, null=True,blank=True)
      contact = models.IntegerField(null=True,blank=True)
      image = models.CharField(max_length=200, null=True,blank=True) 
      car = models.CharField(max_length=200, null=True,blank=True)
      arrivedAt = models.DateTimeField(auto_now_add=False, null=True)
      delivery_location = models.CharField(max_length=200, null=True,blank=True)
      quantity = models.CharField(max_length=200, null=True,blank=True)
      orderedAt = models.DateTimeField(auto_now_add=True, null=True,blank=True)
      order_ID = models.CharField(max_length=200, null=True,blank=True)

      def __str__(self) -> str:
          return self.driver_name