var sourcesanquotes , ad_sources_quotes_one ,ad_sources_quotes_two, ad_sources_quotes_three , ad_sources_quotes_four , 
ad_sources_quotes_five , ad_sources_quotes_six, ad_sources_quotes_seven , ad_sources_quotes_index , numberSuoces,hide_text,ele_sugmen;
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
        icon.style.color = " #3282b8";
    } else {
        main_menu.style.display = "none";
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
    myFunction()
};
var tolsShor = `<div class="isVis isVisbl" id="isVisb" onclick="isVisb();"><p id="wtvis">أضهار</p> <i class="fa fa-eye" style="font-size: 15px;"></i></div><div style="display: none;" id="myBar"></div>`
var tols = `<div class="control_contact_p" ><div class="isVis" id="isVisb" onclick="isVisb();"><p id="wtvis">أخفاء</p> <i class='fas fa-low-vision' style="font-size: 15px;"></i></div>
<div id="control_contact_p"><div class="control_c_b">
<div class="c_c_b_black" onclick="changeCo('bl')"> C </div>
<div class="c_c_b_white" onclick="changeCo('wh')"> C </div>
<div class="c_c_b_yellow" onclick="changeCo('yell')"> C </div>
<div class="c_c_b_def" onclick="changeCo('def')"> C </div>
</div><div class="control_text_ss">
<div class="t_t_small">   Aa </div>
<div class="t_t_med">  Aa </div>
<div class="t_t_larg">  Aa </div>
</div><div class="header"><div class="progress-container"><div class="progress-bar" id="myBar"></div></div></div></div></div>`;

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 110;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  
var isV = false;
  function isVisb(){
      if(isV == false){
          isV = true;
          document.getElementById("contr_Pa").innerHTML = tolsShor
      } else {
        document.getElementById("wtvis").innerHTML = " أخفاء "
        document.getElementById("contr_Pa").innerHTML = tols
        isV = false;
      }
  }

var bl,wh,yell,def;
var c = ["one","two","three","four","five","six","seven"]

