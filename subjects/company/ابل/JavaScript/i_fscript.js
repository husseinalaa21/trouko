var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "ابل"

adPhoto = "https://dynamicassets.azureedge.net/uploads/store/logo/5dfa6eaa39bf1.png"

adDiscription = " شركه أبل , وهي شركه متخصصه في صناعه الاجهزة الذكيه و الكمبيوترات و الاجهزة اللوحيه و المعالجات وغيرها من المجالات الالكترونية , شركه أبل استطاعت تحويل اسم  التفاحه مناسم يدل فقط على الطعام الى اسم يدل على الذكاء و الابتكار و التمييز ."
+b+' و تشمل منتجاتُ الشركة الأكثر شهرةً أجهزة حواسيب "ماكينتوش"، والجهاز الموسيقي "آي بود" (iPod) والجهاز المحمول "آي فون"(iPhone). وتتضمن برامج شركة أبل نظامَ التشغيل "ماك أو إس عشرة" (Mac OS X)، ومتصفحَ وسائل الإعلام "آي تونز" (iTunes)، ومجموعةَ "آي لايف" (iLife) لبرمجيات الوسائط المتعددة والبرمجيات الإبداعية، ومجموعةَ "آي وورك" (iWork) للبرامج الإنتاجية، وبرنامجَ التصميم "فاينال كات ستوديو" (Final Cut Studio)، والجهاز المحمول "آي باد"(iPad). ومجموعةً من المنتجات البرمجية لصناعة الأفلام والمواد السمعية، ومجموعة لوجيك ستوديو للأدوات السمعية. تدير شركة أبل أكثر من مئتين وخمسين متجرا من متاجر التجزئة في تسعة بلدان، ومتجرا على شبكة الإنترنت تباعُ عليهِ الأجهزة والمنتجات البرمجية.'
+b+'تأسست شركة أبـل في الأول من نيسان، عام 1976، على يد "ستيف جوبز" و"ستيف وزنياك" و"رونالد واين"،'

// path
namePpath = "https://www.trouko.co/subjects/company/ابل/"
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