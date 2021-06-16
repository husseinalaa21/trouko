var main_sub_ad = document.getElementById("main_sub_ad"),
    main_sub_ad_q = document.getElementById("main_sub_ad_q"),
    addSuggSQ = document.getElementById("addSuggSQ"),
    adrs = document.getElementById("adrs");


var xReq = new XMLHttpRequest();
xReq.open('GET', '../../data.json');
xReq.send();

var containersAll = []
var isFirst = false
var whereHussein = 0
var pMinex = document.getElementById("javaXs")

var surc = ["subjects" + adrs.innerText, "questionsquestions_" + adrs.innerText];
var blackList = []
var lisB = []
var van = []
var isEle = 0
var isMore = false

function ad(s) {
    var cos = 0
    var arr = [];
    while (arr.length < s.length) {
        var r = Math.floor(Math.random() * s.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for (i = 0; i < arr.length; i++) {
        if (cos < 10) {
            cos++
            var x = arr[i]
            let src = s[x].replace("https://trouko.com/","../../")
            addNewSubrt(src, addSuggSQ)
        }
    }
}
function shoWe(){
    for(var c = 0; c < lisB.length; c++){
        isEle ++;
        let t = document.createElement("div")
        t.className = "itD"
        let canday = lisB[c].replace("https://trouko.com", "").replace(/\//g, "").replace(van[c], "").replace(/_/g, " ")
        t.innerHTML = isEle + `. <a href="` + lisB[c] + `" > ` + canday + `</a>`
        main_sub_ad_q.append(t)
    }
    document.getElementById("isMox").innerHTML = ``
}

xReq.onload = function () {
    var isAdFull = false
    surc.forEach(a => {
        $.getJSON("../../jsData/" + a + ".json", function (data) {
            for (var i = 0; i < data.length; i++) {
                if (i < 4) {
                    let c = (data.length - i) - 1
                    let src = data[c].replace("https://trouko.com/","../../")
                    addNewSubrt(src, main_sub_ad)
                    blackList.push(data[c])
                }
                if (i < 7) {
                    isEle ++;
                    let t = document.createElement("div")
                    t.className = "itD"
                    let canday = data[i].replace("https://trouko.com", "").replace(/\//g, "").replace(a, "").replace(/_/g, " ")
                    t.innerHTML = isEle + `. <a href="` + data[i] + `" > ` + canday + `</a>`
                    main_sub_ad_q.append(t)
                }
                if(i > 7){
                    if(lisB.includes(data[i]) !== true){
                        lisB.push(data[i])
                        van.push(a)
                        if(isAdFull === false){
                            isAdFull = true
                            var m = document.createElement("div")
                            m.className = "isMore"
                            m.innerHTML = " أضهار المزيد "
                            document.getElementById("isMox").innerHTML = `<div class="isMore" onclick="shoWe()"> أضهار المزيد </div>`
                        }
                    }
                }
            }
        }).fail(function () {
            // 
        });
    })
    var neAr = []
    var ed = JSON.parse(xReq.responseText);
    for (var w = 0; w < ed.length; w++) {
        if(blackList.includes(ed[w]) === false && w < 20){
            neAr.push(ed[w])
        }
    }
    ad(neAr)
}

function reqHussein() {
    if(containersAll[whereHussein] !== undefined){
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
    }
}

function addNewSubrt(cm,appe) {
    if(isFirst === false){
        containersAll.push({nam : cm, plc : appe})
        isFirst = true
        reqHussein()
    } else {
        containersAll.push({nam : cm, plc : appe})
    }
}
var iconT = document.getElementById("uMenuMine_m"),
    iconBarTh = document.getElementsByClassName("icon-bar")[0],
    iconBar = document.getElementsByClassName("icon-bar")[1],
    iconBarT = document.getElementsByClassName("icon-bar")[2],
    isClickMenu = false,
    isAppen = false,
    isWebT= false,
    menLis = document.getElementById("menuLisWeb");

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
            if(isAppen === false){
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