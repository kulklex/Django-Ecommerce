from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer


@api_view(['GET'])
def get(request):
    fields = Category.objects.all()
    serializer = CategorySerializer(fields, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getId(request, id):
    fields = Category.objects.get(id=id)
    serializer = CategorySerializer(fields, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def post(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        cat = serializer.save()
        serializer=CategorySerializer(cat,many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'error': 'Creation Failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    
@api_view(['PUT'])
def put(request, id):
    cat = Category.objects.get(id=id)
    serializer=CategorySerializer(instance=cat,data=request.data)
    if serializer.is_valid():
        cat = serializer.save()
        serializer=CategorySerializer(cat, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else :
        return Response({'error': 'Updating Failed'}, status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['DELETE'])
def delete(request, id):
    cat = Category.objects.get(id=id)
    cat.delete()
    return Response({"success": f'Data with id {id} has been deleted'})


