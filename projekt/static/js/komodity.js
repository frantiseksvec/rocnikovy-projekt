var endpoint = '/api/komodity-data'
function fetch(){
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
       komodita = data
       tabulka_energie()
       tabulka_zvirata()
       tabulka_kovy()
       tabulka_obilniny()
       tabulka_potraviny()
       tabulka_porovnani()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}
fetch()

function tabulka_energie(){
    document.getElementById('ra1-1').innerHTML = komodita.energie.benzinCZ.nazev
    document.getElementById('ra1-2').innerHTML = komodita.energie.benzinCZ.datum1
    document.getElementById('ra1-3').innerHTML = komodita.energie.benzinCZ.cena1
    document.getElementById('ra1-4').innerHTML = komodita.energie.benzinCZ.datum2
    document.getElementById('ra1-5').innerHTML = komodita.energie.benzinCZ.cena2
    document.getElementById('ra1-6').innerHTML = komodita.energie.benzinCZ.ceska_cena

    document.getElementById('ra2-1').innerHTML = komodita.energie.benzinRBOB.nazev
    document.getElementById('ra2-2').innerHTML = komodita.energie.benzinRBOB.datum1
    document.getElementById('ra2-3').innerHTML = komodita.energie.benzinRBOB.cena1
    document.getElementById('ra2-4').innerHTML = komodita.energie.benzinRBOB.datum2
    document.getElementById('ra2-5').innerHTML = komodita.energie.benzinRBOB.cena2
    document.getElementById('ra2-6').innerHTML = komodita.energie.benzinRBOB.ceska_cena

    document.getElementById('ra3-1').innerHTML = komodita.energie.elektrina.nazev
    document.getElementById('ra3-2').innerHTML = komodita.energie.elektrina.datum1
    document.getElementById('ra3-3').innerHTML = komodita.energie.elektrina.cena1
    document.getElementById('ra3-4').innerHTML = komodita.energie.elektrina.datum2
    document.getElementById('ra3-5').innerHTML = komodita.energie.elektrina.cena2
    document.getElementById('ra3-6').innerHTML = komodita.energie.elektrina.ceska_cena

    document.getElementById('ra4-1').innerHTML = komodita.energie.naftaLS.nazev
    document.getElementById('ra4-2').innerHTML = komodita.energie.naftaLS.datum1
    document.getElementById('ra4-3').innerHTML = komodita.energie.naftaLS.cena1
    document.getElementById('ra4-4').innerHTML = komodita.energie.naftaLS.datum2
    document.getElementById('ra4-5').innerHTML = komodita.energie.naftaLS.cena2
    document.getElementById('ra4-6').innerHTML = komodita.energie.naftaLS.ceska_cena

    document.getElementById('ra5-1').innerHTML = komodita.energie.naftaCZ.nazev
    document.getElementById('ra5-2').innerHTML = komodita.energie.naftaCZ.datum1
    document.getElementById('ra5-3').innerHTML = komodita.energie.naftaCZ.cena1
    document.getElementById('ra5-4').innerHTML = komodita.energie.naftaCZ.datum2
    document.getElementById('ra5-5').innerHTML = komodita.energie.naftaCZ.cena2
    document.getElementById('ra5-6').innerHTML = komodita.energie.naftaCZ.ceska_cena

    document.getElementById('ra5-1').innerHTML = komodita.energie.naftaCZ.nazev
    document.getElementById('ra5-2').innerHTML = komodita.energie.naftaCZ.datum1
    document.getElementById('ra5-3').innerHTML = komodita.energie.naftaCZ.cena1
    document.getElementById('ra5-4').innerHTML = komodita.energie.naftaCZ.datum2
    document.getElementById('ra5-5').innerHTML = komodita.energie.naftaCZ.cena2
    document.getElementById('ra5-6').innerHTML = komodita.energie.naftaCZ.ceska_cena

    document.getElementById('ra6-1').innerHTML = komodita.energie.zemniplynPXE.nazev
    document.getElementById('ra6-2').innerHTML = komodita.energie.zemniplynPXE.datum1
    document.getElementById('ra6-3').innerHTML = komodita.energie.zemniplynPXE.cena1
    document.getElementById('ra6-4').innerHTML = komodita.energie.zemniplynPXE.datum2
    document.getElementById('ra6-5').innerHTML = komodita.energie.zemniplynPXE.cena2
    document.getElementById('ra6-6').innerHTML = komodita.energie.zemniplynPXE.ceska_cena

    document.getElementById('ra7-1').innerHTML = komodita.energie.ropaBrent.nazev
    document.getElementById('ra7-2').innerHTML = komodita.energie.ropaBrent.datum1
    document.getElementById('ra7-3').innerHTML = komodita.energie.ropaBrent.cena1
    document.getElementById('ra7-4').innerHTML = komodita.energie.ropaBrent.datum2
    document.getElementById('ra7-5').innerHTML = komodita.energie.ropaBrent.cena2
    document.getElementById('ra7-6').innerHTML = komodita.energie.ropaBrent.ceska_cena

    document.getElementById('ra8-1').innerHTML = komodita.energie.ropaWTI.nazev
    document.getElementById('ra8-2').innerHTML = komodita.energie.ropaWTI.datum1
    document.getElementById('ra8-3').innerHTML = komodita.energie.ropaWTI.cena1
    document.getElementById('ra8-4').innerHTML = komodita.energie.ropaWTI.datum2
    document.getElementById('ra8-5').innerHTML = komodita.energie.ropaWTI.cena2
    document.getElementById('ra8-6').innerHTML = komodita.energie.ropaWTI.ceska_cena

    document.getElementById('ra9-1').innerHTML = komodita.energie.topnyolej.nazev
    document.getElementById('ra9-2').innerHTML = komodita.energie.topnyolej.datum1
    document.getElementById('ra9-3').innerHTML = komodita.energie.topnyolej.cena1
    document.getElementById('ra9-4').innerHTML = komodita.energie.topnyolej.datum2
    document.getElementById('ra9-5').innerHTML = komodita.energie.topnyolej.cena2
    document.getElementById('ra9-6').innerHTML = komodita.energie.topnyolej.ceska_cena

    document.getElementById('ra10-1').innerHTML = komodita.energie.uhliUS.nazev
    document.getElementById('ra10-2').innerHTML = komodita.energie.uhliUS.datum1
    document.getElementById('ra10-3').innerHTML = komodita.energie.uhliUS.cena1
    document.getElementById('ra10-4').innerHTML = komodita.energie.uhliUS.datum2
    document.getElementById('ra10-5').innerHTML = komodita.energie.uhliUS.cena2
    document.getElementById('ra10-6').innerHTML = komodita.energie.uhliUS.ceska_cena

    document.getElementById('ra11-1').innerHTML = komodita.energie.zemniplyn.nazev
    document.getElementById('ra11-2').innerHTML = komodita.energie.zemniplyn.datum1
    document.getElementById('ra11-3').innerHTML = komodita.energie.zemniplyn.cena1
    document.getElementById('ra11-4').innerHTML = komodita.energie.zemniplyn.datum2
    document.getElementById('ra11-5').innerHTML = komodita.energie.zemniplyn.cena2
    document.getElementById('ra11-6').innerHTML = komodita.energie.zemniplyn.ceska_cena
}

