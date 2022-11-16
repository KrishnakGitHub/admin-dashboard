from django.urls import path
from .views import MyTokenObtainPairView, getRoutes, registerUser, createProject, getProject, getClient, createClient

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', getRoutes),
    path('register/', registerUser, name="register-user"),
    path('create-client/', createClient, name="create-client"),
    path('clients/', getClient, name="clients"),
    path('create-project/', createProject, name="create-project"),
    path('projects/', getProject, name="projects"),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
