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

}



var count_number_p = [];


function random_a(){

    var xData = JSON.parse(xReq.responseText);

    var i;

    for(i=0; i < xData.length; i++){
        if(xData[i].linkPage.includes("/space")){
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
        if(xData[i].linkPage.includes("/space/")){
            addNewSubrm(xData[i].linkPage, xData[i].namePath)
        }
        if(xData[i].linkPage.includes("/questions_space/")){
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