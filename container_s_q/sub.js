var index_sugg_p, nameP, title_p_index, sub_r_s, hol_sugg, psp
    , sub_r_sSugg, sub_r_nSugg, sub_r_nLink, index_sugg_pT, hol_suggT;

index_sugg_p = document.getElementById("index_sugg_p")
index_sugg_pT = document.getElementById("index_sugg_pT")
nameP = document.getElementById("title").innerHTML
title_p_index = document.getElementById("title_p_index").innerHTML = nameP;
sub_r_s = document.getElementById("sub_r_s")
hol_sugg = document.getElementById("hol_sugg")
hol_suggT = document.getElementById("hol_suggT")
psp = document.getElementById("psp").innerHTML

sub_r_nSugg = document.getElementById("sub_r_nSugg")
sub_r_sSugg = document.getElementById("sub_r_sSugg")
sub_r_nLink = document.getElementById("sub_r_nLink")
var et = document.getElementById("psp").innerText
var pMinex = document.getElementById("javaAx")

var containersAll = []
var isFirst = false
var whereHussein = 0


var lisSys = []
var lisHtm = ['lin_k_One', 'lin_k_Two', 'lin_k_Three', 'lin_k_Four', 'lin_k_Five']
for (var t = 0; t < lisHtm.length; t++) {
    try {
        let vla = document.getElementById(lisHtm[t]).innerText.replace("https://www.trouko.com", "https://trouko.com")
        // REPLACE OLD DOMAIN
        let val = vla.replace("https://trouko.co/", "https://trouko.com/").replace("https://www.trouko.co/", "https://trouko.com/")
        lisSys.push(val)
    } catch {
        console.log("we feal!")
    }
}

var xReq = new XMLHttpRequest();
xReq.open('GET', '../../../jsData/' + et.replace(/\//g, "") + '.json');

xReq.send();

xReq.onload = function () {
    adIndexSugg(title_p_index)
}
cdLink(true)

//

function ad(s, t) {
    var cos = 0
    var arr = [];
    while (arr.length < s.length) {
        var r = Math.floor(Math.random() * s.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    if (t === false) {
        for (i = 0; i < arr.length; i++) {
            if (cos < 4) {
                cos++
                var x = arr[i]
                addSuggTIndex(s[x].linkPage, s[x].namePath)
                let src = s[x].linkPage.replace("https://trouko.com/","../../../")
                adSugg(src, sub_r_sSugg);
            }
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            if (cos < 4) {
                cos++
                var x = arr[i]
                let src = s[x].linkPage.replace("https://trouko.com/","../../../")
                adSugg(src, sub_r_s);
            }
        }
    }
}

var storageD = [];
var iWeSt = []
function adIndexSugg() {
    var miUrl = document.getElementById("miUrl").innerText + '/',
        xData = JSON.parse(xReq.responseText),
        iBasic = 0, iWe = 0,
        iVe = 0,
        iVeSt = [],
        po = new RegExp('https://trouko.com/', 'g'),
        etx = et.replace(/\//g, ""),
        pet = new RegExp(etx, 'g');

    for (var x = 0; x < xData.length; x++) {
        var e = (xData.length - x) - 1
        if (lisSys.includes(xData[e]) !== true && miUrl !== xData[e]) {
            if (iBasic < 8) {
                iBasic++
                var s = xData[e].replace(po, "").replace(/\//g, "").replace(pet, "").replace(/_/g, " ")
                var l = xData[e];
                var sub = { "linkPage": l, "namePath": s };
                storageD.push(sub)
            } else if (iVe < 16) {
                iVe++
                var s = xData[e].replace(po, "").replace(/\//g, "").replace(pet, "").replace(/_/g, " ")
                var l = xData[e];
                var sub = { "linkPage": l, "namePath": s };
                iVeSt.push(sub)
            } else {
                if (iWe < 8) {
                    iWe++
                    var s = xData[e].replace(po, "").replace(/\//g, "").replace(pet, "").replace(/_/g, " ")
                    var l = xData[e];
                    var sub = { "linkPage": l, "namePath": s };
                    iWeSt.push(sub)
                }
            }
        }
    }
    iVeSt.forEach(e => {
        if (iBasic < 8) {
            iBasic++
            var s = e.namePath;
            var l = e.linkPage;
            var sub = { "linkPage": l, "namePath": s };
            storageD.push(sub)
        } else {
            if (iWe < 8) {
                var s = e.namePath;
                var l = e.linkPage;
                var sub = { "linkPage": l, "namePath": s };
                iWeSt.push(sub)
            }
        }
    })
    ad(storageD, false);
    cdLink(false)
}

var callf = 0;

function addSuggTIndex(l, n) {
    var g = title_p_index.replace(/ /g, "")
    callf++;
    if (callf > 5) {
        return false
    }
    else if (g.includes(n)) {
        return false
    }
    var lit, li;
    li = document.createElement("p");
    li.className = "linShort"
    li.innerHTML = "<a class='sugg_i_li' href='" + l + "'>" + n + "</a><a href='" + l + "' class='icoLinShort'><img src='../../../icons/chevron-left-solid.svg'  style='width:10px;'></a>";
    lit = document.createElement("p");
    lit.className = "linShort"
    lit.innerHTML = "<a class='sugg_i_li' href='" + l + "'>" + n + "</a><a href='" + l + "' class='icoLinShort'><img src='../../../icons/chevron-left-solid.svg'  style='width:10px;'></a>";
    index_sugg_p.append(li)
    index_sugg_pT.append(lit)
}


//.

function cdLink(x) {
    if (x === true) {
        lisSys.forEach(vr => {
            if (vr !== "") {
                let src = vr.replace("https://trouko.com/","../../../")
                adSugg(src,sub_r_s);
            }
        })
    } else {
        var didFile = false
        lisSys.forEach(vr => {
            if (vr !== "") {
                didFile = true
            }
        })
        if (didFile === false) {
            ad(iWeSt, true)
        }
    }
}
var isCallHim = false
function callGayes() {
    if (isCallHim === false) {
        isCallHim = true
        document.getElementById("suggContainerMed").style.display = "block"
        document.getElementById("suggContainerWeb").style.display = "block"
        // Suggesst in buttom
        sub_r_nSugg.style.display = "none"
        sub_r_nLink.style.display = "none"
    }
}

function reqHussein() {
    var cm = containersAll[whereHussein].nam
    var appe = containersAll[whereHussein].plc

    var n = cm.replace("../../../", "").replace(/\//g,"_"),
        li = document.createElement("div"),
        ew = Math.floor(Math.random() * 1000) + 10,
        we = Math.floor(Math.random() * 1000) + 6;
    li.className = "s_sub_t_d";
    li.id =we+ n + ew
    appe.append(li)
    document.getElementById("whereHu").innerText = we+ n + ew

    var lic = document.createElement("script");
    lic.src = cm + "Javascript/i_fscript.js"
    pMinex.append(lic)
    whereHussein ++;
    callGayes()
}
function adSugg(cm,appe) {
    if(isFirst === false){
        containersAll.push({nam : cm, plc : appe})
        reqHussein()
        isFirst = true
    } else {
        containersAll.push({nam : cm, plc : appe})
    }
}