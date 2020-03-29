from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class HomeView(TemplateView):
    template_name = "home.html"


class RequesterView(TemplateView):
    template_name = "requester.html"


class ProviderView(TemplateView):
    template_name = "provider.html"
