# admin.py
from django.contrib import admin
from .models import bookapp  # Import your model

admin.site.register(bookapp)  # Register your model
