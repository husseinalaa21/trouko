var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أفضل هواتف الفئة الاقتصادية لعام 2021";
adPhoto = "../../../imgs/google-pixel-4a.jpg"
adDiscription = "إذا كنت تبحث عن هاتف جديد بميزانية محدودة ، هناك هواتف رائعة وبأسعار معقولة في السوق و من شركات معروفة عالمياً مثل أبل و جوجل و سامسونج .<br /><br />تقوم هذه الشركات بنشر ثروة من الميزات التي تتمتع بها هواتفهم الرئيسية وصولاً إلى خيارات أقل تكلفة. مما يدفع الشركات الاخرى  لتحدي العديد من هواتف الشركات العالمية التي تقدم تضحيات ذكية لإبقاء التكاليف منخفضة. ضع في اعتبارك أنه من المستحيل شراء هاتف يفعل كل ما يفعله الهاتف الاعلى ثمناً بسعر اقتصادي ، وننصحك  بتحديد أولويات الميزات الأكثر أهمية بالنسبة لك. وستنتهي بهاتف رائع يمكنك استخدامه لسنوات قادمة."
namePpath = "https://trouko.com/subjects/technology/أفضل_هواتف_الفئة_الاقتصادية_لعام_2021/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 21 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}