var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كيف استطاعات ناسا من تحويل غاز ثاني اكسيد الكاربون الى اكسجين";
adPhoto = "../../../imgs/mars-11656_640.jpg"
adDiscription = "استطاعات ناسا من خلال  مختبر صغير بحجم محمص خبز بداخل المركبة التي ارسلتها مؤخراً الى المريخ بيرسيفيرانس، ذات العجلات الست، التي هبطت على سطح المريخ في 18 فبراير، بعد رحلة استغرقت 7 أشهر من الأرض.من أنتج نحو 5 غرامات من الأكسجين، أي ما يكفي لتنفس رائد فضاء لمدة 10 دقائق تقريبا.<br />"
namePpath = "https://trouko.com/questions/questions_space/كيف_استطاعات_ناسا_من_تحويل_غاز_ثاني_اكسيد_الكاربون_الى_اكسجين/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}