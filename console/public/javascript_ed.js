var socket = io('http://localhost:3000/');
var dochtml , result_ed,scriptOne,scriptTwo,scriptThree,scripts,urlPage;

result_ed = document.getElementById("result_ed");
dochtml = document.getElementById("docHtml");
urlPage = document.getElementById("urlPage")

// main

var list_t_chose ,space_sb,companye_sb,technology_sb
,fo_sb,economie_sb,else_sb,nameProject,submit_data,path_name,path_r_n,l_p_ch,
space_q,companye_q,technology_q
,fo_q,economie_q,else_q,name_page , name_page2 , name_page3 ,name_page4 ,name_page5 , name_page6,namePage,discription,urlimg,showTTTwo
,sectionTwo_T,sectionOne_T,showTTOne , showTTThree , showTTFour , showTTFive , showTTSix ,sectionThree_T,sectionFour_T,sectionFive_T,
sectionSix_T,urlimg,discription,
quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,
linkOne,linkTwo,linkThree,linkFour,linkFive,sugg_name,addLoad,click_t_ch
,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,lin,time_pu,linEd,pathEd,waiteTFN
,partOne,partTwo,partThree,partFour,pChp,ppttType;

var titleContainerOne ,
titleContainerTwo,
titleContainerThree,
titleContainerFour,
titleContainerFive,
titleContainerSix;

titleContainerOne = document.getElementById("titleContainerOne");
titleContainerTwo = document.getElementById("titleContainerTwo");
titleContainerThree = document.getElementById("titleContainerThree");
titleContainerFour = document.getElementById("titleContainerFour");
titleContainerFive = document.getElementById("titleContainerFive");
titleContainerSix = document.getElementById("titleContainerSix");

var containerOne,
containerTwo,
containerThree,
containerFour,
containerFive,
containerSix;

containerOne = document.getElementById("containerOne");
containerTwo = document.getElementById("containerTwo");
containerThree = document.getElementById("containerThree");
containerFour = document.getElementById("containerFour");
containerFive = document.getElementById("containerFive");
containerSix = document.getElementById("containerSix");

pathEd = document.getElementById("pathEd")
linEd = document.getElementById("linEd")
time_pu = document.getElementById("time_pu")

lin = document.getElementById("lin")

namePage = document.getElementById("namePage")
submit_data = document.getElementById("submit_data")
name_page = document.getElementById("name_page")
name_page2 = document.getElementById("name_page2")
name_page3 = document.getElementById("name_page3")
name_page4 = document.getElementById("name_page4")
name_page5 = document.getElementById("name_page5")
name_page6 = document.getElementById("name_page6")
urlimg = document.getElementById("urlimg")
discription = document.getElementById("discription")

showTTOne = document.getElementById("showTTOne")
showTTTwo = document.getElementById("showTTTwo")
showTTThree = document.getElementById("showTTThree")
showTTFour = document.getElementById("showTTFour")
showTTFive = document.getElementById("showTTFive")
showTTSix = document.getElementById("showTTSix")
sugg_name = document.getElementById("sugg_name")


sectionOne_T= document.getElementById("sectionOne_T")
sectionTwo_T = document.getElementById("sectionTwo_T")
sectionThree_T = document.getElementById("sectionThree_T")
sectionFour_T = document.getElementById("sectionFour_T")
sectionFive_T = document.getElementById("sectionFive_T")
sectionSix_T = document.getElementById("sectionSix_T")
urlimg = document.getElementById("urlimg")

quoOne = document.getElementById("quoOne")
quoTwo = document.getElementById("quoTwo")
quoThree = document.getElementById("quoThree")
quoFour = document.getElementById("quoFour")
quoFive = document.getElementById("quoFive")
quoSix = document.getElementById("quoSix")

quoOnea = document.getElementById("quoOnea")
quoTwoa = document.getElementById("quoTwoa")
quoThreea = document.getElementById("quoThreea")
quoFoura = document.getElementById("quoFoura")
quoFivea = document.getElementById("quoFivea")
quoSixa = document.getElementById("quoSixa")

