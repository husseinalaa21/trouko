var subject_list , subject_list_n_s,
li_list_spy,item_list_sub_spy,li_list_space,li_list_g,item_list_sub_space
,item_list_sub_g,item_list_sub_technology,item_list_sub_else,item_list_sub_sc
,li_list_else,li_list_technology,li_list_sc,li_list_spy_q,li_list_space_q,li_list_technology_q,li_list_else_q,li_list_sc_q
,item_list_sub_else_q,item_list_sub_space_q,item_list_sub_sc_q,item_list_sub_spy_q,item_list_sub_technology_q;

subject_list = $('#subject_list');
subject_list_n_s = $('#subject_list_n_s');
li_list_spy = $('#li_list_spy')
li_list_space = $('#li_list_space')
li_list_g = $('#li_list_g')
li_list_technology = $('#li_list_technology')
li_list_else = $('#li_list_else')
li_list_sc = $('#li_list_sc')
li_list_spy_q = $('#li_list_spy_q')
li_list_space_q = $('#li_list_space_q')
li_list_technology_q = $('#li_list_technology_q')
li_list_else_q = $('#li_list_else_q')
li_list_sc_q = $('#li_list_sc_q')
item_list_sub_space = $('#item_list_sub_space')
item_list_sub_spy = $('#item_list_sub_spy')
item_list_sub_g = $('#item_list_sub_g')
item_list_sub_else = $('#item_list_sub_empty')
item_list_sub_technology = $('#item_list_sub_technology')
item_list_sub_sc = $('#item_list_sub_sc')
item_list_sub_space_q = $('#item_list_sub_space_q')
item_list_sub_spy_q = $('#item_list_sub_spy_q')
item_list_sub_else_q = $('#item_list_sub_empty_q')
item_list_sub_technology_q = $('#item_list_sub_technology_q')
item_list_sub_sc_q = $('#item_list_sub_sc_q')


window.onload = function(){
  document.getElementById('gsc-i-id1').placeholder = 'أبحث عن شيء ..';
};

$( document ).ready( function() {   
     li_list_spy.on( 'click', function( ) {
      showText();
      item_list_sub_spy.toggle(function(){});
      changeTextLiSpy( $( this ) );
     }); 

     li_list_spy_q.on( 'click', function( ) {
      showText();
      item_list_sub_spy_q.toggle(function(){});
      changeTextLiSpy_q( $( this ) );
     }); 

     li_list_space.on( 'click', function( ) {
      showText();
      item_list_sub_space.toggle(function(){});
      changeTextLispace( $( this ) );
     }); 

     li_list_space_q.on( 'click', function( ) {
      showText();
      item_list_sub_space_q.toggle(function(){});
      changeTextLispace_q( $( this ) );
     }); 

     li_list_g.on( 'click', function( ) {
      showText();
      item_list_sub_g.toggle(function(){});
      changeTextLiG( $( this ) );
     }); 

     li_list_technology.on( 'click', function( ) {
      showText();
      item_list_sub_technology.toggle(function(){});
      changeTextLitec( $( this ) );
     }); 

     li_list_technology_q.on( 'click', function( ) {
      showText();
      item_list_sub_technology_q.toggle(function(){});
      changeTextLitec_q( $( this ) );
     }); 

     li_list_sc.on( 'click', function( ) {
      showText();
      item_list_sub_sc.toggle(function(){});
      changeTextLiSc( $( this ) );
     }); 

     li_list_sc_q.on( 'click', function( ) {
      showText();
      item_list_sub_sc_q.toggle(function(){});
      changeTextLiSc_q( $( this ) );
     }); 

     li_list_else.on( 'click', function( ) {
      showText();
      item_list_sub_else.toggle(function(){});
      changeTextLielse( $( this ) );
     });
     
     li_list_else_q.on( 'click', function( ) {
      showText();
      item_list_sub_else_q.toggle(function(){});
      changeTextLielse_q( $( this ) );
     });  

   }) 

   document.getElementById("time_up").innerHTML = formatAMPM()
   function formatAMPM() {
   var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? ' مسائاً ' : ' صباحاً ',
    months = ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمير'],
    days = ['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعه','السبت'];
   return days[d.getDay()]+'  , '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' | '+hours+':'+minutes+ampm;

   }

function showText( data ) {
    var $text = subject_list;
    data === 'true' ? $text.hide().data( 'show', 'false' ) : $text.show().data( 'show', 'true' );
}

function changeTextLiSpy( btn ) {
  li_list_spy.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الفيزياء' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الفيزياء') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الفيزياء' );
}

function changeTextLiSpy_q( btn ) {
  li_list_spy_q.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن الفيزياء' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;اسئلة عن الفيزياء') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن الفيزياء' );
}

function changeTextLispace( btn ) {
  li_list_space.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الفضاء' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الفضاء') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الفضاء' );
}

function changeTextLispace_q( btn ) {
  li_list_space_q.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن  الفضاء' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;اسئلة عن  الفضاء') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن  الفضاء' );
}

function changeTextLiSc( btn ) {
  li_list_sc.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن العلوم' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;مواضيع عن العلوم') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن العلوم' );
}

function changeTextLiSc_q( btn ) {
  li_list_sc_q.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن العلوم' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;اسئلة عن العلوم') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;"> &nbsp;اسئلة عن العلوم' );
}

function changeTextLiG( btn ) {
  li_list_g.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الجغرافية' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الجغرافية') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن الجغرافية' );
}


function changeTextLielse( btn ) {
  li_list_else.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع متنوعة' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;مواضيع متنوعة') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbspمواضيع متنوعة' );
}


function changeTextLielse_q( btn ) {
  li_list_else_q.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة متنوعة' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;"> &nbsp;اسئلة متنوعة') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة متنوعة' );
}

function changeTextLitec( btn ) {
  li_list_technology.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن التقنية' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;مواضيع عن التقنية') : btn.html( '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;مواضيع عن التقنية' );
}

function changeTextLitec_q( btn ) {
  li_list_technology_q.html() === '<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن التقنية' ? btn.html( '<img src="icons/align-justify-solid.svg" style="width: 14px;">&nbsp;اسئلة عن التقنية') : btn.html('<img src="icons/align-left-solid.svg" style="width: 14px;">&nbsp;اسئلة عن التقنية');
}