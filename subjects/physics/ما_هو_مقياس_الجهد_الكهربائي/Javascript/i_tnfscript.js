var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو مقياس الجهد الكهربائي";
adPhoto = "../../../imgs/Electricity.jpg"
adDiscription = "يستخدم جهاز مقياس الجهد الكهربائي أو الڤولتميتر لقياس الجهد الكهربائي، و يتكون عادة من غلفانومتر ذي ملف متحرك موصل على التوالي بمقاومة كبيرة . و نظرًا لأن مقاومة الجهاز ثابتة فإن التيار الكهربائي المار في الجهاز يتناسب طرديًا مع الجهد عند النقطتين اللتين يوصل بهما ."
namePpath = "https://trouko.com/subjects/physics/ما_هو_مقياس_الجهد_الكهربائي/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 15 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}