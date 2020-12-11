import pandas_datareader as web
import datetime as dt
import pandas as pd

start = dt.datetime(2013, 1,1)
end = dt.datetime.today()

tickers = ['SPY', 'AAPL', 'MSFT']
def get_previous_close(strt, end, tick_list, this_price):
    adj_close = pd.DataFrame([])
    for idx, i in enumerate(tick_list):
        try:
            total = web.DataReader(i, 'yahoo', strt, end)
            adj_close[i] = total[this_price]
        except RemoteDataError:
            pass

    return adj_close

print(get_previous_close(start, end, tickers, 'Adj Close'))