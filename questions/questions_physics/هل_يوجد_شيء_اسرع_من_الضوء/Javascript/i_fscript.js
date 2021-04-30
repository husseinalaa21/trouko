var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل يوجد شيء اسرع من الضوء";
adPhoto = "../../../imgs/night-photograph.jpg"
adDiscription = "سرعة الضوء في الفضاء هي ثابت فيزيائي يرمز له في العادة بالرمز  ' c ' , وتساوي سرعة الضوء 299,792,458 متر لكل ثانية  , وبحسب قوانياً النسبية الخاصة التي طرحها العالم الفيزيائي ' آلبرت آينشتاين ' في عام 1905 أن سرعة الضوء هي أقصى سرعة تستطيع أن تسافر بها كل أشكال الطاقة أو المادة . كما وأنها  سرعة سفر الجسيمات عديمة الكتلة ومجالاتها المتلازمة (بما في ذلك الإشعاع الكهرومغناطيسي مثل الضوء) عبر الفراغ . وبحسب القوانين الفيزيائية للكون أنه لا توجد سرعة اسرع من الضوء بل و اذا افترضاً أن جسم ما استطاع أن يسبق سرعة الضوء ; فسوف يحترق على الفور ويتلاشى .<br />"
namePpath = "https://trouko.com/questions/questions_physics/هل_يوجد_شيء_اسرع_من_الضوء/"
infSuGuPageOn = '<p>  أسئلة / الفيزياء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 30 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}