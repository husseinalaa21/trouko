var xReq = new XMLHttpRequest();
xReq.open('GET','../data.js');

function randoPag(){
    var xData = JSON.parse(xReq.responseText);
    var r = Math.floor(Math.random() * xData.length) 
    location.href = xData[r].linkPage
}

var smalFont = document.getElementsByClassName("t_t_small")[0]
var medFont = document.getElementsByClassName("t_t_med")[0]
var largFont = document.getElementsByClassName("t_t_larg")[0]

// elements
var p = document.querySelectorAll(".ad_i_subject_p p")
var pDis = document.querySelectorAll(".ad_continer p")[0]
var titleDis = document.getElementsByClassName("ad_intro_in_p_h")[0]
var titleContainer = document.getElementsByClassName("title__ad_subject_p")

smalFont.addEventListener("click",e=>{
    titleDis.style.fontSize = "19px"
    pDis.style.fontSize = "16px"
    for(var n = 0; n < titleContainer.length; n++){
        titleContainer[n].style.fontSize = "19px"
    }

    for(var i = 0; i < p.length; i++){
        p[i].style.fontSize = "16px"
    }
})

medFont.addEventListener("click",e=>{
    titleDis.style.fontSize = ""
    pDis.style.fontSize = ""
    for(var n = 0; n < titleContainer.length; n++){
        titleContainer[n].style.fontSize = ""
    }

    for(var i = 0; i < p.length; i++){
        p[i].style.fontSize = ""
    }
})

largFont.addEventListener("click",e=>{
    titleDis.style.fontSize = "29px"
    pDis.style.fontSize = "25px"
    for(var n = 0; n < titleContainer.length; n++){
        titleContainer[n].style.fontSize = "29px"
    }

    for(var i = 0; i < p.length; i++){
        p[i].style.fontSize = "25px"
    }
})

function changeFont(m){
    if(m == "def"){
        titleDis.style.fontSize = ""
        pDis.style.fontSize = ""
        for(var n = 0; n < titleContainer.length; n++){
            titleContainer[n].style.fontSize = ""
        }
    
        for(var i = 0; i < p.length; i++){
            p[i].style.fontSize = ""
        }
    } else if (m == "smal"){
        titleDis.style.fontSize = "19px"
        pDis.style.fontSize = "16px"
        for(var n = 0; n < titleContainer.length; n++){
            titleContainer[n].style.fontSize = "19px"
        }
    
        for(var i = 0; i < p.length; i++){
            p[i].style.fontSize = "16px"
        }

    } else if(m == "larg"){
        titleDis.style.fontSize = "29px"
        pDis.style.fontSize = "25px"
        for(var n = 0; n < titleContainer.length; n++){
            titleContainer[n].style.fontSize = "29px"
        }
    
        for(var i = 0; i < p.length; i++){
            p[i].style.fontSize = "25px"
        }
    }
}