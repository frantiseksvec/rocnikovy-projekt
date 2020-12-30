# from bs4 import BeautifulSoup
# import requests
#
#
# USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
# LANGUAGE = "en-US,en;q=0.5"
# session = requests.Session()
# session.headers['User-Agent'] = USER_AGENT
# session.headers['Accept-Language'] = LANGUAGE
# session.headers['Content-Language'] = LANGUAGE
# url = 'https://www.kurzy.cz/forex/krizove-kurzy/'
# source = session.get(url)
# soup = BeautifulSoup(source.text, 'html.parser')
#
# for tabulka in  soup.find_all('table',class_='pd pdw'):
#     rows = tabulka.find_all('tr',class_='')
#     for row in rows:
#         pica = row.find_all('td')[0].text
#         kokot = row.find_all('td')[1].text
#         kurva = row.find_all('td')[2].text
#         picus = row.find_all('td')[3].text