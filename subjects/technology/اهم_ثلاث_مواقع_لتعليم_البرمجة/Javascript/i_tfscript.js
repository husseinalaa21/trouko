var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "اهم ثلاث مواقع لتعليم البرمجة";
adPhoto = "../../../imgs/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
adDiscription = "تعلم البرمجة في الوقت الحالي مهم جدا كما ان من أكثر الوضائف المطلوب حالياً هي وضائف البرمجة و ذلك نضراً للتطور الهائل في مجال التكنلوجيا الذي شهده العالم في السنوات الاخيرة , و لغات البرمجة تتعدد في انواعها و استخداها فلغة برمجة مواقع الويب مثلا تختلف كل الاختلاف عن لغة برمجة التطبيقات و البرامج , و لا يمكننا تقديم اهمية لغة برمجة عن أخرى , فكل اللغات مهمة في المجال الذي تنتمي اليه ."
namePpath = "https://www.trouko.com/subjects/technology/اهم_ثلاث_مواقع_لتعليم_البرمجة/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه  , 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggTwo"
ap.innerHTML ='<div class="img_p_sugg_pTw"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTw" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Tw'> <a class='s_sub_tTw' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTw">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTw'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTw" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}