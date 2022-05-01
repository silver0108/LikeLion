from django.db import models

class Blog(models.Model):
  title = models.CharField(max_length=20) # CharField는 글자 수 제한
  content = models.TextField() # TextField는 글자 수 제한 없음
  created_at = models.DateTimeField(auto_now_add=True) # 처음 객체 생성 시 date를 업데이트 해준다는 의미
  author = models.CharField(max_length=10)
  update_at = models.DateTimeField(auto_now=True)

# pk를 title로 설정  
def __str__(self):
  return self.title