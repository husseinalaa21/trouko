var socket = io('http://localhost:3000/');

var list_t_chose ,space_sb,spy_sb,technology_sb
,g_sb,sc_sb,else_sb,nameProject,submit_data,path_name,path_r_n,l_p_ch,
space_q,spy_q,technology_q
,sc_q,economie_q,else_q,name_page , name_page2 , name_page3 ,name_page4 ,name_page5 , name_page6,namePage,discription,urlimg,showTTTwo
,sectionTwo_T,sectionOne_T,showTTOne , showTTThree , showTTFour , showTTFive , showTTSix ,sectionThree_T,sectionFour_T,sectionFive_T,
sectionSix_T,urlimg,discription,
quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,
linkOne,linkTwo,linkThree,linkFour,linkFive,sugg_name,addLoad,click_t_ch
,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,lin,check_name_p,check_name_pTH,sameUrl
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

partOne = document.getElementById("partOne");
partTwo = document.getElementById("partTwo");
partThree = document.getElementById("partThree");
partFour = document.getElementById("partFour");
ppttType = document.getElementById("ppttType");

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

list_t_chose = document.getElementById("list_t_chose");
space_sb = document.getElementById("space_sb")
spy_sb =document.getElementById("spy_sb")
technology_sb = document.getElementById("technology_sb")
g_sb = document.getElementById("g_sb")
sc_sb = document.getElementById("sc_sb")
else_sb = document.getElementById("else_sb")

lin = document.getElementById("lin")
space_q= document.getElementById("space_q")
spy_q =document.getElementById("spy_q")
technology_q = document.getElementById("technology_q")
sc_q = document.getElementById("sc_q")
else_q = document.getElementById("else_q")

check_name_p = document.getElementById("check_name_p")
check_name_pTH = document.getElementById("check_name_pTH")

namePage = document.getElementById("namePage")
nameProject = document.getElementById("nameProject")
submit_data = document.getElementById("submit_data")
path_name = document.getElementById("path_name")
path_r_n = document.getElementById("path_r_n")
l_p_ch = document.getElementsByClassName("l_p_ch")
pChp = document.getElementsByClassName("pChp")
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
click_t_ch = document.getElementById("click_t_ch")

socket.on("repCheckAC",e=>{
  check_name_p.innerHTML = e
  check_name_pTH.innerHTML = e

  check_name_p.style.backgroundColor = "#a0c1b8";
  check_name_pTH.style.backgroundColor = "#a0c1b8";
  check_name_p.style.border = "1px solid #709fb0";
  check_name_pTH.style.border = "1px solid #709fb0";
  check_name_p.style.color = "#0d7377";
  check_name_pTH.style.color = "#0d7377";
  check_name_p.style.padding = "8px";
  check_name_pTH.style.padding = "8px";
})

socket.on("repCheckWAR",e=>{
  check_name_p.innerHTML = e
  check_name_pTH.innerHTML = e

  check_name_p.style.backgroundColor = "#e6d5b8";
  check_name_pTH.style.backgroundColor = "#e6d5b8";
  check_name_p.style.border = "1px solid #ac4b1c";
  check_name_pTH.style.border = "1px solid #ac4b1c";
  check_name_p.style.color = "#ac4b1c";
  check_name_pTH.style.color = "#ac4b1c";
  check_name_p.style.padding = "8px";
  check_name_pTH.style.padding = "8px";
  
  
})

socket.on("repCheckRE",e=>{
  check_name_p.innerHTML = e
  check_name_pTH.innerHTML = e

  check_name_p.style.backgroundColor = "#e97171";
  check_name_pTH.style.backgroundColor = "#e97171";
  check_name_p.style.border = "1px solid #cd0a0a";
  check_name_pTH.style.border = "1px solid #cd0a0a";
  check_name_p.style.color = "#931a25";
  check_name_pTH.style.color = "#931a25";
  check_name_p.style.padding = "8px";
  check_name_pTH.style.padding = "8px";
})

$('#namePage').keyup(function(e) {
    var t =  namePage.value;

    if (t.length > 10){
            var title = t.slice(0, 10);
            sugg_name.innerHTML = '..' +title  ;
            name_page.innerHTML = '..' +title  ;
            name_page2.innerHTML = '..' +title  ;
            name_page3.innerHTML ='..' +title  ;
            name_page4.innerHTML ='..' +title  ;
            name_page5.innerHTML = '..' +title  ;
            name_page6.innerHTML = '..' +title  ;
    } else {
        sugg_name.innerHTML = '"'+t+'"'
        name_page.innerHTML = '"'+t+'"'
        name_page2.innerHTML = '"'+t+'"'
        name_page3.innerHTML = '"'+t+'"'
        name_page4.innerHTML = '"'+t+'"'
        name_page5.innerHTML = '"'+t+'"'
        name_page6.innerHTML = '"'+t+'"'

    }

    var tt = t.replace(/ /g,"_")
    nameProject.value = tt
    socket.emit("checkThat",{nameProject: nameProject.value,path_r_n : path_r_n.value})
});

var pathCh;
var checkCallBack;
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

