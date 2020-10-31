var ad_sub_one , ad_sub_two , ad_sub_three,
 ad_sub_four , ad_container_subject_one ,
 ad_container_subject_two , ad_container_subject_three ,
 ad_container_subject_four ,
 ad_container_subject_five, ad_container_subject_six, ad_container_subject_seven, sourcesanquotes , index_page , ad_photo , ad_sources_quotes_one
 ,ad_sources_quotes_two, ad_sources_quotes_three , ad_sources_quotes_four , ad_sub_five , ad_sub_six ,ad_sub_seven,
 ad_sources_quotes_five , ad_sources_quotes_six, ad_sources_quotes_seven , ad_sources_quotes_index , numberSuoces,hide_text;

numberSuoces = 0;
ad_sub_one = document.getElementById('title__ad_subject_one');
ad_sub_two = document.getElementById('title__ad_subject_two');
ad_sub_three = document.getElementById('title__ad_subject_three');
ad_sub_four = document.getElementById('title__ad_subject_four');
ad_sub_five = document.getElementById('title__ad_subject_five');
ad_sub_six = document.getElementById('title__ad_subject_six');
ad_sub_seven = document.getElementById('title__ad_subject_seven');

ad_container_subject_one = document.getElementById('ad_container_subject_one');
ad_container_subject_two = document.getElementById('ad_container_subject_two');
ad_container_subject_three = document.getElementById('ad_container_subject_three');
ad_container_subject_four = document.getElementById('ad_container_subject_four');
ad_container_subject_five = document.getElementById('ad_container_subject_five');
ad_container_subject_six = document.getElementById('ad_container_subject_six');
ad_container_subject_seven = document.getElementById('ad_container_subject_seven');
hide_text = document.getElementById('hide_text')

sourcesanquotes = document.getElementById('souquo');
index_page = document.getElementById('index_list_i');
ad_photo = document.getElementById('ad_photo');

ad_sources_quotes_one = document.getElementById('ad_sources_quotes_one');
ad_sources_quotes_two = document.getElementById('ad_sources_quotes_two');
ad_sources_quotes_three = document.getElementById('ad_sources_quotes_three');
ad_sources_quotes_four = document.getElementById('ad_sources_quotes_four');
ad_sources_quotes_five = document.getElementById('ad_sources_quotes_five');
ad_sources_quotes_six = document.getElementById('ad_sources_quotes_six');
ad_sources_quotes_seven = document.getElementById('ad_sources_quotes_seven');
ad_sources_quotes_index = document.getElementById('ad_sources_quotes_index');

const settTime = document.getElementById('time_write_this_page');
const introduction = document.getElementById("title_index");
const discription = document.getElementById("Content__for__index__m");



// add  time .

addTime(adTime)

// .



//add Introduction .

addIntroduction(titleIn)

//.

// add discription .

addDiscription(adDiscription)

// .

// ad photo .

addPhoto(adPhoto)

//.

// add Title and Continer One .

addTitleContainerOne(addTitleContainerOne_n)
addContainerOne(addContainerOne_n)
addSourcesAndQuotesOne(addSourcesAndQuotesOne_n)

// .

// add Title and Continer Two .

addTitleContainerTwo(addTitleContainerTwo_n)
addContainerTwo(addContainerTwo_n)
addSourcesAndQuotesTwo(addSourcesAndQuotesTwo_n)

//.

// add Title and Continer Three .

addTitleContainerThree(addTitleContainerThree_n)
addContainerThree(addContainerThree_n)
addSourcesAndQuotesThree(addSourcesAndQuotesThree_n)
//.

// add Title and Continer Four .

addTitleContainerFour(addTitleContainerFour_n)
addContainerFour(addContainerFour_n)
addSourcesAndQuotesFour(addSourcesAndQuotesFour_n)

//.

// add Title and Continer Five .

addTitleContainerfive(addTitleContainerfive_n)
addContainerfive(addContainerfive_n)
addSourcesAndQuotesfive(addSourcesAndQuotesfive_n)

//.

// add Title and Continer Six .

addTitleContainerSix(addTitleContainerSix_n)
addContainerSix(addContainerSix_n)
addSourcesAndQuotesSix(addSourcesAndQuotesSix_n)

//.

// add Title and Continer Seven .

addTitleContainerSeven(addTitleContainerSeven_n)
addContainerSeven(addContainerSeven_n)
addSourcesAndQuotesSeven(addSourcesAndQuotesSeven_n)

//.


function addIntroduction(m){
    if(m == null|| m == ''){
        return false
    }
    var textIntr = document.createElement('div');
    textIntr.className = 'ad_intro_in_p_h';
    textIntr.id = 'main_t_page';
    textIntr.innerHTML = m;
    introduction.append(textIntr)
}

