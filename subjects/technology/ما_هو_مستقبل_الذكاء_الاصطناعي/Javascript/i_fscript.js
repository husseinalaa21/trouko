var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو مستقبل الذكاء الاصطناعي";
adPhoto = "../../../imgs/indry-329.jpg"
adDiscription = "بدأ مفهوم الذكاء الاصطناعي مع بداية التطور في مجال الميكانيكي أي قبل الحاسبات  , وفي عام 1956 صاغ عالم الحاسوب جون مكارثي هذا المصطلح ، وعرَّفه بنفسه بأنه 'علم وهندسة صنع الآلات الذكية'. ويعرِّف أندرياس كابلان ومايكل هاينلين الذكاء الاصطناعي بأنه 'قدرة النظام على تفسير البيانات الخارجية بشكل صحيح، والتعلم من هذه البيانات، واستخدام تلك المعرفة لتحقيق أهداف ومهام محددة من خلال التكيف المرن' . "
namePpath = "https://trouko.com/subjects/technology/ما_هو_مستقبل_الذكاء_الاصطناعي/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 29 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}