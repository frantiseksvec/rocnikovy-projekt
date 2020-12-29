var endpoint = '/api/mena-data'
function fetch(){
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
       mena = data
       tabulka()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}

fetch()
function tabulka(){
    document.getElementById('rad1-1').innerHTML = mena.AUD.nazev
    document.getElementById('rad1-2').innerHTML = mena.AUD.zkratka
    document.getElementById('rad1-3').innerHTML = mena.AUD.pocet
    document.getElementById('rad1-4').innerHTML = mena.AUD.datum1
    document.getElementById('rad1-5').innerHTML = mena.AUD.kurz
    document.getElementById('rad1-6').innerHTML = mena.AUD.datum2

    document.getElementById('rad2-1').innerHTML = mena.GBP.nazev
    document.getElementById('rad2-2').innerHTML = mena.GBP.zkratka
    document.getElementById('rad2-3').innerHTML = mena.GBP.pocet
    document.getElementById('rad2-4').innerHTML = mena.GBP.datum1
    document.getElementById('rad2-5').innerHTML = mena.GBP.kurz
    document.getElementById('rad2-6').innerHTML = mena.GBP.datum2

    document.getElementById('rad3-1').innerHTML = mena.CNY.nazev
    document.getElementById('rad3-2').innerHTML = mena.CNY.zkratka
    document.getElementById('rad3-3').innerHTML = mena.CNY.pocet
    document.getElementById('rad3-4').innerHTML = mena.CNY.datum1
    document.getElementById('rad3-5').innerHTML = mena.CNY.kurz
    document.getElementById('rad3-6').innerHTML = mena.CNY.datum2

    document.getElementById('rad4-1').innerHTML = mena.EUR.nazev
    document.getElementById('rad4-2').innerHTML = mena.EUR.zkratka
    document.getElementById('rad4-3').innerHTML = mena.EUR.pocet
    document.getElementById('rad4-4').innerHTML = mena.EUR.datum1
    document.getElementById('rad4-5').innerHTML = mena.EUR.kurz
    document.getElementById('rad4-6').innerHTML = mena.EUR.datum2

    document.getElementById('rad5-1').innerHTML = mena.INR.nazev
    document.getElementById('rad5-2').innerHTML = mena.INR.zkratka
    document.getElementById('rad5-3').innerHTML = mena.INR.pocet
    document.getElementById('rad5-4').innerHTML = mena.INR.datum1
    document.getElementById('rad5-5').innerHTML = mena.INR.kurz
    document.getElementById('rad5-6').innerHTML = mena.INR.datum2

    document.getElementById('rad6-1').innerHTML = mena.JPY.nazev
    document.getElementById('rad6-2').innerHTML = mena.JPY.zkratka
    document.getElementById('rad6-3').innerHTML = mena.JPY.pocet
    document.getElementById('rad6-4').innerHTML = mena.JPY.datum1
    document.getElementById('rad6-5').innerHTML = mena.JPY.kurz
    document.getElementById('rad6-6').innerHTML = mena.JPY.datum2

    document.getElementById('rad7-1').innerHTML = mena.KRW.nazev
    document.getElementById('rad7-2').innerHTML = mena.KRW.zkratka
    document.getElementById('rad7-3').innerHTML = mena.KRW.pocet
    document.getElementById('rad7-4').innerHTML = mena.KRW.datum1
    document.getElementById('rad7-5').innerHTML = mena.KRW.kurz
    document.getElementById('rad7-6').innerHTML = mena.KRW.datum2

    document.getElementById('rad8-1').innerHTML = mena.HUF.nazev
    document.getElementById('rad8-2').innerHTML = mena.HUF.zkratka
    document.getElementById('rad8-3').innerHTML = mena.HUF.pocet
    document.getElementById('rad8-4').innerHTML = mena.HUF.datum1
    document.getElementById('rad8-5').innerHTML = mena.HUF.kurz
    document.getElementById('rad8-6').innerHTML = mena.HUF.datum2

    document.getElementById('rad9-1').innerHTML = mena.MXN.nazev
    document.getElementById('rad9-2').innerHTML = mena.MXN.zkratka
    document.getElementById('rad9-3').innerHTML = mena.MXN.pocet
    document.getElementById('rad9-4').innerHTML = mena.MXN.datum1
    document.getElementById('rad9-5').innerHTML = mena.MXN.kurz
    document.getElementById('rad9-6').innerHTML = mena.MXN.datum2

    document.getElementById('rad10-1').innerHTML = mena.NOK.nazev
    document.getElementById('rad10-2').innerHTML = mena.NOK.zkratka
    document.getElementById('rad10-3').innerHTML = mena.NOK.pocet
    document.getElementById('rad10-4').innerHTML = mena.NOK.datum1
    document.getElementById('rad10-5').innerHTML = mena.NOK.kurz
    document.getElementById('rad10-6').innerHTML = mena.NOK.datum2

    document.getElementById('rad11-1').innerHTML = mena.PLN.nazev
    document.getElementById('rad11-2').innerHTML = mena.PLN.zkratka
    document.getElementById('rad11-3').innerHTML = mena.PLN.pocet
    document.getElementById('rad11-4').innerHTML = mena.PLN.datum1
    document.getElementById('rad11-5').innerHTML = mena.PLN.kurz
    document.getElementById('rad11-6').innerHTML = mena.PLN.datum2

    document.getElementById('rad12-1').innerHTML = mena.SEK.nazev
    document.getElementById('rad12-2').innerHTML = mena.SEK.zkratka
    document.getElementById('rad12-3').innerHTML = mena.SEK.pocet
    document.getElementById('rad12-4').innerHTML = mena.SEK.datum1
    document.getElementById('rad12-5').innerHTML = mena.SEK.kurz
    document.getElementById('rad12-6').innerHTML = mena.SEK.datum2

    document.getElementById('rad13-1').innerHTML = mena.RUB.nazev
    document.getElementById('rad13-2').innerHTML = mena.RUB.zkratka
    document.getElementById('rad13-3').innerHTML = mena.RUB.pocet
    document.getElementById('rad13-4').innerHTML = mena.RUB.datum1
    document.getElementById('rad13-5').innerHTML = mena.RUB.kurz
    document.getElementById('rad13-6').innerHTML = mena.RUB.datum2
}



