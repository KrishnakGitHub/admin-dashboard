from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from base.models import Client, Project

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8)
    
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    DATE_INPUT_FORMATS = ('%d-%m-%Y','%Y-%m-%d')
    date_from = serializers.DateField(input_formats=DATE_INPUT_FORMATS)
    date_to = serializers.DateField(input_formats=DATE_INPUT_FORMATS)
    class Meta:
        model = Project
        fields = '__all__'
