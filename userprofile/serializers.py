from rest_framework import serializers
from .models import Profile
from user.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userid', 'realname', 'nickname', 'phonenumber']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'job', 'interest', 'profile_image']
