var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو المستقبل البترولي";
adPhoto = "../../../imgs/petroleum.jpg"
adDiscription = "يعد البترول مصدر لإنتاج الطاقة منذ القرن التاسع عشر. تم اقتراح مفهوم ذروة النفط من قبل نظرية إم كينج هوبرت . و لطالما لعب البترول دورًا حيويًا في التاريخ الاقتصادي والاجتماعي والسياسي للعالم.<br />أن ذروة النفط لا تعني نفاد احتياطيات البترول ، ولكن تم الوصول إلى الحد الأقصى لمعدل استخراج البترول وأن طرق الاستخراج اللاحقة لا يمكن أن تزيد المعدل أكثر. وبالتالي سينخفض ​​المعدل الإجمالي لإنتاج البترول. هذه الظاهرة تشكل خطرا على مستقبل البترول. نظرًا لتناقص إمدادات النفط الخام التي يمكن استخراجها بسهولة وزيادة الطلب ، كما و أصبح استخراج النفط الثقيل الذي كان من غير المجدي اقتصاديًا لاستخراجه بسبب التكاليف الأولية المرتفعة مربحًا للإنتاج. نظرًا لأن 70٪ من إجمالي النفط الخام المنتج تستخدمه صناعة النقل ، فقد تم بذل جهد كبير لإنتاج سيارة كهربائية قادرة على أداء مشابه لأداء المركبات التي تعمل بالبنزين. <br />ويعد العامل الرئيسي الوحيد الذي يعيق السيارات الكهربائية هو كيفية تخزينها للكهرباء عندما لا تكون السيارة قيد الاستخدام. يمكن للسيارات الكهربائية أن تقلل من استخدام البترول ، ولكن النقطة البارزة هي مصدر الكهرباء المستخدمة لشحن بطارياتها. "
namePpath = "https://trouko.com/subjects/else/ما_هو_المستقبل_البترولي/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد  , 16 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}