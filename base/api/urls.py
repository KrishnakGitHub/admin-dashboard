from django.urls import path
from . import views
from .views import MyTokenObtainPairView, registerUser, getClient, createClient

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('register/', views.registerUser, name="register-user"),
    path('create-client/', views.createClient, name="create-client"),
    path('clients/', views.getClient, name="clients"),
    path('notes/', views.getNotes),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
