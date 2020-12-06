from django.shortcuts import render
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import api1

import requests
import pandas as pd
import pandas_datareader.data as web
import datetime as dt
import json

procenta_I = '4,6'


procenta_M ='3,2'

procenta_A = '5,2'


cenaRM = api1.cenaM
datumRM = api1.datumM
cenaRT = api1.cenaT
datumRT = api1.datumT

list = ""
def prumer(list = list):
    return sum(list) / len(list)

tyden1 = dt.datetime(2020, 11, 11)
tyden2 = dt.datetime(2020, 11, 18)

MSFT = 'MSFT'
IBM = 'IBM'
AAPL = 'AAPL'
HOG = 'HOG'
INTC = 'INTC'
KO = 'KO'
T = 'T'
WMT = 'WMT'
TSLA = 'TSLA'

stock = ''
def dataT(stock):
    df = web.DataReader(stock, 'yahoo', tyden1, tyden2)
    return df
microsoftT = dataT(MSFT)
IBMT = dataT(IBM)
appleT = dataT(AAPL)
harleyT = dataT(HOG)
intelT = dataT(INTC)
colaT = dataT(KO)
ataT = dataT(T)
walmartT = dataT(WMT)


mesic1 = dt.datetime(2020, 11, 1)
mesic2 = dt.datetime(2020, 12, 1)

def dataM(stock):
    df = web.DataReader(stock, 'yahoo', mesic1, mesic2)
    return df
microsoftM = dataM(MSFT)
IBMM  = dataM(IBM)
appleM = dataM(AAPL)

rok1 = dt.datetime(2019, 11, 1)
rok2 = dt.datetime(2020, 12, 1)

def dataR(stock):
    df = web.DataReader(stock, 'yahoo', rok1, rok2)
    return df
microsoftR = dataR(MSFT)
IBMR  = dataR(IBM)
appleR = dataR(AAPL)


class ChartView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html')

class ChartData(APIView):
    def get(self, request, format=None):
        ibm_mesic = {
            "data": IBMM['Close'],
            "labels": IBMM.index,
            "label": 'IBM',
            "procenta": {procenta_I[2]},
            "volume": prumer(IBMM['Volume']),
         }
        microsoft_mesic = {
             "data": microsoftM['Close'],
             "labels": microsoftM.index,
             "label": 'Microsoft',
             "procenta": {procenta_M[2]},
             "volume": prumer(microsoftM['Volume']),
         }
        apple_mesic = {
             "data": appleM['Close'],
             "labels": appleM.index,
             "label": 'Apple',
             "procenta": {procenta_A[2]},
             "volume": prumer(appleM['Volume']),
        }
        ibm_tyden = {
            "data": IBMT['Close'],
            "labels": IBMT.index,
            "label": 'IBM',

        }
        microsoft_tyden = {
            "data": microsoftT['Close'],
            "labels": microsoftT.index,
            "label": 'Microsoft',
        }
        apple_tyden = {
            "data": appleT['Close'],
            "labels": appleT.index,
            "label": 'Apple',
        }
        ibm_rok = {
            "data": IBMR['Close'],
            "labels": IBMR.index,
            "label": 'IBM',

        }
        microsoft_rok = {
            "data": microsoftR['Close'],
            "labels": microsoftR.index,
            "label": 'Microsoft',
        }
        apple_rok = {
            "data": appleR['Close'],
            "labels": appleR.index,
            "label": 'Apple',
        }
        tyden = {
            "IBMT": ibm_tyden,
            "MicrosoftT": microsoft_tyden,
            "AppleT": apple_tyden,
        }

        rok = {
            "IBMR": ibm_rok,
            "MicrosoftR": microsoft_rok,
            "AppleR": apple_rok,
        }
        mR = {
            "data": cenaRM,
            "labels": datumRM,
            "label": 'Microsoft',
        }
        tR = {
            "cena": cenaRT,
            "labels": datumRT,
            "label": 'Tesla',
        }
        realtime = {
            "microsoftR": mR,
            "teslaR": tR,
        }

        mesic = {
             "IBMM": ibm_mesic,
             "MicrosoftM": microsoft_mesic,
             "AppleM": apple_mesic,
         }

        intel_tyden = {
            "data": intelT['Close'],
            "labels": intelT.index,
            "label": "Intel"
        }

        cola_tyden = {
            "data": colaT['Close'],
            "labels": colaT.index,
            "label": "Coca Cola"
        }

        ata_tyden = {
            "data": ataT['Close'],
            "labels": ataT.index,
            "label": "at&t"
        }

        walmart_tyden = {
            "data": walmartT['Close'],
            "labels": walmartT.index,
            "label": "Walmart"
        }

        sez = {
            "intelT": intel_tyden,
            "colaT": cola_tyden,
            "ataT": ata_tyden,
            "walmartT": walmart_tyden,
        }

        data = {
            "Tyden": tyden,
            "Mesic": mesic,
            "Rok": rok,
            "Realtime": realtime,
            "Seznam": sez,
        }

        return Response(data)

