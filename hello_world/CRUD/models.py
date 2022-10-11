from django.db import models
from rest_framework.decorators import api_view, permission_classes


# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=25)


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=25)
    price = models.PositiveIntegerField()
    

