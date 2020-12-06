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
            document.getElementById('IBM-procenta').innerHTML = ProcentaI + '%'
            document.getElementById('Microsoft-procenta').innerHTML = ProcentaM + '%'
            document.getElementById('Apple-procenta').innerHTML = ProcentaA + '%'
            nastavGraf()
            prehled()
            Tydny()
            Mesice()
            Roky()

    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
}
    fetch()
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
        var myChartP = new Chart(p, {
                type: 'line',
                data: {
            labels: MLs,
        datasets: [{
            data: MD,
            label: ML,
            borderColor: "#8e5ea2",
            fill: false
          },{
            data: ID,
            label: IL,
            borderColor: "#3e95cd",
            fill: false
          },{
            data: AD,
            label: AL,
            borderColor: "#c45850",
            fill: false
          }]
        }});
        var myChartV = new Chart(v, {
                type: 'pie',
                data: {
            labels: [ML, AL, IL],
        datasets: [{
            data: [VolumeM, VolumeA, VolumeI],
            label: "Volume",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            borderColor: "#8e5ea2",
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
    }


