from tkinter import CASCADE
from django.db import models

# Create your models here.
class Blog(models.Model): # Blog는 데이터베이스
  title = models.CharField(max_length=20)
  contents = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
      return self.title

  def summary(self):
      return self.contents[:100] # 본문을 100자까지만 보여줌