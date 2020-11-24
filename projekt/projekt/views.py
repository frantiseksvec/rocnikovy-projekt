from django.shortcuts import render
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import api1
from . import api2

import requests
import pandas as pd
import pandas_datareader.data as web
import datetime as dt
import json

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


procenta_I = cenaI_mesic.pct_change()
procenta_I = procenta_I.iloc[1:]


procenta_M = cenaM_mesic.pct_change()
procenta_M = procenta_M.iloc[1:]

procenta_A = cenaA_mesic.pct_change()
procenta_A = procenta_A.iloc[1:]

cenaR = api1.cena
datumR = api1.date

stock = 'MSFT'

class ChartView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html')

class ChartData(APIView):
    def get(self, request, format=None):
        ibm_mesic = {
            "data": cenaI_mesic,
            "labels": datumI_mesic,
            "label": 'IBM',
            "procenta": {procenta_I[0]}
         }
        microsoft_mesic = {
             "data": cenaM_mesic,
             "labels": datumM_mesic,
             "label": 'Microsoft',
             "procenta": {procenta_M[0]}
         }
        apple_mesic = {
             "data": cenaA_mesic,
             "labels": datumA_mesic,
             "label": 'Apple',
             "procenta": {procenta_A[0]}
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

        realtime = {
            "cena": cenaR,
            "labels": datumR,
            "label": "MSFT"
        }

        mesic = {
             "IBMM": ibm_mesic,
             "MicrosoftM": microsoft_mesic,
             "AppleM": apple_mesic,
         }
        data = {
            "Tyden": tyden,
            "Mesic": mesic,
            "Realtime": realtime,
        }

        return Response(data)

