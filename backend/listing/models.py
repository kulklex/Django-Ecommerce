from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor

# Create your models here.
class Listing(models.Model):
    class SalesType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'
    
    class HomeType(models.TextChoices):
        BUNGALOW = 'Bungalow'
        ONE_STOREY = 'OneStorey'
        TWO_STOREY = 'TwoStorey'
        THREE_STOREY = 'ThreeStorey'
        DUPLEX = 'Duplex'
        MULTIPLE_STOREY = 'MultipleStorey'
    
    realtor = models.name = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING) #so if realtor is deleted the listing would still be present 
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=15)
    description = models.TextField(blank=True)
    sales_type = models.CharField(max_length=50, choices=SalesType.choices, default=SalesType.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    home_type = models.CharField(max_length=50, choices=HomeType.choices, default= HomeType.BUNGALOW )
    sqft = models.IntegerField(blank=True)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default = True)
    list_date = models.DateTimeField(default=now, blank=True)
    
    def __str__(self):
        return self.title