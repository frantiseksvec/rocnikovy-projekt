from forex_python.converter import CurrencyRates
import pandas as pd

c = CurrencyRates()

def kurz(mena):
    data = c.convert(mena, 'CZK',1)
    return data


pd.DataFrame(data={'Date':['2017-4-15','2017-6-12','2017-2-25'],'Amount':[5,10,15],'Currency':['USD','SEK','EUR']})