function chngBT(backG,backG2,colo,border,backHeader,backSug){
    document.body.style.backgroundColor = backG
    document.body.style.backgroundColor = backG
    for(var i=0; i< 6; i++){
        document.getElementsByClassName("ad_sub_"+c[i])[0].style.backgroundColor = backG
        document.getElementsByClassName("ad_sub_"+c[i])[0].style.color = colo
    }
    document.getElementsByClassName("ch_sub_")[0].style.backgroundColor = backG
    document.getElementsByClassName("ch_sub_")[1].style.backgroundColor = backG
    document.getElementsByClassName("index__page__main")[0].style.backgroundColor = backG
    document.getElementsByClassName("main_un_t_inf_o")[0].style.backgroundColor = backG
    document.getElementsByClassName("header_m_t")[0].style.backgroundColor = backG
    document.getElementsByClassName("s_tas")[0].style.backgroundColor = backG
    document.getElementsByClassName("main_menu_main")[0].style.backgroundColor = backG
    document.getElementsByClassName("index_p_sugg")[0].style.backgroundColor = backG
    document.getElementsByClassName("index_page")[0].style.backgroundColor = backG
    document.getElementsByClassName("index_page")[1].style.backgroundColor = backG
    document.querySelectorAll(".index_list_i a")[0].style.backgroundColor = backG
    document.getElementsByClassName("title_sour_an_qou")[0].style.backgroundColor = backG
    document.getElementsByClassName("sou_an_quo_content")[0].style.backgroundColor = backG
    document.getElementsByClassName("notesQ")[0].style.backgroundColor = backG

    document.getElementsByClassName("pText_Image")[0].style.backgroundColor = backG2
    
    document.getElementsByClassName("ch_sub_")[0].style.color = colo
    document.getElementsByClassName("Content__for__index__m")[0].style.color = colo
    document.getElementsByClassName("main_un_t_inf_o")[0].style.color = colo
    document.getElementsByClassName("index_page")[0].style.color = colo
    document.getElementsByClassName("title_sour_an_qou")[0].style.color = colo
    document.getElementsByClassName("notesQ")[0].style.color = colo
    var qiuLine = document.getElementsByClassName("sources_")
    for(var qq = 0; qq < qiuLine.length; qq++){
        document.getElementsByClassName("sources_")[qq].style.color = colo
    }
    var specEL = document.querySelectorAll(".index_list_ a")
    for(var ii = 0; ii < specEL.length; ii++){
        specEL[ii].style.color = colo
    }
    var specELP = document.querySelectorAll(".index_sugg_p p a")
    for(var iii = 0; iii < specELP.length; iii++){
        specELP[iii].style.color = colo
    }
    document.querySelectorAll(".index_list_i a")[0].style.color = colo
    document.querySelectorAll(".index_list_i a")[1].style.color = colo
    document.getElementsByClassName("ch_sub_")[1].style.color = colo
    document.getElementsByClassName("tit_index__")[0].style.color = colo
    document.querySelectorAll(".adConIn a")[0].style.color = colo
    document.getElementsByClassName("index_p_sugg")[0].style.color = colo
    
    document.querySelectorAll(".tit_index__ div")[0].style.borderBottom = "1.5px solid "+border
    document.querySelectorAll(".main_un_t_inf_o")[0].style.borderBottom = "0"
    document.getElementsByClassName("s_tas")[0].style.border = backG
    document.querySelectorAll(".index_list_i a")[0].style.border = "0"
    document.getElementsByClassName("index_p_sugg")[0].style.border = "0"
    document.getElementsByClassName("main_menu_main")[0].style.borderBottom = "1.5px solid "+border
    document.getElementsByClassName("text_sub_s")[0].style.borderBottom = "1.5px solid "+border
    document.getElementsByClassName("text_sub_s")[1].style.borderBottom = "1.5px solid "+border
    document.getElementsByClassName("menu_main")[0].style.backgroundColor = backHeader

    // ch two
    var sugBavk = document.getElementsByClassName("p_t_inf")
    for(var ik = 0; ik < sugBavk.length; ik++){
        document.getElementsByClassName("p_t_inf")[ik].style.backgroundColor = backSug
        document.querySelectorAll(".p_t_inf p")[ik].style.color = colo

        document.getElementsByClassName("infoPageSuQu")[ik].style.backgroundColor = backSug
        document.getElementsByClassName("infoPageSuQu")[ik].style.borderBottom = backSug
        document.getElementsByClassName("infoPageSuQuTw")[ik].style.backgroundColor = backSug
        document.getElementsByClassName("infoPageSuQuTw")[ik].style.border = backSug

        document.getElementsByClassName("s_sub_t")[ik].style.backgroundColor = backG2
        document.getElementsByClassName("s_sub_t")[ik].style.color = colo
    }

    var sugBavk2 = document.getElementsByClassName("sugg_p_t_bo_23Tw")
    for(var ij = 0; ij < sugBavk2.length; ij++){
        document.getElementsByClassName("s_sub_tTw")[ij].style.backgroundColor = backG2
        document.getElementsByClassName("s_sub_tTw")[ij].style.color = colo
        document.getElementsByClassName("infoPageSuQuTw")[ij+ik].style.backgroundColor = backSug
        document.getElementsByClassName("infoPageSuQuTw")[ij+ik].style.border = backSug
        document.querySelectorAll(".p_t_infTw p")[ij].style.color = colo
        document.getElementsByClassName("p_t_infTw")[ij].style.backgroundColor = backSug
        document.getElementsByClassName("infoPageSuQuTwTw")[ij].style.backgroundColor = backSug
    }
    document.getElementsByClassName("no_result")[0].style.colo = colo
}
function changeCo(m){
    if(m == "bl"){
        chngBT("#1b262c","#666666a2","#dbd8e3","#525252","","#1b262c")
    } else if(m== "wh"){
        chngBT("#f1f1f1"," #f1f1f14b","#0f0f0f","#f1f1f1","#f1f1f1","#f1f1f1")
    } else if(m == "yell"){
        chngBT("#f8f7de","#f8f7de60","#0f0f0f","#e8e8e8","#f8f7de","#f8f7de")
    } else if(m== "def"){
        chngBT("","","","#d3d2d2","","")
    } else {
        return false
    }
}