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

var storageD = [];

function adIndexSugg() {
    var miUrl = document.getElementById("miUrl").innerText + '/',
        xData = JSON.parse(xReq.responseText),
        iBasic = 0,
        iVeSt = [],
        po = new RegExp('https://trouko.com/', 'g'),
        etx = et.replace(/\//g, ""),
        pet = new RegExp(etx, 'g');

    for (var x = 0; x < xData.length; x++) {
        var e = (xData.length - x) - 1
        if (lisSys.includes(xData[e]) !== true && miUrl !== xData[e] && iBasic < 20) {
            iBasic++
            var s = xData[e].replace(po, "").replace(/\//g, "").replace(pet, "").replace(/_/g, " ")
            var l = xData[e];
            var sub = { "linkPage": l, "namePath": s };
            iVeSt.push(sub)
        }
    }
    var cos = 0
    var arr = [];
    while (arr.length < iVeSt.length) {
        var r = Math.floor(Math.random() * iVeSt.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    // Need Fix :|
    for (var i = 0; i < arr.length; i++) {
        if (cos < 4) {
            cos++
            var x = arr[i]
            addSuggTIndex(iVeSt[x].linkPage, iVeSt[x].namePath)
            let src = iVeSt[x].linkPage.replace("https://trouko.com/", "../../../")
            adSugg(src, sub_r_sSugg);
        } else {
            var x = arr[i]
            var sub = { "linkPage": iVeSt[x].linkPage, "namePath": iVeSt[x].namePath };
            storageD.push(sub)
        }
    }
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
                let src = vr.replace("https://trouko.com/", "../../../")
                adSugg(src, sub_r_s);
            }
        })
    } else {
        var didFile = false
        lisSys.forEach(vr => {
            if (vr !== "") {
                didFile = true
            }
        })
        if (didFile === false && storageD.length > 0) {
            var cos = 0;
            for (var x = 0; x < storageD.length; x++) {
                if (cos < 4) {
                    cos++
                    let src = storageD[x].linkPage.replace("https://trouko.com/", "../../../")
                    adSugg(src, sub_r_s);
                }
            }
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

function adSugg(cm, appe) {
    whereHussein ++;
    var n = cm.replace("../../../", "").replace(/\//g, "_"),
        li = document.createElement("div");
    li.className = "s_sub_t_d";
    li.id = n + whereHussein
    appe.append(li)
    adsInH(cm,n + whereHussein)
    callGayes()
}

function adsInH(cm,dorra){
    $.getJSON(cm + "Javascript/i_fscript.js", function (hus) {
        document.getElementById(dorra).innerHTML = `
        <div class="img_p_sugg_p">
        <a href="`+hus[0]+`">
        <img src="`+hus[2]+`" alt="`+hus[1]+`"  class="sub_s_i" style="width:100%" height="auto">
        </a>
        </div>

        <div class="sugg_p_t_bo_23">
        <a class="s_sub_t" href="`+hus[0]+`" >`+hus[1]+`</a>
        <div class="infoPageSuQu"><p>`+hus[3]+`</p><i class="material-icons" style="font-size:16px; color: #393e46;">folder</i></div>
        <div class="p_t_inf"><p>`+hus[4]+`</p><a class="link_t_read_p" href="`+hus[0]+`"> قراءة المزيد </a></div>
        <div class="infoPageSuQuTw"><p>`+hus[5]+`</p><i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i></div>
        </div>`
    })
}