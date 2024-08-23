from django.urls import path
from django.http import HttpResponse
from vehicle import views


urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products/', views.getProducts, name="getProducts"),
    
]
