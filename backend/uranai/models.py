from django.db import models


class Fortune(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message[:50]  # 最初の50文字だけ表示