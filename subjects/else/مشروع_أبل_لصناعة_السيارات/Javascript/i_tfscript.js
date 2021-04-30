var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مشروع أبل لصناعة السيارات";
adPhoto = "../../../imgs/Apple-and-Hyundai-spolupracal%CC%8C.jpg"
adDiscription = "اعتباراً من عام 2018 بدأت شركة أبل بمشروع صناعه السيارات الكهربائية ( Apple electric car project ) والذي عينت فيه أكثر من 5000 موظف , ورغم أعلان الشركة للمشروع ألا أنها لم تقوم لغاية الان 2021 أبريل 24 بمناقشة أيًا من أبحاثها ذاتية للسيارات القيادة التي تعمل بالكهرباء .<br />و في ٢٤ أغسطس ٢٠١٨ ، أفيد أن إحدى سيارات Apple ذاتية القيادة قد تعرضت على ما يبدو لحادث تصادم ، عندما كانت من الخلف أثناء اختبار الطريق. وقع الحادث بينما كانت السيارة متوقفة في انتظار الاندماج في حركة المرور على بعد حوالي ٣.٥ ميل من مقر شركة آبل في كوبرتينو ، دون الإبلاغ عن وقوع إصابات. في ذلك الوقت ، ذكرت بي بي سي أن شركة آبل لديها ٦٦ سيارة بدون سائق مسجلة على الطرق ، مع ١١١ سائقًا مسجلين لتشغيل هذه السيارات.<br />و في أغسطس ٢٠١٨ ، كانت هناك تقارير عن براءة اختراع لشركة  لنظام يحذر الركاب مسبقًا بشأن ما ستفعله السيارة ذاتية القيادة ، وذلك لتخفيف الانزعاج من المفاجأة."
namePpath = "https://trouko.com/subjects/else/مشروع_أبل_لصناعة_السيارات/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 24 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}