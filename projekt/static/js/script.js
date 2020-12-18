var endpoint = 'api/data'
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
            prehled()
            Tydny()
            Mesice()
            Roky()
            Texty()
            Tabulka()
            TabulkaR()
            tabulkaGrafy()
            tabulkaKurzy()
//            sloupek()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}
    fetch()
    function Texty(){
        document.getElementById('IBM-procenta').innerHTML = ProcentaI + '%'
        document.getElementById('Microsoft-procenta').innerHTML = ProcentaM + '%'
        document.getElementById('Apple-procenta').innerHTML = ProcentaA + '%'
        document.getElementById('nadpis-okno1').innerHTML = neco.Tabulka.microsoft.label
        document.getElementById('nadpis-okno2').innerHTML = neco.Tabulka.zoom.label
        document.getElementById('nadpis-okno3').innerHTML = neco.Tabulka.cisco.label
        document.getElementById('nadpis-okno4').innerHTML = neco.Tabulka.delta.label
        document.getElementById('nadpis-okno5').innerHTML = neco.Tabulka.honda.label
        document.getElementById('nadpis-okno6').innerHTML = neco.Tabulka.google.label
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

    function Tydny(){
            ILs = neco.Tyden.IBMT.labels
            IL = neco.Tyden.IBMT.label
            ID = neco.Tyden.IBMT.data
            ALs = neco.Tyden.AppleT.labels
            AL =  neco.Tyden.AppleT.label
            AD =  neco.Tyden.AppleT.data
            MLs =  neco.Tyden.MicrosoftT.labels
            ML =  neco.Tyden.MicrosoftT.label
            MD =  neco.Tyden.MicrosoftT.data
            prehled()
    }
    function Mesice(){
            ILs =  neco.Mesic.IBMM.labels
            IL =  neco.Mesic.IBMM.label
            ID =  neco.Mesic.IBMM.data
            ALs =  neco.Mesic.AppleM.labels
            AL =  neco.Mesic.AppleM.label
            AD =  neco.Mesic.AppleM.data
            MLs =  neco.Mesic.MicrosoftM.labels
            ML =  neco.Mesic.MicrosoftM.label
            MD =  neco.Mesic.MicrosoftM.data
            prehled()
    }
    function Roky(){
            ILs =  neco.Rok.IBMR.labels
            IL =  neco.Rok.IBMR.label
            ID =  neco.Rok.IBMR.data
            ALs =  neco.Rok.AppleR.labels
            AL =  neco.Rok.AppleR.label
            AD =  neco.Rok.AppleR.data
            MLs =  neco.Rok.MicrosoftR.labels
            ML =  neco.Rok.MicrosoftR.label
            MD =  neco.Rok.MicrosoftR.data
            prehled()
    }
    function prehled(){
         var ibm = document.getElementById('IBM');
         var m = document.getElementById('MSFT');
         var a = document.getElementById('AAPL');
         var p = document.getElementById('prehled');
         var v = document.getElementById('volume');
         var myChartI = new Chart(ibm, {
                type: 'line',
                data: {
            labels: ILs,
        datasets: [{
            data: ID,
            label: IL,
            borderColor: "#3e95cd",
            fill: false
          }]
        }});
        var myChartM= new Chart(m, {
                type: 'line',
                data: {
            labels: MLs,
        datasets: [{
            data: MD,
            label: ML,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var myChartA = new Chart(a, {
                type: 'line',
                data: {
            labels: ALs,
        datasets: [{
            data: AD,
            label: AL,
            borderColor: "#c45850",
            fill: false
          }]
        }});
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
    function tabulkaKurzy(){
        document.getElementById('rad1-1').innerHTML = neco.Kurzy.EUR.mena
        document.getElementById('rad1-2').innerHTML = neco.Kurzy.EUR.zeme
        document.getElementById('rad1-3').innerHTML = neco.Kurzy.EUR.mnozstvi
        document.getElementById('rad2-4').innerHTML = neco.Kurzy.EUR.kurz
    }





