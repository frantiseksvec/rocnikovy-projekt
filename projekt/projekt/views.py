from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response

class ChartView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html')

def get_data(request, *args, **kwargs):
    data = {
        "cena": 100,
        "rust": 20,
    }
    return JsonResponse(data)

class ChartData(APIView):

    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        data = {
            "cena": 100,
            "rust": 20,
        }
        return Response(data)
