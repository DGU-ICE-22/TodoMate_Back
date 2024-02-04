from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class User(models.Model):
    userid = models.EmailField(max_length=254, unique = True)   # email 형식을 가지는 유저 아이디
    password = models.CharField(max_length=100)                 # 유저 비밀번호
    password2 = models.CharField(max_length = 100)              # 비밀번호 확인
    realname = models.CharField(max_length = 15)                # 유저 이름
    nickname  = models.CharField(max_length=15)                 # 유저 닉네임
    phoneNumberRegex = RegexValidator(regex = r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$')
    phonenumber = models.CharField(validators = [phoneNumberRegex], max_length = 11, unique = True)     #유저 전화번호