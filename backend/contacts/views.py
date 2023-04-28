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
    serializer_class = ContactSerializer
    def post(self, request, format=None):
        data = self.request.data
        print('post')
        name=data['name']
        email=data['email']
        subject=data['subject']
        message=data['message']
        try:
            print('try genesis')
            send_mail(
                subject,
                '\n' + name+ '\nEmail: '+ email+ '\n\nMessage:\n'+ message + '\n',
                "yusuffhassan2020@gmail.com", #sender email
                ["yusuffhassan2020@gmail.com"], #email to receive message
                fail_silently=False
            )
            print('Success')
            contact = Contact(name=name, email=email, subject=subject, message=message)
            contact.save()
            print('Success Again')
            return Response({'success': "Message sent successfully"})
        
        except ValueError:
            print('Failed to send message')
            return Response({'error': "Message failed to send"})