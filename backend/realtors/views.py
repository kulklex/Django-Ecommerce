from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import *
from .serializers import RealtorSerializer

# Create your views here.
class RealtorListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )   #Allows any one to access the view 
    Queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None


class RealtorView(RetrieveAPIView):
    Queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    
    
class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )   #Allows any one to access the view 
    Queryset = Realtor.objects.filter(top_seller=True)
    serializer_class = RealtorSerializer
    pagination_class = None