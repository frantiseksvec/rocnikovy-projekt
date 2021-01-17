from bs4 import BeautifulSoup
import requests

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
LANGUAGE = "en-US,en;q=0.5"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
session.headers['Accept-Language'] = LANGUAGE
session.headers['Content-Language'] = LANGUAGE
url = 'https://coinmarketcap.com/all/views/all/'
source = session.get(url)
soup = BeautifulSoup(source.text, 'html.parser')

list = []
rows = soup.find_all('tr', class_ ='cmc-table-row')
for row in rows:
    try:
        div = row.find_all('td')[1].div
        data = {
        'rank': row.find_all('td')[0].text,
        'nazev': row.find_all('td')[1].div.text,
        'obrazek': div.find('img')['src'],
        'odkaz': div.find('a').get('href'),
        'symbol': row.find_all('td')[2].text,
        'prodane': row.find_all('td')[3].text,
        'cena': row.find_all('td')[4].text,
        'zmena1': row.find_all('td')[7].text,
        'zmena24': row.find_all('td')[8].text,
        'zmena7': row.find_all('td')[9].text,
        }
        list.append(data)
    except:
        pass
