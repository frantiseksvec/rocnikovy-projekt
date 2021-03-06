import pandas as pd
from alpha_vantage.timeseries import TimeSeries
MSFT = 'MSFT'
TSLA = 'TSLA'
ZM = 'ZM'
AGCO = 'AGCO'
INTC = 'INTC'
stock = ''

def real(stock):
    api_key = 'GQ43JWXBO74Y0Z9N'
    ts = TimeSeries(key=api_key, output_format='pandas')
    df = ts.get_intraday(stock.upper(), interval='1min', outputsize='compact')
    return df


period = 60
dataM = real(MSFT)
dataT = real(TSLA)
dataZ = real(ZM)
dataA = real(AGCO)
dataI = real(INTC)
cenaM = dataM[0][period::]["4. close"]
volumeM = dataM[0][period::]["5. volume"]
datumM = pd.Index(map(lambda x: str(x)[:16], cenaM.index))[::-1]
cenaT = dataT[0][period::]["4. close"]
volumeT = dataT[0][period::]["5. volume"]
datumT = pd.Index(map(lambda x: str(x)[:16], cenaT.index))[::-1]
cenaZ = dataZ[0][period::]["4. close"]
volumeZ = dataZ[0][period::]["5. volume"]
datumZ = pd.Index(map(lambda x: str(x)[:16], cenaZ.index))[::-1]
cenaA = dataA[0][period::]["4. close"]
volumeA = dataA[0][period::]["5. volume"]
datumA = pd.Index(map(lambda x: str(x)[:16], cenaA.index))[::-1]
cenaI = dataI[0][period::]["4. close"]
volumeI = dataI[0][period::]["5. volume"]
datumI = pd.Index(map(lambda x: str(x)[:16], cenaI.index))[::-1]