function chooseeP(p){
    if(p == space_sb){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "./subjects/space/";
        lin.value = " المواضيع / الفضاء";
        sameUrl = "https://www.trouko.com/sub_s/space/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#12437eb6";
    }
    if(p == spy_sb){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "./subjects/physics/";
        lin.value = " المواضيع / الفيزياء";
        sameUrl = "https://www.trouko.com/sub_s/physics/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#12437eb6";
    }
    if(p == technology_sb){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/technology/";
        lin.value = " المواضيع / تكنلوجيا";
        sameUrl = "https://www.trouko.com/sub_s/technology/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#12437eb6";
    }
    if(p == g_sb){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/geography/";
        lin.value = " المواضيع / الجغرافية";
        sameUrl = "https://www.trouko.com/sub_s/geography/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#12437eb6";
    }
    if(p == sc_sb){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/sciences/";
        lin.value = " المواضيع / العلوم  ";
        sameUrl = "https://www.trouko.com/sub_s/sciences/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#12437eb6";
    }
    if(p == else_sb){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/else/";
        lin.value = " المواضيع / متنوعة  ";
        sameUrl = "https://www.trouko.com/sub_s/else/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#12437eb6";
    }

    // q


    if(p == space_q){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_space/";
        lin.value = " أسئلة / الفضاء ";
        sameUrl = "https://www.trouko.com/sub_s/space/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#7e1212b6";
    }
    if(p == technology_q){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_technology/";
        lin.value = " أسئلة / التقنية ";
        sameUrl = "https://www.trouko.com/sub_s/technology/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#7e1212b6";
    }
    if(p == spy_q){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_physics/";
        lin.value = " أسئلة / الفيزياء ";
        sameUrl = "https://www.trouko.com/sub_s/physics/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#7e1212b6";
    }
    if(p == sc_q){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_sciences/";
        lin.value = " أسئلة / العلوم ";
        sameUrl = "https://www.trouko.com/sub_s/sciences/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#7e1212b6";
    }
    if(p == else_q){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = " #dfdfe2";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_else/";
        lin.value = " أسئلة / متنوعة ";
        sameUrl = "https://www.trouko.com/sub_s/else/"
        path_r_n.value = pathCh
        p.style.color = " #edf2f6";
        p.style.background = "#7e1212b6";
    }
}

function returnStyle(){
    nameProject.style.border = ""
    namePage.style.border = ""
    error.style.display = "";
    discription.style.border = ""
    urlimg.style.border = ""
}

function showTTOne_q() {
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
 }

 function showTTTwo_q() {
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
 }

 function showTTThree_q() {
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
 }

 function showTTFour_q() {
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
}

function showTTFive_q() {
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
}

function showTTSix_q() {
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
}

submit_data.addEventListener("click", e=>{
  if(nameProject.value.length == ""){
  returnStyle()
  e.preventDefault()
  nameProject.style.border = "2px solid #7e1212b6"
  return false;
  }
  if(pathCh == null){
      returnStyle()
      var error = document.getElementById("error");
      e.preventDefault()
      error.style.display = "block";
      return false;
  }
  if( namePage.value.length == ""){
      returnStyle()
      e.preventDefault()
      namePage.style.border = "2px solid #7e1212b6"
      return false;
  }
  if( discription.value.length == ""){
      returnStyle()
      e.preventDefault()
      discription.style.border = "2px solid #7e1212b6"
      return false;
  }
  if(urlimg.value.length == ""){
      returnStyle()
      e.preventDefault()
      urlimg.style.border = "2px solid #7e1212b6"
      return false;
  }
  e.preventDefault()
  socket.emit("dataPartOneNMDT",{pptt : pptt,nameProject: nameProject.value,pathPage:path_r_n.value,titleName:namePage.value,urlimg:urlimg.value,discription:discription.value});

})
socket.on("okPartOne", e =>{
  addLoad.innerHTML = "%40"
  socket.emit("dataPartTwo",{titleContainerOne : titleContainerOne.value,titleContainerTwo : titleContainerTwo.value,titleContainerThree : titleContainerThree.value,titleContainerFour : titleContainerFour.value,titleContainerFive : titleContainerFive.value,titleContainerSix : titleContainerSix.value});
})

socket.on("okPartTwo", e=>{
  addLoad.innerHTML = "%70"
  socket.emit("dataPartThree",{containerOne : containerOne.value,containerTwo : containerTwo.value,containerThree : containerThree.value,containerFour : containerFour.value,containerFive : containerFive.value,containerSix : containerSix.value});
})

socket.on("okPartThree", e=>{
  addLoad.innerHTML = "%90"
  socket.emit("dataPartFour",{quoOne : quoOne.value , quoTwo:quoTwo.value ,quoThree:quoThree.value,quoFour :quoFour.value, quoFive:quoFive.value,quoSix:quoSix.value,quoOnea : quoOnea.value ,quoTwoa : quoTwoa.value, quoThreea : quoThreea.value , quoFoura : quoFoura.value , quoFivea : quoFivea.value , quoSixa : quoSixa.value ,linkOne:linkOne.value,linkTwo:linkTwo.value,linkThree:linkThree.value,linkFour:linkFour.value,linkFive:linkFive.value,lin : lin.value,sameUrl});
})

socket.on("okPartFour", e=>{
  addLoad.innerHTML = "%100"
  submit_data.style.background = "#submit_data"
  location.href = "add_done?titleid="+e.title+"&path="+e.path;
})