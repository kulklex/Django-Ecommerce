from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import CategorySerializer


def see(request):
    HttpResponse("POST")




@api_view(['POST'])
def post(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        cat = serializer.save()
        serializer=CategorySerializer(cat,many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'error': 'Creation Failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)