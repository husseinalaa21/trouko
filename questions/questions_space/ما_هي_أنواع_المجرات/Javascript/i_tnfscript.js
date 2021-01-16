var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي أنواع المجرات";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg"
adDiscription = "المجموعة الشمسية تحتوي على الشمس و الارض و باقي كواكب مجموعتنا الشمسية و مجموعتنا الشمسية هي نجم وسط مليارات النجوم في مجموعة من النجوم يحيط بهم الغبار الكوني وهي ما يسمى مجرة، وبذلك يصبح تعريف المجرة أوضح، إذا فالمجرة عبارة عن تجمعات ضخمة من النجوم، والكواكب، والمجموعات الشمسية، بالإضافة إلى الغبار، والغازات ترتبط مع بعضها بواسطة الجاذبية . 000 سنة ضوئية، وتضم بين 200-400 مليار نجم، كما توجد مادة مظلمة غريبة -لم يستطع العلماء اكتشافها حتى الآن- تمتلك جاذبية ولا تتفاعل ما أي مادة، وتبلغ كتلة المادة المظلمة قي المجرة ما يقارب 6 تريليون كتلة شمسية في حين تحظى النجوم المكونة للمجرة 580 مليار كتلة شمسية فقط، يمكن القول إن مجرة درب التبانة مكونة في معظمها من المادة المظلمة."
namePpath = "https://www.trouko.co/questions/questions_space/ما_هي_أنواع_المجرات/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء, 13 يناير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggThree"
ap.innerHTML ='<div class="img_p_sugg_pTh"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTh" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Th'> <a class='s_sub_tTh' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTh">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTh'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTh" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTh">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}