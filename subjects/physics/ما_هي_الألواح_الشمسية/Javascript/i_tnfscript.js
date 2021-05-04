var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي الألواح الشمسية";
adPhoto = "../../../imgs/jose-g-orteg.jpg"
adDiscription = "تعمل الألواح الشمسية عن طريق السماح للجزيئات الضوء ، أو الفوتونات ، بإخراج الإلكترونات من الذرات ، وتوليد تدفق الكهرباء . كما أن الألواح الشمسية تتكون من العديد من الوحدات الأصغر التي تسمى الخلايا الكهروضوئية. والتي تعني ' تعني الخلايا الكهروضوئية ببساطة أنها تحول ضوء الشمس إلى كهرباء ' . وتشكل العديد من الخلايا المرتبطة معًا لوحًا شمسيًا .أنتج الباحثون في الآونة الأخيرة ، خلايا شمسية فائقة النحافة ومرنة بسمك 1.3 ميكرون فقط - حوالي 1/100 من عرض شعرة الإنسان - وأخف 20 مرة من ورقة مكتب. و أفاد العلماء في دراسة نُشرت في عام 2016 في مجلة ' أورجانيك إلكترونيكس ' ، أن الخلايا في الواقع خفيفة للغاية لدرجة أنها يمكن أن تجلس فوق فقاعة صابون ، ومع ذلك فإنها تنتج طاقة بنفس كفاءة الخلايا الشمسية القائمة على الزجاج . "
namePpath = "https://trouko.com/subjects/physics/ما_هي_الألواح_الشمسية/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 5 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}