function addTime(m){
    if(m == null || m == ''){
        return false
    }
    var time = document.createElement('p');
    var proveA =document.createElement('p');
    proveA.className = "proveA";
    proveA.innerHTML = "  <p>____ : تاريخ التعديل   </p> <i class='fa fa-edit' style='font-size:14px; margin-left: 6px;'> </i> "
    time.innerHTML = "  تاريخ النشر  : " + m ;
    settTime.append(time)
    settTime.append(proveA)
}

function addDiscription(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = 'ad_continer';
    dis.innerHTML = "<p>"+m+"</p>";
    discription.append(dis)
}

function addTitleContainerOne(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_one.append(dis)
    addIndex("title__ad_subject_one",dis.innerHTML)
}

function addTitleContainerTwo(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_two.append(dis)
    addIndex("title__ad_subject_two",dis.innerHTML)
}

function addTitleContainerThree(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_three.append(dis)
    addIndex("title__ad_subject_three",dis.innerHTML)
}

function addTitleContainerFour(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_four.append(dis)
    addIndex("title__ad_subject_four",dis.innerHTML)
}

function addTitleContainerfive(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_five.append(dis)
    addIndex("title__ad_subject_five",dis.innerHTML)
}

function addTitleContainerSix(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_six.append(dis)
    addIndex("title__ad_subject_six",dis.innerHTML)
}

function addTitleContainerSeven(m){
    if(m == null|| m == ''){
        return false
    }
    var dis = document.createElement('div');
    dis.className = "title__ad_subject_p";
    dis.innerHTML = m;
    ad_sub_seven.append(dis)
    addIndex("title__ad_subject_seven",dis.innerHTML)
}

function addContainerOne(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_one.append(con)
}

function addContainerTwo(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_two.append(con)
}

function addContainerThree(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_three.append(con)
}

function addContainerFour(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_four.append(con)
}

function addContainerfive(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_five.append(con)
}

function addContainerSix(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_six.append(con)
}

function addContainerSeven(c){
    if(c == null|| c == ''){
        return false
    }
    var con = document.createElement('div');
    con.className = "ad_i_subject_p";
    con.innerHTML = "<p class='p_container'>"+c+"</p>";
    ad_container_subject_seven.append(con)
}

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

function addIndex(n ,nn){
    var index = document.createElement('div');
    index.className =  'index_list_';
    index.innerHTML = "<a href=#"+n+"> | "+nn+"</a>";
    index_page.append(index)
}

function addPhoto(p){
    var photo = document.createElement('div');
    photo.className = "photo_page_im";
    photo.id = "photo_page_im";
    photo.innerHTML = "<img class='img' id='img' src="+p+">"+'<p class="pText_Image"><i id="click_material"><i class="material-icons material_i" style="font-size:20px ">crop_free</i></i><i class="material-icons" style="font-size:22px; margin-left:14px">short_text</i></p>';
    ad_photo.append(photo)
}

function tPp(n){
    tP.innerHTML = document.createElement('p').innerHTML;
    tP.innerText = n
}


$('#q_cl_one').click(function(){
    $('#souquo').show();
})
$('#q_cl_two').click(function(){
    $('#souquo').show();
})
$('#q_cl_three').click(function(){
    $('#souquo').show();
})
$('#q_cl_four').click(function(){
    $('#souquo').show();
})
$('#q_cl_five').click(function(){
    $('#souquo').show();
})
$('#q_cl_six').click(function(){
    $('#souquo').show();
})
$('#q_cl_seven').click(function(){
    $('#souquo').show();
})
$('#q_cl_').click(function(){
    $('#souquo').show();
})



$('.sou_an_quo_content').hide();

$(".title_sour_an_qou").click(function(){
    $('.sou_an_quo_content').toggle()
    $(".title_sour_an_qou").css("border-bottom-left-radius","0")
    $(".title_sour_an_qou").css("border-bottom-right-radius","0")
})

$("#a_index_int").click(function(){
    $("#panel_m_m_one").css("background-color", "#999999")
})
var icon = document.getElementsByClassName("icon")[0]
var main_menu = document.getElementById("main_menu")
var click_material = document.getElementById("click_material")
var photo_page_im = document.getElementById("photo_page_im")
var img =document.getElementById("img")

icon.addEventListener("click", e =>{ 
    if (main_menu.style.display === "none") {
        main_menu.style.display = "block";
        icon.style.backgroundColor = "";
        icon.style.color = "  rgb(238, 238, 240)";
      } else {
        main_menu.style.display = "none";
        icon.style.backgroundColor = "";
        icon.style.color = "";
      }
 })
var change = 'open';
 click_material.addEventListener("click", e =>{
    if (change === 'open') {
        photo_page_im.style.maxHeight = "100%";
        img.style.maxWidth = "50%"
        click_material.innerHTML = '<i class="material-icons material_i" style="font-size:20px">crop</i>'
        return change = 'close'
      } if(change === 'close') {
        photo_page_im.style.maxHeight = "";
        img.style.maxWidth = ""
        click_material.innerHTML = '<i class="material-icons material_i" style="font-size:20px ">crop_free</i>'
        return change = 'open'
      }
 })