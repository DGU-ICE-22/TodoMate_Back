from django.shortcuts import render
from user.serializers import UserRegisterSerializer, UserLoginSerializer
from .serializers import ProfileSerializer
from rest_framework import generics
from .models import Profile
class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer