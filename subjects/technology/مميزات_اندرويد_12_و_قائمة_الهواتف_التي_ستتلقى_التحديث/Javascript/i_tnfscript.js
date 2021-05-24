var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مميزات اندرويد 12 و قائمة الهواتف التي ستتلقى التحديث";
adPhoto = "../../../imgs/android12.png"
adDiscription = "اعلنت شركة جوجل عن أندرويد 12 في 18 فبراير 2021. و بحسب شركة جوجل أن اندرويد 11 يعد أكبر تغيير في التصميم في تاريخ اندرويد .يأتي اصدار اندرويد 12 مع تغييرات كبيرة في التصميم و في تحسين و تطوير الاعدادت و الادوات الذكية المساعدة ولوحة الاشعارات و الامان و الخصوصية و العديد من الاشياء التي سوف نتحدث عنها في هذه المقالة ."
namePpath = "https://trouko.com/subjects/technology/مميزات_اندرويد_12_و_قائمة_الهواتف_التي_ستتلقى_التحديث/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 24 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}