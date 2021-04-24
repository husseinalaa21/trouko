var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل الفيس بوك مربح حقاً";
adPhoto = "../../../imgs/brett-jordan-tWX_ho-328k-unsplash.jpg"
adDiscription = "فيسبوك هو موقع ويب ويعتبر أشهر وسائل التواصل الاجتماعي، فالمستخدمون بإمكانهم الانضمام إلى الشبكات التي تنظمها المدينة أو جهة العمل أو المدرسة أو الإقليم، وذلك من أجل الاتصال بالآخرين والتفاعل معهم كذلك، يمكن للمستخدمين إضافة أصدقاء إلى قائمة أصدقائهم وإرسال الرسائل إليهم، وأيضًا تحديث ملفاتهم الشخصية وتعريف الأصدقاء بأنفسهم ويشير اسم الموقع إلى دليل الصور الذي تقدمه الكليات والمدارس التمهيدية في الولايات المتحدة الأمريكية إلى أعضاء هيئة التدريس والطلبة الجدد، والذي يتضمن وصفًا لأعضاء الحرم الجامعي كوسيلة للتعرف إليهم و أذا كنت من مستخدمي فيسبوك فلا بد من انه قد شاهدت اعلانات على شكل منشورات أو فيديوهات , ولكن هل يربح صانعي الفيديوهات على فيسبوك المال عندما يشاهد الاشخاص فيديوهاتهم ."
namePpath = "https://www.trouko.com/subjects/else/هل_الفيس_بوك_مربح_حقاً/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggTwo"
ap.innerHTML ='<div class="img_p_sugg_pTw"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTw" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Tw'> <a class='s_sub_tTw' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTw">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTw'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTw" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}