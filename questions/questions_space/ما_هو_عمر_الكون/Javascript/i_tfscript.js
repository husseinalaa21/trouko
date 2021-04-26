var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو عمر الكون";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg/1200px-NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg"
adDiscription = "أن عمر الكون ، في علم الكون الفيزيائي هو المدة الزمنية المستغرقة منذ نشأه الكون أي ' منذ الانفجار العظيم ' لحد الآن (بوجود احتمالات عدة في التغير الزماني). , و يُقدّر عمر الكون بنحو ( 13.799±0.021 ) مليار سنة طبقًا لنموذج 'لامبدا-سي دي إم Lambda-CDM concordance model'.<br /><br />و ترتبط مشكلة قياس عمر الكون ارتباطًا وثيقًا مع مشكلة حساب قيم المقاييس الكونيّة .<br /><br />و بدأ ظهور مفهوم أن عمر الأرض يقدّر بملايين السنين في القرن الثامن عشر . حيث اعتقد العلماء ف القرن التاسع عشر وفي بدايات القرن العشرين أن الكون ثابت ولانهائيّ مع بعض النجوم التي تمضي وتذهب ، إلا أن التغيرات الكبيرة ليس لها مكان في الكون في نظرهم ."
namePpath = "https://www.trouko.com/questions/questions_space/ما_هو_عمر_الكون/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}