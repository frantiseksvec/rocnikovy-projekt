from django.shortcuts import render, redirect
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import api1
from . import yahoo_finance
from . import kurzy
from .forms import CreateUserForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


def register(request):
    if request.method =='POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('login')
    else:
        form = CreateUserForm()
        args = {'form': form}
        return render(request, 'register.html', args)

def login_page(reqeust):
    if reqeust.method == 'POST':
        username = reqeust.POST.get('username')
        password = reqeust.POST.get('password')
        user = authenticate(reqeust, username=username, password=password)
        if user is not None:
            login(reqeust, user)
            return redirect('chart')
        else:
            messages.info(reqeust, 'Špatné jméno nebo heslo!!')
    context = {}
    return render(reqeust, 'login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')

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
        mR = {
            "data": api1.cenaM,
            "labels": api1.datumM,
            "label": 'Microsoft',
            "zmena": yahoo_finance.rozdil_procenta(api1.cenaM),
            "cena": yahoo_finance.prumer(api1.cenaM),
            "volume": yahoo_finance.prumer(api1.volumeM)
        }
        tR = {
            "data": api1.cenaT,
            "labels": api1.datumM,
            "label": 'Tesla',
            "zmena": yahoo_finance.rozdil_procenta(api1.cenaT),
            "cena": yahoo_finance.prumer(api1.cenaT),
            "volume": yahoo_finance.prumer(api1.volumeT),
        }
        zR = {
            "data": api1.cenaZ,
            "labels": api1.datumZ,
            "label": 'Zoom',
            "zmena": yahoo_finance.rozdil_procenta(api1.cenaZ),
            "cena": yahoo_finance.prumer(api1.cenaZ),
            "volume": yahoo_finance.prumer(api1.volumeZ)
        }
        aR = {
            "data": api1.cenaA,
            "labels": api1.datumA,
            "label": 'AGCO',
            "zmena": yahoo_finance.rozdil_procenta(api1.cenaA),
            "cena": yahoo_finance.prumer(api1.cenaA),
            "volume": yahoo_finance.prumer(api1.volumeA)
        }
        iR = {
            "data": api1.cenaI,
            "labels": api1.datumI,
            "label": 'Intel',
            "zmena": yahoo_finance.rozdil_procenta(api1.cenaA),
            "cena": yahoo_finance.prumer(api1.cenaA),
            "volume": yahoo_finance.prumer(api1.volumeI)
        }

        tabulkaM = {
            "symbol": 'MSFT',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['MSFT']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['MSFT']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['MSFT']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['MSFT']),
            "label": 'Microsoft',
            "datum": yahoo_finance.dfM.index,
            "data": yahoo_finance.dfM['MSFT'],
        }
        tabulkaZ = {
            "symbol": 'ZM',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['ZM']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['ZM']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['ZM']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['ZM']),
            "label": 'Zoom',
            "datum": yahoo_finance.dfM.index,
            "data": yahoo_finance.dfM['ZM'],
        }
        tabulkaC = {
            "symbol": 'CSCO',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['CSCO']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['CSCO']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['CSCO']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['CSCO']),
            "label": 'Cisco',
            "datum": yahoo_finance.dfM.index,
            "data": yahoo_finance.dfM['CSCO'],
        }

        tabulkaD = {
            "symbol": 'DAL',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['DAL']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['DAL']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['DAL']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['DAL']),
            "label": 'Delta Air Lines',
            "datum": yahoo_finance.dfM.index,
            "data": yahoo_finance.dfM['DAL'],
        }

        tabulkaHM = {
            "symbol": 'HMC',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['HMC']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['HMC']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['HMC']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['HMC']),
            "label": 'Honda Motor Company',
            "datum": yahoo_finance.dfM.index,
            "data": yahoo_finance.dfM['HMC'],
        }

        tabulkaG = {
            "symbol": 'GOOG',
            "cena": yahoo_finance.prumer(yahoo_finance.dfM['GOOG']),
            "zmena": yahoo_finance.rozdil(yahoo_finance.dfM['GOOG']),
            "zmena_p": yahoo_finance.rozdil_procenta(yahoo_finance.dfM['GOOG']),
            "volume": yahoo_finance.prumer(yahoo_finance.dfM_V['GOOG']),
            "label": 'Google',
            "datum": yahoo_finance.dfM.index,
            "data": yahoo_finance.dfM['GOOG'],
        }

        tabulka = {
            "microsoft": tabulkaM,
            "zoom": tabulkaZ,
            "cisco": tabulkaC,
            "delta": tabulkaD,
            "honda": tabulkaHM,
            "google": tabulkaG,
        }
        eur = {
           "mena": 'EUR',
           "zeme": 'EMS',
           "mnostvi": '1',
           "kurz": kurzy.kurz('EUR'),
        }
        usd = {
            "mena": 'USD',
            "zeme": 'USA',
            "mnostvi": '1',
            "kurz": kurzy.kurz('USD')
        }
        pln = {
            "mena": 'PLN',
            "zeme": 'Polsko',
            "mnostvi": '1',
            "kurz": kurzy.kurz('PLN')
        }
        rub = {
            "mena": 'RUB',
            "zeme": 'Rusko',
            "mnostvi": '1',
            "kurz": kurzy.kurz('RUB')
        }
        nok = {
            "mena": 'NOK',
            "zeme": 'Norsko',
            "mnostvi": '1',
            "kurz": kurzy.kurz('NOK')
        }
        huf = {
            "mena": 'HUF',
            "zeme": 'Maďarsko',
            "mnostvi": '100',
            "kurz": 100 * kurzy.kurz('HUF')
        }
        dkk = {
            "mena": 'DKK',
            "zeme": 'Dánsko',
            "mnostvi": '1',
            "kurz": kurzy.kurz('DKK')
        }
        kur = {
            "EUR": eur,
            "USD": usd,
            "PLN": pln,
            "RUB": rub,
            "NOK": nok,
            "HUF": huf,
            "DKK": dkk,
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

        data = {
            "Tyden": tyden,
            "Mesic": mesic,
            "Rok": rok,
            "Realtime": realtime,
            "Tabulka": tabulka,
            "Kurzy": kur,
        }

        return Response(data)

