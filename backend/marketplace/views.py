from django.shortcuts import render
from django.http import JsonResponse

from .models import Stock, Transaction
# from .stocks import stocks
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
# Create your views here.

@api_view(['GET'])
def  getRoutes(request):
      routes = [
            '/api/stocks',
            '/api/stocks/create',

            '/api/stocks/upload',

            '/api/stocks/<id>/transaction',
            '/api/stocks/<id>/shipment'

            '/api/shipment',
            '/api/transaction',

            '/api/stocks/delete/<id>',
            '/api/stocks/update/<id>',

      ]
      return Response(routes)

@api_view(['GET'])
def getStocks(request):
      stocks  = Stock.objects.all()
      serializer = StockSerializer(stocks, many=True)
      return Response(serializer.data)

@api_view([ 'DELETE'])
def getStock(request, pk):
      stock = Stock.objects.get(_id=pk)
      # serializer = StockSerializer(stock, many=False)
      stock.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)  

@api_view([ 'PUT'])
def updateStock(request, pk):
      stock = Stock.objects.get(_id=pk)
      serializer = StockSerializer(stock, data=request.data)
      if serializer.is_valid():
                  serializer.save()
                  return Response(serializer.data)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def getTransaction(request):
      transaction = Transaction.objects.all()
      serializer = TransactionSerializer(transaction, many=True)
      return Response(serializer.data)  


@api_view([ 'POST'])
def addStocks(request):
      data = request.data
      stocks  = Stock.objects.create(
            pro_name = data['pro_name'],
             image = data['image'],
             nature = data['nature'] ,
             unit = data['unit']    
      )
      serializer = StockSerializer(stocks, many=False)
      return Response(serializer.data)