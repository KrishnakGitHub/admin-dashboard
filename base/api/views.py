from django.http import JsonResponse
from django.contrib.auth.models import User

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken


from .serializers import ProjectSerializer, UserSerializer, ClientSerializer
from base.models import Client, Project


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/register', 
        '/api/create-client',
        '/api/clients',
    ]

    return Response(routes)

@api_view(['POST'])
def registerUser(request):
    serializer = UserSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response({'status':403, 'errors':serializer.errors, 'message': 'Error! Please try again.'  }) 
    
    if serializer.is_valid():
        user = serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        refresh = RefreshToken.for_user(user)

    return Response({'status':200, 'refresh':str(refresh), 'token':str(refresh.access_token), 'message': 'Registration Succesful :)'  })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createClient(request):
    serializer = ClientSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({'status':403, 'errors':serializer.errors, 'message': 'Error! Please try again.'}) 
    
    if serializer.is_valid():
        client = serializer.save()

    return Response({'status':200, 'client':str(client), 'message': 'Client added Succesfully :)'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getClient(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProject(request):
    serializer = ProjectSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({'status':403, 'errors':serializer.errors, 'message': 'Error! Please try again.'}) 
    
    if serializer.is_valid():
        project = serializer.save()

    return Response({'status':200, 'project':str(project), 'message': 'Project added Succesfully :)'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProject(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)
