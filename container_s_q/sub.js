var index_sugg_p ,nameP ,title_p_index,sub_r_s,sub_r_n,hol_sugg,psp; 

index_sugg_p = document.getElementById("index_sugg_p")
nameP = document.getElementById("title").innerHTML
title_p_index = document.getElementById("title_p_index").innerHTML = nameP;
sub_r_s = document.getElementById("sub_r_s")
sub_r_n = document.getElementById("sub_r_n")
hol_sugg = document.getElementById("hol_sugg")
psp = document.getElementById("psp").innerHTML

var xReq = new XMLHttpRequest();
xReq.open('GET','../../../data.js');

xReq.send();

window.onload = function(){
    adIndexSugg(namePpath)
}

// 

var storageD = [];

function adIndexSugg(n){
    var i;
    var xData = JSON.parse(xReq.responseText);

    if(n.includes(psp)){
        for(i=0; i < xData.length; i++){
            if(xData[i].linkPage.includes(psp)){
                var sub = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
               storageD.push(sub)
            }
        }
    }else {
        hol_sugg.innerHTML= '<div class="no_result"> لا يتوفر مقترحات في الوقت الحالي </div>'
    }
    ad();
}

setTimeout(function(){
    if(index_sugg_p.innerText == ""){
        hol_sugg.innerHTML= '<div class="no_result"> لا يتوفر مقترحات في الوقت الحالي </div>'
    }
},1900)

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
    var g = title_p_index.replace(/ /g,"")
    callf ++;
    if(callf >5){
        return false
    }
    else if(g.includes(n)){
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