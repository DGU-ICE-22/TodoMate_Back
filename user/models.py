from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.core.validators import RegexValidator

class CustomUserManager(BaseUserManager):
    def create_user(self, userid, password=None, **extra_fields):
        if not userid:
            raise ValueError('The Email field must be set')
        user = self.model(userid=userid, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, userid, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(userid, password, **extra_fields)

class User(AbstractBaseUser):
    userid = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=100)
    realname = models.CharField(max_length=15, default='default_realname')
    nickname = models.CharField(max_length=15, unique=True, default='default_realname')
    phoneNumberRegex = RegexValidator(regex=r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$')
    phonenumber = models.CharField(validators=[phoneNumberRegex], max_length=11, unique=True)

    objects = CustomUserManager()  # Custom manager

    USERNAME_FIELD = 'userid'
    REQUIRED_FIELDS = ['realname', 'nickname', 'phonenumber']
