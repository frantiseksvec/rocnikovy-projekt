from django.shortcuts import render
from django.views.generic import View
from alpha_vantage.timeseries import TimeSeries

import requests
import pandas as pd

from rest_framework.response import Response
from rest_framework.views import APIView


api_key = ' GQ43JWXBO74Y0Z9N'
microsoft = 'MSFT'
ts = TimeSeries(key=api_key, output_format='pandas')
ts2 = TimeSeries(key=api_key, output_format='pandas')
a = TimeSeries(key=api_key, output_format='json')
b = TimeSeries(key=api_key, output_format='json')
c = TimeSeries(key=api_key, output_format='json')
microsoft1, meta_data = ts.get_daily(symbol=microsoft,outputsize='compact')
microsoft2, meta_data = ts2.get_intraday(symbol=microsoft,interval='15min',outputsize='compact')
microsoft3, meta_data = ts.get_monthly(symbol=microsoft)
microsoft4, meta_data = a.get_daily(symbol=microsoft,outputsize='compact')
microsoft5, meta_data = b.get_intraday(symbol=microsoft,interval='15min',outputsize='compact')
close_data_den = microsoft1['4. close']
close_data_minuty = microsoft2['4. close']
close_data_mesic = microsoft3['4. close']
labels_den = microsoft4.keys()
labels_minuty = microsoft5.keys()


class ChartView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html')

class ChartData(APIView):
    def get(self, request, format=None):
        data = {
            "close_data": close_data_minuty,
            "labels": labels_minuty,
            "label": microsoft,
        }
        return Response(data)


