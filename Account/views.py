from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def accountHomepage(request):
    return HttpResponse("Account page")