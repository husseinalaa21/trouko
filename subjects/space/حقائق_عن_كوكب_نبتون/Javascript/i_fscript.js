var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "حقائق عن كوكب نبتون";
adPhoto = "../../../imgs/neptune.jpg"
adDiscription = "يعد كوكب نبتون ثالث اكبر كوكب في مجموعتنا الشمسية كما ويقع في الترتيب الثامن من حيث البعد عن الشمس، ، كما يقع في الترتيب الرابع من حيث حجمه، و تمّ اعتباره الكوكب الأبعد عن الشمس منذ أن أعاد العلماء تصنيف كوكب بلوتو ككوكب قزم عام ٢٠٠٦ م وتصل كتلته إلى حوالي ١٧ ضعفاً من كتلة كوكب الأرض، و يمكن مشاهدته من خلال التلسكوب كقرص صغير للغاية باللون الأزرق المخضر الباهت،؛ ويعود السبب وراء لونه الأزرق إلى امتصاص غاز الميثان للضوء ذي اللون الأحمر من غلافه الجوي ."
namePpath = "https://trouko.com/subjects/space/حقائق_عن_كوكب_نبتون/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 19 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}