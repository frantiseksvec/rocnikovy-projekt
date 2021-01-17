from bs4 import BeautifulSoup
import requests

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
LANGUAGE = "en-US,en;q=0.5"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
session.headers['Accept-Language'] = LANGUAGE
session.headers['Content-Language'] = LANGUAGE

source = session.get('https://www.reuters.com/news/archive/businessNews').text
soup = BeautifulSoup(source, 'lxml')

list = []
for article in soup.find_all('article',class_='story'):
    zaklad = article.find('div',class_= 'story-content')
    obrazky = article.find('div', class_ = 'story-photo lazy-photo').a
    try:
        data ={
        "nadpis":zaklad.h3.text,
        "texty":zaklad.p.text,
        'odkaz': zaklad.find('a').get('href'),
        'obrazek': obrazky.find('img')['org-src'],
        }
        list.append(data)
    except Exception as e:
        pass

clanek1 = list[0]
clanek2 = list[3]
clanek3 = list[2]
clanek4 = list[4]
clanek5 = list[5]
clanek6 = list[6]
clanek7 = list[7]
clanek8 = list[8]
clanek9 = list[9]
clanek10 = list[10]


neco1 = clanek1["nadpis"]
neco2 = clanek2["nadpis"]
neco3 = clanek3["nadpis"]
neco4 = clanek4["nadpis"]
neco5 = clanek5["nadpis"]
neco6 = clanek6["nadpis"]
neco7 = clanek7["nadpis"]
neco8 = clanek8["nadpis"]
neco9 = clanek9["nadpis"]
neco10 = clanek10["nadpis"]


heading1 = neco1.replace('\n\t\t\t\t\t\t\t\t', '')
heading2 = neco2.replace('\n\t\t\t\t\t\t\t\t', '')
heading3 = neco3.replace('\n\t\t\t\t\t\t\t\t', '')
heading4 = neco4.replace('\n\t\t\t\t\t\t\t\t', '')
heading5 = neco5.replace('\n\t\t\t\t\t\t\t\t', '')
heading6 = neco6.replace('\n\t\t\t\t\t\t\t\t', '')
heading7 = neco7.replace('\n\t\t\t\t\t\t\t\t', '')
heading8 = neco8.replace('\n\t\t\t\t\t\t\t\t', '')
heading9 = neco9.replace('\n\t\t\t\t\t\t\t\t', '')
heading10 = neco10.replace('\n\t\t\t\t\t\t\t\t', '')
