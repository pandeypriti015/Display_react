from .views import *
from django.urls import path,include
from .views import *
from rest_framework import status
from rest_framework.response import Response

app_name = 'student'

urlpatterns = [
    path('student/',api_student_list_view,name="student_list"),
    path('student/<int:id>/',api_student_id_list_view,name="student_id_list"),

    path('student/create/',api_student_post_view,name="student_id_list"),
    
    path('student/<int:id>/delete',api_student_delete_view,name="student_id_list"),

]