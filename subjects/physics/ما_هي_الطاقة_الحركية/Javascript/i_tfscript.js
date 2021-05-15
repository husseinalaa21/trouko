var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي الطاقة الحركية";
adPhoto = "../../../imgs/kinitect-energy.jpg"
adDiscription = "تعد الطاقة الحركية نوع من انواع الطاقة التي يملكها الجسم بسبب حركته،وهي تُساوي القوة اللازمة لتسريع جسم ما من حالة السكون إلى سرعة معُينة، سواء كانت سرعة مستقيمة أو زاويّة. و الطاقة الحركية لا تعتمد فقط على حركة الجسم ولكن تعتمد أيضًا على كتلة الجسم .<br />وكمثال ايضاً على الطاقة الحركية شخص يمشي ، كرة بيسبول ملقاة ، فتات تسقط من طاولة ، وجسيم مشحون في مجال كهربائي كلها أمثلة على الطاقة الحركية في العمل."
namePpath = "https://trouko.com/subjects/physics/ما_هي_الطاقة_الحركية/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت  , 15 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}