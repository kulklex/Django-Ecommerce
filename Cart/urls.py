from .views import *
from django.contrib import admin
from django.urls import path


urlpatterns = [
    path("", cartPageRoute, name="Cart"),
    path('product', cartProductPage, name="product")
]
