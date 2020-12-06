import pandas as pd
from alpha_vantage.timeseries import TimeSeries
MSFT = 'MSFT'
TSLA = 'TSLA'
stock = ''
def real(stock):
    api_key = 'GQ43JWXBO74Y0Z9N'
    ts = TimeSeries(key=api_key, output_format='pandas')
    df = ts.get_intraday(stock.upper(), interval='30min', outputsize='compact')
    return df
period = 60
dataM = real(MSFT)
dataT = real(TSLA)
cenaM = dataM[0][period::]["4. close"]
datumM = pd.Index(map(lambda x: str(x)[:16], cenaM.index))
cenaT = dataM[0][period::]["4. close"]
datumT = pd.Index(map(lambda x: str(x)[:16], cenaT.index))






