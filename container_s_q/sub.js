var index_sugg_p ,nameP ,title_p_index,sub_r_s,sub_r_n,hol_sugg; 

index_sugg_p = document.getElementById("index_sugg_p")
nameP = document.getElementById("title").innerHTML
title_p_index = document.getElementById("title_p_index").innerHTML = nameP;
sub_r_s = document.getElementById("sub_r_s")
sub_r_n = document.getElementById("sub_r_n")
hol_sugg = document.getElementById("hol_sugg")

var xReq = new XMLHttpRequest();
xReq.open('GET','../../../data.js');

xReq.send();

window.onload = function(){
    adIndexSugg(namePpath)
    adIndexSuggT(namePpath)

    setTimeout(function (){
        if(resultOne == "false" && resultTwo == "false"){
            hol_sugg.innerHTML= '<div class="no_result"> لا يتوفر مقرحات في الوقت الحالي </div>'
        }}, 100)

}

// 
var resultOne = "true";
var resultTwo = "true";
var storageD = [];

function adIndexSugg(n){
    var i;
    var xData = JSON.parse(xReq.responseText);

    if(n.includes("/subjects/food_fruits_vegetables/")){
        for(i=0; i < xData.length; i++){
            if(xData[i].linkPage.includes("/subjects/food_fruits_vegetables/")){
                var subOne = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
               storageD.push(subOne)
            }
        }
    }

    if(n.includes("/subjects/space/")){
        for(i=0; i < xData.length; i++){
            if(xData[i].linkPage.includes("/subjects/space/")){
                var subTwo = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
               storageD.push(subTwo)
            }
        }
    } else{
        resultOne = "false"
    }
    ad();
}

function adIndexSuggT(n){
    var i;
    var xData = JSON.parse(xReq.responseText);

    if(n.includes("/subjects/company/")){
        for(i=0; i < xData.length; i++){
            if(xData[i].linkPage.includes("/company/")){
                var subThree = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
               storageD.push(subThree)
            }
        }
    }

    if(n.includes("/subjects/else/")){
        for(i=0; i < xData.length; i++){
            if(xData[i].linkPage.includes("/subjects/space/")){
                var subFour = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
               storageD.push(subFour)
            }
        }
    }

    if(n.includes("/subjects/technology/")){
        for(i=0; i < xData.length; i++){
            if(xData[i].linkPage.includes("/subjects/space/")){
                var subFive = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
               storageD.push(subFive)
            }
        }
    }else{
        return resultTwo = "false"
    }
    ad();
}


function ad(){
    var arr = [];
    while(arr.length < storageD.length){
    var r = Math.floor(Math.random() * storageD.length);
    if(arr.indexOf(r) === -1) arr.push(r);
    }
    var i;
    for(i=0; i < arr.length; i++){
        var x = arr[i]
        addSuggTIndex(storageD[x].linkPage,storageD[x].namePath)
    }
    
}

var callf = 0;

function addSuggTIndex(l,n){
    callf ++;
    if(callf >5){
        return false
    }
    var g = nameP.replace(" ","")
    if(g.includes(n)){
        return false
    }
    var li = document.createElement("p");
    li.innerHTML = "<a class='sugg_i_li' href='"+ l+"'>"+n+"</a>";
    setTimeout(function(){hol_sugg.innerHTML= ''},170)
    setTimeout(function(){index_sugg_p.append(li)},200)
}


//.

addSugg(addSugg_vrOne);
addSugg(addSugg_vrTwo);
addSugg(addSugg_vrThree);
addSugg(addSugg_vrFour);
addSugg(addSugg_vrFive);



function addSugg(m){
    if(m == null || m == ""){
        return false
    }
    sub_r_n.style.display = "none"
     var n = m.replace("https://www.trouko.co/","")
     var g = Math.floor(Math.random() * 2000911); 
     var li = document.createElement("div");
     li.className = "s_sub_t_d";
     li.id = n +"_J_n_Hus_"+ g
     li.innerHTML = '<div id="'+n+'_pag_n_232"></div>'
     sub_r_s.append(li)
     var pMine = document.getElementById(n+"_J_n_Hus_"+g)
    $.getScript( m+"JavaScript/i_fscript.js", function( data) {
    var li = document.createElement("div");
    li.innerHTML = "<script id='inf_sc_p'>"+data+"</script>";
    pMine.append(li)
  });
}