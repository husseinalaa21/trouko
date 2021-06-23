var index_sugg_p, title_p_index, sub_r_s, hol_sugg, psp
    , sub_r_sSugg, index_sugg_pT, hol_suggT;

index_sugg_p = document.getElementById("index_sugg_p")
// FIX*
index_sugg_pT = document.getElementById("index_sugg_pT")
title_p_index = document.getElementById("titleTs").innerText
sub_r_s = document.getElementById("sub_r_s")
hol_sugg = document.getElementById("hol_sugg")
hol_suggT = document.getElementById("hol_suggT")
psp = document.getElementById("psp").innerHTML

sub_r_sSugg = document.getElementById("sub_r_sSugg")
var et = document.getElementById("psp").innerText

var myDataAlone = [],
    timeTakeing = 0,
    whereHussein = 0,
    isDoneReq = false,
    isTakeng = false;


var isWeFindFirst = false,
    isWeFindSec = false,
    isWeFindIndex = false;

var lisSys = []
var lisHtm = ['lin_k_One', 'lin_k_Two', 'lin_k_Three', 'lin_k_Four', 'lin_k_Five']

window.onload = function () {
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

    var docMain = new XMLHttpRequest();
    docMain.open('GET', '../../../jsData/' + et.replace(/\//g, "") + '.json');
    docMain.send();
    docMain.onload = function () {
        cdLink()
        adIndexSugg()
    }

    //
    function adIndexSugg() {
        var miUrl = document.getElementById("miUrl").innerText + '/',
            xData = JSON.parse(docMain.responseText),
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
        var arr = [],
            nFirst = 0,
            nSec = 0;
        while (arr.length < iVeSt.length) {
            var r = Math.floor(Math.random() * iVeSt.length);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        // Need Fix :|
        var didFile = false;
        lisSys.forEach(vr => {
            if (vr !== "") {
                didFile = true
            }
        })
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                var x = arr[i],
                    sub = { "linkPage": iVeSt[x].linkPage.replace("https://trouko.com/", "../../../") };
                if (i < 4) {
                    addSuggTIndex(iVeSt[x].linkPage, iVeSt[x].namePath)
                    weFindIndex()
                }
                if (didFile === false) {
                    // mean add to > sugg - first
                    if (nFirst < 4) {
                        // add to > sugg - first (And) add to > sugg - seconed
                        nFirst++;
                        adSugg(iVeSt[x].linkPage.replace("https://trouko.com/", "../../../"), sub_r_s);
                        weFindFirst(true)
                    } else if (nSec < 4) {
                        nSec++;
                        adSugg(iVeSt[x].linkPage.replace("https://trouko.com/", "../../../"), sub_r_sSugg);
                        weFindSec(true)
                    }
                } else {
                    // mean add to > sugg - seconed
                    if (nSec < 4) {
                        nSec++;
                        adSugg(iVeSt[x].linkPage.replace("https://trouko.com/", "../../../"), sub_r_sSugg);
                        weFindSec(true)
                    }
                }

                // CHECK ADDS
                if (arr.length - 1 === i) {
                    if (isWeFindFirst === false) {
                        weFindFirst(false)
                    }
                    if (isWeFindSec === false) {
                        weFindSec(false)
                    }
                }
            }
        } else {
            if (isWeFindFirst === false) {
                weFindFirst(false)
            }
            if (isWeFindSec === false) {
                weFindSec(false)
            }
        }
    }

    function addSuggTIndex(l, n) {
        var g = title_p_index.replace(/ /g, "")
        if (g.includes(n)) {
            return false
        }
        var lit, li;
        li = document.createElement("p");
        li.className = "linShort"
        li.innerHTML = "<a class='sugg_i_li' href='" + l + "'>" + n + "</a><a href='" + l + "' class='icoLinShort'><img src='../../../icons/chevron-left-solid.svg'  style='width:10px;'></a>";
        lit = document.createElement("p");
        lit.className = "linShort"
        lit.innerHTML = "<a class='sugg_i_li' href='" + l + "'>" + n + "</a><a href='" + l + "' class='icoLinShort'><img src='../../../icons/chevron-left-solid.svg'  style='width:10px;'></a>";
        index_sugg_p.appendChild(li)
        // FIX*
        index_sugg_pT.appendChild(lit)
    }

    function cdLink(x) {
        lisSys.forEach(vr => {
            if (vr !== "") {
                let src = vr.replace("https://trouko.com/", "../../../")
                adSugg(src, sub_r_s);
                weFindFirst(true)
            }
        })
    }
    //.

    function weFindIndex() {
        if (isWeFindIndex === false) {
            isWeFindIndex = true
            document.getElementById("suggContainerMed").style.display = "block"
            // FIX*
            document.getElementById("suggContainerWeb").style.display = "block"
        }
    }
    function weFindFirst(x) {
        if (isWeFindFirst === false) {
            isWeFindFirst = true
            if (x === true) {
                document.getElementById("suggest_Main").innerText = ""
            } else {
                console.log("************************")
                document.getElementById("suggest_Main").innerHTML = "no"
            }
        }
    }
    function weFindSec(x) {
        if (isWeFindSec === false) {
            isWeFindSec = true
            if (x === true) {
                document.getElementById("suggest_sugg").innerText = ""
            } else {
                console.log("************************")
                document.getElementById("suggest_sugg").innerHTML = "no"
            }
        }
    }

    function adSugg(cm, appe) {
        whereHussein++;
        var n = cm.replace("../../../", "").replace(/\//g, "_"),
            li = document.createElement("div");
        li.className = "s_sub_t_d";
        li.id = n + whereHussein
        li.innerHTML = `<div class="loaderSection">
        <div class="l_top"></div>
        <div class="l_down"><div class="l_title"></div><div class="l_dis"></div><div class="l_end"><div></div><div></div></div></div>
        </div>`
        appe.append(li)
        myDataAlone.push({ cm, id: n + whereHussein })
        reqHuss()
    }

    function reqHuss() {
        if (isTakeng === false) {
            if (myDataAlone.length > timeTakeing) {
                isTakeng = true
                adsInH(myDataAlone[timeTakeing].cm, myDataAlone[timeTakeing].id)
            } else {
                isDoneReq = true
            }
        } else {
            if (isDoneReq === true) {
                isDoneReq = false
                adsInH(myDataAlone[timeTakeing].cm, myDataAlone[timeTakeing].id)
            }
        }
    }
    function adsInH(cm, dorra) {
        var xReq = new XMLHttpRequest();
        xReq.open('GET', cm + "Javascript/i_fscript.js");
        xReq.send();
        xReq.onload = function () {
            var hus = JSON.parse(xReq.responseText)
            document.getElementById(dorra).innerHTML = /*`
            <div class="img_p_sugg_p">
            <a href="`+ hus[0] + `">
            <img src="`+ hus[2] + `" alt="` + hus[1] + `"  class="sub_s_i" style="width:100%" height="auto">
            </a>
            </div>*/
            `
            <div class="sugg_p_t_bo_23">
            <a class="s_sub_t" href="`+ hus[0] + `" >` + hus[1] + `</a>
            <div class="infoPageSuQu"><p>`+ hus[3] + `</p><i class="material-icons" style="font-size:16px; color: #393e46;">folder</i></div>
            <div class="p_t_inf"><p>`+ hus[4] + `</p><a class="link_t_read_p" href="` + hus[0] + `"> قراءة المزيد </a></div>
            <div class="infoPageSuQuTw"><p>`+ hus[5] + `</p><i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i></div>
            </div>`
            timeTakeing++;
            isTakeng = false
            reqHuss()
        }
    }
}

// script.js

function randoPag() {
    var xReq = new XMLHttpRequest();
    xReq.open('GET', '../data.js');
    var miUrlx = document.getElementById("miUrl")
    var xData = JSON.parse(xReq.responseText);
    async function biOne() {
        let c = Math.floor(Math.random() * xData.length)
        if (c === miUrlx + "/") {
            biOne()
        } else {
            return c
        }
    }
    biOne().then(e => {
        location.href = xData[e]
    })
}

// index_main.js

var iconT = document.getElementById("uMenuMine_m"),
    iconBarTh = document.getElementsByClassName("icon-bar")[0],
    iconBar = document.getElementsByClassName("icon-bar")[1],
    iconBarT = document.getElementsByClassName("icon-bar")[2],
    click_material = document.getElementById("click_material"),
    isClickMenu = false,
    isAppen = false,
    isWebT = false,
    menLis = document.getElementById("menuLisWeb"),
    photo_page_im = document.getElementById("photo_page_im"),
    change = 'open';

click_material.addEventListener("click", e => {
    if (change === 'open') {
        photo_page_im.style.maxHeight = "100%";
        img.style.maxWidth = "650px"
        click_material.innerHTML = '<img src="../../../icons/compress-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'close'
    } if (change === 'close') {
        photo_page_im.style.maxHeight = "";
        img.style.maxWidth = ""
        click_material.innerHTML = '<img src="../../../icons/expand-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'open'
    }
})
var lisBox = `
<div class="newBody" id="covBody" onclick="iloveHusseinAlaa()"></div>
<div id="mySidenav" class="sidenav">
<div class="sliteLIst">
  <a href="/">الرئيسة</a>
  <a href="../../../container_s_q/about.html">عنا</a>
  <div class="sectionIns">
    <div class="headerIns" onclick="seIns('containerListOne')">
      <p>الاقسام</p>
      <p><span class="arrow" id="erSAre"><span></span><span></span></span></p>
    </div>
    <div class="containerIns" id="containerListOne" style="display : none;">
        <div class="containerStaff">
        <a href="https://trouko.com/sub_s/space/"> الفضاء </a>
        <a href="https://trouko.com/sub_s/else/"> منوعات </a>
        <a href="https://trouko.com/sub_s/technology/"> تكنلوجيا </a>
        <a href="https://trouko.com/sub_s/movies/"> افلام </a>
        <a href="https://trouko.com/sub_s/physics/"> فيزياء </a>
       </div>
    </div>
  </div>
  <a href="`+ document.getElementById("Urlsame").innerText + `"> مقالات مشابهة </a>
  <div class="secSearch">
    <form role="search" method="get" class="search-form" action="https://trouko.com/" id="grootIsTree">
    <input type="search" class="search-field" placeholder="ابحث عن شيء …" name="c">
    <buttom class="serXf" onclick="imGroot()"> <img src="../../../index_style/search-solid.svg" width="14px" height="14px" /> </buttom>
</form>
</div>
<div class="socMedia"> 
<a class="fasMaenu"
 href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img
    src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
<a class="twiMaenu" href="https://twitter.com/trouko1"> <img
    src="../../../icons/twitter-m.svg" /> </a>
<a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" />
</a> </div>
</div>
</div>`
function imGroot() {
    document.getElementById("grootIsTree").submit();
}
function iloveHusseinAlaa() {
    iconBarTh.className = "icon-bar";
    iconBar.className = "icon-bar"
    iconBarT.className = "icon-bar"
    document.getElementById("covBody").style.width = "0";
    document.getElementById("mySidenav").style.width = "0";
    isClickMenu = false
    isWebT = false
}
function seIns(z) {
    let element = document.getElementById(z)
    element.style.display = (element.style.display == 'none') ? er(true) : er(false);
    function er(params) {
        if (params === true) {
            element.style.display = 'block'
            document.getElementById("erSAre").className = "arrow active"
        } else {
            element.style.display = 'none'
            document.getElementById("erSAre").className = "arrow"
        }
    }
}
var rt = document.getElementsByTagName('BODY')
iconT.addEventListener("click", e => {
    if (isClickMenu === false) {
        if (isAppen === false) {
            menLis.innerHTML = lisBox
            isAppen = true
        }
        isClickMenu = true
        isWebT = true
        iconBarTh.className = "icon-bar bar_a";
        setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 150);
        setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 250);
        document.getElementById("covBody").style.width = "100%";
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.maxWidth = "500px";
    } else {
        iloveHusseinAlaa()
    }
})
var prevScrollpos = window.pageYOffset;
/*var shtPagr = document.getElementById("infDir"),
    nbxc = document.getElementById("titleTs").innerHTML*/
window.onscroll = function () {
    if (isWebT === false) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || 53 > currentScrollPos) {
            document.getElementById("navMean").style.top = "0";
        } else {
            document.getElementById("navMean").style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
    }
    /*
    if(window.scrollY > 170){
      shtPagr.innerHTML = '<div class="titPage" ><p> عنوان المقالة : '+nbxc+' </p></div>'
    } else {
      shtPagr.innerHTML = ""
    }*/
}