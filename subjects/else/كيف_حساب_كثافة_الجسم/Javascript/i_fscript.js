var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كيف حساب كثافة الجسم";
adPhoto = "../../../imgs/michael-d-unsplash.jpg"
adDiscription = "يتم استخدام الكثافة بشكل أساسي في الجيولوجيا وعلم الفلزات وغيرها من المجالات العلمية، كتحديد خصائص الصخور والمعادن والفلزات، ولتحديد قدرة جسمٍ ما على الطفو في سائل معين. و كثافة الجسم هي ببساطة ناتج قسمة كتلة الجسم على الحجم .كثافة الجسم = كتلة الجسم ÷ الحجم .11-6 الكتلة ببساطة هي مقدار ما يحتويه الجسم من مادة  أما  الحجم فهو الحيز الذي يشغله الجسم ."
namePpath = "https://trouko.com/subjects/else/كيف_حساب_كثافة_الجسم/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 1 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}