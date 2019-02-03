from django.urls import re_path, path
from . import views

#from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
#from django.contrib.auth import views as auth_views

urlpatterns = [
    path('api/student', views.StudentListCreate.as_view()),
    #path('login', views.testView, name='testView'),
    #url(r'^login/$', auth_views.login, name='login'),
    path('accounts/', include('django.contrib.auth.urls')),
    re_path(r'', views.index, name='index'),
]
