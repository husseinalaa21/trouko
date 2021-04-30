var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي العملات المشفرة";
adPhoto = "../../../imgs/cryptocurre.jpg"
adDiscription = "شهدت الاعوام القليلة الماضية تطور هائل في مجال العملات الرقمية , و شهدت ايضاً ارتفاع هائل في سعرها . و ارتفعت اسعار العملات الرقمية بشكل مأهول مما جعلها تكون أغلى من الدولار و حتى الذهب . ومن أشهر العملات الرقمية التي شهدت ارتفاع كبير في سعرها هي البيتكوين و الايثيريوم مؤخراً . مما جعل الكثير من الاشخاص يعتمدون على الربح منها , فهل العملات المشفرة أو ' العملات الرقمية ' فيها خطورة ؟, وما هي ؟"
namePpath = "https://trouko.com/subjects/else/ما_هي_العملات_المشفرة/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 29 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}