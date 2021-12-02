from django.db import models


# Create your models here.
class Message(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    email = models.CharField(max_length=100, null=False, blank=False)
    subject = models.CharField(max_length=255, null=False, blank=False)
    message = models.CharField(max_length=255, null=False, blank=False)

    def __str__(self):
        return self.email

    def view_name(self):
        return self.name

    def view_subject(self):
        return self.subject

    def view_message(self):
        return self.message


