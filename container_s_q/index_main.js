var sourcesanquotes , ad_sources_quotes_one ,ad_sources_quotes_two, ad_sources_quotes_three , ad_sources_quotes_four , 
ad_sources_quotes_five , ad_sources_quotes_six, ad_sources_quotes_seven , ad_sources_quotes_index , numberSuoces,hide_text,ele_sugmen,index_sugg_p,nameP,title_p_index;
numberSuoces = 0;
ad_sources_quotes_one = document.getElementById('ad_sources_quotes_one');
ad_sources_quotes_two = document.getElementById('ad_sources_quotes_two');
ad_sources_quotes_three = document.getElementById('ad_sources_quotes_three');
ad_sources_quotes_four = document.getElementById('ad_sources_quotes_four');
ad_sources_quotes_five = document.getElementById('ad_sources_quotes_five');
ad_sources_quotes_six = document.getElementById('ad_sources_quotes_six');
ad_sources_quotes_seven = document.getElementById('ad_sources_quotes_seven');
ad_sources_quotes_index = document.getElementById('ad_sources_quotes_index');
sourcesanquotes = document.getElementById('souquo');
hide_text = document.getElementById('hide_text')
ele_sugmen = document.getElementById("ele_sugmen")

index_sugg_p = document.getElementById("index_sugg_p")
nameP = document.getElementById("title").innerHTML
title_p_index = document.getElementById("title_p_index").innerHTML = nameP;

addSourcesAndQuotesOne(addSourcesAndQuotesOne_n,addSourcesAndQuotesOne_na)
addSourcesAndQuotesTwo(addSourcesAndQuotesTwo_n,addSourcesAndQuotesTwo_na)
addSourcesAndQuotesThree(addSourcesAndQuotesThree_n,addSourcesAndQuotesThree_na)
addSourcesAndQuotesFour(addSourcesAndQuotesFour_n,addSourcesAndQuotesFour_na)
addSourcesAndQuotesfive(addSourcesAndQuotesfive_n,addSourcesAndQuotesfive_na)
addSourcesAndQuotesSix(addSourcesAndQuotesSix_n,addSourcesAndQuotesSix_na)
addSourcesAndQuotesSeven(addSourcesAndQuotesSeven_n,addSourcesAndQuotesSeven_na)
function addSourcesAndQuotesOne(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_one' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'> "+q+"</p>";
    ad_sources_quotes_one.append(sourquo);
    ad_sources_quotes_one.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)
    
}
function addSourcesAndQuotesTwo(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_two' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_two.append(sourquo);
    ad_sources_quotes_two.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)

}
function addSourcesAndQuotesThree(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_three' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_three.append(sourquo);
    ad_sources_quotes_three.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)
    
}
function addSourcesAndQuotesFour(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_four' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_four.append(sourquo);
    ad_sources_quotes_four.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)

}
function addSourcesAndQuotesfive(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_five' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_five.append(sourquo);
    ad_sources_quotes_five.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)

}
function addSourcesAndQuotesSix(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_six' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_six.append(sourquo);
    ad_sources_quotes_six.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)

}
function addSourcesAndQuotesSeven(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_seven' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_seven.append(sourquo);
    ad_sources_quotes_seven.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)

}
function addSourcesAndQuotesIndex(q,qp){
    if(q == null || q == ''){
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_' href='#souquo'>"+"("+numberSuoces+")"+"</a>"+"<p class='nameSources'>"+q+"</p>";
    ad_sources_quotes_index.append(sourquo);
    ad_sources_quotes_index.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp ,q)

}
function SourcesAnQuotes(qw , q , qp){
    hide_text.style.display = "none";
    var souquo = document.createElement('div');
    souquo.className = "sources_";
    souquo.innerHTML =  "<a href='"+q+"'>("+qw+")</a>"+qp;
    sourcesanquotes.append(souquo)
}

