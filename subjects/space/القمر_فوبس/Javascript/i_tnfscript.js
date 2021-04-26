var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "القمر فوبس";
adPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbLgpK-aONBZTtjFc9pGoVQlg67MSPi9Or6-Ivxjiw7VVHD6n&s"
adDiscription = "تشير إحدى النماذج الجديدة التي وضعها العلماء إلى أن الأخاديد الموجودة على سطح قمر المريخ فوبوس ناجمة عن القوى المدية، أي قوة الجذب المتبادلة بين كل من المريخ وقمره .<br /><br />و يضن علماء الفلك أن الأخاديد الطويلة والعميقة المنتشرة طوليا على سطح قمر المريخ فوبوس Phobos، ما هي إلا إشارات مبكرة على الانهيار المحتمل الذي ستتعرض له بنية القمر ما سيؤدي في نهاية المطاف إلى تحطمه بشكل كامل.&nbsp;"
namePpath = "https://www.trouko.com/subjects/space/القمر_فوبس/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 18 يناير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}