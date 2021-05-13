var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي الخاصية التي تحدد انغمار جسم صلب في سائل";
adPhoto = "../../../imgs/hans-reniers-l.jpg"
adDiscription = "بحسب مبدأ أرخميدس فأن الخاصية التي تحدد امكانية انغمار جسم صلب في سائل هي الكثافة، وذلك عندما تلعب الكثافة دورًا مهمًا  .و للطفو دور مهم في تحديد كثافة الجسم , و الطوف ايضاً هو القوة المؤثرة على جسم مغمور جزئيًا أو كليًا في السائل، ويتولد الطفو بسبب اختلاف الضغط بين الجانبين المتقابلين للجسم المغمور في السائل الثابت، بسبب وزنها ."
namePpath = "https://trouko.com/subjects/physics/ما_هي_الخاصية_التي_تحدد_انغمار_جسم_صلب_في_سائل/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 1 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}