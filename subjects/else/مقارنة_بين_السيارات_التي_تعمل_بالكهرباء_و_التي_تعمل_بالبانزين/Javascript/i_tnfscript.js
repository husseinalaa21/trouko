var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مقارنة بين السيارات التي تعمل بالكهرباء و التي تعمل بالبانزين";
adPhoto = "../../../imgs/143-1-tesla-4.jpeg"
adDiscription = "تعد السيارات من اهم رق تنقل الاشخاص , و تنقسم السيارات إلى عدة أنواع منها السيارات الصغيرة الخاصة، وأكثرها يمتلكها الأناس العاديون ويستخدمونها للذهاب إلى العمل أو تنقل العائلة من مكان إلى آخر أو للقيام بالرحلات ومنها الحافلات الكبيرة التي تستخدم لنقل الركاب وهي من وسائل النقل العام المنتشرة في جميع البلاد ومنها الكبيرة، الشاحنات، التي تستخدم لنقل البضائع , وفي الاونه الاخيرة ازداد التطور في مجال صناعه السيارات سواء لغرض الرفاهية أو لغرض التنقل , وازداد تطور السيارات التي تعمل بالكهرباء بشكل غير مسبوق ."
namePpath = "https://trouko.com/subjects/else/مقارنة_بين_السيارات_التي_تعمل_بالكهرباء_و_التي_تعمل_بالبانزين/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}