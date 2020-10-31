var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "الشحن اللاسلكي"

adPhoto = "https://media.linkonlineworld.com/img/large/2015/8/31/2015_8_31_8_23_6_474.jpg"

adDiscription = "الشحن اللاسلكي او نقل الكهرباء بدون اسلاك , وهو نقل الكهرباء بين جهتين منفصلتين دون الحاجه الى اسلاك لتوصيلهم  "
+b+"و الشحن اللاسلكي ضهر مؤخراً في اغلب الاجهزة وتعد الفكره جيده جداً و مفيدة وذلك بسبب :-"
+"<ul>"+"<li> سهولة نقل الطاقه بين المصدر و الجهة المستقبلة للطاقه. </li>"
+'<li> عدم الحاجه اللى اسلاك بين مصدر الطاقه و الجهة المستقبله وهذه  هي اساس الفكرة .</li>'
+'<li>الشحن السريع وهي احدى مزاية الشحن اللاسلكي. </li>'
+'<li> القدرة على شحن اكثر من جهاز على نفس المصدر </li>'
+'<li> سهوله توصيل الجهاز بمصدر الشحن </li>'
+'</ul>'

// path
namePpath = "https://www.trouko.co/subjects/technology/الشحن_الاسلكي/"
nameP = namePpath.replace('https://www.trouko.co/',"")
// path


addTitleIpage = document.getElementById(nameP+'_pag_n_232');

addt(titleIn)

function addt(m){
    var textDis = adDiscription.slice(0, 80);
    var o = document.createElement('div')
    o.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
    addTitleIpage.append(o)
}