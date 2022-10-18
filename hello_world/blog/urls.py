from django.urls import path
from .views import *

urlpatterns = [
    path('', BlogListView.as_view(), name='blog'),
    path('blogpost/edit/<int:pk>/', BlogDetailView.as_view(), name="blog_post_detail" ),
    path('blogpost/<int:pk>/', BlogUpdateView.as_view(), name='blog_post_edit'),
    path('blogpost/new/', BlogCreateView.as_view(), name='post_new'),
    path('blogpost/delete/<int:pk>/', BlogDeleteView.as_view(), name='blog_post_delete')
]
