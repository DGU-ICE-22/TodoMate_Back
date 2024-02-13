from django.urls import path
from .views import ProfileView
urlpatterns = [
    path('<str:nickname>/', ProfileView.as_view()),
]