var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "اناناس"

adPhoto = 'https://img.youm7.com/ArticleImgs/2018/11/20/75286-%D8%A7%D9%86%D8%A7%D9%86%D8%A7%D8%B3.jpg'

adDiscription = "فاكهة الأناناس المعروفة هي في الواقع رأس زهرة معقدة تتشكل حول الجذع. كل عين على السطح هي القاعدة المجففة لزهرة صغيرة. الأناناس هو الفاكهة الوحيدة المزروعة التي يمر جذعها الرئيسي بالكامل. يحتوي التاج العلوي للأوراق على برعم يشير ، عندما تنضج ، إلى أن الفاكهة جاهزة للتقطيع. عادة ما تستخدم التيجان من أعلى الفاكهة للتكاثر لأن الأناناس لا يحتوي على بذور قابلة للحياة ؛ في بعض الأحيان ، يتم استخدام قسائم من قاعدة الفاكهة أو المصاصات إذا كانت مادة الزراعة غير متوفرة. ينمو النبات على ارتفاع 1 م ؛ المحصول الأول جاهز للحصاد بعد 18 شهرًا تقريبًا من الزراعة. نظرًا لأن النبات يستخدم الماء بكفاءة عالية ، فقد يزرع الأناناس في مناطق منخفضة الأمطار نسبيًا (50 إلى 200 سم)." 
+b+"الأناناس موطن لأمريكا الجنوبية وجلبه المستكشفون الإسبان إلى أوروبا. بدأ الزراعة على نطاق واسع في هاواي في وقت مبكر من القرن التاسع عشر. بلغ نمو الصناعة ذروته في الخمسينات ، ثم انخفض ببطء تحت ضغط المنافسة الدولية. اليوم ، يأتي الجزء الأكبر من محصول الأناناس في العالم من تايلاند والفلبين والبرازيل. تشمل الاستخدامات التقليدية تخمير نبيذ الأناناس ، وإنتاج الألياف ، والاستخدام الطبي للحث على الحيض ، والتحريض على الإجهاض ، وقتل الأميبا الطفيلية ، وطرد الديدان."

// path
namePpath = "https://www.trouko.co/subjects/food_fruits_vegetables/اناناس/"
nameP = namePpath.replace('https://www.trouko.co/',"")
// path


addTitleIpage = document.getElementById(nameP+'_pag_n_232');

addt(titleIn)

function addt(m){
    var textDis = adDiscription.slice(0, 80);
    var o = document.createElement('div')
    o.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
    addTitleIpage.append(o)
}