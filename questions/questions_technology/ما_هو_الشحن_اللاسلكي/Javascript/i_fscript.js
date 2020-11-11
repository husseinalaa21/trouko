var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو الشحن اللاسلكي";
adPhoto = "https://s.yimg.com/ny/api/res/1.2/r2a5xQZdBDRLsXeEOEpx1w--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/the_drive_165/10c92a1964fa701efae428b11b25b2d1"
adDiscription = "الشحن اللاسلكي او نقل الكهرباء بدون اسلاك , وهو نقل الكهرباء بين جهتين منفصلتين دون الحاجه الى اسلاك لتوصيلهم<br>و الشحن اللاسلكي ضهر مؤخراً في اغلب الاجهزة وتعد الفكره جيده جداً و مفيدة وذلك بسبب :-<br><br>1- سهولة نقل الطاقه بين المصدر و الجهة المستقبلة للطاقه.<br>2- عدم الحاجه اللى اسلاك بين مصدر الطاقه و الجهة المستقبله وهذه هي اساس الفكرة .<br>3- الشحن السريع وهي احدى مزاية الشحن اللاسلكي.<br>4- القدرة على شحن اكثر من جهاز على نفس المصدر<br>5- سهوله توصيل الجهاز بمصدر الشحن"
namePpath = "https://www.trouko.co/questions/questions_technology/ما_هو_الشحن_اللاسلكي/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 28 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:14px; color: #393e46; margin-right: 5px;">watch_later</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}