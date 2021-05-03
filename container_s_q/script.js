var someEncodedString = encodeURI(window.location.href)
var zare = document.getElementsByClassName("time_write_this_page_o")
var a = document.createElement("a")
a.className = "sheThPage twitShe"
a.href = 'http://twitter.com/share?text=' + document.getElementById("titleTs").innerText + '&url=' + someEncodedString
a.innerHTML = '<img src="../../../icons/twitter-m.svg" width="13px" height="13px"/>'
if(zare.length === 1){
    zare[0].append(a)
} else {
    zare[1].append(a)
}

var xReq = new XMLHttpRequest();
xReq.open('GET', '../data.js');

function randoPag() {
    var miUrlx = document.getElementById("miUrl")
    var xData = JSON.parse(xReq.responseText);
    async function biOne() {
        let c = Math.floor(Math.random() * xData.length)
        if(c === miUrlx+"/"){
            biOne()
        } else {
            return c
        }
    }
    biOne().then(e=>{
        location.href = xData[e]
    })
}