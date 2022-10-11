from .views import *
from django.urls import path, include


urlpatterns = [
    path('home/', HelloWorld, name='home'),
    path('', HomePageView.as_view(), name='home'),
]

