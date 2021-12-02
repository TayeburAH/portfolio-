from django.http import JsonResponse
from django.shortcuts import render, HttpResponse
from .models import Message
from validate_email import validate_email  # pip install py3-validate-email
import re


# Create your views here.

def home(request):
    return render(request, 'index.html')


def contact(request):
    return render(request, 'core/contact.html')


# pip install py3-validate-email

def validate_your_email(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if not (re.search(regex, email)):
        return False
    if not validate_email(email):
        return False
    else:
        return email


def contact_save(request):
    response = {}
    if request.is_ajax and request.method == "GET":
        print(request.GET)
        name = request.GET.get("name", None)
        email = request.GET.get("email", None)
        subject = request.GET.get("subject", None)
        message = request.GET.get("message", None)
        email_test = validate_your_email(email)
        print(email_test)
        if not email_test:
            response['email'] = 'Email does not exist'
            return JsonResponse(response)
        try:
            message = Message.objects.create(name=name, email=email, subject=subject, message=message)
            message.save()
            response['status'] = 'ok'
        except Exception as e:
            response['status'] = 'bad'
            response['error'] = str(e)
            return JsonResponse(response)
        return JsonResponse(response)
    # status code other than 200 does not go to success function


def project(request, project_id):
    if project_id == str(1):
        return render(request, 'core/Django_book_shop_Api_Project.html')

    if project_id == str(2):
        return render(request, 'core/Django_Food_store.html' )

    if project_id == str(3):
        return render(request, 'core/Media_Gallery_with_MongoDB.html' )

    if project_id == str(4):
        return render(request, 'core/Different_Types_of_Authentication.html')
