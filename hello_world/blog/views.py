from django.shortcuts import render
from django.views.generic import DetailView, ListView, CreateView, UpdateView, DeleteView
from .models import *
from django.urls import reverse_lazy

# Create your views here.
class BlogListView(ListView):
    model = BlogPost
    template_name = 'blog.html'
    
class BlogDetailView(DetailView):
    model = BlogPost
    template_name = 'blog_detail.html'
    
class BlogCreateView(CreateView):
    model = BlogPost
    template_name = 'post_new.html'
    fields = '__all__'
    
class BlogUpdateView(UpdateView):
    model = BlogPost
    template_name = 'blog_post_edit.html'
    fields= ['title', 'body']
    
class BlogDeleteView(DeleteView):
    model = BlogPost
    template_name = 'blog_post_delete.html'
    success_url = reverse_lazy('blog')