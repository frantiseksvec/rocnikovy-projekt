from django.shortcuts import render, redirect
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import api1
from . import yahoo_finance
from . import kurzy
from . import web_scraper
from .forms import CreateUserForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def register(request):
    if request.method =='POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
        user = form.cleaned_data.get('username')
        messages.success(request, 'Účet byl úspěšně vytvořen pro uživatele: ' + user)
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

def logout_user(request):
    logout(request)
    return redirect('logout.html')

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
        clanek = {
            "nadpis1": web_scraper.heading1,
            "nadpis2": web_scraper.heading2,
            "nadpis3": web_scraper.heading3,
            "nadpis4": web_scraper.heading4,
            "text1": web_scraper.clanek1["texty"],
            "text2": web_scraper.clanek2["texty"],
            "text3": web_scraper.clanek3["texty"],
            "text4": web_scraper.clanek4["texty"],
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
            "Clanek":clanek,
        }
        return Response(data)

class KurzyData(APIView):
    def get(self, request, format=None):
        aud = {
            "nazev": kurzy.list[0]["nazev_meny"],
            "zkratka": kurzy.list[0]["zkratka"],
            "pocet": kurzy.list[0]["pocet"],
            "datum1": kurzy.list[0]["datum1"],
            "kurz": kurzy.list[0]["kurz"],
            "datum2": kurzy.list[0]["datum2"],
        }
        gbp = {
            "nazev": kurzy.list[1]["nazev_meny"],
            "zkratka": kurzy.list[1]["zkratka"],
            "pocet": kurzy.list[1]["pocet"],
            "datum1": kurzy.list[1]["datum1"],
            "kurz": kurzy.list[1]["kurz"],
            "datum2": kurzy.list[1]["datum2"],
        }
        cny = {
            "nazev": kurzy.list[2]["nazev_meny"],
            "zkratka": kurzy.list[2]["zkratka"],
            "pocet": kurzy.list[2]["pocet"],
            "datum1": kurzy.list[2]["datum1"],
            "kurz": kurzy.list[2]["kurz"],
            "datum2": kurzy.list[2]["datum2"],
        }
        eur = {
            "nazev": kurzy.list[3]["nazev_meny"],
            "zkratka": kurzy.list[3]["zkratka"],
            "pocet": kurzy.list[3]["pocet"],
            "datum1": kurzy.list[3]["datum1"],
            "kurz": kurzy.list[3]["kurz"],
            "datum2": kurzy.list[3]["datum2"],
        }
        hkd = {
            "nazev": kurzy.list[4]["nazev_meny"],
            "zkratka": kurzy.list[4]["zkratka"],
            "pocet": kurzy.list[4]["pocet"],
            "datum1": kurzy.list[4]["datum1"],
            "kurz": kurzy.list[4]["kurz"],
            "datum2": kurzy.list[4]["datum2"],
        }
        inr = {
            "nazev": kurzy.list[5]["nazev_meny"],
            "zkratka": kurzy.list[5]["zkratka"],
            "pocet": kurzy.list[5]["pocet"],
            "datum1": kurzy.list[5]["datum1"],
            "kurz": kurzy.list[5]["kurz"],
            "datum2": kurzy.list[5]["datum2"],
        }
        isk = {
            "nazev": kurzy.list[6]["nazev_meny"],
            "zkratka": kurzy.list[6]["zkratka"],
            "pocet": kurzy.list[6]["pocet"],
            "datum1": kurzy.list[6]["datum1"],
            "kurz": kurzy.list[6]["kurz"],
            "datum2": kurzy.list[6]["datum2"],
        }
        jpy = {
            "nazev": kurzy.list[7]["nazev_meny"],
            "zkratka": kurzy.list[7]["zkratka"],
            "pocet": kurzy.list[7]["pocet"],
            "datum1": kurzy.list[7]["datum1"],
            "kurz": kurzy.list[7]["kurz"],
            "datum2": kurzy.list[7]["datum2"],
        }
        krw = {
            "nazev": kurzy.list[8]["nazev_meny"],
            "zkratka": kurzy.list[8]["zkratka"],
            "pocet": kurzy.list[8]["pocet"],
            "datum1": kurzy.list[8]["datum1"],
            "kurz": kurzy.list[8]["kurz"],
            "datum2": kurzy.list[8]["datum2"],
        }
        huf = {
            "nazev": kurzy.list[9]["nazev_meny"],
            "zkratka": kurzy.list[9]["zkratka"],
            "pocet": kurzy.list[9]["pocet"],
            "datum1": kurzy.list[9]["datum1"],
            "kurz": kurzy.list[9]["kurz"],
            "datum2": kurzy.list[9]["datum2"],
        }
        mxn = {
            "nazev": kurzy.list[10]["nazev_meny"],
            "zkratka": kurzy.list[10]["zkratka"],
            "pocet": kurzy.list[10]["pocet"],
            "datum1": kurzy.list[10]["datum1"],
            "kurz": kurzy.list[10]["kurz"],
            "datum2": kurzy.list[10]["datum2"],
        }
        nok = {
            "nazev": kurzy.list[11]["nazev_meny"],
            "zkratka": kurzy.list[11]["zkratka"],
            "pocet": kurzy.list[11]["pocet"],
            "datum1": kurzy.list[11]["datum1"],
            "kurz": kurzy.list[11]["kurz"],
            "datum2": kurzy.list[11]["datum2"],
        }
        pln = {
            "nazev": kurzy.list[12]["nazev_meny"],
            "zkratka": kurzy.list[12]["zkratka"],
            "pocet": kurzy.list[12]["pocet"],
            "datum1": kurzy.list[12]["datum1"],
            "kurz": kurzy.list[12]["kurz"],
            "datum2": kurzy.list[12]["datum2"],
        }
        rub = {
            "nazev": kurzy.list[13]["nazev_meny"],
            "zkratka": kurzy.list[13]["zkratka"],
            "pocet": kurzy.list[13]["pocet"],
            "datum1": kurzy.list[13]["datum1"],
            "kurz": kurzy.list[13]["kurz"],
            "datum2": kurzy.list[13]["datum2"],
        }
        sek = {
            "nazev": kurzy.list[14]["nazev_meny"],
            "zkratka": kurzy.list[14]["zkratka"],
            "pocet": kurzy.list[14]["pocet"],
            "datum1": kurzy.list[14]["datum1"],
            "kurz": kurzy.list[14]["kurz"],
            "datum2": kurzy.list[14]["datum2"],
        }
        usd = {
            "nazev": kurzy.list2[0]["nazev_meny"],
            "zkratka": kurzy.list2[0]["zkratka"],
            "pocet": kurzy.list2[0]["pocet"],
            "datum1": kurzy.list2[0]["datum1"],
            "kurz": kurzy.list2[0]["kurz"],
            "datum2": kurzy.list2[0]["datum2"],
        }
        brl = {
            "nazev": kurzy.list2[1]["nazev_meny"],
            "zkratka": kurzy.list2[1]["zkratka"],
            "pocet": kurzy.list2[1]["pocet"],
            "datum1": kurzy.list2[1]["datum1"],
            "kurz": kurzy.list2[1]["kurz"],
            "datum2": kurzy.list2[1]["datum2"],
        }
        dkk = {
            "nazev": kurzy.list2[3]["nazev_meny"],
            "zkratka": kurzy.list2[3]["zkratka"],
            "pocet": kurzy.list2[3]["pocet"],
            "datum1": kurzy.list2[3]["datum1"],
            "kurz": kurzy.list2[3]["kurz"],
            "datum2": kurzy.list2[3]["datum2"],
        }
        hrk = {
            "nazev": kurzy.list2[5]["nazev_meny"],
            "zkratka": kurzy.list2[5]["zkratka"],
            "pocet": kurzy.list2[5]["pocet"],
            "datum1": kurzy.list2[5]["datum1"],
            "kurz": kurzy.list2[5]["kurz"],
            "datum2": kurzy.list2[5]["datum2"],
        }
        ils = {
            "nazev": kurzy.list2[7]["nazev_meny"],
            "zkratka": kurzy.list2[7]["zkratka"],
            "pocet": kurzy.list2[7]["pocet"],
            "datum1": kurzy.list2[7]["datum1"],
            "kurz": kurzy.list2[7]["kurz"],
            "datum2": kurzy.list2[7]["datum2"],
        }
        cad = {
            "nazev": kurzy.list2[9]["nazev_meny"],
            "zkratka": kurzy.list2[9]["zkratka"],
            "pocet": kurzy.list2[9]["pocet"],
            "datum1": kurzy.list2[9]["datum1"],
            "kurz": kurzy.list2[9]["kurz"],
            "datum2": kurzy.list2[9]["datum2"],
        }
        chf = {
            "nazev": kurzy.list2[15]["nazev_meny"],
            "zkratka": kurzy.list2[15]["zkratka"],
            "pocet": kurzy.list2[15]["pocet"],
            "datum1": kurzy.list2[15]["datum1"],
            "kurz": kurzy.list2[15]["kurz"],
            "datum2": kurzy.list2[15]["datum2"],
        }
        ars = {
            "nazev": kurzy.list3[0]["nazev_meny"].replace('\n', '')[:9],
            "pocet": kurzy.list3[0]["pocet"],
            "datum1": kurzy.list3[0]["datum1"],
            "kurz": kurzy.list3[0]["kurz"],
            "datum2": kurzy.list3[0]["datum2"],
        }
        bam = {
            "nazev": kurzy.list3[1]["nazev_meny"].replace('\n', '')[:14],
            "pocet": kurzy.list3[1]["pocet"],
            "datum1": kurzy.list3[1]["datum1"],
            "kurz": kurzy.list3[1]["kurz"],
            "datum2": kurzy.list3[1]["datum2"],
        }
        kwd = {
            "nazev": kurzy.list3[2]["nazev_meny"].replace('\n', '')[:6],
            "pocet": kurzy.list3[2]["pocet"],
            "datum1": kurzy.list3[2]["datum1"],
            "kurz": kurzy.list3[2]["kurz"],
            "datum2": kurzy.list3[2]["datum2"],
        }
        mdl = {
            "nazev": kurzy.list3[3]["nazev_meny"].replace('\n', '')[:9],
            "pocet": kurzy.list3[3]["pocet"],
            "datum1": kurzy.list3[3]["datum1"],
            "kurz": kurzy.list3[3]["kurz"],
            "datum2": kurzy.list3[3]["datum2"],
        }
        rsd = {
            "nazev": kurzy.list3[4]["nazev_meny"].replace('\n', '')[:6],
            "pocet": kurzy.list3[4]["pocet"],
            "datum1": kurzy.list3[4]["datum1"],
            "kurz": kurzy.list3[4]["kurz"],
            "datum2": kurzy.list3[4]["datum2"],
        }
        byr = {
            "nazev": kurzy.list4[0]["nazev_meny"].replace('\n', '')[:9],
            "pocet": kurzy.list4[0]["pocet"],
            "datum1": kurzy.list4[0]["datum1"],
            "kurz": kurzy.list4[0]["kurz"],
            "datum2": kurzy.list4[0]["datum2"],
        }
        egp = {
            "nazev": kurzy.list4[1]["nazev_meny"].replace('\n', '')[:5],
            "pocet": kurzy.list4[1]["pocet"],
            "datum1": kurzy.list4[1]["datum1"],
            "kurz": kurzy.list4[1]["kurz"],
            "datum2": kurzy.list4[1]["datum2"],
        }
        mad = {
            "nazev": kurzy.list4[2]["nazev_meny"].replace('\n', '')[:6],
            "pocet": kurzy.list4[2]["pocet"],
            "datum1": kurzy.list4[2]["datum1"],
            "kurz": kurzy.list4[2]["kurz"],
            "datum2": kurzy.list4[2]["datum2"],
        }
        mnt = {
            "nazev": kurzy.list4[3]["nazev_meny"].replace('\n', '')[:9],
            "pocet": kurzy.list4[3]["pocet"],
            "datum1": kurzy.list4[3]["datum1"],
            "kurz": kurzy.list4[3]["kurz"],
            "datum2": kurzy.list4[3]["datum2"],
        }
        uah = {
            "nazev": kurzy.list4[4]["nazev_meny"].replace('\n', '')[:8],
            "pocet": kurzy.list4[4]["pocet"],
            "datum1": kurzy.list4[4]["datum1"],
            "kurz": kurzy.list4[4]["kurz"],
            "datum2": kurzy.list4[4]["datum2"],
        }
        datumy = {
            "datum1": kurzy.datum1,
            "datum2": kurzy.datum2,
        }
        kurz = {
            "AUD": aud,
            "GBP": gbp,
            "CNY": cny,
            "EUR": eur,
            "HKD": hkd,
            "INR": inr,
            "ISK": isk,
            "KRW": krw,
            "JPY": jpy,
            "HUF": huf,
            "MXN": mxn,
            "NOK": nok,
            "PLN": pln,
            "RUB": rub,
            "SEK": sek,
            "USD": usd,
            "BRL": brl,
            "DKK": dkk,
            "HRK": hrk,
            "ILS": ils,
            "CAD": cad,
            "CHF": chf,
            "ARS": ars,
            "BAM": bam,
            "KWD": kwd,
            "MDL": mdl,
            "RSD": rsd,
            "BYR": byr,
            "EGP": egp,
            "MAD": mad,
            "MNT": mnt,
            "UAH": uah,
            "datum": datumy,
        }
        return Response(kurz)
