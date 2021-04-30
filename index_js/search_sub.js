var button_search, search_i_page_i, ul_search,
    search_random, random_ser_f,
    random_t_ser, form_search, body, pageSearch,
    header_m_t, pa_p, sub_r_s
    , google_search, se_in_p, cn_google, item_list_sub_empty,
    qususuggcon, sususuggcon;

var xReq = new XMLHttpRequest();
xReq.open('GET', '../data.json');

xReq.send();
item_list_sub_empty = document.getElementById('item_list_sub_empty')
qususuggcon = document.getElementById("qususuggcon")
sususuggcon = document.getElementById("sususuggcon")

random_ser_f = document.getElementById('random_ser_f');
button_search = document.getElementById('button_search');
search_random = document.getElementById('search_random');
search_i_page_i = document.getElementById('search_i_page_i');

random_t_ser = document.getElementById('random_t_ser')
pa_p = document.getElementById('pa_p')
sub_r_s = document.getElementById('sub_r_s')
google_search = document.getElementById("google_search")
se_in_p = document.getElementById("se_in_p")
cn_google = document.getElementById("cn_google")
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

var sectionLoad = [{ n: "subjects/space", s: "space", x: "الفضاء", z: "sfirst" },
{ n: "subjects/physics", s: "physics", x: "الفيزياء", z: "sfirst" },
{ n: "subjects/sciences", s: "sciences", x: "العلوم", z: "sfirst" },
{ n: "subjects/technology", s: "technology", x: " التكنلوجيا ", z: "sfirst" },
{ n: "subjects/geography", s: "geography", x: " الجغرافية ", z: "sfirst" },
{ n: "subjects/else", s: "else", x: " متنوعة ", z: "sfirst" },

{ n: "questions/questions_space", s: "space", x: "الفضاء", z: "sTwo" },
{ n: "questions/questions_physics", s: "physics", x: "الفيزياء", z: "sTwo" },
{ n: "questions/questions_else", s: "else", x: " متنوعة ", z: "sTwo" },
{ n: "questions/questions_technology", s: "technology", x: " التكنلوجيا ", z: "sTwo" }]

xReq.onload = function () {
    cn_google.style.display = "block"
    var xData = JSON.parse(xReq.responseText);
    addNewSubr(xData);
}

$( document ).ready(function() {
    sectionLoad.forEach(a=>{
        var e = a
        let hrt = e.n.replace(/\//g, "")
        $.getJSON("../jsData/" + hrt + ".json", function (data) {
            var e = a,xcas;
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
    })
})
function random_a() {
    random_t_ser.style.padding = "10px";
    var xData = JSON.parse(xReq.responseText);

    var r = Math.floor(Math.random() * xData.length)
    var el = document.createElement("div")
    el.innerHTML = "   الموضوع المقترح :  " + xData[r] + "<a class='r' href='" + xData[r] + "'>" + " [ انقر هنا للقرأه ]" + "</a>";
    return el.innerHTML;
}
function addNewSubr(xData) {
    var storageD = [];
    var numCSub = 0,
        numCQu = 0;
    for (var i = 0; i < xData.length; i++) {
        var e = xData[(xData.length - i) - 1]
        if(e.includes("subjects") === true && numCSub < 10){
            numCSub ++;
            addNewSubrt(e,document.getElementById("xOne"),"_J_n_Hus_Qu","_pag_x_242","i_tfscript.js","s_sub_t_dTw")
        } else if (e.includes("questions") === true && numCQu < 10){
            numCQu ++;
            addNewSubrt(e,document.getElementById("xTwo"),"_J_n_Hus_Qu","_pag_s_262","i_tnfscript.js","s_sub_t_dTw")
        } else {
            storageD.push(e)
        }
    }
    ad(storageD, { a: "_J_n_Hus_", b: "_pag_n_232", c: "i_fscript.js", d: "s_sub_t_d" });
}
function ad(d, c) {
    var cs = 0;
    var arr = [];
    while (arr.length < d.length) {
        var r = Math.floor(Math.random() * d.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for (i = 0; i < arr.length; i++) {
        if(cs < 8){
            cs ++;
            var x = arr[i]
            addNewSubrt(d[x], sub_r_s, c.a, c.b, c.c, c.d)
        }
    }

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