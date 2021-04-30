var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل سوف تتحول أفلام الخيال العلمي الى حقيقة ؟";
adPhoto = "../../../imgs/igor_queiroz_tony_stark_holograma.jpg"
adDiscription = "لا بد من أنه صادفك في أغلب الأفلام التي تتحدث عن المستقبل أو أفلام الخيال العلمي من حرب النجوم إلى الرجل الحديدي أفكار تبدو مجنونة ، و لطالما كانت الهواتف ذات الزجاج الشفاف أو الشاشات التي تنحني بسهولة من أهم الافكار الحاضرة في الافلام. ولكن ما مدى قربنا من الوصول لتلك التكنلوجيا الموجودة بالافلام؟<br />شهدت السنوات القليلة الماضية تطور هائل في مجال صناعة الهواتف و التكنلوجيا بشكل عام ولا نستطيع أن ننسب هذا الفضل كله لافلام الخيال العلمي بسبب أن بعض ما نشاهده في أفلام الخيال العلمي من تطور هو منافً للفيزياء و الواقع . ولكن من جهة أخرى فقد حاول البشر منذ ضهور فكرة الخيال العلمي أن يطبقو ما يرونه ألى واقع وقد نجحوا بذلك بعض الشيء ."
namePpath = "https://trouko.com/subjects/technology/هل_سوف_تتحول_أفلام_الخيال_العلمي_الى_حقيقة_؟/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 24 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}