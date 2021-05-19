var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كم عدد الكواكب في مجموعتنا الشمسية";
adPhoto = "../../../imgs/solar-system.jpg"
adDiscription = "تحتوي مجموعتنا الشمسية على ثمانية كواكب تدور حول الشمس وهي : عطارد ، الزهرة ، الأرض ، المريخ ، المشتري ، زحل ، أورانوس ، و نبتون. و يعد النضام الشمسي نظام الكوكبي يتكون من الشمس وجميع ما يَدور حولها من أجرام بما في ذلك الأرض والكواكب الأخرى و حزام كايبر . و يَشمل النظام الشمسي أجراماً أخرى أصغر حجماً هي الكواكب القزمة والكويكبات والنيازك والمذنبات، إضافة إلى سحابة رقيقة من الغاز والغبار تعرف بالوسط بين الكوكبي. كان بلوتو في السابق يعتبر كوكبًا تاسعًا تابعًا ل المجموعة الشمسية. ولكن في يوم 24 أغسطس من العام 2006، قام الاتحاد الفلكي الدولي بإنزال رتبه 'بلوتو' من كوكب إلى كوكب قزم، وأصبح نظامنا الشمسي يمتلك 8 كواكب رئيسية فقط، أبعدها هو كوكب نبتون بحسب التعريف الجديد."
namePpath = "https://trouko.com/subjects/space/كم_عدد_الكواكب_في_مجموعتنا_الشمسية/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 20 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}