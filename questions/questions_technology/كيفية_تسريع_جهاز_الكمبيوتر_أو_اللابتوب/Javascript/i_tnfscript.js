var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كيفية تسريع جهاز الكمبيوتر أو اللابتوب";
adPhoto = "../../../imgs/laptop-3.jpg"
adDiscription = "قد تبطء أجهزه الكمبيوتر أو اللابتوب مع مرور الوقت , أو بمعنى أوضح فهي تكون تأثرت من الاستخدام أو أن مكوناتها الداخلية قد ملئت بالغبار مما تسبب في التأثير على سرعة أنتقل البيانات في لوحة الام .<br />ففي كلا الحلات فأن السبب قد يكون متنوع و يعتمد على عوامل عدة ومن أبرزها ما سنذكره ."
namePpath = "https://www.trouko.com/questions/questions_technology/كيفية_تسريع_جهاز_الكمبيوتر_أو_اللابتوب/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 22 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggThree"
ap.innerHTML ='<div class="img_p_sugg_pTh"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTh" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Th'> <a class='s_sub_tTh' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTh">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTh'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTh" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTh">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}