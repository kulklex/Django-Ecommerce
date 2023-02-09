from django.shortcuts import render
from .serializers import ContactSerializer
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response 
from rest_framework import permissions


# Create your views here.
class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )   #Allows any one to access the view 
    
    def post(self, request, format=None):
        data = self.request.data
        print('post')
        try:
            print('try genesis')
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                + '\n\nMessage:\n'
                + data['message'],
                '[yusuffhassan2020@gmail.com]', #sender email
                ['[kulklex@gmail.com]'], #email to receive message
                fail_silently=False
            )
            print('Success')
            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()
            print('Success Again')
            return Response({'success': "Message sent successfully"})
        
        except (error):
            print('Failed to send message')
            return Response({'error': "Message failed to send"})