function tabulka_zvirata() {
    document.getElementById('r1-1').innerHTML = komodita.zvirata.nazev
    document.getElementById('r1-2').innerHTML = komodita.zvirata.datum1
    document.getElementById('r1-3').innerHTML = komodita.zvirata.cena1
    document.getElementById('r1-4').innerHTML = komodita.zvirata.datum2
    document.getElementById('r1-5').innerHTML = komodita.zvirata.cena2
    document.getElementById('r1-6').innerHTML = komodita.zvirata.ceska_cena
}

function tabulka_kovy() {
    document.getElementById('rad1-1').innerHTML = komodita.kovy.hlinik.nazev
    document.getElementById('rad1-2').innerHTML = komodita.kovy.hlinik.datum1
    document.getElementById('rad1-3').innerHTML = komodita.kovy.hlinik.cena1
    document.getElementById('rad1-4').innerHTML = komodita.kovy.hlinik.datum2
    document.getElementById('rad1-5').innerHTML = komodita.kovy.hlinik.cena2
    document.getElementById('rad1-6').innerHTML = komodita.kovy.hlinik.ceska_cena

    document.getElementById('rad2-1').innerHTML = komodita.kovy.med.nazev
    document.getElementById('rad2-2').innerHTML = komodita.kovy.med.datum1
    document.getElementById('rad2-3').innerHTML = komodita.kovy.med.cena1
    document.getElementById('rad2-4').innerHTML = komodita.kovy.med.datum2
    document.getElementById('rad2-5').innerHTML = komodita.kovy.med.cena2
    document.getElementById('rad2-6').innerHTML = komodita.kovy.med.ceska_cena

    document.getElementById('rad3-1').innerHTML = komodita.kovy.nikl.nazev
    document.getElementById('rad3-2').innerHTML = komodita.kovy.nikl.datum1
    document.getElementById('rad3-3').innerHTML = komodita.kovy.nikl.cena1
    document.getElementById('rad3-4').innerHTML = komodita.kovy.nikl.datum2
    document.getElementById('rad3-5').innerHTML = komodita.kovy.nikl.cena2
    document.getElementById('rad3-6').innerHTML = komodita.kovy.nikl.ceska_cena

    document.getElementById('rad4-1').innerHTML = komodita.kovy.palladium.nazev
    document.getElementById('rad4-2').innerHTML = komodita.kovy.palladium.datum1
    document.getElementById('rad4-3').innerHTML = komodita.kovy.palladium.cena1
    document.getElementById('rad4-4').innerHTML = komodita.kovy.palladium.datum2
    document.getElementById('rad4-5').innerHTML = komodita.kovy.palladium.cena2
    document.getElementById('rad4-6').innerHTML = komodita.kovy.palladium.ceska_cena

    document.getElementById('rad5-1').innerHTML = komodita.kovy.platina.nazev
    document.getElementById('rad5-2').innerHTML = komodita.kovy.platina.datum1
    document.getElementById('rad5-3').innerHTML = komodita.kovy.platina.cena1
    document.getElementById('rad5-4').innerHTML = komodita.kovy.platina.datum2
    document.getElementById('rad5-5').innerHTML = komodita.kovy.platina.cena2
    document.getElementById('rad5-6').innerHTML = komodita.kovy.platina.ceska_cena

    document.getElementById('rad6-1').innerHTML = komodita.kovy.stribro.nazev
    document.getElementById('rad6-2').innerHTML = komodita.kovy.stribro.datum1
    document.getElementById('rad6-3').innerHTML = komodita.kovy.stribro.cena1
    document.getElementById('rad6-4').innerHTML = komodita.kovy.stribro.datum2
    document.getElementById('rad6-5').innerHTML = komodita.kovy.stribro.cena2
    document.getElementById('rad6-6').innerHTML = komodita.kovy.stribro.ceska_cena

    document.getElementById('rad7-1').innerHTML = komodita.kovy.zlato.nazev
    document.getElementById('rad7-2').innerHTML = komodita.kovy.zlato.datum1
    document.getElementById('rad7-3').innerHTML = komodita.kovy.zlato.cena1
    document.getElementById('rad7-4').innerHTML = komodita.kovy.zlato.datum2
    document.getElementById('rad7-5').innerHTML = komodita.kovy.zlato.cena2
    document.getElementById('rad7-6').innerHTML = komodita.kovy.zlato.ceska_cena
}

