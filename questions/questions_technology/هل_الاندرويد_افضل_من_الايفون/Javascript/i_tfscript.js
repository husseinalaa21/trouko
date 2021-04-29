var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل الاندرويد افضل من الايفون";
adPhoto = "../../../imgs/mobile-phone-18640.jpg"
adDiscription = "تعد الهواتف وسيلة للتواصل بين الاشخاص في مختلف الاماكن و لطالما كانت من أشهر الوسائل للتواصل بين الاهل و الاقارب , و منذ ضهور الهواتف وهي تشهد تغير كامل في شكلها وفي مضمونها وفي كيفية استخدامها حتى باتت الصديق الذي لا يفارق الانسان في كل ضروفه و لا تستخدم فقط للاتصالات فقط بل للتسلية و مشاهدة العالم من وراء شاشة الهاتف .  و ضهرت الكثير من الشركات في اثناء ثورة الهواتف المحمولة منذ بدايتها ومن اشهر هاتان الشركتان التي يكاد جميع العالم يعرفهما هما ' شركة ابل صاحبة هاتف ايفون ' و ' شركة ساسمونج صاحبة نضام التشغيل أندرويد التي تطوره شركة جوجل ' وفي هذه المقالة سوف نناقش الفرق بين الشركتين وايهما افضل من ناحية الاستخدام و السرعة ."
namePpath = "https://www.trouko.com/questions/questions_technology/هل_الاندرويد_افضل_من_الايفون/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه  , 30 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}