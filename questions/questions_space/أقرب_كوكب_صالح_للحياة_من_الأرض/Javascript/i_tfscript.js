var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أقرب كوكب صالح للحياة من الأرض";
adPhoto = "../../../imgs/Centaur planet closest.jpg"
adDiscription = "يوجد عدد كبير جداً من الكواكب الشبيها بالارض و التي يشار الى أنها صالحة للحياة , وذلك نضراً لتوفر العوامل التي تساعد الانسان على العيش بها , فأذا كنت تقصد اي كوكب صالح للعيش وألا يكون توأم الارض ويتسم بنفس المقومات الصالحه للحياة على الارض حتى لو كانت ليست بطبيعية كالهواء مثلا حيث يكون بداخل المحطات المخصصة للسكن او البدلات , فسيكون اول جوب هو الكوكب الاحمر او المريخ وغيره من الكواكب القريبة , وذلك بسبب عدة عوامل يتسم بها هذا الكوكب , وقد كتبنا بالفعل مقالة لهذا الكوكب الرائع والذي سيصبح يوماً ما المستقبل البشر [ استعمار المريخ ] , ولكن اذا كان المقصود هو كوكب شبيه بالارض او كوكب يتسم بنفس عوامل الارض من هواء و مناخ و جاذبية .. فسنتطرق الى بعض الكواكب ومنها ما يلي ."
namePpath = "https://www.trouko.com/questions/questions_space/أقرب_كوكب_صالح_للحياة_من_الأرض/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه  , 30 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}