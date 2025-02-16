from django.urls import path

from .views import FortuneListCreate  # ✅ get_tarot_result をインポート
from .views import get_random_tarot, get_tarot_result

urlpatterns = [
    path('fortunes/', FortuneListCreate.as_view(), name='fortune-list'),
    path("tarot/random", get_random_tarot, name="random-tarot"),
    path("tarot/result", get_tarot_result, name="get-tarot-result"),  # ✅ 追加
]
