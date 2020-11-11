var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "سبيس اكس";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/SpaceX_Logo_Black.png/1920px-SpaceX_Logo_Black.png"
adDiscription = "و تعرف بتقنيات استكشاف الفضاء ويطلق عليها اسم سبيس إكس وهي شركة خاصة أمريكية تختص بصناعات هندسة الطيران والفضاء الجوي والرحلات الفضائية .<br>بدأت شركة سبيس اكس وتحملت عدة خسائر فيما تقوم به من أعمال، ولكن أنها استطاعت خلال سنوات قليلة أن تصبح احد اهم الشركات الخاصه المتخصصه برجلات الفضاء ، فيما يسمى برنامج COTS-Programms ، والذي يعمل على تموين محطة الفضاء الدولية بعد انتهاء برنامج مكوك الفضاء الذي كانت تقوم به ناسا. بجانب ذلك تقوم الشركة بتوصيل حمولات إلى الفضاء مثل الأقمار الصناعية المختلفة في الإطار التجاري.<br>تعتبر شركة سبيس إكس حاليا الشركة الأهلية الوحيدة في العالم التي تقوم بإرسال مركبات فضاء إلى مدار حول الأرض، وتستطيع إعادتها إلى الأرض بسلام.<br>مازاد من عامل صعود الشركه و ازدهارها , بسبب ان ناسا منذ 2010 بتفويض شركات فضاء خاصة للقيام ببعض مشاريعها بعدما خفض الكونغرس الأمريكي ميزانية ناسا، من ضمن تلك الشركات الخاصة التي أصبح لها شأن كبير في تطوير تقنيات السفر إلى الفضاء."
namePpath = "https://www.trouko.co/subjects/space/سبيس_اكس/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}