var serJs, selects, resSer,sesTrouko,sideSlider;
// ser
serJs = document.getElementById("serJs")
selects = document.getElementById("selects")
resSer = document.getElementById("resSer")
sesTrouko = document.getElementById("sesTrouko")
sideSlider = document.getElementById("sideSlider")
// ...

// Slider 
var ollStuff = [{n : " الرئيسة " , u : "/"},{n:" الفضاء ",u:"../space/"},{n:" التقنية ",u:"../technology/"},{n:" منوعات ",u:"../else/"},{n:" الفيزياء ",u:"../physics/"},{n:" الجغرافية ",u:"../geography/"},{n:" العلوم ",u:"../sciences/"},{n:" افلام و مسلسلات ",u:"../movies/"}]

ollStuff.forEach(r=>{
   if(r.u.includes(document.getElementById("adrs").innerText)){
       let hussein = document.createElement("p")
       hussein.innerText = r.n
       sideSlider.append(hussein)
   } else {
       let hussein = document.createElement("a")
       hussein.innerText = r.n
       hussein.href = r.u
       sideSlider.append(hussein)
   }
})
// ...
var sectionLoad = [{ n: "subjects/space", s: "space", x: "الفضاء", z: "sfirst", c: true },
{ n: "subjects/physics", s: "physics", x: "الفيزياء", z: "sfirst", c: true },
{ n: "subjects/sciences", s: "sciences", x: "العلوم", z: "sfirst", c: true },
{ n: "subjects/technology", s: "technology", x: " التكنلوجيا ", z: "sfirst", c: true },
{ n: "subjects/geography", s: "geography", x: " الجغرافية ", z: "sfirst", c: true },
{ n: "subjects/else", s: "else", x: " متنوعة ", z: "sfirst", c: true },

{ n: "questions/questions_space", s: "space", x: "الفضاء", z: "sTwo", c: true },
{ n: "questions/questions_physics", s: "physics", x: "الفيزياء", z: "sTwo", c: true },
{ n: "questions/questions_else", s: "else", x: " متنوعة ", z: "sTwo", c: true },
{ n: "questions/questions_technology", s: "technology", x: " التكنلوجيا ", z: "sTwo", c: true },

{ n: "subjects/movies", s : "movies", c: false, x: "افلام و مسلسلات" }]
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
selects.value = document.getElementById("adrs").innerText

var robenAre = 0,
    huAl = false,
    seWww = 0,
    okKey = false
selects.addEventListener("change", e=>{
    if(okKey === false){
        resSer.innerHTML = ""
        okKey = true
        reso()
    }
})
serJs.addEventListener('input', e=>{
    if(okKey === false){
        resSer.innerHTML = ""
        okKey = true
        reso()
    }
})
function reso() {
    if(huAl === false){
        sesTrouko.style.display = "block"
        husDev()
        okKey = false
    } else {
        if (seWww) clearTimeout(seWww);
        robenAre = setTimeout(() => {
            reso()
        },10)
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
                    $.getJSON("../../jsData/" + soWhat + ".json", function (data) {
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