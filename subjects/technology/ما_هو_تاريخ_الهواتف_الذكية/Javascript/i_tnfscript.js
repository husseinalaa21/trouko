var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو تاريخ الهواتف الذكية";
adPhoto = "../../../imgs/iphone-410324_640.jpg"
adDiscription = "مع ضهور اول هاتف ذكية عام 1992 بواسطة شركة ' IBM ' و كان الهاتف مزود بشاشة لمس وقلم لمس و لوحة مفاتيح و تقويم , و بدأ مفهوم الهواتف الذكية بالتطور عام بعد عام حتى وصل الهاتف الذكي الى شكله الحالي . كما و تعد شركة ' IBM ' هي اول شركة في العالم تنتج و تبيع اول هاتف ذكي في عام 1994 أي بعد طرح فكرة هاتفها بعامين .وشهدت سنوات تطور الهواتف بالترتيب التالي : "
namePpath = "https://trouko.com/subjects/technology/ما_هو_تاريخ_الهواتف_الذكية/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 19 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}