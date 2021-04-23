var index_sugg_p, nameP, title_p_index, sub_r_s, sub_r_n, hol_sugg, psp
    , sub_r_sSugg, sub_r_nSugg, index_sugg_pT, hol_suggT;

index_sugg_p = document.getElementById("index_sugg_p")
index_sugg_pT = document.getElementById("index_sugg_pT")
nameP = document.getElementById("title").innerHTML
title_p_index = document.getElementById("title_p_index").innerHTML = nameP;
sub_r_s = document.getElementById("sub_r_s")
sub_r_n = document.getElementById("sub_r_n")
hol_sugg = document.getElementById("hol_sugg")
hol_suggT = document.getElementById("hol_suggT")
psp = document.getElementById("psp").innerHTML

sub_r_nSugg = document.getElementById("sub_r_nSugg")
sub_r_sSugg = document.getElementById("sub_r_sSugg")

var xReq = new XMLHttpRequest();
xReq.open('GET', '../../../data.js');

xReq.send();

window.onload = function () {
    adIndexSugg(title_p_index)
}

// 

var storageD = [];

function adIndexSugg() {
    var i;
    var xData = JSON.parse(xReq.responseText);
    for (i = 0; i < xData.length; i++) {
        if (xData[i].linkPage.includes(psp)) {
            var s = xData[i].namePath;
            var l = xData[i].linkPage;

            if (s.includes(title_p_index)) {
                l = ""
                s = ""
            }
            var sub = { "linkPage": l, "namePath": s };
            storageD.push(sub)
        }
    }
    ad();
}
setTimeout(function () {
    if (index_sugg_p.innerText === "" || index_sugg_pT.innerText === "") {
        hol_sugg.innerHTML = '<div class="no_result"> لا يتوفر مقترحات في الوقت الحالي </div>'
        hol_suggT.innerHTML = '<div class="no_result"> لا يتوفر مقترحات في الوقت الحالي </div>'
    }
}, 3000)

function ad() {
    var arr = [];
    while (arr.length < storageD.length) {
        var r = Math.floor(Math.random() * storageD.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for (i = 0; i < arr.length; i++) {
        var x = arr[i]
        addSuggTIndex(storageD[x].linkPage, storageD[x].namePath)
        addSugg(storageD[x].linkPage, "_J_n_Hus_S", "_pag_x_242", "i_tfscript.js", sub_r_sSugg, "s_sub_t_dTw");
        sub_r_nSugg.style.display = "none"
    }
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
    setTimeout(function () {
        hol_sugg.innerHTML = ''
        hol_suggT.innerHTML = ''
    }, 170)
    setTimeout(function () {
        index_sugg_p.append(li)
        index_sugg_pT.append(lit)
    }, 200)
}


//.
if (addSugg_vrOne === "" && addSugg_vrTwo === "" && addSugg_vrThree === "" && addSugg_vrFour === "" && addSugg_vrFive === "") {
    sub_r_n.style.display = "block"
} else {
    adSugg(addSugg_vrOne, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
    adSugg(addSugg_vrTwo, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
    adSugg(addSugg_vrThree, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
    adSugg(addSugg_vrFour, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
    adSugg(addSugg_vrFive, "_J_n_Hus_", "_pag_n_232", "i_fscript.js", sub_r_s, "s_sub_t_d");
}


function addSugg(m, xxID, ccID, iiID, appe, classP) {
    if (m === null || m === "") {
        return false
    }
    var n = m.replace("https://www.trouko.com/", "").replace("https://trouko.com/", "")
    var g = Math.floor(Math.random() * 2000911);
    var li = document.createElement("div");
    li.className = classP;
    li.id = n + xxID + g
    li.innerHTML = '<div id="' + n + ccID + '"></div>'
    appe.append(li)
    var pMine = document.getElementById(n + xxID + g)
    $.getScript(m + "JavaScript/" + iiID, function (data) {
        var li = document.createElement("div");
        li.innerHTML = "<script id='inf_sc_p'>" + data + "</script>";
        pMine.append(li)
    });
}
function adSugg(m, xxID, ccID, iiID, appe, classP) {
    if (m === null || m === "") {
        return false
    }
    var n = m.replace("https://www.trouko.com/", "").replace("https://trouko.com/", "")
    var g = Math.floor(Math.random() * 2000911);
    var li = document.createElement("div");
    li.className = classP;
    li.id = n + xxID + g
    li.innerHTML = '<div id="' + n + ccID + '"></div>'
    appe.append(li)
    var pMine = document.getElementById(n + xxID + g)
    $.getScript(m + "JavaScript/" + iiID, function (data) {
        var li = document.createElement("div");
        li.innerHTML = "<script id='inf_sc_p'>" + data + "</script>";
        console.log(pMine.innerText)
        pMine.append(li)
        if (pMine.innerText.length > 0){
            sub_r_n.style.display = "none"
        }
    });
}