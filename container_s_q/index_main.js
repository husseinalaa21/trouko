var sourcesanquotes, ad_sources_quotes_one, ad_sources_quotes_two, ad_sources_quotes_three, ad_sources_quotes_four,
    ad_sources_quotes_five, ad_sources_quotes_six, ad_sources_quotes_seven, ad_sources_quotes_index, numberSuoces, hide_text, ele_sugmen;
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
addSourcesAndQuotesOne(addSourcesAndQuotesOne_n, addSourcesAndQuotesOne_na)
addSourcesAndQuotesTwo(addSourcesAndQuotesTwo_n, addSourcesAndQuotesTwo_na)
addSourcesAndQuotesThree(addSourcesAndQuotesThree_n, addSourcesAndQuotesThree_na)
addSourcesAndQuotesFour(addSourcesAndQuotesFour_n, addSourcesAndQuotesFour_na)
addSourcesAndQuotesfive(addSourcesAndQuotesfive_n, addSourcesAndQuotesfive_na)
addSourcesAndQuotesSix(addSourcesAndQuotesSix_n, addSourcesAndQuotesSix_na)
addSourcesAndQuotesSeven(addSourcesAndQuotesSeven_n, addSourcesAndQuotesSeven_na)
function addSourcesAndQuotesOne(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_one' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'> " + q + "</p>";
    ad_sources_quotes_one.append(sourquo);
    ad_sources_quotes_one.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesTwo(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_two' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_two.append(sourquo);
    ad_sources_quotes_two.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesThree(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_three' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_three.append(sourquo);
    ad_sources_quotes_three.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesFour(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_four' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_four.append(sourquo);
    ad_sources_quotes_four.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesfive(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_five' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_five.append(sourquo);
    ad_sources_quotes_five.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesSix(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_six' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_six.append(sourquo);
    ad_sources_quotes_six.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesSeven(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_seven' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_seven.append(sourquo);
    ad_sources_quotes_seven.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function addSourcesAndQuotesIndex(q, qp) {
    if (q == null || q == '') {
        return false
    }
    numberSuoces++;
    var sourquo = document.createElement('div')
    sourquo.innerHTML = "<a id='q_cl_' href='#souquo'>" + "(" + numberSuoces + ")" + "</a>" + "<p class='nameSources'>" + q + "</p>";
    ad_sources_quotes_index.append(sourquo);
    ad_sources_quotes_index.style.display = "flex";
    SourcesAnQuotes(numberSuoces, qp, q)

}
function SourcesAnQuotes(qw, q, qp) {
    hide_text.style.display = "none";
    var souquo = document.createElement('div');
    souquo.className = "sources_";
    souquo.innerHTML = "<a href='" + q + "'>(" + qw + ")</a>" + qp;
    sourcesanquotes.append(souquo)
}

$("#a_index_int").click(function () {
    $("#panel_m_m_one").css("background-color", "#999999")
})
var iconT = document.getElementById("uMenuMine_m"),
    iconBarTh = document.getElementsByClassName("icon-bar")[0],
    iconBar = document.getElementsByClassName("icon-bar")[1],
    iconBarT = document.getElementsByClassName("icon-bar")[2],
    click_material = document.getElementById("click_material"),
    isClickMenu = false,
    isAppen = false,
    isWebT= false,
    menLis = document.getElementById("menuLisWeb"),
    photo_page_im = document.getElementById("photo_page_im"),
    change = 'open';
    
click_material.addEventListener("click", e => {
    if (change === 'open') {
        photo_page_im.style.maxHeight = "100%";
        img.style.maxWidth = "650px"
        click_material.innerHTML = '<img src="../../../icons/compress-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'close'
    } if (change === 'close') {
        photo_page_im.style.maxHeight = "";
        img.style.maxWidth = ""
        click_material.innerHTML = '<img src="../../../icons/expand-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'open'
    }
})
var lisBox = `
<div class="newBody" id="covBody" onclick="iloveHusseinAlaa()"></div>
<div id="mySidenav" class="sidenav">
<div class="sliteLIst">
  <a href="/">الرئيسة</a>
  <a href="../../../container_s_q/about.html">عنا</a>
  <div class="sectionIns">
    <div class="headerIns" onclick="seIns('containerListOne')">
      <p>الاقسام</p>
      <p><span class="arrow" id="erSAre"><span></span><span></span></span></p>
    </div>
    <div class="containerIns" id="containerListOne" style="display : none;">
        <div class="containerStaff">
        <a href="https://trouko.com/sub_s/space/"> الفضاء </a>
        <a href="https://trouko.com/sub_s/else/"> منوعات </a>
        <a href="https://trouko.com/sub_s/technology/"> تكنلوجيا </a>
        <a href="https://trouko.com/sub_s/movies/"> افلام </a>
        <a href="https://trouko.com/sub_s/physics/"> فيزياء </a>
       </div>
    </div>
  </div>
  <a href="`+document.getElementById("Urlsame").innerText+`"> مقالات مشابهة </a>
  <div class="secSearch">
    <form role="search" method="get" class="search-form" action="https://trouko.com/" id="grootIsTree">
    <input type="search" class="search-field" placeholder="ابحث عن شيء …" name="c">
    <buttom class="serXf" onclick="imGroot()"> <img src="../../../index_style/search-solid.svg" width="14px" height="14px" /> </buttom>
</form>
</div>
<div class="socMedia"> 
<a class="fasMaenu"
 href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img
    src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
<a class="twiMaenu" href="https://twitter.com/trouko1"> <img
    src="../../../icons/twitter-m.svg" /> </a>
<a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" />
</a> </div>
</div>
</div>`
function imGroot() {
    document.getElementById("grootIsTree").submit();
}
function iloveHusseinAlaa() {
iconBarTh.className = "icon-bar";
iconBar.className = "icon-bar"
iconBarT.className = "icon-bar"
document.getElementById("covBody").style.width = "0";
document.getElementById("mySidenav").style.width = "0";
isClickMenu = false
isWebT = false
}
function seIns(z) {
let element = document.getElementById(z)
element.style.display = (element.style.display == 'none') ? er(true) : er(false);
function er(params) {
    if (params === true) {
        element.style.display = 'block'
        document.getElementById("erSAre").className = "arrow active"
    } else {
        element.style.display = 'none'
        document.getElementById("erSAre").className = "arrow"
    }
}
}
var rt = document.getElementsByTagName('BODY')
iconT.addEventListener("click", e => {
    if (isClickMenu === false) {
        if(isAppen === false){
            menLis.innerHTML = lisBox
            isAppen = true
        }
        isClickMenu = true
        isWebT = true
        iconBarTh.className = "icon-bar bar_a";
        setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 150);
        setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 250);
        document.getElementById("covBody").style.width = "100%";
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.maxWidth = "500px";
    } else {
        iloveHusseinAlaa()
    }
})
var prevScrollpos = window.pageYOffset;
/*var shtPagr = document.getElementById("infDir"),
    nbxc = document.getElementById("titleTs").innerHTML*/
window.onscroll = function () {
    if(isWebT === false){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || 53 > currentScrollPos) {
            document.getElementById("navMean").style.top = "0";
        } else {
            document.getElementById("navMean").style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
    }
    /*
    if(window.scrollY > 170){
      shtPagr.innerHTML = '<div class="titPage" ><p> عنوان المقالة : '+nbxc+' </p></div>'
    } else {
      shtPagr.innerHTML = ""
    }*/
}