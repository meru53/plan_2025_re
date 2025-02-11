from django.urls import path

from .views import FortuneListCreate, get_random_tarot

urlpatterns = [
    path('fortunes/', FortuneListCreate.as_view(), name='fortune-list'),
    path("tarot/random", get_random_tarot, name="random-tarot"),
]
