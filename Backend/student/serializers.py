from .models import *
from rest_framework import serializers


class StudentSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='fristName')
    class Meta:
        model = Student
        fields = ('firstName', 'lastName', 'skills_list')