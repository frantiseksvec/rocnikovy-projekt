from bs4 import BeautifulSoup
import requests

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
url = 'https://www.akcie.cz/'
source = session.get(url)
soup = BeautifulSoup(source.text, 'html.parser')

tabulka1 = soup.find_all('table', class_='tbl1')[0].tbody
tabulka_vzestupy = soup.find_all('table', class_='tbl2 tbl2-v2')[0].tbody
tabulka_poklesy = soup.find_all('table', class_='tbl2 tbl2-v2')[1].tbody
list1 = []
list2 = []
list3 = []

rows = tabulka1.find_all('tr')
for row in rows:
    data = {
        "nazev":row.find_all('td')[0].text,
        "kurz":row.find_all('td')[1].text,
        "zmena":row.find_all('td')[2].text,
        "objem":row.find_all('td')[3].text,
    }
    list1.append(data)

rows = tabulka_vzestupy.find_all('tr')
for row in rows:
    data = {
        "nazev":row.find_all('td')[0].text,
        "cena":row.find_all('td')[1].text,
        "zmena": row.find_all('td')[2].text,
    }
    list2.append(data)

rows = tabulka_poklesy.find_all('tr')
for row in rows:
    data = {
        "nazev":row.find_all('td')[0].text,
        "cena":row.find_all('td')[1].text,
        "zmena": row.find_all('td')[2].text,
    }
    list3.append(data)
