import datetime as dt
import  pandas as pd
import pandas_datareader.data as web

stock = "MSFT"
rok1 = dt.datetime(2000,1,1)
rok2 = dt.datetime(2001,1,1)
def data(stock = stock):
    df = web.DataReader(stock, 'yahoo', rok1, rok2)
    return df
data()
