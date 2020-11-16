var button_search , search_i_page_i , ul_search , 
search_random, random_ser_f, item_list_sub_space,
item_list_sub_spy,
item_list_sub_technology ,
random_t_ser, form_search,body,pageSearch ,
header_m_t,pa_p,sub_r_s,
item_list_sub_space_q,item_list_sub_empty_q,item_list_sub_technology_q
,google_search,se_in_p,cn_google,item_list_sub_empty,
qususuggcon,sususuggcon;

var xReq = new XMLHttpRequest();
xReq.open('GET','../data.js');

xReq.send();
item_list_sub_empty = document.getElementById('item_list_sub_empty')
qususuggcon = document.getElementById("qususuggcon")
sususuggcon = document.getElementById("sususuggcon")

item_list_sub_space_q = document.getElementById('item_list_sub_space_q');
item_list_sub_empty_q = document.getElementById("item_list_sub_empty_q");
item_list_sub_technology_q = document.getElementById("item_list_sub_technology_q")

random_ser_f = document.getElementById('random_ser_f');
button_search = document.getElementById('button_search');
search_random = document.getElementById('search_random');
search_i_page_i = document.getElementById('search_i_page_i');
item_list_sub_space = document.getElementById('item_list_sub_space')
item_list_sub_technology =document.getElementById('item_list_sub_technology');
item_list_sub_spy = document.getElementById('item_list_sub_spy');
random_t_ser = document.getElementById('random_t_ser')
pa_p = document.getElementById('pa_p')
sub_r_s = document.getElementById('sub_r_s')
google_search = document.getElementById("google_search")
se_in_p = document.getElementById("se_in_p")
cn_google = document.getElementById("cn_google")

xReq.onload = function(){
    adGs();
    addNewSubr();
    addNewSubrQU();
    addNewSubrSU();
    addNewSub("/else/",item_list_sub_empty,"",'text_six');
    addNewSub("/questions_space/",item_list_sub_space_q,"",'text_aone');
    addNewSub("/questions_else/",item_list_sub_empty_q,"",'text_afive');
    addNewSub("/questions_technology/",item_list_sub_technology_q,"",'text_afour');
    addNewSub("/space/",item_list_sub_space,"space",'text_one');
    addNewSub("/technology/",item_list_sub_technology,"",'text_four');
}
function adGs(){
    cn_google.style.display = "block";
}
function random_a(){
    random_t_ser.style.paddingTop =  "20px";
    var xData = JSON.parse(xReq.responseText);

    var r = Math.floor(Math.random() * xData.length) 
    var el = document.createElement("div")
    el.innerHTML = "   الموضوع المقترح :  " + xData[r].namePath +"<a class='r' href='"+ xData[r].linkPage+"'>"+" [ انقر هنا للقرأه ]"+"</a>";
    return el.innerHTML;
}

function addNewSub(nameSearch,urlAdd,urlLink,hiElement){
    var i;
    var callFunction = 0;
    var xData = JSON.parse(xReq.responseText);
    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes(nameSearch)){
            var linkpage = xData[i].linkPage,
            namePage = xData[i].namePath;
            createElement(linkpage,namePage)
        }
    }
    function createElement(l,n) {
        callFunction ++;
        if(callFunction > 5){
        return false
       }
        if(callFunction < 15)
        var li = document.createElement("li");
        li.innerHTML = "<a href='"+ l+"'>"+n+"</a>";
        urlAdd.append(li)
        var h = document.getElementById(hiElement).style.display = "none";
       }
}
var storageD = [];
var storageDQ = [];
var storageDS = [];
function addNewSubr(){
    var i;
    var xData = JSON.parse(xReq.responseText);
    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/space/")){
            var adSub = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageD.push(adSub)
        }
        if(xData[i].linkPage.includes("/else/")){
            var adSub = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageD.push(adSub)
        }
        if(xData[i].linkPage.includes("/questions_space/")){
            var adSub3 = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageD.push(adSub3)
        }
        if(xData[i].linkPage.includes("/questions_sciences/")){
            var adSub3 = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageD.push(adSub3)
        }
        if(xData[i].linkPage.includes("/questions_technology/")){
            var adSub3 = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageD.push(adSub3)
        }
        if(xData[i].linkPage.includes("/economie/")){
            var adSub4 = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageD.push(adSub4)
        }
    }
    ad();
}

function addNewSubrQU(){
    var i;
    var xData = JSON.parse(xReq.responseText);
    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/questions/")){
            var adSub = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageDQ.push(adSub)
        }
    }
    adQu();
}

function addNewSubrSU(){
    var i;
    var xData = JSON.parse(xReq.responseText);
    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/subjects/")){
            var adSub = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageDS.push(adSub)
        }
    }
    adSu();
}

function ad(){
    var arr = [];
    while(arr.length < 6){
    var r = Math.floor(Math.random() * storageD.length);
    if(arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for(i=0; i < arr.length; i++){
        var x = arr[i]
        addNewSubrt(storageD[x].linkPage,sub_r_s,"_J_n_Hus_","_pag_n_232","i_fscript.js","s_sub_t_d")
    }
    
}

function adQu(){
    var arr = [];
    while(arr.length < 6){
    var r = Math.floor(Math.random() * storageDQ.length);
    if(arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for(i=0; i < arr.length; i++){
        var x = arr[i]
        addNewSubrt(storageDQ[x].linkPage,qususuggcon,"_J_n_Hus_Qu","_pag_x_242","i_tfscript.js","s_sub_t_dTw")
    }
    
}

function adSu(){
    var arr = [];
    while(arr.length < 6){
    var r = Math.floor(Math.random() * storageDS.length);
    if(arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for(i=0; i < arr.length; i++){
        var x = arr[i]
        addNewSubrt(storageDS[x].linkPage,sususuggcon,"_J_n_Hus_Qu","_pag_s_262","i_tnfscript.js","s_sub_t_d")
    }
}

function addNewSubrt(m,xz,vz,xxc,psssp,classP){
    var n = m.replace("https://www.trouko.co/","")
    
    var g = Math.floor(Math.random() * 2000911); 
    
    var li = document.createElement("div");
    li.className = classP;
    li.id = n+vz+g
    li.innerHTML = '<div id="'+n+xxc+'"></div>'
    xz.append(li)
    
    var pMine = document.getElementById(n+vz+g)
    
    $.getScript( m+"JavaScript/"+psssp, function( data) {
       var li = document.createElement("div");
       li.innerHTML = "<script id='inf_sc_p'>"+data+"</script>";
       pMine.append(li)
     });
}