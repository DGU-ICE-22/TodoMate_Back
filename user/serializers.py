from .models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator
from django.contrib.auth import authenticate

class UserRegisterSerializer(serializers.ModelSerializer):
    userid = serializers.EmailField(
        required=True,
        validators = [UniqueValidator(queryset = User.objects.all())]
    )
    password = serializers.CharField(
        write_only = True,
        required = True,
        validators = [validate_password],
    )
    password2 = serializers.CharField(write_only = True, required = True)
    
    class Meta:
        model = User
        fields = ('userid', 'password', 'password2', 'realname', 'nickname', 'phonenumber')
        
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError(
                {"password": "비밀번호가 일치하지 않습니다"}
            )
        return data
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['userid']
        )
        user.set_password(validated_data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return user