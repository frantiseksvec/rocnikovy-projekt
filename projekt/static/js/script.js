var endpoint = 'api/akcie-data'
function fetch(){
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
            neco = data
            LabelsR = data.Realtime.microsoftR.labels
            LabelR = data.Realtime.microsoftR.label
            DataR = data.Realtime.microsoftR.data
            ProcentaI = data.Mesic.IBMM.procenta
            ProcentaM = data.Mesic.MicrosoftM.procenta
            ProcentaA = data.Mesic.AppleM.procenta
            ILs = data.Tyden.IBMT.labels
            IL = data.Tyden.IBMT.label
            ID = data.Tyden.IBMT.data
            ALs = data.Tyden.AppleT.labels
            AL = data.Tyden.AppleT.label
            AD = data.Tyden.AppleT.data
            MLs = data.Tyden.MicrosoftT.labels
            ML = data.Tyden.MicrosoftT.label
            MD = data.Tyden.MicrosoftT.data
            VolumeI = data.Mesic.IBMM.volume
            VolumeA = data.Mesic.MicrosoftM.volume
            VolumeM = data.Mesic.AppleM.volume
            nastavGraf()
            vzestupGrafy()
            zestupGrafy()
            Texty()
            Tabulka()
            TabulkaR()
            tabulkaGrafy()
            Tabulka_vzestup()
            Tabulka_zestup()
            Clanky()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}
    fetch()
    function Texty(){
        document.getElementById('nadpis-okno1').innerHTML = neco.Tabulka.microsoft.label
        document.getElementById('nadpis-okno2').innerHTML = neco.Tabulka.zoom.label
        document.getElementById('nadpis-okno3').innerHTML = neco.Tabulka.cisco.label
        document.getElementById('nadpis-okno4').innerHTML = neco.Tabulka.delta.label
        document.getElementById('nadpis-okno5').innerHTML = neco.Tabulka.honda.label
        document.getElementById('nadpis-okno6').innerHTML = neco.Tabulka.google.label

        document.getElementById('nadpis-ok1').innerHTML = neco.Vzestup.top1.nazev
        document.getElementById('nadpis-ok2').innerHTML = neco.Vzestup.top2.nazev
        document.getElementById('nadpis-ok3').innerHTML = neco.Vzestup.top3.nazev
        document.getElementById('nadpis-ok4').innerHTML = neco.Vzestup.top4.nazev
        document.getElementById('nadpis-ok5').innerHTML = neco.Vzestup.top5.nazev
        document.getElementById('nadpis-ok6').innerHTML = neco.Vzestup.top6.nazev
        document.getElementById('nadpis-ok7').innerHTML = neco.Vzestup.top7.nazev
        document.getElementById('nadpis-ok8').innerHTML = neco.Vzestup.top8.nazev
        document.getElementById('nadpis-ok9').innerHTML = neco.Vzestup.top9.nazev
        document.getElementById('nadpis-ok10').innerHTML = neco.Vzestup.top10.nazev

        document.getElementById('nadpis-okn1').innerHTML = neco.Zestup.low1.nazev
        document.getElementById('nadpis-okn2').innerHTML = neco.Zestup.low2.nazev
        document.getElementById('nadpis-okn3').innerHTML = neco.Zestup.low3.nazev
        document.getElementById('nadpis-okn4').innerHTML = neco.Zestup.low4.nazev
        document.getElementById('nadpis-okn5').innerHTML = neco.Zestup.low5.nazev
        document.getElementById('nadpis-okn6').innerHTML = neco.Zestup.low6.nazev
        document.getElementById('nadpis-okn7').innerHTML = neco.Zestup.low7.nazev
        document.getElementById('nadpis-okn8').innerHTML = neco.Zestup.low8.nazev
        document.getElementById('nadpis-okn9').innerHTML = neco.Zestup.low9.nazev
        document.getElementById('nadpis-okn10').innerHTML = neco.Zestup.low10.nazev
    }

    function Tabulka(){
        document.getElementById('radek1-1').innerHTML = neco.Tabulka.microsoft.symbol
        document.getElementById('radek1-2').innerHTML = neco.Tabulka.microsoft.cena
        document.getElementById('radek1-3').innerHTML = neco.Tabulka.microsoft.zmena
        document.getElementById('radek1-4').innerHTML = neco.Tabulka.microsoft.zmena_p  + '%'
        document.getElementById('radek1-5').innerHTML = neco.Tabulka.microsoft.volume

        document.getElementById('radek2-1').innerHTML = neco.Tabulka.zoom.symbol
        document.getElementById('radek2-2').innerHTML = neco.Tabulka.zoom.cena
        document.getElementById('radek2-3').innerHTML = neco.Tabulka.zoom.zmena
        document.getElementById('radek2-4').innerHTML = neco.Tabulka.zoom.zmena_p  + '%'
        document.getElementById('radek2-5').innerHTML = neco.Tabulka.zoom.volume

        document.getElementById('radek3-1').innerHTML = neco.Tabulka.cisco.symbol
        document.getElementById('radek3-2').innerHTML = neco.Tabulka.cisco.cena
        document.getElementById('radek3-3').innerHTML = neco.Tabulka.cisco.zmena
        document.getElementById('radek3-4').innerHTML = neco.Tabulka.cisco.zmena_p  + '%'
        document.getElementById('radek3-5').innerHTML = neco.Tabulka.cisco.volume

        document.getElementById('radek4-1').innerHTML = neco.Tabulka.delta.symbol
        document.getElementById('radek4-2').innerHTML = neco.Tabulka.delta.cena
        document.getElementById('radek4-3').innerHTML = neco.Tabulka.delta.zmena
        document.getElementById('radek4-4').innerHTML = neco.Tabulka.delta.zmena_p  + '%'
        document.getElementById('radek4-5').innerHTML = neco.Tabulka.delta.volume

        document.getElementById('radek5-1').innerHTML = neco.Tabulka.honda.symbol
        document.getElementById('radek5-2').innerHTML = neco.Tabulka.honda.cena
        document.getElementById('radek5-3').innerHTML = neco.Tabulka.honda.zmena
        document.getElementById('radek5-4').innerHTML = neco.Tabulka.honda.zmena_p  + '%'
        document.getElementById('radek5-5').innerHTML = neco.Tabulka.honda.volume

        document.getElementById('radek6-1').innerHTML = neco.Tabulka.google.symbol
        document.getElementById('radek6-2').innerHTML = neco.Tabulka.google.cena
        document.getElementById('radek6-3').innerHTML = neco.Tabulka.google.zmena
        document.getElementById('radek6-4').innerHTML = neco.Tabulka.google.zmena_p  + '%'
        document.getElementById('radek6-5').innerHTML = neco.Tabulka.google.volume

    }

    function Tabulka_vzestup(){
        document.getElementById('ra1-1').innerHTML = neco.Vzestup.top1.symbol
        document.getElementById('ra1-2').innerHTML = neco.Vzestup.top1.nazev
        document.getElementById('ra1-3').innerHTML = neco.Vzestup.top1.cena
        document.getElementById('ra1-4').innerHTML = neco.Vzestup.top1.zmena_procenta
        document.getElementById('ra1-5').innerHTML = neco.Vzestup.top1.zmena_cena
        document.getElementById('ra1-6').innerHTML = neco.Vzestup.top1.doporuceni
        document.getElementById('ra1-7').innerHTML = neco.Vzestup.top1.volume
        document.getElementById('ra1-8').innerHTML = neco.Vzestup.top1.zamestnanci
        document.getElementById('ra1-9').innerHTML = neco.Vzestup.top1.sektor

        document.getElementById('ra2-1').innerHTML = neco.Vzestup.top2.symbol
        document.getElementById('ra2-2').innerHTML = neco.Vzestup.top2.nazev
        document.getElementById('ra2-3').innerHTML = neco.Vzestup.top2.cena
        document.getElementById('ra2-4').innerHTML = neco.Vzestup.top2.zmena_procenta
        document.getElementById('ra2-5').innerHTML = neco.Vzestup.top2.zmena_cena
        document.getElementById('ra2-6').innerHTML = neco.Vzestup.top2.doporuceni
        document.getElementById('ra2-7').innerHTML = neco.Vzestup.top2.volume
        document.getElementById('ra2-8').innerHTML = neco.Vzestup.top2.zamestnanci
        document.getElementById('ra2-9').innerHTML = neco.Vzestup.top2.sektor

        document.getElementById('ra3-1').innerHTML = neco.Vzestup.top3.symbol
        document.getElementById('ra3-2').innerHTML = neco.Vzestup.top3.nazev
        document.getElementById('ra3-3').innerHTML = neco.Vzestup.top3.cena
        document.getElementById('ra3-4').innerHTML = neco.Vzestup.top3.zmena_procenta
        document.getElementById('ra3-5').innerHTML = neco.Vzestup.top3.zmena_cena
        document.getElementById('ra3-6').innerHTML = neco.Vzestup.top3.doporuceni
        document.getElementById('ra3-7').innerHTML = neco.Vzestup.top3.volume
        document.getElementById('ra3-8').innerHTML = neco.Vzestup.top3.zamestnanci
        document.getElementById('ra3-9').innerHTML = neco.Vzestup.top3.sektor

        document.getElementById('ra4-1').innerHTML = neco.Vzestup.top4.symbol
        document.getElementById('ra4-2').innerHTML = neco.Vzestup.top4.nazev
        document.getElementById('ra4-3').innerHTML = neco.Vzestup.top4.cena
        document.getElementById('ra4-4').innerHTML = neco.Vzestup.top4.zmena_procenta
        document.getElementById('ra4-5').innerHTML = neco.Vzestup.top4.zmena_cena
        document.getElementById('ra4-6').innerHTML = neco.Vzestup.top4.doporuceni
        document.getElementById('ra4-7').innerHTML = neco.Vzestup.top4.volume
        document.getElementById('ra4-8').innerHTML = neco.Vzestup.top4.zamestnanci
        document.getElementById('ra4-9').innerHTML = neco.Vzestup.top4.sektor

        document.getElementById('ra5-1').innerHTML = neco.Vzestup.top5.symbol
        document.getElementById('ra5-2').innerHTML = neco.Vzestup.top5.nazev
        document.getElementById('ra5-3').innerHTML = neco.Vzestup.top5.cena
        document.getElementById('ra5-4').innerHTML = neco.Vzestup.top5.zmena_procenta
        document.getElementById('ra5-5').innerHTML = neco.Vzestup.top5.zmena_cena
        document.getElementById('ra5-6').innerHTML = neco.Vzestup.top5.doporuceni
        document.getElementById('ra5-7').innerHTML = neco.Vzestup.top5.volume
        document.getElementById('ra5-8').innerHTML = neco.Vzestup.top5.zamestnanci
        document.getElementById('ra5-9').innerHTML = neco.Vzestup.top5.sektor

        document.getElementById('ra6-1').innerHTML = neco.Vzestup.top6.symbol
        document.getElementById('ra6-2').innerHTML = neco.Vzestup.top6.nazev
        document.getElementById('ra6-3').innerHTML = neco.Vzestup.top6.cena
        document.getElementById('ra6-4').innerHTML = neco.Vzestup.top6.zmena_procenta
        document.getElementById('ra6-5').innerHTML = neco.Vzestup.top6.zmena_cena
        document.getElementById('ra6-6').innerHTML = neco.Vzestup.top6.doporuceni
        document.getElementById('ra6-7').innerHTML = neco.Vzestup.top6.volume
        document.getElementById('ra6-8').innerHTML = neco.Vzestup.top6.zamestnanci
        document.getElementById('ra6-9').innerHTML = neco.Vzestup.top6.sektor

        document.getElementById('ra7-1').innerHTML = neco.Vzestup.top7.symbol
        document.getElementById('ra7-2').innerHTML = neco.Vzestup.top7.nazev
        document.getElementById('ra7-3').innerHTML = neco.Vzestup.top7.cena
        document.getElementById('ra7-4').innerHTML = neco.Vzestup.top7.zmena_procenta
        document.getElementById('ra7-5').innerHTML = neco.Vzestup.top7.zmena_cena
        document.getElementById('ra7-6').innerHTML = neco.Vzestup.top7.doporuceni
        document.getElementById('ra7-7').innerHTML = neco.Vzestup.top7.volume
        document.getElementById('ra7-8').innerHTML = neco.Vzestup.top7.zamestnanci
        document.getElementById('ra7-9').innerHTML = neco.Vzestup.top7.sektor

        document.getElementById('ra8-1').innerHTML = neco.Vzestup.top8.symbol
        document.getElementById('ra8-2').innerHTML = neco.Vzestup.top8.nazev
        document.getElementById('ra8-3').innerHTML = neco.Vzestup.top8.cena
        document.getElementById('ra8-4').innerHTML = neco.Vzestup.top8.zmena_procenta
        document.getElementById('ra8-5').innerHTML = neco.Vzestup.top8.zmena_cena
        document.getElementById('ra8-6').innerHTML = neco.Vzestup.top8.doporuceni
        document.getElementById('ra8-7').innerHTML = neco.Vzestup.top8.volume
        document.getElementById('ra8-8').innerHTML = neco.Vzestup.top8.zamestnanci
        document.getElementById('ra8-9').innerHTML = neco.Vzestup.top8.sektor

        document.getElementById('ra9-1').innerHTML = neco.Vzestup.top9.symbol
        document.getElementById('ra9-2').innerHTML = neco.Vzestup.top9.nazev
        document.getElementById('ra9-3').innerHTML = neco.Vzestup.top9.cena
        document.getElementById('ra9-4').innerHTML = neco.Vzestup.top9.zmena_procenta
        document.getElementById('ra9-5').innerHTML = neco.Vzestup.top9.zmena_cena
        document.getElementById('ra9-6').innerHTML = neco.Vzestup.top9.doporuceni
        document.getElementById('ra9-7').innerHTML = neco.Vzestup.top9.volume
        document.getElementById('ra9-8').innerHTML = neco.Vzestup.top9.zamestnanci
        document.getElementById('ra9-9').innerHTML = neco.Vzestup.top9.sektor

        document.getElementById('ra10-1').innerHTML = neco.Vzestup.top10.symbol
        document.getElementById('ra10-2').innerHTML = neco.Vzestup.top10.nazev
        document.getElementById('ra10-3').innerHTML = neco.Vzestup.top10.cena
        document.getElementById('ra10-4').innerHTML = neco.Vzestup.top10.zmena_procenta
        document.getElementById('ra10-5').innerHTML = neco.Vzestup.top10.zmena_cena
        document.getElementById('ra10-6').innerHTML = neco.Vzestup.top10.doporuceni
        document.getElementById('ra10-7').innerHTML = neco.Vzestup.top10.volume
        document.getElementById('ra10-8').innerHTML = neco.Vzestup.top10.zamestnanci
        document.getElementById('ra10-9').innerHTML = neco.Vzestup.top10.sektor
    }
    function Tabulka_zestup(){
        document.getElementById('rad1-1').innerHTML = neco.Zestup.low1.symbol
        document.getElementById('rad1-2').innerHTML = neco.Zestup.low1.nazev
        document.getElementById('rad1-3').innerHTML = neco.Zestup.low1.cena
        document.getElementById('rad1-4').innerHTML = neco.Zestup.low1.zmena_procenta
        document.getElementById('rad1-5').innerHTML = neco.Zestup.low1.zmena_cena
        document.getElementById('rad1-6').innerHTML = neco.Zestup.low1.doporuceni
        document.getElementById('rad1-7').innerHTML = neco.Zestup.low1.volume
        document.getElementById('rad1-8').innerHTML = neco.Zestup.low1.zamestnanci
        document.getElementById('rad1-9').innerHTML = neco.Zestup.low1.sektor

        document.getElementById('rad2-1').innerHTML = neco.Zestup.low2.symbol
        document.getElementById('rad2-2').innerHTML = neco.Zestup.low2.nazev
        document.getElementById('rad2-3').innerHTML = neco.Zestup.low2.cena
        document.getElementById('rad2-4').innerHTML = neco.Zestup.low2.zmena_procenta
        document.getElementById('rad2-5').innerHTML = neco.Zestup.low2.zmena_cena
        document.getElementById('rad2-6').innerHTML = neco.Zestup.low2.doporuceni
        document.getElementById('rad2-7').innerHTML = neco.Zestup.low2.volume
        document.getElementById('rad2-8').innerHTML = neco.Zestup.low2.zamestnanci
        document.getElementById('rad2-9').innerHTML = neco.Zestup.low2.sektor

        document.getElementById('rad3-1').innerHTML = neco.Zestup.low3.symbol
        document.getElementById('rad3-2').innerHTML = neco.Zestup.low3.nazev
        document.getElementById('rad3-3').innerHTML = neco.Zestup.low3.cena
        document.getElementById('rad3-4').innerHTML = neco.Zestup.low3.zmena_procenta
        document.getElementById('rad3-5').innerHTML = neco.Zestup.low3.zmena_cena
        document.getElementById('rad3-6').innerHTML = neco.Zestup.low3.doporuceni
        document.getElementById('rad3-7').innerHTML = neco.Zestup.low3.volume
        document.getElementById('rad3-8').innerHTML = neco.Zestup.low3.zamestnanci
        document.getElementById('rad3-9').innerHTML = neco.Zestup.low3.sektor

        document.getElementById('rad4-1').innerHTML = neco.Zestup.low4.symbol
        document.getElementById('rad4-2').innerHTML = neco.Zestup.low4.nazev
        document.getElementById('rad4-3').innerHTML = neco.Zestup.low4.cena
        document.getElementById('rad4-4').innerHTML = neco.Zestup.low4.zmena_procenta
        document.getElementById('rad4-5').innerHTML = neco.Zestup.low4.zmena_cena
        document.getElementById('rad4-6').innerHTML = neco.Zestup.low4.doporuceni
        document.getElementById('rad4-7').innerHTML = neco.Zestup.low4.volume
        document.getElementById('rad4-8').innerHTML = neco.Zestup.low4.zamestnanci
        document.getElementById('rad4-9').innerHTML = neco.Zestup.low4.sektor

        document.getElementById('rad5-1').innerHTML = neco.Zestup.low5.symbol
        document.getElementById('rad5-2').innerHTML = neco.Zestup.low5.nazev
        document.getElementById('rad5-3').innerHTML = neco.Zestup.low5.cena
        document.getElementById('rad5-4').innerHTML = neco.Zestup.low5.zmena_procenta
        document.getElementById('rad5-5').innerHTML = neco.Zestup.low5.zmena_cena
        document.getElementById('rad5-6').innerHTML = neco.Zestup.low5.doporuceni
        document.getElementById('rad5-7').innerHTML = neco.Zestup.low5.volume
        document.getElementById('rad5-8').innerHTML = neco.Zestup.low5.zamestnanci
        document.getElementById('rad5-9').innerHTML = neco.Zestup.low5.sektor

        document.getElementById('rad6-1').innerHTML = neco.Zestup.low6.symbol
        document.getElementById('rad6-2').innerHTML = neco.Zestup.low6.nazev
        document.getElementById('rad6-3').innerHTML = neco.Zestup.low6.cena
        document.getElementById('rad6-4').innerHTML = neco.Zestup.low6.zmena_procenta
        document.getElementById('rad6-5').innerHTML = neco.Zestup.low6.zmena_cena
        document.getElementById('rad6-6').innerHTML = neco.Zestup.low6.doporuceni
        document.getElementById('rad6-7').innerHTML = neco.Zestup.low6.volume
        document.getElementById('rad6-8').innerHTML = neco.Zestup.low6.zamestnanci
        document.getElementById('rad6-9').innerHTML = neco.Zestup.low6.sektor

        document.getElementById('rad7-1').innerHTML = neco.Zestup.low7.symbol
        document.getElementById('rad7-2').innerHTML = neco.Zestup.low7.nazev
        document.getElementById('rad7-3').innerHTML = neco.Zestup.low7.cena
        document.getElementById('rad7-4').innerHTML = neco.Zestup.low7.zmena_procenta
        document.getElementById('rad7-5').innerHTML = neco.Zestup.low7.zmena_cena
        document.getElementById('rad7-6').innerHTML = neco.Zestup.low7.doporuceni
        document.getElementById('rad7-7').innerHTML = neco.Zestup.low7.volume
        document.getElementById('rad7-8').innerHTML = neco.Zestup.low7.zamestnanci
        document.getElementById('rad7-9').innerHTML = neco.Zestup.low7.sektor

        document.getElementById('rad8-1').innerHTML = neco.Zestup.low8.symbol
        document.getElementById('rad8-2').innerHTML = neco.Zestup.low8.nazev
        document.getElementById('rad8-3').innerHTML = neco.Zestup.low8.cena
        document.getElementById('rad8-4').innerHTML = neco.Zestup.low8.zmena_procenta
        document.getElementById('rad8-5').innerHTML = neco.Zestup.low8.zmena_cena
        document.getElementById('rad8-6').innerHTML = neco.Zestup.low8.doporuceni
        document.getElementById('rad8-7').innerHTML = neco.Zestup.low8.volume
        document.getElementById('rad8-8').innerHTML = neco.Zestup.low8.zamestnanci
        document.getElementById('rad8-9').innerHTML = neco.Zestup.low8.sektor

        document.getElementById('rad9-1').innerHTML = neco.Zestup.low9.symbol
        document.getElementById('rad9-2').innerHTML = neco.Zestup.low9.nazev
        document.getElementById('rad9-3').innerHTML = neco.Zestup.low9.cena
        document.getElementById('rad9-4').innerHTML = neco.Zestup.low9.zmena_procenta
        document.getElementById('rad9-5').innerHTML = neco.Zestup.low9.zmena_cena
        document.getElementById('rad9-6').innerHTML = neco.Zestup.low9.doporuceni
        document.getElementById('rad9-7').innerHTML = neco.Zestup.low9.volume
        document.getElementById('rad9-8').innerHTML = neco.Zestup.low9.zamestnanci
        document.getElementById('rad9-9').innerHTML = neco.Zestup.low9.sektor

        document.getElementById('rad10-1').innerHTML = neco.Zestup.low10.symbol
        document.getElementById('rad10-2').innerHTML = neco.Zestup.low10.nazev
        document.getElementById('rad10-3').innerHTML = neco.Zestup.low10.cena
        document.getElementById('rad10-4').innerHTML = neco.Zestup.low10.zmena_procenta
        document.getElementById('rad10-5').innerHTML = neco.Zestup.low10.zmena_cena
        document.getElementById('rad10-6').innerHTML = neco.Zestup.low10.doporuceni
        document.getElementById('rad10-7').innerHTML = neco.Zestup.low10.volume
        document.getElementById('rad10-8').innerHTML = neco.Zestup.low10.zamestnanci
        document.getElementById('rad10-9').innerHTML = neco.Zestup.low10.sektor
    }

    function TabulkaR(){
        document.getElementById('r2-1').innerHTML = neco.Realtime.teslaR.label
        document.getElementById('r2-2').innerHTML = neco.Realtime.teslaR.zmena
        document.getElementById('r2-3').innerHTML = neco.Realtime.teslaR.cena
        document.getElementById('r2-4').innerHTML = neco.Realtime.teslaR.volume

        document.getElementById('r1-1').innerHTML = neco.Realtime.microsoftR.label
        document.getElementById('r1-2').innerHTML = neco.Realtime.microsoftR.zmena
        document.getElementById('r1-3').innerHTML = neco.Realtime.microsoftR.cena
        document.getElementById('r1-4').innerHTML = neco.Realtime.microsoftR.volume

        document.getElementById('r3-1').innerHTML = neco.Realtime.zoomR.label
        document.getElementById('r3-2').innerHTML = neco.Realtime.zoomR.zmena
        document.getElementById('r3-3').innerHTML = neco.Realtime.zoomR.cena
        document.getElementById('r3-4').innerHTML = neco.Realtime.zoomR.volume

        document.getElementById('r4-1').innerHTML = neco.Realtime.agcoR.label
        document.getElementById('r4-2').innerHTML = neco.Realtime.agcoR.zmena
        document.getElementById('r4-3').innerHTML = neco.Realtime.agcoR.cena
        document.getElementById('r4-4').innerHTML = neco.Realtime.agcoR.volume

        document.getElementById('r5-1').innerHTML = neco.Realtime.intelR.label
        document.getElementById('r5-2').innerHTML = neco.Realtime.intelR.zmena
        document.getElementById('r5-3').innerHTML = neco.Realtime.intelR.cena
        document.getElementById('r5-4').innerHTML = neco.Realtime.intelR.volume
    }

    function Tesla(){
        LabelsR = neco.Realtime.teslaR.labels
        LabelR = neco.Realtime.teslaR.label
        DataR = neco.Realtime.teslaR.data
        nastavGraf()
    }
    function Microsoft(){
        LabelsR = neco.Realtime.microsoftR.labels
        LabelR = neco.Realtime.microsoftR.label
        DataR = neco.Realtime.microsoftR.data
        nastavGraf()
    }
    function Zoom(){
        LabelsR = neco.Realtime.zoomR.labels
        LabelR = neco.Realtime.zoomR.label
        DataR = neco.Realtime.zoomR.data
        nastavGraf()
    }

     function Intel(){
        LabelsR = neco.Realtime.intelR.labels
        LabelR = neco.Realtime.intelR.label
        DataR = neco.Realtime.intelR.data
        nastavGraf()
    }

     function Agco(){
        LabelsR = neco.Realtime.agcoR.labels
        LabelR = neco.Realtime.agcoR.label
        DataR = neco.Realtime.agcoR.data
        nastavGraf()
    }
    function nastavGraf(){
         var r = document.getElementById('Realtime');
         var myChartR = new Chart(r, {
                type: 'line',
                data: {
            labels: LabelsR,
        datasets: [{
            data: DataR,
            label: LabelR,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        myChartR.update();
    }
    function zestupGrafy() {
         var a = document.getElementById('canvas-okn1');
         var myChart = new Chart(a, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low1.graf,
            label: neco.Zestup.low1.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var b = document.getElementById('canvas-okn2');
         var myChart = new Chart(b, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low2.graf,
            label: neco.Zestup.low2.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var c = document.getElementById('canvas-okn3');
         var myChart = new Chart(c, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low3.graf,
            label: neco.Zestup.low3.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var d = document.getElementById('canvas-okn4');
         var myChart = new Chart(d, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low4.graf,
            label: neco.Zestup.low4.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var e = document.getElementById('canvas-okn5');
         var myChart = new Chart(e, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low5.graf,
            label: neco.Zestup.low5.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var f = document.getElementById('canvas-okn6');
         var myChart = new Chart(f, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low6.graf,
            label: neco.Zestup.low6.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var g = document.getElementById('canvas-okn7');
         var myChart = new Chart(g, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low7.graf,
            label: neco.Zestup.low7.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var h = document.getElementById('canvas-okn8');
         var myChart = new Chart(h, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low8.graf,
            label: neco.Zestup.low8.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var i = document.getElementById('canvas-okn9');
         var myChart = new Chart(i, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low9.graf,
            label: neco.Zestup.low9.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
         var j = document.getElementById('canvas-okn10');
         var myChart = new Chart(j, {
                type: 'line',
                data: {
            labels: neco.Zestup.datum,
         datasets: [{
            data:neco.Zestup.low10.graf,
            label: neco.Zestup.low10.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
    }
    function vzestupGrafy() {
         var a = document.getElementById('canvas-ok1');
         var myChart = new Chart(a, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
         datasets: [{
            data:neco.Vzestup.top1.graf,
            label: neco.Vzestup.top1.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
         }});
        var b = document.getElementById('canvas-ok2');
        var myChart = new Chart(b, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top2.graf,
            label: neco.Vzestup.top2.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var c = document.getElementById('canvas-ok3');
        var myChart = new Chart(c, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top3.graf,
            label: neco.Vzestup.top3.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var d = document.getElementById('canvas-ok4');
        var myChart = new Chart(d, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top4.graf,
            label: neco.Vzestup.top4.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var e = document.getElementById('canvas-ok5');
        var myChart = new Chart(e, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top5.graf,
            label: neco.Vzestup.top5.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var f = document.getElementById('canvas-ok6');
        var myChart = new Chart(f, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top6.graf,
            label: neco.Vzestup.top6.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var g = document.getElementById('canvas-ok7');
        var myChart = new Chart(g, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top7.graf,
            label: neco.Vzestup.top7.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var h = document.getElementById('canvas-ok8');
        var myChart = new Chart(h, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top8.graf,
            label: neco.Vzestup.top8.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var i = document.getElementById('canvas-ok9');
        var myChart = new Chart(i, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top9.graf,
            label: neco.Vzestup.top9.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var j = document.getElementById('canvas-ok10');
        var myChart = new Chart(j, {
                type: 'line',
                data: {
            labels: neco.Vzestup.datum,
        datasets: [{
            data:neco.Vzestup.top10.graf,
            label: neco.Vzestup.top10.nazev,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
    }
    function tabulkaGrafy(){
         var a = document.getElementById('canvas-okno1');
         var myChartR = new Chart(a, {
                type: 'line',
                data: {
            labels: neco.Tabulka.microsoft.datum,
        datasets: [{
            data:neco.Tabulka.microsoft.data,
            label: neco.Tabulka.microsoft.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var b = document.getElementById('canvas-okno2');
         var myChartR = new Chart(b, {
                type: 'line',
                data: {
            labels: neco.Tabulka.zoom.datum,
        datasets: [{
            data:neco.Tabulka.zoom.data,
            label: neco.Tabulka.zoom.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var c = document.getElementById('canvas-okno3');
         var myChartR = new Chart(c, {
                type: 'line',
                data: {
            labels: neco.Tabulka.cisco.datum,
        datasets: [{
            data:neco.Tabulka.cisco.data,
            label: neco.Tabulka.cisco.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var d = document.getElementById('canvas-okno4');
         var myChartR = new Chart(d, {
                type: 'line',
                data: {
            labels: neco.Tabulka.delta.datum,
        datasets: [{
            data:neco.Tabulka.delta.data,
            label: neco.Tabulka.delta.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var e = document.getElementById('canvas-okno5');
         var myChartR = new Chart(e, {
                type: 'line',
                data: {
            labels: neco.Tabulka.honda.datum,
        datasets: [{
            data:neco.Tabulka.honda.data,
            label: neco.Tabulka.honda.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
         var f = document.getElementById('canvas-okno6');
         var myChartR = new Chart(f, {
                type: 'line',
                data: {
            labels: neco.Tabulka.google.datum,
        datasets: [{
            data:neco.Tabulka.google.data,
            label: neco.Tabulka.google.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
    }

    function Clanky(){
       document.getElementById('h3-1').innerHTML = neco.Clanek.nadpis1
       document.getElementById('h3-2').innerHTML = neco.Clanek.nadpis2
       document.getElementById('h3-3').innerHTML = neco.Clanek.nadpis3
       document.getElementById('h3-4').innerHTML = neco.Clanek.nadpis4
       document.getElementById('h3-5').innerHTML = neco.Clanek.nadpis5
       document.getElementById('h3-6').innerHTML = neco.Clanek.nadpis6

       document.getElementById('text1').innerHTML = neco.Clanek.text1
       document.getElementById('text2').innerHTML = neco.Clanek.text2
       document.getElementById('text3').innerHTML = neco.Clanek.text3
       document.getElementById('text4').innerHTML = neco.Clanek.text4
       document.getElementById('text5').innerHTML = neco.Clanek.text5
       document.getElementById('text6').innerHTML = neco.Clanek.text6

       a1 = document.getElementById('odkaz1');
       a1.href = 'https://www.reuters.com/' + neco.Clanek.odkaz1
       a2 = document.getElementById('odkaz2');
       a2.href = 'https://www.reuters.com/' + neco.Clanek.odkaz2
       a3 = document.getElementById('odkaz3');
       a3.href = 'https://www.reuters.com/' + neco.Clanek.odkaz3
       a4 = document.getElementById('odkaz4');
       a4.href = 'https://www.reuters.com/' + neco.Clanek.odkaz4
       a5 = document.getElementById('odkaz5');
       a5.href = 'https://www.reuters.com/' + neco.Clanek.odkaz5
       a6 = document.getElementById('odkaz6');
       a6.href = 'https://www.reuters.com/' + neco.Clanek.odkaz6
    }





