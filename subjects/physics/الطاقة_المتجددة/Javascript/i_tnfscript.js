var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "الطاقة المتجددة";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bioreaktor_quer2.jpg/220px-Bioreaktor_quer2.jpg"
adDiscription = "الحصول على الطاقة بشكل متجدد قد يبدو أمراً غريباً بعض الشيء , ولكن في الواقع أن كل شيء في الحياة هو متجدد و بطريقة ليست بتكرارية , و الطاقة المتجددة هي الطّاقة المستمدة من الموارد الطبيعية التي تتجدد أي الّتي لا تنفذ . تختلف جوهريًا عن الوقود الأحفوري من بترول وفحم وغاز الطبيعي، أو الوقود النووي الّذي يستخدم في المفاعلات النووية."
namePpath = "https://www.trouko.co/subjects/physics/الطاقة_المتجددة/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggThree"
ap.innerHTML ='<div class="img_p_sugg_pTh"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTh" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Th'> <a class='s_sub_tTh' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTh">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTh'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTh" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTh">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}