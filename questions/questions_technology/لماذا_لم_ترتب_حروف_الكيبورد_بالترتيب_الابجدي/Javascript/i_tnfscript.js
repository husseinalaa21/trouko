var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "لماذا لم ترتب حروف الكيبورد بالترتيب الابجدي";
adPhoto = "../../../imgs/keyboard-886640.jpg"
adDiscription = "يعود ترتيب أحرف الكيبورد الى عام 1870 عندما قام العالم كريستوفر وصديقه جيمس دينسمور حيث جعلا أول صف من الأعلى يخص الأرقام، وثاني صف يخص الحروف المتحركة، والثالث والرابع للحروف الساكنة , وفي عام 1873 استطاع كريستوفر وصديقه جيمس دينسمور بيع هذا الاختراع لمؤسسة ( E. Remington )، والتي كانت تبحث عن منتَج ميكانيكي لتصنيعه وبيعه في السوق , وقامت الشركة بتطوير لوحة المفاتيح ، وطرحت الآلة الكاتبة الأولى Remington و أطلقت على لوحة مفاتيح التي طورتها أسم QWERTY، وهي الحروف الست حسب ترتيبها في الصف الثاني من الآلةوبعد عدة أعوام ، قامت الشركة بأعطى القدرة على التبديل في كتابة الحروف الكبيرة والصغيرة باستخدام زر Shift، وجاءت حروفه بتصميم قُطري وليس متتالٍ، متخلصاً من كل العيوب السابقة، و في عام 1878 أصبحت الآلة رقم 1 في الأسواق."
namePpath = "https://trouko.com/questions/questions_technology/لماذا_لم_ترتب_حروف_الكيبورد_بالترتيب_الابجدي/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد, 25 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}