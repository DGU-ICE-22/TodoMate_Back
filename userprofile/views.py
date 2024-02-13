from .serializers import ProfileSerializer
from rest_framework.generics import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Profile

User = get_user_model()
class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request, nickname):  # 수정한 부분
        user = get_object_or_404(User, nickname=nickname)  # 수정한 부분
        profile = get_object_or_404(Profile, user=user)  # 수정한 부분
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status = status.HTTP_200_OK)