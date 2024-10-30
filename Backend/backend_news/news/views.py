from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article
from .serializers import ArticleSerialzer

@api_view(['GET'])
def article_list(request):
    articles = Article.objects.all()
    serialzers = ArticleSerialzer(articles, many=True)
    return Response(serialzers.data)