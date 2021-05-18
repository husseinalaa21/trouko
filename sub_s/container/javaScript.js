var main_sub_ad = document.getElementById("main_sub_ad"),
    main_sub_ad_q = document.getElementById("main_sub_ad_q"),
    addSuggSQ = document.getElementById("addSuggSQ"),
    adrs = document.getElementById("adrs");


var xReq = new XMLHttpRequest();
xReq.open('GET', '../../data.json');
xReq.send();

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
        if (cos < 6) {
            cos++
            var x = arr[i]
            addNewSubrt(s[x], addSuggSQ, "_J_n_Hus_Qu", "_pag_n_232", "i_fscript.js", "s_sub_t_dTw")
        }
    }
}
function shoWe(){
    for(var c = 0; c < lisB.length; c++){
        isEle ++;
        let t = document.createElement("div")
        t.className = "itD"
        let canday = lisB[c].replace("https://trouko.com", "").replace(/\//g, "").replace(van[c], "").replace("_", " ")
        t.innerHTML = isEle + `. <a href="` + lisB[c] + `" > ` + canday + `</a>`
        main_sub_ad_q.append(t)
    }
    document.getElementById("isMox").innerHTML = ``
}

xReq.onload = function () {
    async function seeFirst() {
        surc.forEach(a => {
            $.getJSON("../../jsData/" + a + ".json", function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (i < 4) {
                        let c = (data.length - i) - 1
                        addNewSubrt(data[c], main_sub_ad, "_J_n_Hus_Qu", "_pag_x_242", "i_tfscript.js", "s_sub_t_dTw")
                        blackList.push(data[c])
                    }
                    if (i < 7) {
                        isEle ++;
                        let t = document.createElement("div")
                        t.className = "itD"
                        let canday = data[i].replace("https://trouko.com", "").replace(/\//g, "").replace(a, "").replace("_", " ")
                        t.innerHTML = isEle + `. <a href="` + data[i] + `" > ` + canday + `</a>`
                        main_sub_ad_q.append(t)
                    }
                    if(i > 7){
                        isMore = true
                        if(lisB.includes(data[i]) !== true){
                            lisB.push(data[i])
                            van.push(a)
                        }
                    }
                }
            }).fail(function () {
                // 
            });
        })
    }
    seeFirst().then(e=>{
        setTimeout(() => {
            if (isMore === true) {
                var m = document.createElement("div")
                m.className = "isMore"
                m.innerHTML = " أضهار المزيد "
                document.getElementById("isMox").innerHTML = `<div class="isMore" onclick="shoWe()"> أضهار المزيد </div>`
            }
            var neAr = []
            var ed = JSON.parse(xReq.responseText);
            for (var w = 0; w < ed.length; w++) {
                if(blackList.includes(ed[w])){
        
                } else {
                    if (w < 20) {
                        neAr.push(ed[w])
                    }
                }
            }
            ad(neAr)
        }, 1000);
    })
}
function addNewSubrt(m, xz, vz, xxc, psssp, classP) {
    var n = m.replace("https://trouko.com/", "")

    var g = Math.floor(Math.random() * 2000911);

    var li = document.createElement("div");
    li.className = classP;
    li.id = n + vz + g
    li.innerHTML = '<div id="' + n + xxc + '"></div>'
    xz.append(li)

    var pMine = document.getElementById(n + vz + g)

    $.getScript(m + "JavaScript/" + psssp, function (data) {
        var li = document.createElement("div");
        li.innerHTML = "<script id='inf_sc_p'>" + data + "</script>";
        pMine.append(li)
    });
}
var iconT = document.getElementById("uMenuMine_m"),
    iconBarTh = document.getElementsByClassName("icon-bar")[0],
    iconBar = document.getElementsByClassName("icon-bar")[1],
    iconBarT = document.getElementsByClassName("icon-bar")[2],
    isClickMenu = false,
    isAppen = false,
    isWebT= false,
    menLis = document.getElementById("menuLisWeb");

    function shoLiThisPage() {
        document.getElementById("rlsh").innerHTML = `<div class="resLinShar"> <div onclick="copThis()"> <img src="../../../icons/link-solid.svg" class="linSharICon"/> </div> <div class="sharLinContainer" >` +decodeURI(window.location.href) + `</div> </div>`
    }
    function typePage() {
        if(window.location.href.includes("/else/")){
            return " مواضيع "
        } else {
            return " أسئلة "
        }
    }
    var someEncodedString = encodeURI(window.location.href)
    var lisBox = `
    <div class="lisBox" id="mEdNavMenu">
       <div class="maNaLis">
          <div class="mainList">
             <div class="mulist">
                <div class="mulist-title"> القائمة الرئيسية </div>
                <div class="mulistContainer">
                   <a href="/"> الصفحة الرئيسة </a>
                   <a href="../../../container_s_q/about.html">حول </a>
                   <a href="../../../container_s_q/contact.html"> اتصل بنا </a>
                </div>
             </div>
             <div class="mulist">
                <div class="mulist-title"> الاقسام </div>
                <div class="mulistContainer">
                <a href="../../../sub_s/space/">  مواضيع عن الفضاء </a>
                <a href="../../../sub_s/physics/">مواضيع عن الفيزياء </a>
                <a href="../../../sub_s/technology/">مواضيع عن التقنية </a>
                <a href="../../../sub_s/else/"> مواضيع متنوعة </a>
                </div>
             </div>
          </div>
          <div class="endNaMa">
             <div class="socLink">
             <div class="medLis">
                <a class="fasMaenu"
                   href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img
                      src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
                <a class="twiMaenu" href="https://twitter.com/trouko1"> <img
                      src="../../../icons/twitter-m.svg" /> </a>
                <a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" />
                </a>
             </div>
             <div class="conSharLin" ><i class="arrow left"></i> تابعنا على </div>
             </div>
       </div>
    </div>`
    
    var rt = document.getElementsByTagName('BODY')
    iconT.addEventListener("click", e => {
        if (isClickMenu === false) {
            if(isAppen === false){
                menLis.innerHTML = lisBox
                isAppen = true
            }
            iconBarTh.className = "icon-bar bar_a";
            setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 150);
            setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 250);
            isClickMenu = true
            isWebT = true
            rt[0].style.overflow = "hidden"
            document.getElementById("mEdNavMenu").style.height = "100%";
        } else {
            iconBarTh.className = "icon-bar";
            iconBar.className = "icon-bar"
            iconBarT.className = "icon-bar"
            rt[0].style.overflow = "auto"
            document.getElementById("mEdNavMenu").style.height = "0";
            isClickMenu = false
            setTimeout(() => {
                isWebT = false
            }, 1000);
        }
    })
    var prevScrollpos = window.pageYOffset;
    /*var shtPagr = document.getElementById("infDir"),
        nbxc = document.getElementById("titleTs").innerHTML*/
    window.onscroll = function () {
        if(isWebT === false){
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