from forex_python.converter import CurrencyRates
import pandas as pd

c = CurrencyRates()

def kurz(mena):
    data = c.convert(mena, 'CZK',1)
    return data







