var someEncodedString = encodeURI(window.location.href)
var a = document.createElement("a")
a.className = "sheThPage twitShe"
a.href = 'http://twitter.com/share?text=' + document.getElementById("titleTs").innerText + '&url=' + someEncodedString
a.innerHTML = '<img src="../../../icons/twitter-m.svg" width="13px" height="13px"/>'
document.getElementsByClassName("time_write_this_page_o")[1].append(a)

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