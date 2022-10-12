from .views import *
from django.urls import path, include


urlpatterns = [
    path('hello/', HelloWorld, name='hello'),
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about')
]

