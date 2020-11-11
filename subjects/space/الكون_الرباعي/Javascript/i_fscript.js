var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPage;
titleIn = "الكون الرباعي";
adPhoto = "https://quran-m.com/firas/ar_photo/1/22.jpg"
adDiscription = "الكون الرباعي و هو مفهوم بسيط لأبعاد الكون , الابعاد المكانية الثلاثة الطول و العرض و الارتفاع و البعد الزمني الزمان , وهو الكون الذي نعيش فيه , و لكن ماذا لو كان الكون اكثر من اربع أبعاد ؟<br>"
namePpath = "https://www.trouko.co/subjects/space/الكون_الرباعي/"
infSuGuPage = "تاريخ النشر 2020/9/1 "+"التصنيفات / الفضاء"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<p class="infoPageSuQu">'+infSuGuPage+'</p>'+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}