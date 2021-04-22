var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "الكون الرباعي";
adPhoto = "https://quran-m.com/firas/ar_photo/1/22.jpg"
adDiscription = "الكون الرباعي و هو مفهوم بسيط لأبعاد الكون , الابعاد المكانية الثلاثة الطول و العرض و الارتفاع و البعد الزمني الزمان , وهو الكون الذي نعيش فيه , و لكن ماذا لو كان الكون اكثر من اربع أبعاد ؟<br />"
namePpath = "https://www.trouko.com/subjects/space/الكون_الرباعي/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 9 نوفمبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggThree"
ap.innerHTML ='<div class="img_p_sugg_pTh"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTh" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Th'> <a class='s_sub_tTh' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTh">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTh'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTh" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTh">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}