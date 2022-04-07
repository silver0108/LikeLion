from unicodedata import name
from django.urls import path
from .import views

urlpatterns = [
    path("", views.index, name="index"),  # https://도메인 화면
    path("result", views.result, name="result"),  # https://도메인/result 화면
]
