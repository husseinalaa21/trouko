var random_t_ser, sub_r_s;
var serJs, selects, resSer, sesTrouko;

var xReq = new XMLHttpRequest();
xReq.open('GET', '../data.json');

xReq.send();

random_t_ser = document.getElementById('random_t_ser')
sub_r_s = document.getElementById('sub_r_s')

// ser
serJs = document.getElementById("serJs")
selects = document.getElementById("selects")
resSer = document.getElementById("resSer")
sesTrouko = document.getElementById("sesTrouko")
// ...
var whereHussein = 0

function hsh(s) {
    let element = document.getElementById("s_" + s)
    element.style.display = (element.style.display == 'none') ? er(true) : er(false);
    function er(params) {
        if (params === true) {
            element.style.display = 'block'
            document.getElementById("im" + s).innerHTML = `<img src="icons/align-justify-solid.svg" style="width: 14px;" >`
        } else {
            element.style.display = 'none'
            document.getElementById("im" + s).innerHTML = `<img src="icons/align-left-solid.svg" style="width: 14px;">`
        }
    }
}
var sectionHide = ["text_one", "text_two", "text_three", "text_four", "text_five", "text_six"]

var sectionLoad = [
{ n: "subjects/space", s: "space", x: "الفضاء", c: true },
{ n: "questions/questions_space", s: "space", x: "الفضاء", c: true },

{ n: "subjects/technology", s: "technology", x: " التكنلوجيا ", c: true },
{ n: "questions/questions_technology", s: "technology", x: " التكنلوجيا ", c: true },

{ n: "subjects/else", s: "else", x: " متنوعة ", c: true },
{ n: "questions/questions_else", s: "else", x: " متنوعة ", c: true },

{ n: "subjects/physics", s: "physics", x: "الفيزياء", c: true },
{ n: "questions/questions_physics", s: "physics", x: "الفيزياء", c: true },

{ n: "subjects/geography", s: "geography", x: " الجغرافية ", c: true },
{ n: "subjects/sciences", s: "sciences", x: "العلوم", c: true },

{ n: "subjects/movies", x: "افلام و مسلسلات", c: false}]
var alerAdd = []
sectionLoad.forEach(e => {
    if (alerAdd.includes(e.s) === false) {
        alerAdd.push(e.s)
        let op = document.createElement("option")
        op.value = e.s
        op.innerText = e.x
        selects.append(op)
    }
})
var robenAre = 0,
    huAl = false,
    seWww = 0,
    okKey = false
