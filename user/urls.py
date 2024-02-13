from django.urls import path, include
from .views import UserRegisterView, UserLoginView
from userprofile.views import ProfileView

urlpatterns = [
    path('register/', UserRegisterView.as_view()),
    path('login/', UserLoginView.as_view()),
    path('profile/', include("userprofile.urls")),
]