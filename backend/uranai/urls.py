from django.urls import path

from .views import FortuneListCreate

urlpatterns = [
    path('fortunes/', FortuneListCreate.as_view(), name='fortune-list'),
]
