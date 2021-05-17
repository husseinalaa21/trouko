var random_t_ser, sub_r_s;
var serJs, selects, resSer;

var xReq = new XMLHttpRequest();
xReq.open('GET', '../data.json');

xReq.send();

random_t_ser = document.getElementById('random_t_ser')
sub_r_s = document.getElementById('sub_r_s')

// ser
serJs = document.getElementById("serJs")
selects = document.getElementById("selects")
resSer = document.getElementById("resSer")
// ...

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

{ n: "subjects/movies", c: false, x: "افلام و مسلسلات" }]
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
var conaller = []
var robenAre = 0
function savDev(x) {
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
            if (sectionLoad[nCalln].s === selects.value) {
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
                    nCalln ++;
                    serIn()
                })
            }
        } else {
            if (robenAre) clearTimeout(robenAre);
            robenAre = setTimeout(() => {
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
                resSer.append(nmDiv)
            }, 10);
        }
    }
}
selects.addEventListener("change", husDev)
serJs.addEventListener('input', husDev)
function husDev() {
    if (serJs.value.length > 0) {
        if (selects.value === "def") {
            resSer.innerHTML = "<div class='noRes'> يرجى تحديد القسم </div>"
        } else {
            resSer.innerHTML = ""
            savDev(serJs.value)
        }
    } else {
        resSer.innerHTML = ""
    }
}

xReq.onload = function () {
    var xData = JSON.parse(xReq.responseText);
    addNewSubr(xData);
}
function randoPag() {
    var xData = JSON.parse(xReq.responseText);
    var r = Math.floor(Math.random() * xData.length)
    location.href = xData[r]
}

$(document).ready(function () {
    sectionLoad.forEach(a => {
        if (a.c === true) {
            var e = a
            let hrt = e.n.replace(/\//g, "")
            $.getJSON("../jsData/" + hrt + ".json", function (data) {
                var e = a, xcas;
                if (e.z === "sfirst") {
                    xcas = " مواضيع عن "
                } else if (e.z === "sTwo") {
                    xcas = " أسئلة عن "
                }
                if (data.length > 0) {
                    var sfirst = document.getElementById(e.z)
                    let li = document.createElement("div")
                    li.id = "x_" + e.n
                    li.innerHTML = `<li class="li_list" id=` + hrt + `  onclick="hsh(this.id)"> <div id="im` + hrt + `">  <img src="icons/align-left-solid.svg" style="width: 14px;"> </div>` + xcas + e.x + `</li> <ul class="item_list_sub sub" id="s_` + hrt + `" style="display:none;"> </ul>`
                    sfirst.append(li)
                    let isFull = false
                    for (var x = 0; x < data.length; x++) {
                        if (x < 5) {
                            let nam = data[x].replace(e.n, "").replace("https://trouko.com/", "").replace(/\//g, "").replace(/_/g, " ")
                            let li = document.createElement("li")
                            li.innerHTML = '<a href=' + data[x] + '>' + nam + '</a>'
                            document.getElementById('s_' + hrt).append(li)
                        } else {
                            isFull = true
                        }
                    }
                    if (isFull === true) {
                        let li = document.createElement("li")
                        li.innerHTML = '<a href=../sub_s/' + e.s + '/index.html> مشاهدة المزيد </a>'
                        document.getElementById('s_' + hrt).append(li)
                    }
                }
            }).fail(function () {
                // 
            });
        }
    })
})
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
function addNewSubr(xData) {
    var storageD = [],
        strSub = [],
        strQu = [];
    var numCSub = 0,
        numCQu = 0,
        ranPick = 0;
    for (var i = 0; i < xData.length; i++) {
        let e = xData[(xData.length - i) - 1]
        if (e.includes("subjects") === true && numCSub < 9) {
            numCSub++;
            strSub.push(e)
        } else if (e.includes("questions") === true && numCQu < 9) {
            numCQu++;
            strQu.push(e)
        } else if (ranPick < 30) {
            ranPick++;
            storageD.push(e)
        }
    }
    var callSub = 0,
        callQu = 0;
    setit()
    function setit() {
        if (callSub < strSub.length) {
            addNewSubrtPlus(strSub[callSub], document.getElementById("xOne"), "_J_n_Hus_Qu", "_pag_x_242", "i_tfscript.js", "s_sub_t_dTw").then(e => {
                callSub++;
                setit()
            })
        } else if (callQu < strQu.length) {
            addNewSubrtPlus(strQu[callQu], document.getElementById("xTwo"), "_J_n_Hus_Qu", "_pag_s_262", "i_tnfscript.js", "s_sub_t_dTw").then(e => {
                callQu++;
                setit()
            })
        } else {
            var c = { a: "_J_n_Hus_", b: "_pag_n_232", c: "i_fscript.js", d: "s_sub_t_d" },
                cs = 0,
                arr = [];
            while (arr.length < storageD.length) {
                let r = Math.floor(Math.random() * storageD.length);
                if (arr.indexOf(r) === -1) arr.push(r);
            }
            setSug()
            function setSug() {
                if (cs < 9) {
                    addNewSubrtPlus(storageD[arr[cs]], sub_r_s, c.a, c.b, c.c, c.d).then(e => {
                        cs++;
                        setSug()
                    })
                }
            }
            return false
        }
    }
    async function addNewSubrtPlus(m, xz, vz, xxc, psssp, classP) {
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
}