var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي المواد الموصلة للكهرباء";
adPhoto = "../../../imgs/electricity-access.jpg"
adDiscription = "المواد الموصلة للكهرباء هي اجسام قادره على تمرير تيار كهربائي. في كثير من الأحيان، و بشكل عام تكون المعادن هي الموصلة كهربائياً، و تعد الفضة والنحاس والذهب هي المواد الاكثر ايصلاً للكهرباء . وفي هذه المقالة سوف نتحدث المواد الموصلة للكهرباء بشكل عام ."
namePpath = "https://trouko.com/subjects/physics/ما_هي_المواد_الموصلة_للكهرباء/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد, 16 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}