from bs4 import BeautifulSoup
import requests

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
url = 'https://www.kurzy.cz/komodity/'
source = session.get(url)
soup = BeautifulSoup(source.text, 'html.parser')

div_tabulka1 = soup.find_all('div',class_='ecb')[13]
div_zpravy1 = soup.find_all('div',class_='ecb')[11]
div_zpravy2 = soup.find_all('div',class_='ecb')[12]
list1 = []
list2 = []
list3 = []
list4 = []
list5 = []
list6 = []
list7 = []

for tabulka in  div_tabulka1.find_all('tbody'):
    rows = tabulka.find_all('tr')
    for row in rows:
        data = {
        'komodita':row.find('td').text,
        'aktualni':row.find('td', class_='center').text,
        'zmena':row.find('td', class_='rght').text,
        }
        list1.append(data)

tabulka_energie = soup.find_all('table',class_='pd pdw rca rowcl')[0]
tabulka_zvirata = soup.find_all('table',class_='pd pdw rca rowcl')[1]
tabulka_kovy = soup.find_all('table',class_='pd pdw rca rowcl')[2]
tabulka_obilniny = soup.find_all('table',class_='pd pdw rca rowcl')[3]
tabulka_potraviny = soup.find_all('table',class_='pd pdw rca rowcl')[4]
tabulka_suroviny = soup.find_all('table',class_='pd pdw rca rowcl')[5]

rows = tabulka_energie.find_all('tr')
for row in rows:
    data = {
    'energie':row.find_all('td')[0].text,
    'datum1':row.find_all('td')[1].text,
    'cena1':row.find_all('td')[2].text,
    'datum2':row.find_all('td')[3].text,
    'cena2':row.find_all('td')[4].text,
    'ceska_cena':row.find_all('td')[6].text,
    }
    list2.append(data)

rows = tabulka_zvirata.find_all('tr')
for row in rows:
    data1 = {
        'energie': row.find_all('td')[0].text,
        'datum1': row.find_all('td')[1].text,
        'cena1': row.find_all('td')[2].text,
        'datum2': row.find_all('td')[3].text,
        'cena2': row.find_all('td')[4].text,
        'ceska_cena': row.find_all('td')[6].text,
    }
    list3.append(data1)

rows = tabulka_kovy.find_all('tr')
for row in rows:
    data2 = {
        'energie': row.find_all('td')[0].text,
        'datum1': row.find_all('td')[1].text,
        'cena1': row.find_all('td')[2].text,
        'datum2': row.find_all('td')[3].text,
        'cena2': row.find_all('td')[4].text,
        'ceska_cena': row.find_all('td')[6].text,
    }
    list4.append(data2)

rows = tabulka_obilniny.find_all('tr')
for row in rows:
    data3 = {
        'energie': row.find_all('td')[0].text,
        'datum1': row.find_all('td')[1].text,
        'cena1': row.find_all('td')[2].text,
        'datum2': row.find_all('td')[3].text,
        'cena2': row.find_all('td')[4].text,
        'ceska_cena': row.find_all('td')[6].text,
    }
    list5.append(data3)

rows = tabulka_potraviny.find_all('tr')
for row in rows:
    data4 = {
        'energie': row.find_all('td')[0].text,
        'datum1': row.find_all('td')[1].text,
        'cena1': row.find_all('td')[2].text,
        'datum2': row.find_all('td')[3].text,
        'cena2': row.find_all('td')[4].text,
        'ceska_cena': row.find_all('td')[6].text,
    }
    list6.append(data4)

rows = tabulka_suroviny.find_all('tr')
for row in rows:
    data5 = {
        'energie': row.find_all('td')[0].text,
        'datum1': row.find_all('td')[1].text,
        'cena1': row.find_all('td')[2].text,
        'datum2': row.find_all('td')[3].text,
        'cena2': row.find_all('td')[4].text,
        'ceska_cena': row.find_all('td')[6].text,
    }
    list7.append(data5)


