from django.shortcuts import render
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer
from .models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from knox.models import AuthToken
# Create your views here.
from django.db import transaction
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserRegisterSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


class UserLoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        token = serializer.validated_data
        return Response({"token":token.key}, status=status.HTTP_200_OK)