selects.addEventListener("change", e => {
    if (okKey === false) {
        resSer.innerHTML = ""
        okKey = true
        reso()
    }
})
serJs.addEventListener('input', e => {
    if (okKey === false) {
        resSer.innerHTML = ""
        okKey = true
        reso()
    }
})
function reso() {
    if (huAl === false) {
        sesTrouko.style.display = "block"
        husDev()
        okKey = false
    } else {
        if (seWww) clearTimeout(seWww);
        robenAre = setTimeout(() => {
            reso()
        }, 10)
    }
}
async function husDev() {
    huAl = true
    if (serJs.value.length > 0) {
        resSer.innerHTML = ""
        var x = serJs.value
        let spText = x.split(" ");
        if (spText.length === 1) {
            if (spText[0].includes("ال")) {
                let na = spText[0].replace("ال", "")
                spText.push(na)
            } else {
                let na = "ال" + spText[0]
                spText.push(na)
            }
        } else {
            spText.forEach(a => {
                if (a.includes("ال")) {
                    let na = a.replace("ال", "")
                    spText.push(na)
                }
            })
        }
        var nmDiv = document.createElement("div")
        nmDiv.className = "resLis"
        let headTop = document.createElement("div")
        headTop.className = "headTop"
        headTop.innerHTML = `<div class="namSec"> نتائج البحث </div> <div class="namB"></div>`
        nmDiv.append(headTop)
        var catcho = []
        var nCalln = 0
        serIn()
        async function serIn() {
            if (nCalln < sectionLoad.length) {
                if (sectionLoad[nCalln].s === selects.value || selects.value === "hussein") {
                    let nno = sectionLoad[nCalln].n
                    let soWhat = nno.replace(/\//g, "")
                    $.getJSON("../jsData/" + soWhat + ".json", function (data) {
                        for (var o = 0; o < data.length; o++) {
                            let numCach = 0,
                                didCach = false
                            let sese = data[o].replace("https://trouko.com/", "").replace(nno, "").replace(/\//g, "").replace(/_/g, " ")
                            let sw = sese.split(" ");
                            for (var e = 0; e < spText.length; e++) {
                                if (sw.includes(spText[e])) {
                                    didCach = true
                                    numCach++;
                                }
                            }
                            if (didCach === true) {
                                catcho.push({ num: numCach, tit: sw.toString().replace(/,/g, " "), url: data[o] })
                            }
                        }
                        nCalln++;
                        serIn()
                    })
                } else {
                    nCalln++;
                    serIn()
                }
            } else {
                if (catcho.length > 0) {
                    var lisWeb = [], numCall = 0
                    seeReels()
                    function seeReels() {
                        if (numCall < catcho.length) {
                            let heNum = 0, n, u, numCatch;
                            for (var e = 0; e < catcho.length; e++) {
                                if (catcho[e].num > heNum) {
                                    heNum = catcho[e].num
                                    n = catcho[e].tit
                                    u = catcho[e].url
                                    numCatch = e
                                }
                            }
                            catcho[numCatch] = ""
                            lisWeb.push({ n: n, u: u })
                            numCall++;
                            seeReels()
                        } else {
                            lisWeb.forEach(r => {
                                let er = document.createElement("p")
                                er.innerHTML = `<a href ="` + r.u + `" >` + r.n + `</a>`
                                nmDiv.append(er)
                            })
                        }
                    }
                } else {
                    let handel = document.createElement("div")
                    handel.className = "handlx"
                    handel.innerHTML = `<div class="handl" >لا توجد نتائج </div>`
                    nmDiv.append(handel)
                }
                resSer.innerHTML = ""
                resSer.append(nmDiv)
                huAl = false
                sesTrouko.style.display = "none"
            }
        }
    } else {
        resSer.innerHTML = ""
        huAl = false
        sesTrouko.style.display = "none"
    }
}

xReq.onload = function () {
    var xData = JSON.parse(xReq.responseText);
    //addNewSubr(xData);
}

// ADD VALUE TO PROFILE
var counValue = 0
valueWeb()
function valueWeb() {
    if(counValue <= sectionLoad.length && sectionLoad[counValue].c === true){
        var et = sectionLoad[counValue].n
        var ki = new XMLHttpRequest();
        ki.open('GET', '../jsData/' + et.replace(/\//g, "") + '.json');
        ki.send();
        ki.onload = function () {
            adValue(sectionLoad[counValue].s,JSON.parse(ki.responseText),sectionLoad[counValue].n)
            counValue ++;
            valueWeb()
        }
    } else {
        // WHICH IS MEAN DONE!! WHAT NEXT?! REQ ANYTHING ;)
    }
}

function adValue(di,lv,typ) {
    let adrs;
    let clearNam;
    if(typ.includes("subjects")){
        adrs = document.getElementById("web_"+di)
        clearNam = "https://trouko.com/subjects/"+di+"/"
    } else {
        adrs = document.getElementById("weq_"+di)
        clearNam = "https://trouko.com/questions/questions_"+di+"/"
    }
    let numLast = 0;
    let numBasic = 0;

    for(var u =0; u < lv.length ; u++){
        // THE NEWS VALUE
        let lastU = lv[(lv.length - u) - 1]
        if(numLast < 2){
            numLast ++;
            let src = lastU.replace("https://trouko.com/", "../")
            addNewSubrtPlus(src, document.getElementById("sec_"+di))
        }
        // THE FIRST VALUE
        if(numBasic < 4){
            numBasic ++;
            try {
                let nv = document.createElement("div")
                nv.className = "web_index_con_tit"
                nv.innerHTML = `<a href="`+lv[u]+`" >`+lv[u].replace(clearNam,"").replace(/\//g,"").replace(/_/g," ")+`</a>`
                adrs.append(nv)
            } catch {
                // Not Set
            }
        }
    }
}

function addNewSubrtPlus(cm, appe) {
    whereHussein ++;
    var n = cm.replace("../../", "").replace(/\//g, "_"),
        li = document.createElement("div");
    li.className = "s_sub_t_d";
    li.id = n + whereHussein
    appe.append(li)
    reqHussein(cm,n + whereHussein)
}
// END > ADD VALUE TO PROFILE

// RANDom
function randoPag() {
    var xData = JSON.parse(xReq.responseText);
    var r = Math.floor(Math.random() * xData.length)
    location.href = xData[r]
}
// END > RANDom
function random_a() {
    random_t_ser.style.padding = "10px";
    var xData = JSON.parse(xReq.responseText);

    var r = Math.floor(Math.random() * xData.length)
    var el = document.createElement("div")
    var xs = xData[r].replace("https://trouko.com/", "")
    var x;
    sectionLoad.forEach(e => {
        if (xs.includes(e.n)) {
            x = xs.replace(e.n, "").replace(/\//g, "").replace(/_/g, " ")
        }
    })
    el.innerHTML = "   الموضوع المقترح :  " + x + "<a class='r' href='" + xData[r] + "'>" + " [ انقر هنا للقرأه ]" + "</a>";
    return el.innerHTML;
}

// CHECK URL
var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
serJs.value = c
window.history.pushState({}, document.title, "/");
reso()
// END CHECK URL

// IMPORTANT PERSON
function reqHussein(cm,dorra) {
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