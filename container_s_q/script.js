var someEncodedString = encodeURI(window.location.href)
document.getElementById("sheTwi").innerHTML = '<a href="http://twitter.com/share?text=' + document.getElementById("titleTs").innerText + '&url=' + someEncodedString + '" target="_blank" class="sheThPage twitShe"><img src="../../../icons/twitter-m.svg" width="13px" height="13px"/>'

var xReq = new XMLHttpRequest();
xReq.open('GET', '../data.js');

function randoPag() {
    var xData = JSON.parse(xReq.responseText);
    var r = Math.floor(Math.random() * xData.length)
    location.href = xData[r].linkPage
}