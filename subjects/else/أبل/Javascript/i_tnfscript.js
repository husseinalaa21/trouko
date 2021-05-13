var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أبل";
adPhoto = "https://dynamicassets.azureedge.net/uploads/store/logo/5dfa6eaa39bf1.png"
adDiscription = "تعرف شركة أبل بأنها متخصصه في صناعه الاجهزة الذكيه و الكمبيوترات و الاجهزة اللوحيه و المعالجات وغيرها من المجالات الالكترونية , شركه أبل استطاعت تحويل اسم التفاحه الذي يدل فقط على الطعام الى اسم يدل على الذكاء و الابتكار و التمييز .منتجات أبل تشمل أجهزة حواسيب 'ماكينتوش'، والجهاز الموسيقي 'آي بود' 11-4iPod11-5 والجهاز المحمول 'آي فون'11-4iPhone11-5. وتتضمن برامج شركة أبل نظامَ التشغيل 'ماك أو إس عشرة' 11-4Mac OS X11-5، ومتصفحَ وسائل الإعلام 'آي تونز' 11-4iTunes11-5، ومجموعةَ 'آي لايف'11-4iLife11-5 لبرمجيات الوسائط المتعددة والبرمجيات الإبداعية، ومجموعةَ 'آي وورك' 11-4iWork11-5 للبرامج الإنتاجية، وبرنامجَ التصميم 'فاينال كات ستوديو '11-4Final Cut Studio11-5، والجهاز المحمول 'آي باد'11-4iPad11-5.ومجموعةً من المنتجات البرمجية لصناعة الأفلام والمواد السمعية، ومجموعة لوجيك ستوديو للأدوات السمعية.تدير شركة أبل أكثر من مئتين وخمسين متجرا من متاجر التجزئة في تسعة بلدان، ومتجرا على شبكة الإنترنت تباعُ عليهِ الأجهزة والمنتجات البرمجية. ويجدر الذكر بأنها تأسست في الأول من نيسان، عام 1976، على يد 'ستيف جوبز' و'ستيف وزنياك' و'رونالد واين'،"
namePpath = "https://trouko.com/subjects/else/أبل/"
infSuGuPageOn = '<p>  المواضيع / متنوعة  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 28 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}