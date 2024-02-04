from django.shortcuts import render
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404, RetrieveUpdateDestroyAPIView
from .serializers import TodoSerializer
from .models import Todo
# Create your views here.
class TodosView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    
class TodoView(RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    
    def delete(self, request, *args, **kwargs):
        todo = Todo.objects.get(pk=kwargs["pk"])
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, *args, **kwargs):
        todo = Todo.objects.get(pk=kwargs["pk"])
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)