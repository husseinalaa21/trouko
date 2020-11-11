var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مجرة درب التبانة";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ESO-VLT-Laser-phot-33a-07.jpg/300px-ESO-VLT-Laser-phot-33a-07.jpg"
adDiscription = "مجرة درب التبانة او ما تعرف «الطريق اللبني» , و يظهر درب التبانة على شكل حزمة لبنية عريضة من ضوء النجوم تمتد عبر السماء , و مجرة درب التبانة هي المجرة التي ينتمي اليها الارض و الشمس و باقي كواكب واقمار النضام الشمسي للأرض , تنتشر في مجرة درب التبانة سحابات هائلة من ذرات التراب والغازات في شتى أطرافها.<br><br>وأصل تسميتها بأن العرب شبَّهت ما يسقط من التبن الذي كانت تحمله مواشيهم كان يظهر أثره على الأرض كأذرع ملتوية تشبه أذرع المجرة. لأن جزء منها يرى في الليالي الصافية كطريق أبيض من التبن يتمثل للرائي بسبب النور الأبيض الخافت الممتد في السماء نتيجة الملايين من النجوم السماوية المضيئة والتي تبدو رغم أبعادها الشاسعة كأنها متراصة متجاورة، كما ترى كامل المجرة من مجرة أخرى على شكل شريط أبيض باهت في السماء.<br><br>وتحتوي المجرة ما بين 200 إلى 400 مليار نجم ."
namePpath = "https://www.trouko.co/subjects/space/مجرة_درب_التبانة/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}