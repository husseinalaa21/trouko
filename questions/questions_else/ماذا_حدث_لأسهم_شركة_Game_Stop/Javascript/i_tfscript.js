var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ماذا حدث لأسهم شركة Game Stop";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/GameStop.svg/280px-GameStop.svg.png"
adDiscription = "جيم ستوب هو متجر أمريكي لألعاب الفيديو والإلكترونيات الاستهلاكية، وبائع تجزئة للألعاب. يقع المقر الرئيسي للشركة في غرابفين، تكساس، الولايات المتحدة، إحدى ضواحي دالاس، واعتبارًا من 1 فبراير 2020، تدير 5،509 متجرًا للبيع بالتجزئة في جميع أنحاء الولايات المتحدة وكندا وأستراليا ونيوزيلندا وأوروبا."
namePpath = "https://trouko.com/questions/questions_else/ماذا_حدث_لأسهم_شركة_Game_Stop/"
infSuGuPageOn = '<p>  أسئلة / متنوعة  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 9 فبراير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}