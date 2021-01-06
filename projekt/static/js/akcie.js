var endpoint = '/api/ceske-data'
function fetch(){
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
        cisla = data
        tabulka_akcie()
        tabulka_poklesy()
        tabulka_vzestupy()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}
fetch()

function tabulka_akcie(){
    document.getElementById('rad1-1').innerHTML = cisla.akcie.avast.nazev
    document.getElementById('rad1-2').innerHTML = cisla.akcie.avast.kurz
    document.getElementById('rad1-3').innerHTML = cisla.akcie.avast.zmena
    document.getElementById('rad1-4').innerHTML = cisla.akcie.avast.objem

    document.getElementById('rad2-1').innerHTML = cisla.akcie.cez.nazev
    document.getElementById('rad2-2').innerHTML = cisla.akcie.cez.kurz
    document.getElementById('rad2-3').innerHTML = cisla.akcie.cez.zmena
    document.getElementById('rad2-4').innerHTML = cisla.akcie.cez.objem

    document.getElementById('rad3-1').innerHTML = cisla.akcie.cz_group.nazev
    document.getElementById('rad3-2').innerHTML = cisla.akcie.cz_group.kurz
    document.getElementById('rad3-3').innerHTML = cisla.akcie.cz_group.zmena
    document.getElementById('rad3-4').innerHTML = cisla.akcie.cz_group.objem

    document.getElementById('rad4-1').innerHTML = cisla.akcie.erste.nazev
    document.getElementById('rad4-2').innerHTML = cisla.akcie.erste.kurz
    document.getElementById('rad4-3').innerHTML = cisla.akcie.erste.zmena
    document.getElementById('rad4-4').innerHTML = cisla.akcie.erste.objem

    document.getElementById('rad5-1').innerHTML = cisla.akcie.e4u.nazev
    document.getElementById('rad5-2').innerHTML = cisla.akcie.e4u.kurz
    document.getElementById('rad5-3').innerHTML = cisla.akcie.e4u.zmena
    document.getElementById('rad5-4').innerHTML = cisla.akcie.e4u.objem

    document.getElementById('rad6-1').innerHTML = cisla.akcie.kofola.nazev
    document.getElementById('rad6-2').innerHTML = cisla.akcie.kofola.kurz
    document.getElementById('rad6-3').innerHTML = cisla.akcie.kofola.zmena
    document.getElementById('rad6-4').innerHTML = cisla.akcie.kofola.objem

    document.getElementById('rad7-1').innerHTML = cisla.akcie.moneta.nazev
    document.getElementById('rad7-2').innerHTML = cisla.akcie.moneta.kurz
    document.getElementById('rad7-3').innerHTML = cisla.akcie.moneta.zmena
    document.getElementById('rad7-4').innerHTML = cisla.akcie.moneta.objem

    document.getElementById('rad8-1').innerHTML = cisla.akcie.nokia.nazev
    document.getElementById('rad8-2').innerHTML = cisla.akcie.nokia.kurz
    document.getElementById('rad8-3').innerHTML = cisla.akcie.nokia.zmena
    document.getElementById('rad8-4').innerHTML = cisla.akcie.nokia.objem

    document.getElementById('rad9-1').innerHTML = cisla.akcie.o2.nazev
    document.getElementById('rad9-2').innerHTML = cisla.akcie.o2.kurz
    document.getElementById('rad9-3').innerHTML = cisla.akcie.o2.zmena
    document.getElementById('rad9-4').innerHTML = cisla.akcie.o2.objem

    document.getElementById('rad10-1').innerHTML = cisla.akcie.stock.nazev
    document.getElementById('rad10-2').innerHTML = cisla.akcie.stock.kurz
    document.getElementById('rad10-3').innerHTML = cisla.akcie.stock.zmena
    document.getElementById('rad10-4').innerHTML = cisla.akcie.stock.objem
    }

    function tabulka_vzestupy(){
    document.getElementById('ra1-1').innerHTML = cisla.vzestupy.plus1.nazev
    document.getElementById('ra1-2').innerHTML = cisla.vzestupy.plus1.cena
    document.getElementById('ra1-3').innerHTML = cisla.vzestupy.plus1.zmena

    document.getElementById('ra2-1').innerHTML = cisla.vzestupy.plus2.nazev
    document.getElementById('ra2-2').innerHTML = cisla.vzestupy.plus2.cena
    document.getElementById('ra2-3').innerHTML = cisla.vzestupy.plus2.zmena

    document.getElementById('ra3-1').innerHTML = cisla.vzestupy.plus3.nazev
    document.getElementById('ra3-2').innerHTML = cisla.vzestupy.plus3.cena
    document.getElementById('ra3-3').innerHTML = cisla.vzestupy.plus3.zmena

    document.getElementById('ra4-1').innerHTML = cisla.vzestupy.plus4.nazev
    document.getElementById('ra4-2').innerHTML = cisla.vzestupy.plus4.cena
    document.getElementById('ra4-3').innerHTML = cisla.vzestupy.plus4.zmena

    document.getElementById('ra5-1').innerHTML = cisla.vzestupy.plus5.nazev
    document.getElementById('ra5-2').innerHTML = cisla.vzestupy.plus5.cena
    document.getElementById('ra5-3').innerHTML = cisla.vzestupy.plus5.zmena
    }

    function tabulka_poklesy(){
    document.getElementById('r1-1').innerHTML = cisla.poklesy.minus1.nazev
    document.getElementById('r1-2').innerHTML = cisla.poklesy.minus1.cena
    document.getElementById('r1-3').innerHTML = cisla.poklesy.minus1.zmena

    document.getElementById('r2-1').innerHTML = cisla.poklesy.minus2.nazev
    document.getElementById('r2-2').innerHTML = cisla.poklesy.minus2.cena
    document.getElementById('r2-3').innerHTML = cisla.poklesy.minus2.zmena

    document.getElementById('r3-1').innerHTML = cisla.poklesy.minus3.nazev
    document.getElementById('r3-2').innerHTML = cisla.poklesy.minus3.cena
    document.getElementById('r3-3').innerHTML = cisla.poklesy.minus3.zmena

    document.getElementById('r4-1').innerHTML = cisla.poklesy.minus4.nazev
    document.getElementById('r4-2').innerHTML = cisla.poklesy.minus4.cena
    document.getElementById('r4-3').innerHTML = cisla.poklesy.minus4.zmena

    document.getElementById('r5-1').innerHTML = cisla.poklesy.minus5.nazev
    document.getElementById('r5-2').innerHTML = cisla.poklesy.minus5.cena
    document.getElementById('r5-3').innerHTML = cisla.poklesy.minus5.zmena
    }