linkOne = document.getElementById("linkOne")
linkTwo = document.getElementById("linkTwo")
linkThree = document.getElementById("linkThree")
linkFour = document.getElementById("linkFour")
linkFive = document.getElementById("linkFive")
addLoad = document.getElementById("addLoad")
waiteTFN = document.getElementById("waiteTFN")

pChp = document.getElementsByClassName("pChp")
partOne = document.getElementById("partOne");
partTwo = document.getElementById("partTwo");
partThree = document.getElementById("partThree");
partFour = document.getElementById("partFour");
ppttType = document.getElementById("ppttType");

// ************************

window.onload = function (){
  result_ed.innerHTML = dochtml.innerText;
  setTimeout(okadd(),100)
}

function okadd(){

var title = document.getElementById("title");
var title_ed_Page;
title_ed_Page = document.getElementById("title_ed_Page").innerHTML = title.innerHTML;

// s

var urlImgc = document.getElementById("img").src
urlimg.value = urlImgc;

namePage.value = title.innerHTML;

var discription_page = document.getElementById("discription_page");
discription.value = discription_page.innerHTML

var titleContainerOne_ = document.getElementById("titleContainerOne_");
var titleContainerTwo_ = document.getElementById("titleContainerTwo_");
var titleContainerThree_ = document.getElementById("titleContainerThree_");
var titleContainerFour_ = document.getElementById("titleContainerFour_");
var titleContainerFive_ = document.getElementById("titleContainerFive_");
var titleContainerSix_ = document.getElementById("titleContainerSix_");
add(titleContainerOne,titleContainerOne_)
add(titleContainerTwo,titleContainerTwo_)
add(titleContainerThree,titleContainerThree_)
add(titleContainerFour,titleContainerFour_)
add(titleContainerFive,titleContainerFive_)
add(titleContainerSix,titleContainerSix_)


var containerOne_ = document.getElementById("containerOne_");
var containerTwo_ = document.getElementById("containerTwo_");
var containerThree_ = document.getElementById("containerThree_");
var containerFour_ = document.getElementById("containerFour_");
var containerFive_ = document.getElementById("containerFive_");
var containerSix_ = document.getElementById("containerSix_");

add(containerOne,containerOne_)
add(containerTwo,containerTwo_)
add(containerThree,containerThree_)
add(containerFour,containerFour_)
add(containerFive,containerFive_)
add(containerSix,containerSix_)

var lin_k_One = document.getElementById("lin_k_One");
var lin_k_Two = document.getElementById("lin_k_Two");
var lin_k_Three = document.getElementById("lin_k_Three");
var lin_k_Four = document.getElementById("lin_k_Four");
var lin_k_Five = document.getElementById("lin_k_Five");

add(linkOne,lin_k_One)
add(linkTwo,lin_k_Two)
add(linkThree,lin_k_Three)
add(linkFour,lin_k_Four)
add(linkFive,lin_k_Five)

var quoOne_,quoTwo_,quoThree_,quoFour_,quoFive_,quoSix_,quoOnea_,quoTwoa_,quoThreea_,quoFoura_,quoFivea_,quoSixa_;

quoOne_ = document.getElementById("quoOne_")
quoTwo_ = document.getElementById("quoTwo_")
quoThree_ = document.getElementById("quoThree_")
quoFour_ = document.getElementById("quoFour_")
quoFive_ = document.getElementById("quoFive_")
quoSix_ = document.getElementById("quoSix_")

quoOnea_ = document.getElementById("quoOnea_")
quoTwoa_ = document.getElementById("quoTwoa_")
quoThreea_ = document.getElementById("quoThreea_")
quoFoura_ = document.getElementById("quoFoura_")
quoFivea_ = document.getElementById("quoFivea_")
quoSixa_ = document.getElementById("quoSixa_")

var psp = document.getElementById("psp")

add(quoOne,quoOne_)
add(quoOnea,quoOnea_)
add(quoTwo,quoTwo_)
add(quoTwoa,quoTwoa_)
add(quoThree,quoThree_)
add(quoThreea,quoThreea_)
add(quoFour,quoFour_)
add(quoFoura,quoFoura_)
add(quoFive,quoFive_)
add(quoFivea,quoFivea_)
add(quoSix,quoSix_)
add(quoSixa,quoSixa_)

var timeWrite = document.getElementById("timeWrite");
addTime(time_pu,timeWrite)

var lin = document.getElementById("lin")
add(linEd,lin)
add(pathEd,urlPage)
checkData()
function checkData(){
  var t = title.innerHTML
  var testInfoOne = t.split(" ",1);
  if(urlPage.innerHTML.includes(testInfoOne)){
    return true
  } else if (urlsame == ""){
    document.getElementById("wrong_page_info").innerHTML = `<div class="rouls"> تحذير <i class='fas fa-exclamation-triangle' style='font-size:11px'></i>  :   الرجاء التأكد من بيانات الموقع قد يكون هنالك خطء في البيانات  </a> </div>`
    socket.emit("checkInfoAndDataPage")
  }
  else {
    pathEd.style.border = "2px solid #7e1212b6"
    document.getElementById("wrong_page_info").innerHTML = `<div class="rouls"> تحذير <i class='fas fa-exclamation-triangle' style='font-size:11px'></i>  :   الرجاء التأكد من بيانات الموقع قد يكون هنالك خطء في البيانات  </a> </div>`
    socket.emit("checkInfoAndDataPage")
  }
}

var sameUrl = document.getElementById("sameUrl")
var urlsame = document.getElementById("Urlsame");
sameUrl.value = urlsame.innerHTML


}
function addTime(n,m){
  if(m == null){
    return false
  }
  var v = m.innerHTML
  var mm = v.replace(/تاريخ النشر /g,'').replace(/ : /g,'').replace(/  /g,"")
  n.value = mm
}

