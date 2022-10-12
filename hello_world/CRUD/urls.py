from django.urls import path
from .views import *


urlpatterns = [
    path('', post),
    path('get', get),
    path('get/<id>', getId),
    path('put/<id>', put),
    path('delete/<id>', delete)
]




