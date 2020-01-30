from .models import *
from rest_framework import serializers


class StudentSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='fristName')
    skills_array= serializers.ReadOnlyField(source='skills_list')
    class Meta:
        model = Student
        fields = ('firstName', 'lastName', 'skills_array','id')


class StudentCreateSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='fristName')
    class Meta:
        model = Student
        fields = ('id','firstName', 'lastName', 'skills',)


