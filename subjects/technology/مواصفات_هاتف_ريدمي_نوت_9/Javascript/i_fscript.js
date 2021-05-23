var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مواصفات هاتف ريدمي نوت 9";
adPhoto = "../../../imgs/redminote9.webp"
adDiscription = "اصدرت شركة Xiaomi هاتف  Xiaomi Redmi Note 9 رسميًا في أبريل 2020. و يأتي الجهاز مزود بأجهزة استشعار مثل بصمة الإصبع (مثبتة في الخلف) ومقياس التسارع والجيروسكوب والقرب والبوصلة.كما و يتميز الهاتف الذكي بمنفذ الأشعة تحت الحمراء ، ومنفذ USB 2.0 من النوع C ، وراديو مزود بالتسجيل ، وبلوتوث 5.0. يعمل الهاتف الذكي ببطارية Li-Po 5020 mAh غير قابلة للإزالة + شحن سريع 18 واط + شحن عكسي 9 واط.و يعمل الهاتف بنظام التشغيل Android 10.0 + MIUI 11 مما يوفر تشغيلًا سلسًا للجهاز. يتوفر هاتف Xiaomi Redmi Note 9 بألوان مختلفة مثل Forest Green و Midnight Gray و Polar White."
namePpath = "https://trouko.com/subjects/technology/مواصفات_هاتف_ريدمي_نوت_9/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد, 23 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}