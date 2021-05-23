var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "موعد صدور اندرويد 11 و قائمة بالهواتف التي ستتلقى التحديث الجديد";
adPhoto = "../../../imgs/android11.png"
adDiscription = "Android 11 هو نظام تشغيل من Google أعلنت عنه Google في 8 سبتمبر 2020 .<br /><br />و سوف تأتي الهواتف الذكية الجديدة التي تعمل بنضام اندرويد مزودة بنظام Android 11 المثبت مسبقًا ، على الرغم من أن التحديث لا يزال متاحًا للهواتف الذكية القديمة في جميع أنحاء العالم. اعتمادًا على الهاتف الذي تستخدمه ، قد تنتظر بعض الوقت - أو قد لا تحصل على التحديث مطلقًا.<br /><br />إذا كان لديك هاتف اندرويد منخفض المستوى ، فقد لا يأتيك اندرويد 11 على الإطلاق - ولهذا السبب صممت Google أيضًا Android 11 (إصدار Go) وهو إصدار خفيف من نظام التشغيل يعمل على الهواتف ذات 2 جيجابايت أو أقل من ذاكرة الوصول العشوائي ."
namePpath = "https://trouko.com/subjects/technology/موعد_صدور_اندرويد_11_و_قائمة_بالهواتف_التي_ستتلقى_التحديث_الجديد/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد  , 23 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}