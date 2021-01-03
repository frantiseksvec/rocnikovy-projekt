"""projekt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.auth.views import LogoutView

from . import views
from .views import ChartView, ChartData, Kurzy, KurzyData, KomodityData, Komodity, CeskeAkcieData

urlpatterns = [
    url(r'^$', ChartView.as_view(), name='chart'),
    url(r'^api/akcie-data/$', ChartData.as_view()),
    url(r'^api/mena-data/$', KurzyData.as_view()),
    url(r'^api/komodity-data/$', KomodityData.as_view()),
    url(r'^api/ceske-data/$', CeskeAkcieData.as_view()),
    url(r'^kurzy/$', Kurzy.as_view(), name='kurzy'),
    url(r'^komodity/$', Komodity.as_view(), name='komodity'),
    url(r'^admin/', admin.site.urls),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login_page, name='login'),
    url(r'^login/$', views.logout, name='logout'),
]

urlpatterns += staticfiles_urlpatterns()
