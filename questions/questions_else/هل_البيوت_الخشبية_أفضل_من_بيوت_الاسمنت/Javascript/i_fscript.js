var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل البيوت الخشبية أفضل من بيوت الاسمنت";
adPhoto = "../../../imgs/cabin-1082063_640.jpg"
adDiscription = "استخدم الانسان منذ قديم الزمان البيوت لغاية الراحة و السكينة و أيضاً لحماية نفسه من خطر الكائنات المفترسة و لحمايته من الامطار و الفياضانات , عبر مئات السنين طور الانسان المنازل لتصل الى شكلها الحالي و لتكون ليس فقط للمؤى بل أيضا لتكون للرفاهية . ولتصل البيت الى شكلها الحالي تطورت قديماً بأستخدام أما الاسمنت و الطين أو بأستخدام الخشب ؟ ولكن لماذا أختار الانسان منذ قديم الزمان الخشب و الاسمنت ولماذا لم يختارو جميعاً الخشب مثلاً لأن شكله جميل ؟ السبب وراء ذلك هو لتوفر المواد الاساسة في كل بلد و الاعتماد عليها بل بناء , فمثلاً لا تستطيع دولة تقع في الصحراء من تجلب الخشب من دول أخرى لأن ذلك مكلف جداً وليس عملي ."
namePpath = "https://www.trouko.com/questions/questions_else/هل_البيوت_الخشبية_أفضل_من_بيوت_الاسمنت/"
infSuGuPageOn = '<p>  أسئلة / متنوعة  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد, 25 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}