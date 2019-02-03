from django.shortcuts import render
from backend.server.models import Student
from backend.server.serializers import StudentSerializer
from rest_framework import generics

def index(request):
    print('Requested index...')
    return render(request, 'index.html')

class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


def testView(request):
    print('Requested testView...')
    return render(request, 'test.html')