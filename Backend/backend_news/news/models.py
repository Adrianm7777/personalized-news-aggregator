from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=100)
    published_date = models.DateField()

class UserPreference(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    preferred_categories = models.JSONField()
