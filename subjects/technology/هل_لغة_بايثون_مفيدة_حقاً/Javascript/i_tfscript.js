var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل لغة بايثون مفيدة حقاً";
adPhoto = "../../../imgs/pyThonLan.jpg"
adDiscription = "تعتبر لغة بايثون من لغة سهلة الفهم و التعلم أذ أنها من اشهر لغات البرمجة في الوقت الحالي و قدم تم تطوير بايثون في معهد الرياضيات والمعلوماتية الهولندي في مدينة أمستردام على يد جايدو فان روسم في أواخر ثمانينات القرن العشرين، وكان أول إعلان عنها في عام 1991م. كُتبت نواة اللغة باستعمال لغة سي. أطلق روسم الاسم 'بايثون' على لغته تعبيرًا عن إعجابه بفِرقَة مسرحية هزلية شهيرة من بريطانيا، كانت تطلق على نفسها اسم مونتي بايثون."
namePpath = "https://www.trouko.com/subjects/technology/هل_لغة_بايثون_مفيدة_حقاً/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggTwo"
ap.innerHTML ='<div class="img_p_sugg_pTw"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTw" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Tw'> <a class='s_sub_tTw' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTw">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTw'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTw" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}