function add(n,m){
  if(m == null){
    return false
  }
  n.value = m.innerHTML
}

function exitPage(){
  location.href = "/edite"
}

function reloadPageR(){
  location.reload();
}

// *************************

var hold = document.getElementById("holadWait")
var wrongRead = document.getElementById("wrongRead")

setTimeout(function(){
  if(time_pu.value.length == "" || namePage.value.length == "" || pathEd.value.length == "" || discription.value.length == ""|| psp.innerHTML == ""){
    var reloadP = Math.floor(Math.random() * 2000119)
    socket.emit("reloadThisPage", reloadP+"editorPage")
    hold.innerHTML = ""
    setTimeout(function(){
    wrongRead.style.display = "block"
    },100)
  }else if (psp.innerHTML == ""){
    waiteTFN.innerHTML = '<div class="title_page" id="waiteYwaite"> هنالك مشكلة في بيانات الموقع <div>';
    var w = document.getElementById("waiteYwaite")
    w.style.backgroundColor = "#aa3a3a"
    w.style.color = "#d2d3c9"
  } else {
    hold.innerHTML = ""
    document.getElementById("body").style.display = "block"
  }
},700)


showTTOne.addEventListener("click",e=>{
    
    if (sectionOne_T.style.display === "none") {
        sectionOne_T.style.display = "block";
        showTTOne.innerHTML = '<i class="fa fa-align-left"></i> أخفاء قسم الاول '
        showTTOne.style.backgroundColor = "#242526";
        showTTOne.style.color = " #cbcfd49d";
      } else {
        sectionOne_T.style.display = "none";
        showTTOne.innerHTML = '<i class="fa fa-align-left"></i> أضهار قسم الاول '
        showTTOne.style.backgroundColor = "";
        showTTOne.style.color = "";
      }
} )
showTTTwo.addEventListener("click",e=>{
    if (sectionTwo_T.style.display === "none") {
        sectionTwo_T.style.display = "block";
        showTTTwo.innerHTML = '<i class="fa fa-align-left"></i> أخفاء قسم ثاني '
        showTTTwo.style.backgroundColor = "#242526";
        showTTTwo.style.color = " #cbcfd49d";
      } else {
        sectionTwo_T.style.display = "none";
        showTTTwo.innerHTML = '<i class="fa fa-align-left"></i> أضهار قسم ثاني '
        showTTTwo.style.backgroundColor = "";
        showTTTwo.style.color = "";
      }

})
showTTThree.addEventListener("click",e=>{
    if (sectionThree_T.style.display === "none") {
        sectionThree_T.style.display = "block";
        showTTThree.innerHTML = '<i class="fa fa-align-left"></i> أخفاء قسم ثالث '
        showTTThree.style.backgroundColor = "#242526";
        showTTThree.style.color = " #cbcfd49d";
      } else {
        sectionThree_T.style.display = "none";
        showTTThree.innerHTML = '<i class="fa fa-align-left"></i> أضهار قسم ثالث '
        showTTThree.style.backgroundColor = "";
        showTTThree.style.color = "";
      }

})
showTTFour.addEventListener("click",e=>{
    if (sectionFour_T.style.display === "none") {
        sectionFour_T.style.display = "block";
        showTTFour.innerHTML = '<i class="fa fa-align-left"></i> أخفاء قسم رابع '
        showTTFour.style.backgroundColor = "#242526";
        showTTFour.style.color = " #cbcfd49d";
      } else {
        sectionFour_T.style.display = "none";
        showTTFour.innerHTML = '<i class="fa fa-align-left"></i> أضهار قسم رابع '
        showTTFour.style.backgroundColor = "";
        showTTFour.style.color = "";
      }
})
showTTFive.addEventListener("click",e=>{
    
  if (sectionFive_T.style.display === "none") {
    sectionFive_T.style.display = "block";
    showTTFive.innerHTML = '<i class="fa fa-align-left"></i> أخفاء قسم خامس '
    showTTFive.style.backgroundColor = "#242526";
    showTTFive.style.color = " #cbcfd49d";
  } else {
    sectionFive_T.style.display = "none";
    showTTFive.innerHTML = '<i class="fa fa-align-left"></i> أضهار قسم خامس '
    showTTFive.style.backgroundColor = "";
    showTTFive.style.color = "";
  }
})
showTTSix.addEventListener("click",e=>{
    
  if (sectionSix_T.style.display === "none") {
    sectionSix_T.style.display = "block";
    showTTSix.style.backgroundColor = "#242526";
    showTTSix.style.color = " #cbcfd49d";
    showTTSix.innerHTML = '<i class="fa fa-align-left"></i> أخفاء قسم سادس '
  } else {
    sectionSix_T.style.display = "none";
    showTTSix.innerHTML = '<i class="fa fa-align-left"></i> أضهار قسم سادس '
    showTTSix.style.backgroundColor = "";
    showTTSix.style.color = "";
  }
})
var pptt = "typeTwo";
var colorpptt = " #0e221b";
var backgroundpptt = "#88bdb0";
var borderpptt = "1px solid #0e221b";
partTwo.style.color = "#edf2f6";
partTwo.style.background = "#12437eb6";

