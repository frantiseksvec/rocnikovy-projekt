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
clanek5 = soup.find_all('div', class_='art')[6]

data1 = {
    'nadpis': clanek1.h3.text.strip(),
    'text': clanek1.p.text.strip(),
    'obrazek': clanek1.find('img')['src'],
    'odkaz': clanek1.find('a').get('href')
}

list.append(data1)
data2 = {
    'nadpis': clanek2.h3.text.strip(),
    'text': clanek2.p.text.strip(),
    'obrazek': clanek2.find('img')['src'],
    'odkaz': clanek2.find('a').get('href')
}
list.append(data2)
data3 = {
    'nadpis': clanek3.h3.text.strip(),
    'text': clanek3.p.text.strip(),
    'obrazek': clanek3.find('img')['src'],
    'odkaz': clanek3.find('a').get('href')

}
list.append(data3)
data4 = {
    'nadpis': clanek4.h3.text.strip(),
    'text': clanek4.p.text.strip(),
    'obrazek': clanek4.find('img')['src'],
    'odkaz': clanek4.find('a').get('href')
}
list.append(data4)
data5 = {
    'nadpis': clanek5.h3.text.strip(),
    'text': clanek5.p.text.strip(),
    'obrazek': clanek5.find('img')['src'],
    'odkaz': clanek5.find('a').get('href')
}
list.append(data5)


