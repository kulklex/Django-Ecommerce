from django.db import models
from django.urls import reverse

# Create your models here.
class BlogPost(models.Model):
    title = models.CharField(max_length=25)
    body = models.TextField()
    author = models.ForeignKey( 'auth.User', on_delete=models.CASCADE, default="user")
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("blog_post_detail", kwargs={"pk": self.pk})
    