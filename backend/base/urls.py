from django.urls import path
from . import views

urlpatterns = [
      path('', views.getRoutes, name='routes'),


      path('stocks/', views.getStocks, name='stocks'),
      path('transactions/', views.getTransaction, name='transaction'),

      path('stocks/create/', views.addStocks, name='addstocks'),


      path('stocks/delete/<str:pk>/', views.getStock, name='stock'),
      path('stocks/update/<str:pk>/', views.updateStock, name='stock'),


]