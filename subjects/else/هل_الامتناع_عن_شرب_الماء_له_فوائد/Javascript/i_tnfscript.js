var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل الامتناع عن شرب الماء له فوائد";
adPhoto = "../../../imgs/drop-363_640.jpg"
adDiscription = "الماء هو عنصر الحياة و لولاه لما تشكلت الحياة , و تحتاج جميع الكائنات الحية شربه بشكل يومي , بل و أن شرب الماء بأكثر من حاجة الجسم الى الماء يعد مصدراً للشفاء من الامراض كالجفاف و مساعد للهضم و مساعد لوضائف عمل الكلى وغيرها الكثير ."
namePpath = "https://www.trouko.com/subjects/else/هل_الامتناع_عن_شرب_الماء_له_فوائد/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 28 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}