var endpoint = 'api/data'
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
            neco = data
            Real = data.Realtime
            LabelsR = data.Realtime.labels
            LabelR = data.Realtime.label
            DataR = data.Realtime.cena
            ProcentaI = data.Mesic.IBMM.procenta
            ProcentaM = data.Mesic.MicrosoftM.procenta
            ProcentaA = data.Mesic.AppleM.procenta
            ItydenLs = data.Tyden.IBMT.labels
            ItydenL = data.Tyden.IBMT.label
            ItydenD = data.Tyden.IBMT.data
            AtydenLs = data.Tyden.AppleT.labels
            AtydenL = data.Tyden.AppleT.label
            AtydenD = data.Tyden.AppleT.data
            MtydenLs = data.Tyden.MicrosoftT.labels
            MtydenL = data.Tyden.MicrosoftT.label
            MtydenD = data.Tyden.MicrosoftT.data
            VolumeI = data.Mesic.IBMM.volume
            VolumeA = data.Mesic.MicrosoftM.volume
            VolumeM = data.Mesic.AppleM.volume
            document.getElementById('IBM-procenta').innerHTML = ProcentaI + '%'
            document.getElementById('Microsoft-procenta').innerHTML = ProcentaM + '%'
            document.getElementById('Apple-procenta').innerHTML = ProcentaA + '%'
            nastavGraf()
            Tydny()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
    function Tydny(){
         neco.Mesic.MicrosoftM.data = neco.Tyden.MicrosoftT.data
    }
    function Tydny(){
    }
    function nastavGraf(){
         var ibm = document.getElementById('IBM');
         var m = document.getElementById('MSFT');
         var a = document.getElementById('AAPL');
         var p = document.getElementById('prehled');
         var v = document.getElementById('volume');
         var r = document.getElementById('Realtime');
         var myChartI = new Chart(ibm, {
                type: 'line',
                data: {
            labels: neco.Mesic.IBMM.labels,
        datasets: [{
            data: neco.Mesic.IBMM.data,
            label: neco.Mesic.IBMM.label,
            borderColor: "#3e95cd",
            fill: false
          }]
        }});
          var myChartM= new Chart(m, {
                type: 'line',
                data: {
            labels: neco.Mesic.MicrosoftM.labels,
        datasets: [{
            data: neco.Mesic.MicrosoftM.data,
            label: neco.Mesic.MicrosoftM.label,
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
        var myChartA = new Chart(a, {
                type: 'line',
                data: {
            labels: neco.Mesic.AppleM.labels,
        datasets: [{
            data: neco.Mesic.AppleM.data,
            label: neco.Mesic.AppleM.label,
            borderColor: "#c45850",
            fill: false
          }]
        }});
        var myChartP = new Chart(p, {
                type: 'line',
                data: {
            labels:  neco.Mesic.IBMM.labels,
        datasets: [{
            data: neco.Mesic.MicrosoftM.data,
            label: neco.Mesic.MicrosoftM.label,
            borderColor: "#8e5ea2",
            fill: false
          },{
            data: neco.Mesic.IBMM.data,
            label: neco.Mesic.IBMM.label,
            borderColor: "#3e95cd",
            fill: false
          },{
            data: neco.Mesic.AppleM.data,
            label: neco.Mesic.AppleM.label,
            borderColor: "#c45850",
            fill: false
          }]
        }});
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
         var myChartV = new Chart(v, {
                type: 'pie',
                data: {
            labels: [neco.Mesic.MicrosoftM.label, neco.Mesic.AppleM.label, neco.Mesic.IBMM.label],
        datasets: [{
            data: [VolumeM, VolumeA, VolumeI],
            label: "Volume",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            borderColor: "#8e5ea2",
            fill: false
          }]
        }});
    }