function tabulka_obilniny(){
    document.getElementById('rade1-1').innerHTML = komodita.obilniny.kukurice.nazev
    document.getElementById('rade1-2').innerHTML = komodita.obilniny.kukurice.datum1
    document.getElementById('rade1-3').innerHTML = komodita.obilniny.kukurice.cena1
    document.getElementById('rade1-4').innerHTML = komodita.obilniny.kukurice.datum2
    document.getElementById('rade1-5').innerHTML = komodita.obilniny.kukurice.cena2
    document.getElementById('rade1-6').innerHTML = komodita.obilniny.kukurice.ceska_cena

    document.getElementById('rade2-1').innerHTML = komodita.obilniny.psenice.nazev
    document.getElementById('rade2-2').innerHTML = komodita.obilniny.psenice.datum1
    document.getElementById('rade2-3').innerHTML = komodita.obilniny.psenice.cena1
    document.getElementById('rade2-4').innerHTML = komodita.obilniny.psenice.datum2
    document.getElementById('rade2-5').innerHTML = komodita.obilniny.psenice.cena2
    document.getElementById('rade2-6').innerHTML = komodita.obilniny.psenice.ceska_cena

    document.getElementById('rade3-1').innerHTML = komodita.obilniny.ryze.nazev
    document.getElementById('rade3-2').innerHTML = komodita.obilniny.ryze.datum1
    document.getElementById('rade3-3').innerHTML = komodita.obilniny.ryze.cena1
    document.getElementById('rade3-4').innerHTML = komodita.obilniny.ryze.datum2
    document.getElementById('rade3-5').innerHTML = komodita.obilniny.ryze.cena2
    document.getElementById('rade3-6').innerHTML = komodita.obilniny.ryze.ceska_cena

    document.getElementById('rade4-1').innerHTML = komodita.obilniny.soja.nazev
    document.getElementById('rade4-2').innerHTML = komodita.obilniny.soja.datum1
    document.getElementById('rade4-3').innerHTML = komodita.obilniny.soja.cena1
    document.getElementById('rade4-4').innerHTML = komodita.obilniny.soja.datum2
    document.getElementById('rade4-5').innerHTML = komodita.obilniny.soja.cena2
    document.getElementById('rade4-6').innerHTML = komodita.obilniny.soja.ceska_cena
}

