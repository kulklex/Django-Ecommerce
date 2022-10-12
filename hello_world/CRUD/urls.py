from django.urls import path
from .views import *


urlpatterns = [
    path('endpoints/', EndPoints.as_view()),
    path('endpoints/<pk>', EndPoints.as_view()),
    path('', post),
    path('get', get),
    path('get/<id>', getId),
    path('put/<id>', put),
    path('delete/<id>', delete)
]




