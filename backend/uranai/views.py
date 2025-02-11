import random

from django.http import JsonResponse

from .models import TarotCard


def get_random_tarot(request):
    count = int(request.GET.get("count", 3))  # デフォルト3枚
    all_cards = list(TarotCard.objects.all())  # DB から全タロットカードを取得

    if not all_cards:
        return JsonResponse({"error": "タロットカードが登録されていません"}, status=400)

    selected_cards = random.sample(all_cards, min(count, len(all_cards)))  # ランダムに取得

    response_data = [
        {
            "id": card.id,
            "name": card.name,
            "image": card.image.url if card.image else None,
            "meaning": card.meaning,
        }
        for card in selected_cards
    ]

    return JsonResponse(response_data, safe=False)
