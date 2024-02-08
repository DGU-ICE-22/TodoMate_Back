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
        validated_data.pop('password2')
        return User.objects.create_user(**validated_data)
    
class UserLoginSerializer(serializers.Serializer):
    userid = serializers.EmailField(required = True)
    password = serializers.CharField(required = True, write_only = True)
    
    def validate(self, data):
        user = authenticate(username=data['userid'], password=data['password'])
        if user:
            token,_ = Token.objects.get_or_create(user = user)
            return token
        raise serializers.ValidationError(
            {"error" : "Unable to login with provided credentials"}
        )