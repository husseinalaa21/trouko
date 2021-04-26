var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كم عدد النجوم في مجرتنا";
adPhoto = "https://astrotourismwa.com.au/wp-content/uploads/2018/12/Milky-Way-Galaxy.jpg"
adDiscription = "تحوي مجرة درب التبانة على 200 إلى 400 مليار نجم تقريباً , و هذا العدد غير ثابت أي أنه قد يكون أقل أو أكثر .<br />و في بعض المناطق على الارض يضهر في الليل المضلم الصافي حزمة من النجوم في فجوة مضلمة و حولها غبار كوني أبيض اللون - ولهذا سميت مجرة درب التبانة أو [ milky way ] بهذا الأسم ."
namePpath = "https://www.trouko.com/questions/questions_space/كم_عدد_النجوم_في_مجرتنا/"
infSuGuPageOn = '<p>          أسئلة / الفضاء          </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p>  السبت, 24 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
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