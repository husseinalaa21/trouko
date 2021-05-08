var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل سوف تتجه شركة سبيس أكس للرحلات السياحية";
adPhoto = "../../../imgs/satellite-693216_640.jpg"
adDiscription = "اعلنت شركة سبيس أكس الامريكية عن نيتها إرسال ثلاثة سياح لقضاء عشرة أيام ، معظمها ستكون على متن محطة الفضاء الدولية في نهاية عام 2021 , وجاء هذا الاعلان للمرة الثانية في هذه السنة ، و ستستخدم شركة سبيس اكس صاروخها 'فالكون 9' وسفينة الركاب الفضائية الجديدة <a href='https://trouko.com/subjects/space/مركبة_سبيس_إكس_دراجون/' > دارجون </a> لنقل السياح من الأرض إلى الفضاء الخارجي . وفي وقت لاحق وقعت سبيس-إكس اتفاقا مع شركة 'آكسيوم سبيس' لإتاحة الفرصة أمام السياح لقضاء 'إجازة مدارية' حول الأرض ."
namePpath = "https://trouko.com/subjects/space/هل_سوف_تتجه_شركة_سبيس_أكس_للرحلات_السياحية/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد, 25 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}