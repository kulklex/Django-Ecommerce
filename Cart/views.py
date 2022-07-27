from django.shortcuts import render, HttpResponse
from django.urls import is_valid_path


# Create your views here.
def cartPageRoute(requests):
    return render(requests, "Cart/home-page.html")

def cartProductPage(requests):
    return render(requests, "Cart/product-page.html")