from django.shortcuts import render, redirect
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import api1
from . import yahoo_finance
from django.contrib.auth.forms import UserCreationForm
import pandas_datareader.data as web
import datetime as dt

procenta_I = '4,6'


procenta_M ='3,2'

procenta_A = '5,2'

MSFT = 'MSFT'
IBM = 'IBM'
AAPL = 'AAPL'
HOG = 'HOG'
INTC = 'INTC'
T = 'T'
WMT = 'WMT'
TSLA = 'TSLA'


list = ""
def prumer(list = list):
    return sum(list) / len(list)

tyden1 = dt.datetime(2020, 11, 11)
tyden2 = dt.datetime(2020, 11, 18)

stock = ''
def dataT(stock):
    df = web.DataReader(stock, 'yahoo', tyden1, tyden2)
    return df
microsoftT = dataT(MSFT)
IBMT = dataT(IBM)
appleT = dataT(AAPL)

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

def register(request):
    if request.method =='POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('uspech.html')
    else:
        form = UserCreationForm()
        args = {'form': form}
        return render(request, 'register.html', args)
class ChartView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'charts.html')

class Kurzy(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'kurzy.html')

class ChartData(APIView):
    def get(self, request, format=None):
        ibm_mesic = {
            "data": yahoo_finance.dfM['IBM'],
            "labels": yahoo_finance.dfM.index,
            "label": 'IBM',
            "procenta": {procenta_I[2]},
         }
        microsoft_mesic = {
             "data": yahoo_finance.dfM['MSFT'],
             "labels": yahoo_finance.dfM.index,
             "label": 'Microsoft',
             "procenta": {procenta_M[2]},
         }
        apple_mesic = {
            "data": yahoo_finance.dfM['AAPL'],
            "labels": yahoo_finance.dfM.index,
            "label": 'Apple',
            "procenta": {procenta_M[2]},
        }
        agco_mesic = {
             "data": yahoo_finance.dfM['AGCO'],
             "labels": yahoo_finance.dfM.index,
             "label": 'AGCO',
        }
        tesla_mesic = {
            "data": yahoo_finance.dfM['TSLA'],
            "labels": yahoo_finance.dfM.index,
            "label": 'Tesla',
        }
        zoom_mesic = {
            "data": yahoo_finance.dfM['ZM'],
            "labels": yahoo_finance.dfM.index,
            "label": 'Zoom',
            "procenta": {procenta_A[2]},
        }
        ibm_tyden = {
            "data": yahoo_finance.dfT['IBM'],
            "labels": yahoo_finance.dfT.index,
            "label": 'IBM',
        }
        microsoft_tyden = {
            "data": yahoo_finance.dfT['MSFT'],
            "labels": yahoo_finance.dfT.index,
            "label": 'Microsoft',
        }
        apple_tyden = {
            "data": yahoo_finance.dfT['AAPL'],
            "labels": yahoo_finance.dfT.index,
            "label": 'Apple',
        }
        ibm_rok = {
            "data": yahoo_finance.dfR['IBM'],
            "labels": yahoo_finance.dfR.index,
            "label": 'IBM',
        }
        microsoft_rok = {
            "data": yahoo_finance.dfR['MSFT'],
            "labels": yahoo_finance.dfR.index,
            "label": 'Microsoft',
        }
        apple_rok = {
            "data": yahoo_finance.dfR['AAPL'],
            "labels": yahoo_finance.dfR.index,
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
            "data": api1.cenaM,
            "labels": api1.datumM,
            "label": 'Microsoft',
        }
        tR = {
            "data": api1.cenaT,
            "labels": api1.datumM,
            "label": 'Tesla',
        }
        zR = {
            "data": api1.cenaZ,
            "labels": api1.datumZ,
            "label": 'Zoom',
        }
        aR = {
            "data": api1.cenaA,
            "labels": api1.datumA,
            "label": 'AGCO',
        }
        iR = {
            "data": api1.cenaI,
            "labels": api1.datumI,
            "label": 'Intel',
        }
        realtime = {
            "microsoftR": mR,
            "teslaR": tR,
            "zoomR": zR,
            "agcoR": aR,
            "intelR": iR,
        }

        mesic = {
             "IBMM": ibm_mesic,
             "MicrosoftM": microsoft_mesic,
             "AppleM": apple_mesic,
             "AGCOM": agco_mesic,
             "ZoomM": zoom_mesic,
             "TeslaM": tesla_mesic,
         }
        data = {
            "Tyden": tyden,
            "Mesic": mesic,
            "Rok": rok,
            "Realtime": realtime,
        }

        return Response(data)

