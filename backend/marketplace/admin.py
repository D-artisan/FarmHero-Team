from django.contrib import admin
from .models import Stock, Transaction, Shipment

admin.site.register(Stock)
admin.site.register(Transaction)
admin.site.register(Shipment)
