from django.shortcuts import render
from django.views.generic import View

from alpha_vantage.timeseries import TimeSeries
import requests
import pandas as pd
import pandas_datareader.data as web
import datetime as dt
import json

from rest_framework.response import Response
from rest_framework.views import APIView

start_t = dt.datetime(2020, 11, 11)
konec_t = dt.datetime(2020, 11, 18)
start_m = dt.datetime(2020, 10, 16)
konec_m = dt.datetime(2020, 11, 18)


IBM = web.DataReader('IBM','yahoo',start_t, konec_t )
datumI_tyden = IBM.index
cenaI_tyden = IBM['Close']

Microsoft = web.DataReader('MSFT','yahoo',start_t , konec_t )
datumM_tyden = Microsoft.index
cenaM_tyden = Microsoft['Close']

Apple = web.DataReader('AAPL','yahoo',start_t, konec_t)
datumA_tyden = Apple.index
cenaA_tyden = Apple['Close']

IBM_mesic = web.DataReader('IBM','yahoo',start_m, konec_m )
datumI_mesic = IBM_mesic.index
cenaI_mesic = IBM_mesic['Close']

Microsoft_mesic = web.DataReader('MSFT','yahoo',start_m , konec_m )
datumM_mesic = Microsoft_mesic.index
cenaM_mesic = Microsoft_mesic['Close']

Apple_mesic = web.DataReader('AAPL','yahoo',start_m, konec_m)
datumA_mesic = Apple_mesic.index
cenaA_mesic = Apple_mesic['Close']



#api_key = 'GQ43JWXBO74Y0Z9N'
#microsoft = 'MSFT'
#ibm = 'IBM'
#ms1 = TimeSeries(key=api_key, output_format='pandas')
#ms2 = TimeSeries(key=api_key, output_format='json')
#i1 = TimeSeries(key=api_key, output_format='pandas')
#i2 = TimeSeries(key=api_key, output_format='json')

#microsoft1, meta_data = ms1.get_daily(symbol=microsoft,outputsize='compact')
#microsoft2, meta_data = ms2.get_daily(symbol=microsoft,outputsize='compact')
#ibm1, meta_data = i1.get_daily(symbol=ibm,outputsize='compact')
#ibm2, meta_data = i2.get_daily(symbol=ibm,outputsize='compact')

#data_den_M = microsoft1['4. close']
#labels_den_M = microsoft2.keys()
#data_den_I = ibm1['4. close']
#labels_den_I = ibm2.keys()




class ChartView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html')

class ChartData(APIView):
    def get(self, request, format=None):
        ibm_mesic = {
            "data": cenaI_mesic,
            "labels": datumI_mesic,
            "label": 'IBM',
         }
        microsoft_mesic = {
             "data": cenaM_mesic,
             "labels": datumM_mesic,
             "label": 'Microsoft',
         }
        apple_mesic = {
             "data": cenaA_mesic,
             "labels": datumA_mesic,
             "label": 'Apple',
        }
        ibm_tyden = {
            "data": cenaI_tyden,
            "labels": datumI_tyden,
            "label": 'IBM',
        }
        microsoft_tyden = {
            "data": cenaM_tyden,
            "labels": datumM_tyden,
            "label": 'Microsoft',
        }
        apple_tyden = {
            "data": cenaA_tyden,
            "labels": datumA_tyden,
            "label": 'Apple',
        }
        tyden = {
            "IBMT": ibm_tyden,
            "MicrosoftT": microsoft_tyden,
            "AppleT": apple_tyden,
        }

        mesic = {
             "IBMM": ibm_mesic,
             "MicrosoftM": microsoft_mesic,
             "AppleM": apple_mesic,
         }
        data = {
            "Tyden": tyden,
             "Mesic": mesic,
        }

        return Response(data)

