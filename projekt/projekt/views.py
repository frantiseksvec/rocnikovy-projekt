from django.shortcuts import render, redirect
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import api1
from . import yahoo_finance
from django.contrib.auth.forms import UserCreationForm
import pandas_datareader.data as web

procenta_I = '4,6'


procenta_M ='3,2'

procenta_A = '5,2'

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
            "procenta": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['IBM']),
         }
        microsoft_mesic = {
             "data": yahoo_finance.dfM['MSFT'],
             "labels": yahoo_finance.dfM.index,
             "label": 'Microsoft',
             "procenta": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['MSFT']),
         }
        apple_mesic = {
            "data": yahoo_finance.dfM['AAPL'],
            "labels": yahoo_finance.dfM.index,
            "label": 'Apple',
            "procenta": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['AAPL']),
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

        tabulkaM = {
            "symbol": 'MSFT',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['MSFT']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['MSFT']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['MSFT']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['MSFT']),
        }
        tabulkaZ = {
            "symbol": 'ZM',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['ZM']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['ZM']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['ZM']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['ZM']),
        }
        tabulkaC = {
            "symbol": 'CSCO',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['CSCO']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['CSCO']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['CSCO']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['CSCO']),
        }

        tabulkaD = {
            "symbol": 'DAL',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['DAL']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['DAL']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['DAL']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['DAL']),
        }

        tabulkaHM = {
            "symbol": 'HMC',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['HMC']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['HMC']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['HMC']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['HMC']),
        }

        tabulkaG = {
            "symbol": 'GOOG',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['GOOG']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['GOOG']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['GOOG']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['GOOG']),
        }

        tabulka = {
            "microsoft": tabulkaM,
            "zoom": tabulkaZ,
            "cisco": tabulkaC,
            "delta": tabulkaD,
            "honda": tabulkaHM,
            "google": tabulkaG,
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
            "Tabulka": tabulka,
        }

        return Response(data)

