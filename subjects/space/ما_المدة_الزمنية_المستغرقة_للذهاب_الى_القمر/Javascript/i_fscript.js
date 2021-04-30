var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما المدة الزمنية المستغرقة للذهاب الى القمر";
adPhoto = "../../../imgs/rocket-940.jpg"
adDiscription = "اثارت رحلة أبولو 11 عام 1969 يوليو 20 الى القمر , حدثاً عضيماً للبشرية حيث أنها كانت الرحلة المأهولة الثاني الى القمر , كما وأنها اثارت جدلاً كبيراً في المجتمعات العلمية بسبب ان ناسا لم ترسل بعثات مأهولة الى القمر منذ قرابة 30 سنة وخاصة في ضل التطور في مجال التكنلوجيا , ولكن تعهدت وكالة الفضاء الدولية ' ناسا ' بالشراكة مع شركة سبيس أكس لأرسال بعثة مأهولة الى القمر بحلول عام 2024 ."
namePpath = "https://trouko.com/subjects/space/ما_المدة_الزمنية_المستغرقة_للذهاب_الى_القمر/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 29 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}