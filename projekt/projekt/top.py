from bs4 import BeautifulSoup
import requests
import pandas_datareader as web
import pandas as pd
import datetime as dt

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
LANGUAGE = "en-US,en;q=0.5"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
session.headers['Accept-Language'] = LANGUAGE
session.headers['Content-Language'] = LANGUAGE
url = 'https://www.tradingview.com/markets/stocks-usa/market-movers-gainers/'
source = session.get(url)
soup = BeautifulSoup(source.text, 'html.parser')

list = []
ticker_list = []
rows = soup.find_all('tr', class_='tv-data-table__row tv-data-table__stroke tv-screener-table__result-row')
for row in rows:
    try:
        nazvy = row.find_all('td')[0].div.div
        symbol = nazvy.a.text.strip()
        if len(ticker_list) < 11:
            ticker_list.append(symbol)
        nazev = nazvy.find('span', class_='tv-screener__description').text.strip()
        data = {
        "symbol": symbol,
        "nazev": nazev,
        "cena": row.find_all('td')[1].text.strip(),
        "zmena_procenta": row.find_all('td')[2].text.strip(),
        "zmena_cena": row.find_all('td')[3].text.strip(),
        "doporuceni": row.find_all('td')[4].text.strip(),
        "volume": row.find_all('td')[5].text.strip(),
        "zamestnanci": row.find_all('td')[9].text.strip(),
        "sektor": row.find_all('td')[10].text.strip(),
        }
        list.append(data)
    except:
        pass

cas_dnes = dt.date.today()
mesic = cas_dnes - dt.timedelta(days=30)
def data(strt, end, symboly_list, this_price):
    data_ackie = pd.DataFrame([])
    for idx, i in enumerate(symboly_list):
        try:
            total = web.DataReader(i, 'yahoo', strt, end)
            data_ackie[i] = total[this_price]
        except:
            pass
    return data_ackie

mesic = data(mesic, cas_dnes, ticker_list, 'Close')