$("#a_index_int").click(function(){
    $("#panel_m_m_one").css("background-color", "#999999")
})
var icon = document.getElementById("sbSugMainMenu")
var iconT = document.getElementById("uMenuMine_m")
var iconBarTh = document.getElementsByClassName("icon-bar")[0]
var iconBar = document.getElementsByClassName("icon-bar")[1]
var iconBarT = document.getElementsByClassName("icon-bar")[2]
var main_menu = document.getElementById("menu_sugmen")
var click_material = document.getElementById("click_material")
var photo_page_im = document.getElementById("photo_page_im")
var img =document.getElementById("img")
icon.addEventListener("click", e =>{ 
    if (main_menu.style.display === "none") {
        main_menu.style.display = "block";
        icon.style.backgroundColor = "#d3d3d4";
        icon.style.color = " #3282b8";
    } else {
        main_menu.style.display = "none";
        icon.style.backgroundColor = "";
        icon.style.color = "";
    }

    iconBarTh.className = "icon-bar";
    iconBar.className = "icon-bar"
    iconBarT.className = "icon-bar"

    ele_sugmen.innerHTML = `
    <p>مواضيع عن الفضاء<span class="scs"></span></p>
    <p>مواضيع عن الفيزياء<span class="scs"></span></p>
    <p>مواضيع عن العلوم<span class="scs"></span></p>
    <p>مواضيع متنوعة<span class="scs"></span></p>
    <p>مواضيع متنوعة<span class="scs"></span></p>`;

})
iconT.addEventListener("click", e =>{ 
    if (main_menu.style.display === "none") {
        main_menu.style.display = "block";
        iconBarTh.className = "icon-bar bar_a";
        setTimeout(function(){ iconBar.className = "icon-bar bar_a" }, 100);
        setTimeout(function(){ iconBarT.className = "icon-bar bar_a" }, 200);
    } else {

        iconBarTh.className = "icon-bar";
        iconBar.className = "icon-bar"
        iconBarT.className = "icon-bar"
        main_menu.style.display = "none";
    }

    icon.style.backgroundColor = "";
    icon.style.color = "";

    ele_sugmen.innerHTML = `
    <p> أخر المقالات<span class="scs"></span> </p>
    <p>البحث في المدونة<span class="scs"></span></p>
    <p class="men"><a href="https://twitter.com/trouko1">  <i class="fa fa-twitter" style="font-size:18px"></i> </a> تابعنا على تويتر</p>
    <p class="men"><a href="https://t.me/trouko"> <i class='fab fa-telegram-plane' style="font-size:18px"></i></a> تابعنا على تيليجرام </p>`;
})

var change = 'open';
 click_material.addEventListener("click", e =>{
    if (change === 'open') {
        photo_page_im.style.maxHeight = "100%";
        img.style.maxWidth = "50%"
        click_material.innerHTML = '<img src="../../../icons/compress-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'close'
      } if(change === 'close') {
        photo_page_im.style.maxHeight = "";
        img.style.maxWidth = ""
        click_material.innerHTML = '<img src="../../../icons/expand-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'open'
      }
})

window.onscroll = function() {
    checS();
    myFunction()
};

function checS() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 80) {
      document.getElementById("header_m_t").style.display = "none";
  } else {
      document.getElementById("header_m_t").style.display = "flex";
  }
}

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 110;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

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
  
      if(n.includes("/subjects/food_fruits_vegetables/")){
          for(i=0; i < xData.length; i++){
              if(xData[i].linkPage.includes("/subjects/food_fruits_vegetables/")){
                  var subOne = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
                 storageD.push(subOne)
              }
          }
      }
  
      else if(n.includes("/subjects/space/")){
          for(i=0; i < xData.length; i++){
              if(xData[i].linkPage.includes("/subjects/space/")){
                  var subTwo = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
                 storageD.push(subTwo)
              }
          }
      }
      else if(n.includes("/subjects/company/")){
          for(i=0; i < xData.length; i++){
              if(xData[i].linkPage.includes("/company/")){
                  var subThree = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
                 storageD.push(subThree)
              }
          }
      }
  
      else if(n.includes("/subjects/else/")){
          for(i=0; i < xData.length; i++){
              if(xData[i].linkPage.includes("/subjects/space/")){
                  var subFour = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
                 storageD.push(subFour)
              }
          }
      }
  
      else if(n.includes("/subjects/technology/")){
          for(i=0; i < xData.length; i++){
              if(xData[i].linkPage.includes("/subjects/space/")){
                  var subFive = { "linkPage" : xData[i].linkPage,  "namePath" : xData[i].namePath };
                 storageD.push(subFive)
              }
          }
      } else {
          hol_sugg.innerHTML= '<div class="no_result"> لا يتوفر مقرحات في الوقت الحالي </div>'
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