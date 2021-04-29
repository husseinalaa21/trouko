var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "بعثة مأهولة قادمة الى القمر بحلول عام 2024";
adPhoto = "../../../imgs/mNasa.jpg"
adDiscription = "تخطط وكالة الفضاء الدولية ( ناسا ) بالتعاون مع شركة سبيس أكس لارسالة بعثة ماهولة الى القمر بحلول عام 2024 , وهي ستكون أول رحلة ماهولة الى القمر منذ اكثر من 30 عام . واطلقت ناسا على مشروعها اسم أرتميس Artemis .<br /><br />سيطلق صاروخ نظام الإطلاق الفضائي القوي التابع للوكالة أربعة رواد فضاء على متن مركبة أوريون الفضائية في رحلتهم التي تستغرق عدة أيام إلى مدار حول القمر. هناك ، سينتقل اثنان من أفراد الطاقم إلى نظام سبيس إكس للهبوط البشري (HLS) في المرحلة الأخيرة من رحلتهم إلى سطح القمر. بعد أسبوع تقريبًا من استكشاف السطح ، سيصعدون إلى مركبة الهبوط في رحلتهم القصيرة إلى المدار حيث سيعودون إلى أوريون وزملائهم قبل العودة إلى الأرض."
namePpath = "https://www.trouko.com/subjects/space/بعثة_مأهولة_قادمة_الى_القمر_بحلول_عام_2024/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 28 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}