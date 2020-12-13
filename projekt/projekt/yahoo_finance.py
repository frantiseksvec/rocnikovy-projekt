import pandas_datareader as web
import datetime as dt
import pandas as pd

cas_dnes = dt.date.today()
tyden = cas_dnes - dt.timedelta(days=7)
mesic = cas_dnes - dt.timedelta(days=30)
pulrok = cas_dnes - dt.timedelta(days=181)
rok = cas_dnes - dt.timedelta(days=365)

tickers = ['SPY', 'AAPL', 'MSFT', 'HOG', 'INTC', 'T', 'WMT', 'TSLA', 'IBM', 'AGCO', 'ZM']
def data(strt, end, tick_list, this_price):
    adj_close = pd.DataFrame([])
    for idx, i in enumerate(tick_list):
        try:
            total = web.DataReader(i, 'yahoo', strt, end)
            adj_close[i] = total[this_price]
        except RemoteDataError:
            pass

    return adj_close

dfT = data(tyden, cas_dnes, tickers, 'Close')
dfM = data(mesic, cas_dnes, tickers, 'Close')
dfP = data(pulrok, cas_dnes, tickers, 'Close')
dfR = data(rok, cas_dnes, tickers, 'Close')

