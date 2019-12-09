from django.contrib import admin

# Register your models here.
 
from .models import *


class StudentAdmin(admin.ModelAdmin):
    list_display = ('fristName','lastName','skills','id',)


admin.site.register(Student, StudentAdmin)
