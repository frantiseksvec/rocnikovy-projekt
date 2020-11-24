var endpoint = 'api/data'
$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
            LabelsR = data.Realtime.labels
            LabelR = data.Realtime.label
            DataR = data.Realtime.cena
            LabelsI = data.Mesic.IBMM.labels
            LabelI = data.Mesic.IBMM.label
            DataI = data.Mesic.IBMM.data
            ProcentaI = data.Mesic.IBMM.procenta
            LabelsM = data.Mesic.MicrosoftM.labels
            LabelM = data.Mesic.MicrosoftM.label
            DataM = data.Mesic.MicrosoftM.data
            ProcentaM = data.Mesic.MicrosoftM.procenta
            LabelsA = data.Mesic.AppleM.labels
            LabelA = data.Mesic.AppleM.label
            DataA = data.Mesic.AppleM.data
            ProcentaA = data.Mesic.AppleM.procenta
            document.getElementById('IBM-procenta').innerHTML = ProcentaI + '%'
            document.getElementById('Microsoft-procenta').innerHTML = ProcentaM + '%'
            document.getElementById('Apple-procenta').innerHTML = ProcentaA + '%'
            nastavGraf()
    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})
function nastavGraf(){
     var ibm = document.getElementById('IBM');
     var m = document.getElementById('MSFT');
     var a = document.getElementById('AAPL');
     var p = document.getElementById('prehled');
     var po = document.getElementById('procenta');
     var r = document.getElementById('Realtime');
     var myChart = new Chart(ibm, {
            type: 'line',
            data: {
        labels: LabelsI,
    datasets: [{
        data: DataI,
        label: LabelI,
        borderColor: "#3e95cd",
        fill: false
      }]
    }});
      var myChart = new Chart(m, {
            type: 'line',
            data: {
        labels: LabelsM,
    datasets: [{
        data: DataM,
        label: LabelM,
        borderColor: "#8e5ea2",
        fill: false
      }]
    }});
    var myChart = new Chart(a, {
            type: 'line',
            data: {
        labels: LabelsA,
    datasets: [{
        data: DataA,
        label: LabelA,
        borderColor: "#c45850",
        fill: false
      }]
    }});
    var myChart = new Chart(p, {
            type: 'line',
            data: {
        labels: LabelsM,
    datasets: [{
        data: DataM,
        label: LabelM,
        borderColor: "#8e5ea2",
        fill: false
      },{
        data: DataI,
        label: LabelI,
        borderColor: "#3e95cd",
        fill: false
      },{
        data: DataA,
        label: LabelA,
        borderColor: "#c45850",
        fill: false
      }]
    }});
     var myChart = new Chart(r, {
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