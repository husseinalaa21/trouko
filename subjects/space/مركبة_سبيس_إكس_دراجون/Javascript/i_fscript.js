var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مركبة سبيس إكس دراجون";
adPhoto = "../../../imgs/spacex-.jpg"
adDiscription = "تاسست شركة سبيس إكس في 2002 على يد رجل الاعمال الامريكي إيلون ماسك , وهي شركة متخصصة بالرحلات الفضائية و هي تعمل على تصنيع معدات الطيران والنقل الفضائي , كما و أنها أطقلت العديد من الأقمار الصناعيّة لخدمة الإنترنت في مشروع ' ستارلنك ' ، وطورت العديد من المركّبات منها مركبة الشحن الفضائيّة دراجون، ونقلت البشر إلى محطة الفضاء الدولية على مركبة دراجون 2 ، كما و إِطلقت أول صاروخ يعمل بالوقود السائل ممول من القطاع الخاص ولها الكثير من الانجازات .<br /><br />وتعد شركة سبيس إكس  أول شركة خاصَّة ترسل مركبة فضائية إلى مدار حول الأرض وتعيدها إلى الأرض بنجاح، وأول شركة خاصَّة ترسل مركبة فضائية ورواد فضاء إلى محطّة الفضاء الدوليَّة ."
namePpath = "https://trouko.com/subjects/space/مركبة_سبيس_إكس_دراجون/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 3 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}