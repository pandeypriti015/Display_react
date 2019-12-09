from django.shortcuts import render
# Create your views here.
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import mixins


@api_view(['GET',])
def api_student_list_view(request):
    student = Student.objects.all()
    if request.method == 'GET':
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data)
        

@api_view(['GET',])
def api_student_id_list_view(request,id):
    try:
        student = Student.objects.get(id=id)
    except Student.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)



@api_view(['POST', ])
def api_student_post_view(request):
    if request.method == 'POST':
        serializers = StudentCreateSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            data={}
            data['success'] = 'student data created'
            return Response(data=data)
        return Response(serializers.errors, status=status.HTTP_404_NOT_FOUND)



@api_view(['DELETE', ])
def api_student_delete_view(request,id):
    try:
        student = Student.objects.get(id=id)
    except Student.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        operation = student.delete()
        data = {}
        if operation:
            data['success']= "Delete Succesfull"
        else:
            data['failure']= "Unsuccessfull"
            return Response(data,status.HTTP_200_OK)
        return Response(data,status.HTTP_404_NOT_FOUND)
