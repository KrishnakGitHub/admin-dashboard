from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()

class Client(models.Model):
    client_name = models.CharField(max_length=60)
    client_company = models.CharField(max_length=60)
    client_phone = models.IntegerField()
    client_email = models.EmailField(max_length=254)

    def __str__(self):
        return self.client_name

class Project(models.Model):
    DEPT_CHOICES = [
        ('DD', 'Development Department'),
        ('MD', 'Managers Department'),
        ('APPD', 'Application Department'),
        ('ACCD', 'Accounts Department'),
    ]
    PR_CHOICES = [
        ('H', 'High'),
        ('H', 'Medium'),
        ('H', 'High'),
    ]
    project_id = models.IntegerField()
    project_title = models.CharField(max_length=60)
    department = models.CharField(max_length=10, choices=DEPT_CHOICES)
    project_priority = models.CharField(max_length=10, choices=DEPT_CHOICES)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date_from = models.DateField()
    date_to = models.DateField()
    work_status = models.CharField(max_length=10)

    def __str__(self):
        return self.Project_id
