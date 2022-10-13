from django.shortcuts import render
from .models import *
from django.views.generic import ListView

# Create your views here.
class PostPageView(ListView):
    model = Post
    template_name = 'posts.html'
    context_object_name = 'all_posts_list'