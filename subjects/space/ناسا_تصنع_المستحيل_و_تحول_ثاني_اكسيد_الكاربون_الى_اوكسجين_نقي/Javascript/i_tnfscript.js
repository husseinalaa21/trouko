var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ناسا تصنع المستحيل و تحول ثاني اكسيد الكاربون الى اوكسجين نقي";
adPhoto = "../../../imgs/nicolas-lob.jpg"
adDiscription = "يتشكل غلاف المريخ الجوي من غاز ثاني أكسيد الكربون (95.32٪) ،وغاز النيتروجين الجزيئي (2.6٪) وغاز الأرجون (1.9٪). وكذلك يتضمن أيضاً مستويات ضئيلة من بخار الماء والأكسجين وأول أكسيد الكربون والهيدروجين وغازات نبيلة أخرى , أي انه غير صالح للتنفس , على عكس الغلاف الجوي الارض الذي تعتمد عليه جميع الكائنات الحية , ولكن ماذا لو اصبح الغلاف الجوي الخاص بالمريخ شبيه بالغلاف الجوي الارضي , سيكون بالتأكيد التؤم الارض ولن يتردد الاشخاص من الذهاب اليه و زيارته ."
namePpath = "https://trouko.com/subjects/space/ناسا_تصنع_المستحيل_و_تحول_ثاني_اكسيد_الكاربون_الى_اوكسجين_نقي/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}