from django.db import models

# Create your models here.

class Student(models.Model):
    fristName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    skills = models.CharField(max_length=100)


    def __str__(self):
        return self.fristName

    def skills_list(self):
        return [x.strip() for x in self.skills.split(',')]