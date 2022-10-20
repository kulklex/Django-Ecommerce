from django.contrib.auth import get_user_model
User = get_user_model() #this is how to retrieve the user when a custom model is created
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status

class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )   #Allows any one to access the view 
    
    def post(self, request, format=None):
        data = self.request.data 
        
        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']
        
        
        if password == password2:
            if User.objects.filter(email=email).exists():
               return Response({'error': 'Email already exists'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 characters'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                else:
                    user = User.objects.create_user(email=email, password=password, name=name)
                    user.save()
                    return Response({'success': 'User created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)