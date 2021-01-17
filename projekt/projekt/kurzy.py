from bs4 import BeautifulSoup
import requests
from datetime import datetime
import datetime as dt
from datetime import timedelta, date
from forex_python.converter import CurrencyRates
import pandas as pd

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
LANGUAGE = "en-US,en;q=0.5"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
session.headers['Accept-Language'] = LANGUAGE
session.headers['Content-Language'] = LANGUAGE
url = 'https://www.kurzy.cz/kurzy-men/'
source = session.get(url)
soup = BeautifulSoup(source.text, 'html.parser')

list = []
list2 = []
list3 = []
list4 = []

datum_1 = soup.find_all('th',class_='pf')[6].text
datum_2 = soup.find_all('th',class_='pf')[8].text

for tabulka in  soup.find_all('table',class_='pd pdw'):
    rows = tabulka.find_all('tr',class_='ps')
    for row in rows:
        data = {
        'nazev_meny':row.find_all('td')[0].text,
        'zkratka':row.find_all('td')[2].text,
        'pocet':row.find_all('td')[3].text,
        'datum1':row.find_all('td')[4].text,
        'kurz':row.find_all('td')[5].text,
        'datum2':row.find_all('td')[6].text,
        }
        list.append(data)

for tabulka in  soup.find_all('table',class_='pd pdw'):
    rows = tabulka.find_all('tr',class_='pl')
    for row in rows:
        data = {
        'nazev_meny':row.find_all('td')[0].text,
        'zkratka':row.find_all('td')[2].text,
        'pocet':row.find_all('td')[3].text,
        'datum1':row.find_all('td')[4].text,
        'kurz':row.find_all('td')[5].text,
        'datum2':row.find_all('td')[6].text,
        }
        list2.append(data)

for exo_tabulka in  soup.find_all('table',class_='pd pdw rowcl leftcolumnwidth'):
    rows = exo_tabulka.find_all('tr',class_='pl')
    for row in rows:
        data = {
        'nazev_meny':row.find_all('td')[0].text,
        'pocet':row.find_all('td')[3].text,
        'datum1':row.find_all('td')[4].text,
        'kurz':row.find_all('td')[5].text,
        'datum2': row.find_all('td')[6].text,
        }
        list3.append(data)

for exo_tabulka in  soup.find_all('table',class_='pd pdw rowcl leftcolumnwidth'):
    rows = exo_tabulka.find_all('tr',class_='ps')
    for row in rows:
        data = {
        'nazev_meny':row.find_all('td')[0].text,
        'pocet':row.find_all('td')[3].text,
        'datum1':row.find_all('td')[4].text,
        'kurz':row.find_all('td')[5].text,
        'datum2': row.find_all('td')[6].text,
        }
        list4.append(data)


def daterange(start_date, end_date):
    for n in range(int((end_date - start_date).days)):
        yield start_date + timedelta(n)

c = CurrencyRates()
start_date = mesic = dt.date.today() - dt.timedelta(days=14)
end_date = dt.date.today()
data1 = []
datum1 = []
data2 = []
datum2 = []
data3 = []
datum3 = []
data4 = []
datum4 = []

for single_date in daterange(start_date, end_date):
    date_obj = datetime.combine(single_date, datetime.min.time())
    value = c.get_rate('GBP', 'CZK', date_obj)
    datum = single_date.strftime('%Y-%m-%d:')
    data1.append(value)
    datum1.append(datum.replace(':', ''))

for single_date in daterange(start_date, end_date):
    date_obj = datetime.combine(single_date, datetime.min.time())
    value = c.get_rate('USD', 'CZK', date_obj)
    data2.append(value)
    datum = single_date.strftime('%Y-%m-%d:')
    datum2.append(datum.replace(':', ''))

for single_date in daterange(start_date, end_date):
    date_obj = datetime.combine(single_date, datetime.min.time())
    value = c.get_rate('EUR', 'CZK', date_obj)
    data3.append(value)
    datum = single_date.strftime('%Y-%m-%d:')
    datum3.append(datum.replace(':', ''))

for single_date in daterange(start_date, end_date):
    date_obj = datetime.combine(single_date, datetime.min.time())
    value = c.get_rate('PLN', 'CZK', date_obj)
    data4.append(value)
    datum = single_date.strftime('%Y-%m-%d:')
    datum4.append(datum.replace(':', ''))



