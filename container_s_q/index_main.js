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
    menLis = document.getElementById("menuLisWeb");

var change = 'open';
click_material.addEventListener("click", e => {
    if (change === 'open') {
        photo_page_im.style.maxHeight = "100%";
        img.style.maxWidth = "50%"
        click_material.innerHTML = '<img src="../../../icons/compress-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'close'
    } if (change === 'close') {
        photo_page_im.style.maxHeight = "";
        img.style.maxWidth = ""
        click_material.innerHTML = '<img src="../../../icons/expand-solid.svg" class="material_i" style="width: 16px;">'
        return change = 'open'
    }
})
var lisBox = `<div class="lisBox">
                <div class="toLisBox">
                s
                </div>
                <div class="medLis">
                a
                </div>
                <div class="endlis">
                c
                </div>
            </div>`
iconT.addEventListener("click", e => {
    if (isClickMenu === false) {
        iconBarTh.className = "icon-bar bar_a";
        setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 100);
        setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 200);
        menLis.innerHTML = lisBox
        isClickMenu = true
    } else {
        cloLis()
    }
})
function cloLis(){
    iconBarTh.className = "icon-bar";
    iconBar.className = "icon-bar"
    iconBarT.className = "icon-bar"
    menLis.innerHTML = ""
    isClickMenu = false
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navMean").style.top = "0";
  } else {
    document.getElementById("navMean").style.top = "-90px";
    cloLis()
  }
  prevScrollpos = currentScrollPos;
}