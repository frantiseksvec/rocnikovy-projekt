from bs4 import BeautifulSoup
import requests

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
url = 'https://www.lidovky.cz/byznys/burzy.K431000'
source = session.get(url)
list = []

soup = BeautifulSoup(source.text, 'html.parser')
clanek1 = soup.find_all('div', class_='art')[1]
clanek2 = soup.find_all('div', class_='art')[2]
clanek3 = soup.find_all('div', class_='art')[3]
clanek4 = soup.find_all('div', class_='art')[4]
clanek5 = soup.find_all('div', class_='art')[5]

data1 = {
    'nadpis': clanek1.h3.text,
    'text': clanek1.p.text,
    'odkaz': clanek1.find_all('a', href=True),
}
list.append(data1)
data2 = {
    'nadpis': clanek2.h3.text,
    'text': clanek2.p.text,
    'odkaz': clanek2.find_all('a', href=True),
}
list.append(data2)
data3 = {
    'nadpis': clanek3.h3.text,
    'text': clanek3.p.text,
    'odkaz': clanek3.find_all('a', href=True),
}
list.append(data3)
data4 = {
    'nadpis': clanek4.h3.text,
    'text': clanek4.p.text,
    'odkaz': clanek4.find_all('a', href=True),
}
list.append(data4)
data5 = {
    'nadpis': clanek5.h3.text,
    'text': clanek5.p.text,
    'odkaz': clanek5.find_all('a', href=True),
}
list.append(data5)



