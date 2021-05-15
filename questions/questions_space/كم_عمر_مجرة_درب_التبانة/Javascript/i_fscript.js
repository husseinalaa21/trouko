var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كم عمر مجرة درب التبانة";
adPhoto = "https://media.wired.com/photos/5b3fef05ce9419115f46bb49/125:94/w_1595,h_1200,c_limit/milkyway-531503110.jpg"
adDiscription = "درب التبانة او  milkly way  هي من المجرات الحلزونية الشكل. وهي اسم المجرة التي تنتمي إليها الشمس، والأرض، وبقية المجموعة الشمسية. تشتمل مجرة درب التبانة على مئات البلايين من النجوم و الكواكب بألاضافة الى الغبار الكوني المحيط بها و الذي يعطيها شكل الدرب اللبني ."
namePpath = "https://trouko.com/questions/questions_space/كم_عمر_مجرة_درب_التبانة/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 12 نوفمبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}