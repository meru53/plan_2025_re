import random

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from uranai.models import TarotCard, TarotReading

from .models import Fortune
from .serializers import FortuneSerializer


class FortuneListCreate(generics.ListCreateAPIView):
    """Fortune の API (占いメッセージを取得・作成)"""
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer


@csrf_exempt
def get_tarot_result(request):
    """
    🔮 タロット占いの結果を取得する API
    例: GET /api/tarot/result?cards=1,10,45
    """
    card_ids = request.GET.get("cards", "").strip()

    if not card_ids:
        return JsonResponse({"error": "カードIDを指定してください"}, status=400)

    try:
        # ✅ 数値変換 & ソート (検索用に統一)
        card_ids = sorted(map(int, card_ids.split(",")))
    except ValueError:
        return JsonResponse({"error": "無効なカードIDが含まれています"}, status=400)

    if len(card_ids) != 3:
        return JsonResponse({"error": "3枚のカードを選んでください"}, status=400)

    try:
        # ✅ 選ばれたカードの情報を取得
        selected_cards = list(TarotCard.objects.filter(id__in=card_ids).values("id", "name", "meaning"))

        # ✅ 占い結果を取得（ソートしたIDで検索）
        combination_str = ",".join(map(str, card_ids))
        readings = TarotReading.objects.filter(card_combination=combination_str)

        message = random.choice(readings).message if readings.exists() else "特別なメッセージはありません"

        return JsonResponse({"message": message, "cards": selected_cards})

    except Exception as e:
        return JsonResponse({"error": f"サーバーエラー: {str(e)}"}, status=500)


@csrf_exempt
def get_random_tarot(request):
    """
    🔮 ランダムなタロットカードを取得する API
    例: GET /api/tarot/random?count=3
    """
    try:
        count = int(request.GET.get("count", 3))  # クエリパラメータから取得。デフォルトは3枚
    except ValueError:
        return JsonResponse({"error": "count は整数で指定してください"}, status=400)

    all_cards = list(TarotCard.objects.values("id", "name", "meaning"))  # ✅ QuerySet を辞書リスト化

    if not all_cards:
        return JsonResponse({"error": "タロットカードが登録されていません"}, status=400)

    selected_cards = random.sample(all_cards, min(count, len(all_cards)))  # ✅ 辞書リストからランダム取得

    return JsonResponse(selected_cards, safe=False)
