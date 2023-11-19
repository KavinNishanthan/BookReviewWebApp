# models.py
from django.db import models

class bookapp(models.Model):
    # Define fields corresponding to your MySQL table columns
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    Liner = models.CharField(max_length=255)
    Category = models.CharField(max_length=255)
    Link = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    # Add any other fields as needed
    # models.py