function choneTypePage(t){
  if(t == partOne){
    var i;
    for (i = 0; i < pChp.length; i++) {
      pChp[i].style.backgroundColor = " #dfdfe2";
      pChp[i].style.color = "  #393e46";
    }
    t.style.color = "#edf2f6";
    t.style.background = "#12437eb6";
    pptt = "typeOne";
    ppttType.innerHTML = "تم التحديد بلا أعلانات"
    ppttType.style.color = colorpptt
    ppttType.style.backgroundColor = backgroundpptt
    ppttType.style.border = borderpptt
  }
  if(t == partTwo){
    var i;
    for (i = 0; i < pChp.length; i++) {
      pChp[i].style.backgroundColor = " #dfdfe2";
      pChp[i].style.color = "  #393e46";
    }
    t.style.color = "#edf2f6";
    t.style.background = "#12437eb6";
    pptt = "typeTwo";
    ppttType.innerHTML = "تم التحديد أعلان"
    ppttType.style.color = colorpptt
    ppttType.style.backgroundColor = backgroundpptt
    ppttType.style.border = borderpptt
  }
  if(t == partThree){
    var i;
    for (i = 0; i < pChp.length; i++) {
      pChp[i].style.backgroundColor = " #dfdfe2";
      pChp[i].style.color = "  #393e46";
    }
    t.style.color = "#edf2f6";
    t.style.background = "#12437eb6";
    pptt = "typeThree";
    ppttType.innerHTML = "تم التحديد أعلانين"
    ppttType.style.color = colorpptt
    ppttType.style.backgroundColor = backgroundpptt
    ppttType.style.border = borderpptt
  }
  if(t == partFour){
    var i;
    for (i = 0; i < pChp.length; i++) {
      pChp[i].style.backgroundColor = " #dfdfe2";
      pChp[i].style.color = "  #393e46";
    }
    t.style.color = "#edf2f6";
    t.style.background = "#12437eb6";
    pptt = "typeFour";
    ppttType.innerHTML = "تم التحديد ثلاث أعلانات"
    ppttType.style.color = colorpptt
    ppttType.style.backgroundColor = backgroundpptt
    ppttType.style.border = borderpptt
  }
}