function tabulka_potraviny(){
    document.getElementById('radek1-1').innerHTML = komodita.potraviny.cukrB.nazev
    document.getElementById('radek1-2').innerHTML = komodita.potraviny.cukrB.datum1
    document.getElementById('radek1-3').innerHTML = komodita.potraviny.cukrB.cena1
    document.getElementById('radek1-4').innerHTML = komodita.potraviny.cukrB.datum2
    document.getElementById('radek1-5').innerHTML = komodita.potraviny.cukrB.cena2
    document.getElementById('radek1-6').innerHTML = komodita.potraviny.cukrB.ceska_cena

    document.getElementById('radek2-1').innerHTML = komodita.potraviny.cukr11.nazev
    document.getElementById('radek2-2').innerHTML = komodita.potraviny.cukr11.datum1
    document.getElementById('radek2-3').innerHTML = komodita.potraviny.cukr11.cena1
    document.getElementById('radek2-4').innerHTML = komodita.potraviny.cukr11.datum2
    document.getElementById('radek2-5').innerHTML = komodita.potraviny.cukr11.cena2
    document.getElementById('radek2-6').innerHTML = komodita.potraviny.cukr11.ceska_cena

    document.getElementById('radek3-1').innerHTML = komodita.potraviny.kakao.nazev
    document.getElementById('radek3-2').innerHTML = komodita.potraviny.kakao.datum1
    document.getElementById('radek3-3').innerHTML = komodita.potraviny.kakao.cena1
    document.getElementById('radek3-4').innerHTML = komodita.potraviny.kakao.datum2
    document.getElementById('radek3-5').innerHTML = komodita.potraviny.kakao.cena2
    document.getElementById('radek3-6').innerHTML = komodita.potraviny.kakao.ceska_cena

    document.getElementById('radek4-1').innerHTML = komodita.potraviny.kava.nazev
    document.getElementById('radek4-2').innerHTML = komodita.potraviny.kava.datum1
    document.getElementById('radek4-3').innerHTML = komodita.potraviny.kava.cena1
    document.getElementById('radek4-4').innerHTML = komodita.potraviny.kava.datum2
    document.getElementById('radek4-5').innerHTML = komodita.potraviny.kava.cena2
    document.getElementById('radek4-6').innerHTML = komodita.potraviny.kava.ceska_cena

    document.getElementById('radek5-1').innerHTML = komodita.potraviny.kavaR.nazev
    document.getElementById('radek5-2').innerHTML = komodita.potraviny.kavaR.datum1
    document.getElementById('radek5-3').innerHTML = komodita.potraviny.kavaR.cena1
    document.getElementById('radek5-4').innerHTML = komodita.potraviny.kavaR.datum2
    document.getElementById('radek5-5').innerHTML = komodita.potraviny.kavaR.cena2
    document.getElementById('radek5-6').innerHTML = komodita.potraviny.kavaR.ceska_cena
}

function tabulka_porovnani() {
    document.getElementById('radekk1-1').innerHTML = komodita.vzestup.plus1.komodita
    document.getElementById('radekk1-2').innerHTML = komodita.vzestup.plus1.aktualni
    document.getElementById('radekk1-3').innerHTML = komodita.vzestup.plus1.zmena

    document.getElementById('radekk2-1').innerHTML = komodita.vzestup.plus2.komodita
    document.getElementById('radekk2-2').innerHTML = komodita.vzestup.plus2.aktualni
    document.getElementById('radekk2-3').innerHTML = komodita.vzestup.plus2.zmena

    document.getElementById('radekk3-1').innerHTML = komodita.vzestup.plus3.komodita
    document.getElementById('radekk3-2').innerHTML = komodita.vzestup.plus3.aktualni
    document.getElementById('radekk3-3').innerHTML = komodita.vzestup.plus3.zmena

    document.getElementById('radekk4-1').innerHTML = komodita.pokles.minus1.komodita
    document.getElementById('radekk4-2').innerHTML = komodita.pokles.minus1.aktualni
    document.getElementById('radekk4-3').innerHTML = komodita.pokles.minus1.zmena

    document.getElementById('radekk5-1').innerHTML = komodita.pokles.minus2.komodita
    document.getElementById('radekk5-2').innerHTML = komodita.pokles.minus2.aktualni
    document.getElementById('radekk5-3').innerHTML = komodita.pokles.minus2.zmena

    document.getElementById('radekk6-1').innerHTML = komodita.pokles.minus3.komodita
    document.getElementById('radekk6-2').innerHTML = komodita.pokles.minus3.aktualni
    document.getElementById('radekk6-3').innerHTML = komodita.pokles.minus3.zmena
}

