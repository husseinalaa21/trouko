var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أفضل هواتف الفئة المتوسطة لعام 2021";
adPhoto = "../../../imgs/phones2021.jpg"
adDiscription = "تعد الهواتف الرائد مثل Samsung Galaxy S21 Ultra أو iPhone 12 Pro ، مرتفعة السعر و لكن تأتي مع مواصفات مثالية , والكثير من الاشخاص قد يبحثو عن هواتف مشابها و لكن بسعر منخفض و الخبر السار أنه يوجد بالفعل هواتف شبيها ب Samsung Galaxy S21 Ultra أو iPhone 12 Pro و بسعر منخفض و بعضها نصف السعر أو حتى أقل .و تهدف الهواتف الذكية متوسطة المدى إلى الجمع بين ميزات المستوى الرائد والقيمة الكبيرة. قد تضطر إلى التنازل قليلاً عن جانب أو آخر ، مثل الكاميرا أو جودة التصميم ، ولكن غالبًا ما يكون الأمر يستحق تمامًا ."
namePpath = "https://trouko.com/subjects/technology/أفضل_هواتف_الفئة_المتوسطة_لعام_2021_/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 21 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}