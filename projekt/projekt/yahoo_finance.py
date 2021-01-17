import pandas_datareader as web
import datetime as dt
import pandas as pd

cas_dnes = dt.date.today()
tyden = cas_dnes - dt.timedelta(days=7)
mesic = cas_dnes - dt.timedelta(days=30)
pulrok = cas_dnes - dt.timedelta(days=181)
rok = cas_dnes - dt.timedelta(days=365)

symboly = ['SPY', 'AAPL', 'MSFT', 'HOG', 'INTC', 'T', 'WMT', 'TSLA', 'IBM', 'AGCO', 'ZM', 'TM' , 'CSCO'
            , 'DAL', 'HMC', 'GOOG']

def data(strt, end, symboly_list, this_price):
    data_ackie = pd.DataFrame([])
    for idx, i in enumerate(symboly_list):
        try:
            total = web.DataReader(i, 'yahoo', strt, end)
            data_ackie[i] = total[this_price]
        except Exception as e:
            pass
    return data_ackie

dfT = data(tyden, cas_dnes, symboly, 'Close')
dfM = data(mesic, cas_dnes, symboly, 'Close')
dfP = data(pulrok, cas_dnes, symboly, 'Close')
dfR = data(rok, cas_dnes, symboly, 'Close')
dfM_V = data(mesic, cas_dnes, symboly, 'Volume')

def rozdil(data):
    cislo1 = data[0]
    cislo2 = data[-1]
    rozd = cislo2 - cislo1
    ret = "%.2f" % round(rozd, 2)
    return ret

def rozdil_procenta(data):
    cislo1 = data[0]
    cislo2 = data[-1]
    procenta = (abs(cislo2 - cislo1) / cislo1) * 100.0
    ret = "%.2f" % round(procenta, 2)
    return ret

def prumer(list):
    cislo = sum(list) / len(list)
    ret = "%.2f" % round(cislo, 2)
    return ret



print(cas_dnes)
print(tyden)

