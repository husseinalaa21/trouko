var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل وصلت ناسا الى المريخ حقاً";
adPhoto = "../../../imgs/maros2000.jpg"
adDiscription = "ما يميز كوكب المريخ هو تشابهه من كوكب الارض ما شكل حافز وشغف كبير جدا لدى الانسان لزياراته , و لكن استطاع الانسان في الاونة الاخيرة أن يصل الانسان الى ما هو أبعد من المريخ و خارج مجموعتنا الشمسية .<br />مما أدى الى عدم تصديق بعض الاشخاص , و تشكيك البعض و قلق البعض بل وحتى خروج نظريات حول تسطح الارض ( أصحاب نضرية الارض المسطحة أو دعنا نسميهم أصحاب المؤامرات ) , مما قد يحير البعض و يطرح تساؤل الكثيرياً بأن هل كل ما نراه من صور حول المريخ هي حقيقية أم هي مجرد فوتوشوب ! وكذبة القرن ."
namePpath = "https://www.trouko.com/subjects/space/هل_وصلت_ناسا_الى_المريخ_حقاً/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
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