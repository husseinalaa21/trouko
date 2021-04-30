var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "السفر بين النجوم";
adPhoto = "https://www.al-watan.com/Data/20181117/Images/20_5_1.jpg"
adDiscription = "لا شك ان السفر عبر الفضاء امرا ممكناً ولكن يحتاج الى تطور مذهل في تكنلوجيا الصواريخ الفضاىية و المكوكات , فقد يواجه الأشخاص الأوائل الذين سيستعمرون عالما خارج نظامنا الشمسي صعوبة في وصف موطنهم الجديد للناس على الأرض. يبعد أقرب نجم إلى الأرض، والذي يدعى القنطور الأقرب Proxima Centauri، عنا 4.2 سنة ضوئية، بعيدا جدا لدرجة أن الوصول إليه باستخدام التكنولوجيا الحالية سيستغرق عشرات آلاف السنين، وبطبيعة الحال، فإن أغلب النجوم أبعد كثيرا من ذلك، فيبلغ قطر مجرة درب التبانة 100 000 سنة ضوئية ."
namePpath = "https://trouko.com/subjects/space/السفر_بين_النجوم/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 9 فبراير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}