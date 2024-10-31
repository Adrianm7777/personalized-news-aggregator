from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article
from .serializers import ArticleSerialzer
from transformers import pipeline

summarizer = pipeline("summarization")

@api_view(['GET'])
def article_list(request):
    articles = Article.objects.all()
    
    for article in articles:
        article.content = summarize_text(article.content)
    
    serializers = ArticleSerialzer(articles, many=True)
    return Response(serializers.data)

def summarize_text(text):
    summary = summarizer(text, max_length=50, min_length=25, do_sample=False)
    return summary[0]['summary_text']
