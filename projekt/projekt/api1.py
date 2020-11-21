import pandas as pd
from alpha_vantage.timeseries import TimeSeries
from alpha_vantage.techindicators import TechIndicators

stock = 'MSFT'

def real(stock=stock):
    api_key = 'GQ43JWXBO74Y0Z9N'
    period = 60
    ts = TimeSeries(key=api_key, output_format='pandas')
    data_ts = ts.get_intraday(stock.upper(), interval='1min', outputsize='compact')
    real.df = data_ts[0][period::]
    real.datum = pd.Index(map(lambda x: str(x)[:16], real.df.index))
    return real.datum, real.df
real()

date = real.datum
cena = real.df['4. close']
print(cena)



