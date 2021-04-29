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
        surc.forEach(a => {
            isEle ++;
            let t = document.createElement("div")
            t.className = "itD"
            let canday = lisB[c].replace("https://www.trouko.com", "").replace(/\//g, "").replace(van[c], "").replace("_", " ")
            t.innerHTML = isEle + `. <a href="` + lisB[c] + `" > ` + canday + `</a>`
            main_sub_ad_q.append(t)
        })
    }
    document.getElementById("isMox").innerHTML = ``
}

xReq.onload = function () {
    async function seeFirst() {
        surc.forEach(a => {
            $.getJSON("../../jsData/" + a + ".json", function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (i < 3) {
                        let c = (data.length - i) - 1
                        addNewSubrt(data[c], main_sub_ad, "_J_n_Hus_Qu", "_pag_x_242", "i_tfscript.js", "s_sub_t_dTw")
                        blackList.push(data[c])
                    }
                    if (i < 7) {
                        isEle ++;
                        let t = document.createElement("div")
                        t.className = "itD"
                        let canday = data[i].replace("https://www.trouko.com", "").replace(/\//g, "").replace(a, "").replace("_", " ")
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
    var n = m.replace("https://www.trouko.com/", "")

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