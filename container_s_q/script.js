var xReq = new XMLHttpRequest();
xReq.open('GET','../data.js');

function randoPag(){
    var xData = JSON.parse(xReq.responseText);
    var r = Math.floor(Math.random() * xData.length) 
    location.href = xData[r].linkPage
}