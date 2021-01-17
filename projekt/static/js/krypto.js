var endpoint = '/api/krypto-data'
function fetch(){
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
        kryp = data
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
    img1 = document.createElement("img");
    img1.src = kryp.krypto1.obrazek;
    src1 = document.getElementById('obrazek1');
    src1.appendChild(img1);
    document.getElementById('ra1-1').innerHTML = kryp.krypto1.rank
    document.getElementById('ra1-2').innerHTML = kryp.krypto1.nazev
    document.getElementById('ra1-3').innerHTML = kryp.krypto1.symbol
    document.getElementById('ra1-4').innerHTML = kryp.krypto1.prodane
    document.getElementById('ra1-5').innerHTML = kryp.krypto1.cena
    document.getElementById('ra1-6').innerHTML = kryp.krypto1.zmena1
    document.getElementById('ra1-7').innerHTML = kryp.krypto1.zmena24
    document.getElementById('ra1-8').innerHTML = kryp.krypto1.zmena7

    img2 = document.createElement("img");
    img2.src = kryp.krypto2.obrazek;
    src2 = document.getElementById('obrazek2');
    src2.appendChild(img2);
    document.getElementById('ra2-1').innerHTML = kryp.krypto2.rank
    document.getElementById('ra2-2').innerHTML = kryp.krypto2.nazev
    document.getElementById('ra2-3').innerHTML = kryp.krypto2.symbol
    document.getElementById('ra2-4').innerHTML = kryp.krypto2.prodane
    document.getElementById('ra2-5').innerHTML = kryp.krypto2.cena
    document.getElementById('ra2-6').innerHTML = kryp.krypto2.zmena1
    document.getElementById('ra2-7').innerHTML = kryp.krypto2.zmena24
    document.getElementById('ra2-8').innerHTML = kryp.krypto2.zmena7

    img3 = document.createElement("img");
    img3.src = kryp.krypto3.obrazek;
    src3 = document.getElementById('obrazek3');
    src3.appendChild(img3);
    document.getElementById('ra3-1').innerHTML = kryp.krypto3.rank
    document.getElementById('ra3-2').innerHTML = kryp.krypto3.nazev
    document.getElementById('ra3-3').innerHTML = kryp.krypto3.symbol
    document.getElementById('ra3-4').innerHTML = kryp.krypto3.prodane
    document.getElementById('ra3-5').innerHTML = kryp.krypto3.cena
    document.getElementById('ra3-6').innerHTML = kryp.krypto3.zmena1
    document.getElementById('ra3-7').innerHTML = kryp.krypto3.zmena24
    document.getElementById('ra3-8').innerHTML = kryp.krypto3.zmena7

    img4 = document.createElement("img");
    img4.src = kryp.krypto4.obrazek;
    src4 = document.getElementById('obrazek4');
    src4.appendChild(img4);
    document.getElementById('ra4-1').innerHTML = kryp.krypto4.rank
    document.getElementById('ra4-2').innerHTML = kryp.krypto4.nazev
    document.getElementById('ra4-3').innerHTML = kryp.krypto4.symbol
    document.getElementById('ra4-4').innerHTML = kryp.krypto4.prodane
    document.getElementById('ra4-5').innerHTML = kryp.krypto4.cena
    document.getElementById('ra4-6').innerHTML = kryp.krypto4.zmena1
    document.getElementById('ra4-7').innerHTML = kryp.krypto4.zmena24
    document.getElementById('ra4-8').innerHTML = kryp.krypto4.zmena7

    img5 = document.createElement("img");
    img5.src = kryp.krypto5.obrazek;
    src5 = document.getElementById('obrazek5');
    src5.appendChild(img5);
    document.getElementById('ra5-1').innerHTML = kryp.krypto5.rank
    document.getElementById('ra5-2').innerHTML = kryp.krypto5.nazev
    document.getElementById('ra5-3').innerHTML = kryp.krypto5.symbol
    document.getElementById('ra5-4').innerHTML = kryp.krypto5.prodane
    document.getElementById('ra5-5').innerHTML = kryp.krypto5.cena
    document.getElementById('ra5-6').innerHTML = kryp.krypto5.zmena1
    document.getElementById('ra5-7').innerHTML = kryp.krypto5.zmena24
    document.getElementById('ra5-8').innerHTML = kryp.krypto5.zmena7

    img6 = document.createElement("img");
    img6.src = kryp.krypto6.obrazek;
    src6 = document.getElementById('obrazek6');
    src6.appendChild(img6);
    document.getElementById('ra6-1').innerHTML = kryp.krypto6.rank
    document.getElementById('ra6-2').innerHTML = kryp.krypto6.nazev
    document.getElementById('ra6-3').innerHTML = kryp.krypto6.symbol
    document.getElementById('ra6-4').innerHTML = kryp.krypto6.prodane
    document.getElementById('ra6-5').innerHTML = kryp.krypto6.cena
    document.getElementById('ra6-6').innerHTML = kryp.krypto6.zmena1
    document.getElementById('ra6-7').innerHTML = kryp.krypto6.zmena24
    document.getElementById('ra6-8').innerHTML = kryp.krypto6.zmena7

    img7 = document.createElement("img");
    img7.src = kryp.krypto7.obrazek;
    src7 = document.getElementById('obrazek7');
    src7.appendChild(img7);
    document.getElementById('ra7-1').innerHTML = kryp.krypto7.rank
    document.getElementById('ra7-2').innerHTML = kryp.krypto7.nazev
    document.getElementById('ra7-3').innerHTML = kryp.krypto7.symbol
    document.getElementById('ra7-4').innerHTML = kryp.krypto7.prodane
    document.getElementById('ra7-5').innerHTML = kryp.krypto7.cena
    document.getElementById('ra7-6').innerHTML = kryp.krypto7.zmena1
    document.getElementById('ra7-7').innerHTML = kryp.krypto7.zmena24
    document.getElementById('ra7-8').innerHTML = kryp.krypto7.zmena7

    img8 = document.createElement("img");
    img8.src = kryp.krypto8.obrazek;
    src8 = document.getElementById('obrazek8');
    src8.appendChild(img8);
    document.getElementById('ra8-1').innerHTML = kryp.krypto8.rank
    document.getElementById('ra8-2').innerHTML = kryp.krypto8.nazev
    document.getElementById('ra8-3').innerHTML = kryp.krypto8.symbol
    document.getElementById('ra8-4').innerHTML = kryp.krypto8.prodane
    document.getElementById('ra8-5').innerHTML = kryp.krypto8.cena
    document.getElementById('ra8-6').innerHTML = kryp.krypto8.zmena1
    document.getElementById('ra8-7').innerHTML = kryp.krypto8.zmena24
    document.getElementById('ra8-8').innerHTML = kryp.krypto8.zmena7

    img9 = document.createElement("img");
    img9.src = kryp.krypto9.obrazek;
    src9 = document.getElementById('obrazek9');
    src9.appendChild(img9);
    document.getElementById('ra9-1').innerHTML = kryp.krypto9.rank
    document.getElementById('ra9-2').innerHTML = kryp.krypto9.nazev
    document.getElementById('ra9-3').innerHTML = kryp.krypto9.symbol
    document.getElementById('ra9-4').innerHTML = kryp.krypto9.prodane
    document.getElementById('ra9-5').innerHTML = kryp.krypto9.cena
    document.getElementById('ra9-6').innerHTML = kryp.krypto9.zmena1
    document.getElementById('ra9-7').innerHTML = kryp.krypto9.zmena24
    document.getElementById('ra9-8').innerHTML = kryp.krypto9.zmena7

    img10 = document.createElement("img");
    img10.src = kryp.krypto10.obrazek;
    src10 = document.getElementById('obrazek10');
    src10.appendChild(img10);
    document.getElementById('ra10-1').innerHTML = kryp.krypto10.rank
    document.getElementById('ra10-2').innerHTML = kryp.krypto10.nazev
    document.getElementById('ra10-3').innerHTML = kryp.krypto10.symbol
    document.getElementById('ra10-4').innerHTML = kryp.krypto10.prodane
    document.getElementById('ra10-5').innerHTML = kryp.krypto10.cena
    document.getElementById('ra10-6').innerHTML = kryp.krypto10.zmena1
    document.getElementById('ra10-7').innerHTML = kryp.krypto10.zmena24
    document.getElementById('ra10-8').innerHTML = kryp.krypto10.zmena7
}