socket.on("okReload", e=>{
  location.reload();
})

socket.on("okReloadPro", e=>{
  waiteTFN.innerHTML = '<div class="title_page" id="waiteYwaite"> هنالك مشكلة في بيانات الموقع <div>';
  var w = document.getElementById("waiteYwaite")
  w.style.backgroundColor = "#aa3a3a"
  w.style.color = "#d2d3c9"
})

submit_data.addEventListener("click", e=>{
  if(time_pu.value.length == "" || namePage.value.length == "" || pathEd.value.length == "" || discription.value.length == ""){
    e.preventDefault()
    waiteTFN.innerHTML = '<div class="title_page" id="waiteYwaite"> هنالك مشكلة في بيانات الموقع <div>';
    addLoad.innerHTML = "هنالك مشكلة في بيانات الموقع";
    var w = document.getElementById("waiteYwaite")
    w.style.backgroundColor = "#aa3a3a"
    w.style.color = "#d2d3c9"
    return false;
  }
  e.preventDefault()
  socket.emit("updateData",{pptt: pptt,time_pu :time_pu.value,pathEd :pathEd.value,namePage : namePage.value, urlimg: urlimg.value, discription: discription.value,linEd:linEd.value
  ,titleContainerOne:titleContainerOne.value,titleContainerTwo :titleContainerTwo.value,titleContainerThree:titleContainerThree.value,titleContainerFour:titleContainerFour.value,titleContainerFive:titleContainerFive.value,titleContainerSix:titleContainerSix.value
  ,containerOne:containerOne.value,containerTwo:containerTwo.value,containerThree:containerThree.value,containerFour:containerFour.value,containerFive:containerFive.value,containerSix: containerSix.value
  ,linkOne:linkOne.value,linkTwo:linkTwo.value,linkThree:linkThree.value,linkFour:linkFour.value,linkFive:linkFive.value
  ,quoOne : quoOne.value , quoTwo:quoTwo.value ,quoThree:quoThree.value,quoFour :quoFour.value, quoFive:quoFive.value,quoSix:quoSix.value,quoOnea : quoOnea.value ,quoTwoa : quoTwoa.value, quoThreea : quoThreea.value , quoFoura : quoFoura.value , quoFivea : quoFivea.value , quoSixa : quoSixa.value,sameUrl:sameUrl.value,psp: psp.innerHTML});
})

socket.on("okUpdateData",e=>{
  addLoad.innerHTML = "%100"
  location.href = "updateDone?titleid="+e.title+"&path="+e.path;
})