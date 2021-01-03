from bs4 import BeautifulSoup
import requests

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
