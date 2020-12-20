from bs4 import BeautifulSoup
import requests

source = requests.get('https://www.reuters.com/news/archive/businessNews').text
soup = BeautifulSoup(source, 'lxml')

list = []

for article in soup.find_all('article',class_='story'):
    zaklad = article.find('div',class_= 'story-content')
    try:
        data ={
        "nadpis":zaklad.h3.text,
        "texty":zaklad.p.text,
        }
        list.append(data)
    except Exception as e:
        pass


clanek1 = list[0]
clanek2 = list[3]
clanek3 = list[2]
clanek4 = list[4]

neco1 = clanek1["nadpis"]
neco2 = clanek2["nadpis"]
neco3 = clanek3["nadpis"]
neco4 = clanek4["nadpis"]

heading1 = neco1.replace('\n\t\t\t\t\t\t\t\t', '')
heading2 = neco2.replace('\n\t\t\t\t\t\t\t\t', '')
heading3 = neco3.replace('\n\t\t\t\t\t\t\t\t', '')
heading4 = neco4.replace('\n\t\t\t\t\t\t\t\t', '')

