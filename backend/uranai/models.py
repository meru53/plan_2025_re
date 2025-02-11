from django.db import models


# ✅ 占いメッセージ（Fortune）
class Fortune(models.Model):
    message = models.TextField()  # 占いのメッセージ
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時

    def __str__(self):
        return self.message[:50]  # 最初の50文字を表示

# ✅ タロットカード（TarotCard）
class TarotCard(models.Model):
    name = models.CharField(max_length=100)  # カードの名前
    image = models.ImageField(upload_to="tarot_images/")  # カード画像
    meaning = models.TextField()  # カードの意味

    def __str__(self):
        return self.name
