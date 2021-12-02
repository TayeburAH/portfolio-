from django.urls import path
from .views import (
    home, contact, project, contact_save
)

app_name = 'portfolio'

urlpatterns = [
    path('portfolio/', home, name='home'),
    path('contact/', contact, name='contact'),
    path('contact_save/', contact_save, name='contact_save'),
    path('project/<str:project_id>', project, name='project'),
]