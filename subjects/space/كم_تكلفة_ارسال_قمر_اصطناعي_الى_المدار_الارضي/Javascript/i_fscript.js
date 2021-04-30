var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كم تكلفة ارسال قمر اصطناعي الى المدار الارضي";
adPhoto = "../../../imgs/satellite40.jpg"
adDiscription = "يتوجه العالم في الوقت الحالي الى الاعتماد على تكنلوجيا الاتصالات , الامر الذي يدعو الكثير من الشركات و الدول الى الاعتماد على الاقمار الاصطناعية بشكل اساسي . مما جعل الشركات  المتخصصة في مجال الصواريخ و الفضاء الى التنافس لجعل الانتقال الفضاء و عبور المدار الارض امراً سهل , فمثلا شركة سبيس امضت سبع سنوات تقريباً لخلق وسيلة  تمكنهم من الذهاب الى الفضاء و قذف الحمولة ثم المعاودة الى الارض ولا شكل أنها نجحت في ذلك . و بالطبع يوجد العديد من الشركات ووكالات الطياران تنافس شركة سبيس في ايصال الاقمار الاصطناعي او الحمولة الى الفضاء الخارجي ."
namePpath = "https://trouko.com/subjects/space/كم_تكلفة_ارسال_قمر_اصطناعي_الى_المدار_الارضي/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 30 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}