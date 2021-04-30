var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "اهم مكونات جهاز الحاسوب";
adPhoto = "../../../imgs/business_640.jpg"
adDiscription = "يعد جهاز الحاسوب من أهم اساسيات العمل و التعلم في الوقت الحاضر , و ذلك بسبّ التطور الكبير في مجال التقنية و الانترنت ,  و مع أزدياد الطلب على اجهزة الكمبيوتر و اللابتوبات قد يتفاجئ البعض بسبب سعرها المرتفع بالنضر الى مواصفاتها , مما يجعل الكثير من الاشخاص يميلون الى تجميع كمبيوترهم الخاص بنفسهم ."
namePpath = "https://trouko.com/subjects/else/اهم_مكونات_جهاز_الحاسوب/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 28 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}