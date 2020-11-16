var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كيف يعمل المايكرويف";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/VFPt_Solenoid_correct2.svg/200px-VFPt_Solenoid_correct2.svg.png"
adDiscription = "المايكرويف او الفرن الموجي وهو احد اهم الطرق المستخدمة في تسخن الطعام او للطهي , و على عكس الافران التقلديدية فأن المايكرويف يقوم بتسخين الطعام ليس فقط من الخارج بل من الداخل و الخارج وذلك بسسب أنفاذ أشعة المايكرويف التي سنتحدث عنها في داخل الغذاء ; و افران المايكرويف المتاعرف عليها بالوقت الحالي هي من تكنولوجيا القرن العشرين."
namePpath = "https://www.trouko.co/questions/questions_physics/كيف_يعمل_المايكرويف/"
infSuGuPageOn = '<p>  أسئلة / الفيزياء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
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