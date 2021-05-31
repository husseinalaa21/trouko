var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "لماذا يعد الايفون افضل من الاندرويد";
adPhoto = "../../../imgs/iphpne11.jpg"
adDiscription = "تعتبر شركة أبل الشركة الاولى عالمياً في صناعة الهواتف منذ طرحها لأول هاتف ايفون ( الجيل الاول ) في 2007 , ومنذ ذلك الحين وشركة أبل تتصدر في كل مرة تطرح فيها منتج جديد أو هاتف جديد الصحف الاعلامية و يقبل الناس على الشركة .في 2008 و بعد عام تقريباً من طرح شركة أبل ايفون ( الجيل الاول ) قامت شركة جوجل بأطلاق نضامها الخاص المعروف بالاندرويد . ولسهولة التعديل على نضام الاندرويد قامت العديد من شركات الهواتف المعروفة مثل سامسونج باتخاذ نضام تشغيل اندرويد كنضام لهواتفها .وفي هذه المقالة سنقوم بمقارنة بين هواتف الايفون و الهواتف الذكية التي تأتي مع نضام تشغيل الاندرويد  ."
namePpath = "https://trouko.com/subjects/technology/لماذا_يعد_الايفون_افضل_من_الاندرويد/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 18 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}