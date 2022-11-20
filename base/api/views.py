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
        '/api/create-project',
        '/api/projects',
        '/api/dashboard',
        '/api/counts',
    ]

    return Response(routes)

@api_view(['POST'])
def registerUser(request):
    serializer = UserSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response({'status':403, 'errors':serializer.errors, 'data':serializer.data, 'message': 'Error! Please try again.'  }) 
    
    if serializer.is_valid():
        user = serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        refresh = RefreshToken.for_user(user)

    return Response({'status':200, 'token':str(refresh), 'data':serializer.data, 'token':str(refresh.access_token), 'message': 'Registration Succesful :)'  })


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
def dashboard(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    projects = Project.objects.all()
    projects_serializer = ProjectSerializer(projects, many=True)
    completed_projects_count = projects.filter(work_status='C').count()
    pending_projects_count = projects.filter(work_status='P').count()
    ongoing_projects_count = projects.filter(work_status='ON').count()
    return Response(
        {
            'status':200,
            'data':serializer.data ,
            'client_count':str(clients.count()),
            'completed_projects_count':completed_projects_count,
            'pending_projects_count':pending_projects_count,
            'ongoing_projects_count':ongoing_projects_count,
            'project_progress': (completed_projects_count*100/(pending_projects_count+ongoing_projects_count)),
            'message': 'Dashboard :)'
        })

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getCounts(request):
    clients = Client.objects.all()
    projects = Project.objects.all()
    titles = projects.filter(project_title__icontains)
    completed_projects_count = projects.filter(work_status='C').count()
    pending_projects_count = projects.filter(work_status='P').count()
    ongoing_projects_count = projects.filter(work_status='ON').count()
    return Response(
        {
            'status':200,
            'client_count':clients.count(),
            'completed_projects_count':completed_projects_count,
            'pending_projects_count':pending_projects_count,
            'ongoing_projects_count':ongoing_projects_count,
            'message': 'Counts :)'
        })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getClient(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return Response({'status':200, 'client_count':str(clients.count()), 'clients':serializer.data, 'message': 'Clients :)'})


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
    return Response(
        {
            'status':200,
            'projects_count':projects.count(),
            'pending_projects':projects.filter(work_status='P').count(),
            'ongoing_projects':projects.filter(work_status='ON').count(),
            'completed_projects':projects.filter(work_status='C').count(),
            'projects':serializer.data,
            'message': 'Projects :)'
        })
