from django.shortcuts import render
# Create your views here.
from rest_framework import generics

from .models import Fortune
from .serializers import FortuneSerializer


class FortuneListCreate(generics.ListCreateAPIView):
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer
