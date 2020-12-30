var endpoint = '/api/mena-data'
function fetch(){
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
       mena = data
       tabulka()
       exo_tabulka()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}

fetch()
function exo_tabulka(){
    document.getElementById('datum_1').innerHTML = mena.datum.datum1
    document.getElementById('datum_2').innerHTML = mena.datum.datum2

    document.getElementById('ra1-1').innerHTML = mena.ARS.nazev
    document.getElementById('ra1-3').innerHTML = mena.ARS.pocet
    document.getElementById('ra1-4').innerHTML = mena.ARS.datum1
    document.getElementById('ra1-5').innerHTML = mena.ARS.kurz
    document.getElementById('ra1-6').innerHTML = mena.ARS.datum2

    document.getElementById('ra2-1').innerHTML = mena.BYR.nazev
    document.getElementById('ra2-3').innerHTML = mena.BYR.pocet
    document.getElementById('ra2-4').innerHTML = mena.BYR.datum1
    document.getElementById('ra2-5').innerHTML = mena.BYR.kurz
    document.getElementById('ra2-6').innerHTML = mena.BYR.datum2

    document.getElementById('ra3-1').innerHTML = mena.BAM.nazev
    document.getElementById('ra3-3').innerHTML = mena.BAM.pocet
    document.getElementById('ra3-4').innerHTML = mena.BAM.datum1
    document.getElementById('ra3-5').innerHTML = mena.BAM.kurz
    document.getElementById('ra3-6').innerHTML = mena.BAM.datum2

    document.getElementById('ra4-1').innerHTML = mena.EGP.nazev
    document.getElementById('ra4-3').innerHTML = mena.EGP.pocet
    document.getElementById('ra4-4').innerHTML = mena.EGP.datum1
    document.getElementById('ra4-5').innerHTML = mena.EGP.kurz
    document.getElementById('ra4-6').innerHTML = mena.EGP.datum2

    document.getElementById('ra5-1').innerHTML = mena.KWD.nazev
    document.getElementById('ra5-3').innerHTML = mena.KWD.pocet
    document.getElementById('ra5-4').innerHTML = mena.KWD.datum1
    document.getElementById('ra5-5').innerHTML = mena.KWD.kurz
    document.getElementById('ra5-6').innerHTML = mena.KWD.datum2

    document.getElementById('ra6-1').innerHTML = mena.MAD.nazev
    document.getElementById('ra6-3').innerHTML = mena.MAD.pocet
    document.getElementById('ra6-4').innerHTML = mena.MAD.datum1
    document.getElementById('ra6-5').innerHTML = mena.MAD.kurz
    document.getElementById('ra6-6').innerHTML = mena.MAD.datum2

    document.getElementById('ra7-1').innerHTML = mena.MDL.nazev
    document.getElementById('ra7-3').innerHTML = mena.MDL.pocet
    document.getElementById('ra7-4').innerHTML = mena.MDL.datum1
    document.getElementById('ra7-5').innerHTML = mena.MDL.kurz
    document.getElementById('ra7-6').innerHTML = mena.MDL.datum2

    document.getElementById('ra8-1').innerHTML = mena.MNT.nazev
    document.getElementById('ra8-3').innerHTML = mena.MNT.pocet
    document.getElementById('ra8-4').innerHTML = mena.MNT.datum1
    document.getElementById('ra8-5').innerHTML = mena.MNT.kurz
    document.getElementById('ra8-6').innerHTML = mena.MNT.datum2

    document.getElementById('ra9-1').innerHTML = mena.RSD.nazev
    document.getElementById('ra9-3').innerHTML = mena.RSD.pocet
    document.getElementById('ra9-4').innerHTML = mena.RSD.datum1
    document.getElementById('ra9-5').innerHTML = mena.RSD.kurz
    document.getElementById('ra9-6').innerHTML = mena.RSD.datum2

    document.getElementById('ra10-1').innerHTML = mena.UAH.nazev
    document.getElementById('ra10-3').innerHTML = mena.UAH.pocet
    document.getElementById('ra10-4').innerHTML = mena.UAH.datum1
    document.getElementById('ra10-5').innerHTML = mena.UAH.kurz
    document.getElementById('ra10-6').innerHTML = mena.UAH.datum2
}
function tabulka(){
    document.getElementById('datum1').innerHTML = mena.datum.datum1
    document.getElementById('datum2').innerHTML = mena.datum.datum2

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

    document.getElementById('rad14-1').innerHTML = mena.USD.nazev
    document.getElementById('rad14-2').innerHTML = mena.USD.zkratka
    document.getElementById('rad14-3').innerHTML = mena.USD.pocet
    document.getElementById('rad14-4').innerHTML = mena.USD.datum1
    document.getElementById('rad14-5').innerHTML = mena.USD.kurz
    document.getElementById('rad14-6').innerHTML = mena.USD.datum2

    document.getElementById('rad15-1').innerHTML = mena.BRL.nazev
    document.getElementById('rad15-2').innerHTML = mena.BRL.zkratka
    document.getElementById('rad15-3').innerHTML = mena.BRL.pocet
    document.getElementById('rad15-4').innerHTML = mena.BRL.datum1
    document.getElementById('rad15-5').innerHTML = mena.BRL.kurz
    document.getElementById('rad15-6').innerHTML = mena.BRL.datum2

    document.getElementById('rad16-1').innerHTML = mena.DKK.nazev
    document.getElementById('rad16-2').innerHTML = mena.DKK.zkratka
    document.getElementById('rad16-3').innerHTML = mena.DKK.pocet
    document.getElementById('rad16-4').innerHTML = mena.DKK.datum1
    document.getElementById('rad16-5').innerHTML = mena.DKK.kurz
    document.getElementById('rad16-6').innerHTML = mena.DKK.datum2

    document.getElementById('rad17-1').innerHTML = mena.DKK.nazev
    document.getElementById('rad17-2').innerHTML = mena.DKK.zkratka
    document.getElementById('rad17-3').innerHTML = mena.DKK.pocet
    document.getElementById('rad17-4').innerHTML = mena.DKK.datum1
    document.getElementById('rad17-5').innerHTML = mena.DKK.kurz
    document.getElementById('rad17-6').innerHTML = mena.DKK.datum2

    document.getElementById('rad18-1').innerHTML = mena.ILS.nazev
    document.getElementById('rad18-2').innerHTML = mena.ILS.zkratka
    document.getElementById('rad18-3').innerHTML = mena.ILS.pocet
    document.getElementById('rad18-4').innerHTML = mena.ILS.datum1
    document.getElementById('rad18-5').innerHTML = mena.ILS.kurz
    document.getElementById('rad18-6').innerHTML = mena.ILS.datum2

    document.getElementById('rad19-1').innerHTML = mena.CHF.nazev
    document.getElementById('rad19-2').innerHTML = mena.CHF.zkratka
    document.getElementById('rad19-3').innerHTML = mena.CHF.pocet
    document.getElementById('rad19-4').innerHTML = mena.CHF.datum1
    document.getElementById('rad19-5').innerHTML = mena.CHF.kurz
    document.getElementById('rad19-6').innerHTML = mena.CHF.datum2
}



