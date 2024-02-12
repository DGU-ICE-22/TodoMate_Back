from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from user.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, primary_key = True)
    # PK를 User의 pk로 설정하여 통합적으로 관리
    job = models.CharField(max_length = 32)
    interest = models.CharField(max_length = 128)
    profile_image = models.ImageField(upload_to='profile/', default='default.png')
    
@receiver(post_save, sender = User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user = instance)