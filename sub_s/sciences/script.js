var sub_main = document.getElementById('main_sub_ad');
var sub_main_q = document.getElementById('main_sub_ad_q');
var random_t_ser = document.getElementById('random_t_ser');

var addSuggSQ = document.getElementById("addSuggSQ")
var n_ing = document.getElementById("n_ing")

var xReq = new XMLHttpRequest();
xReq.open('GET','../../data.js');

xReq.send();

xReq.onload = function(){

    addNewSubr();
    addNewSubrSU();

}



var count_number_p = [];


function random_a(){

    var xData = JSON.parse(xReq.responseText);

    var i;

    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/sciences")){
            count_number_p.push(i);
            ad_sugg()
        }
    }
    
    function ad_sugg(){
        var r = Math.floor(Math.random() * count_number_p.length)
        var v = count_number_p[r]
        random_t_ser.innerHTML = "   الموضوع المقترح :  " + xData[v].namePage +"<a class='r' href='"+ xData[v].linkPage+"'>"+" [ انقر هنا للقرأه ]"+"</a>";
    }
}

function addNewSubr(){
    var i;

    var xData = JSON.parse(xReq.responseText);

    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/sciences/")){
            addNewSubrm(xData[i].linkPage, xData[i].namePath)
        }
        if(xData[i].linkPage.includes("/questions_sciences/")){
            addNewSubrm_q(xData[i].linkPage, xData[i].namePath)
        }
    }
}

var countNumM = 0;
var countNumq = 0;

function addNewSubrm(m,mm){
    countNumM ++;
    var li = document.createElement("div");
    li.className = "s_sub_t_d_";
    li.innerHTML =  "<p class='number_c'>"+countNumM +"</p>"+ "<p>  &nbsp;" +".&nbsp; <a class='s_sub_t_ite' href='"+m+"'>"+mm+"</a></p>";
    sub_main.append(li)
}

function addNewSubrm_q(m,mm){
    countNumq ++;
    var li = document.createElement("div");
    li.className = "s_sub_t_d_";
    li.innerHTML =  "<p class='number_c'>"+countNumq +"</p>"+ "<p>  &nbsp;" +".&nbsp; <a class='s_sub_t_ite' href='"+m+"'>"+mm+"</a></p>";
    sub_main_q.append(li)
}

var storageDS = []

function addNewSubrSU(){
    n_ing.style.display = "none"

    var i;
    var xData = JSON.parse(xReq.responseText);
    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/sciences" || "/questions_sciences")){
            var adSub = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
           storageDS.push(adSub)
        }
    }
    adSu();
}

function adSu(){
    var arr = [];
    if(storageDS.length < 4){
        while(arr.length < storageDS.length){
        var r = Math.floor(Math.random() * storageDS.length);
        if(arr.indexOf(r) === -1) arr.push(r);
        }
        var i;
        for(i=0; i < arr.length; i++){
            var x = arr[i]
            addSugg(storageDS[x].linkPage,"_J_n_Hus_","_pag_n_232","i_fscript.js","s_sub_t_d")
        }
    } else {
        while(arr.length < 4){
        var r = Math.floor(Math.random() * storageDS.length);
        if(arr.indexOf(r) === -1) arr.push(r);
        }
        var i;
        for(i=0; i < arr.length; i++){
            var x = arr[i]
            addSugg(storageDS[x].linkPage,"_J_n_Hus_","_pag_n_232","i_fscript.js","s_sub_t_d")
        }
    }
}

function addSugg(m,vz,xxc,psssp,classP){
    var n = m.replace("https://www.trouko.co/","")
    
    var g = Math.floor(Math.random() * 2000911); 
    
    var li = document.createElement("div");
    li.className = classP;
    li.id = n+vz+g
    li.innerHTML = '<div id="'+n+xxc+'"></div>'
    addSuggSQ.append(li)
    
    var pMine = document.getElementById(n+vz+g)
    
    $.getScript( m+"JavaScript/"+psssp, function( data) {
       var li = document.createElement("div");
       li.innerHTML = "<script id='inf_sc_p'>"+data+"</script>";
       pMine.append(li)
     });
}