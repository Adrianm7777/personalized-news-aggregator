from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article
from .serializers import ArticleSerialzer
from transformers import pipeline

@api_view(['GET'])
def article_list(request):
    articles = Article.objects.all()
    serialzers = ArticleSerialzer(articles, many=True)
    for article in articles:
        article.content = summerize_text(article.content)
    return Response(serialzers.data)

summerizer = pipeline("summarization")
def summerize_text(text):
    summary = summerizer(text,max_lenght=50, min_lenght=25, do_sample=False)
    return summary[0]['summary_text']