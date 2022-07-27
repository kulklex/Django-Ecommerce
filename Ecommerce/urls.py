from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("Cart/", include("Cart.urls")),
    path("Account/", include("Account.urls"))
]
