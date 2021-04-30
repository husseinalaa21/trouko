var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "الطاقة المتجددة";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bioreaktor_quer2.jpg/220px-Bioreaktor_quer2.jpg"
adDiscription = "الحصول على الطاقة بشكل متجدد قد يبدو أمراً غريباً بعض الشيء , ولكن في الواقع أن كل شيء في الحياة هو متجدد و بطريقة ليست بتكرارية , و الطاقة المتجددة هي الطّاقة المستمدة من الموارد الطبيعية التي تتجدد أي الّتي لا تنفذ . تختلف جوهريًا عن الوقود الأحفوري من بترول وفحم وغاز الطبيعي، أو الوقود النووي الّذي يستخدم في المفاعلات النووية."
namePpath = "https://trouko.com/subjects/physics/الطاقة_المتجددة/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}