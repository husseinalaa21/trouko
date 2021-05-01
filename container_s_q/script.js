var someEncodedString = encodeURI(window.location.href)
document.getElementById("sheTwi").innerHTML = '<a href="http://twitter.com/share?text=' + document.getElementById("titleTs").innerText + '&url=' + someEncodedString + '" target="_blank" class="sheThPage twitShe"><img src="../../../icons/twitter-m.svg" width="13px" height="13px"/>'

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