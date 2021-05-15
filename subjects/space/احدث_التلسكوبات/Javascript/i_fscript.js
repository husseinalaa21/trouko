var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "احدث التلسكوبات";
adPhoto = "../../../imgs/telescopenews.jpg"
adDiscription = "يستخدم التلسكوب لرصد الأجسام البعيدة كالكواكب و النجوم و المجرات و منها ما يستخدم لرؤية الأجسام على سطح الأرض مثل السباقات . و يجدر القول أن أول مِرصد قد صنع من طرف العالم المسلم أبو حامد الصاغاني سنة 990 هـ، في حين يُرجعه آخرون إلى هولندا على يد أحد صناع عدسات النظارات يدعى لبرشي وبعد ذلك ببضعة شهور صنع العالم غاليليو غاليلي عام 1609 أول مِرصد فلكي بنفسهِ .هناك العديد من أنواع التلسكوبات حسب نوع الأشعة التي تستقبلها مثل الضوء المرئي و مِرصدالأشعة تحت الحمراء أو مِرصَد أشعة فوق البنفسجية وحسب حجمها و استخدامها فمنها ما يكون ضخم جداً ومنها يقسم في مساحات مختلفة - لرصد مساحة اكبر .  و في هذه المقال سوف نتحدث عن آحدث التلسكوبات في العالم ."
namePpath = "https://trouko.com/subjects/space/احدث_التلسكوبات/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 14 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}