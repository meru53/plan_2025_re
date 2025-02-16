from django.db import models


# ✅ 占いメッセージ（Fortune）
class Fortune(models.Model):
    message = models.TextField()  # 占いのメッセージ
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時

    def __str__(self):
        return self.message[:50]  # 最初の50文字を表示

# ✅ タロットカード（TarotCard）
class TarotCard(models.Model):
    card_no = models.IntegerField(unique=True)  # カード番号（1～78）
    name = models.CharField(max_length=100)  # カードの名前
    image = models.ImageField(upload_to="tarot_images/", blank=True, null=True)  # カード画像
    meaning = models.TextField()  # カードの意味

    def __str__(self):
        return f"{self.card_no}: {self.name}"

# ✅ タロット占い結果（TarotReading）
class TarotReading(models.Model):
    card_combination = models.CharField(max_length=50, unique=True)  # "1,10,45" のように3枚のIDを格納
    message = models.TextField()  # その組み合わせに対する占い結果

    def __str__(self):
        return f"{self.card_combination}: {self.message[:30]}"