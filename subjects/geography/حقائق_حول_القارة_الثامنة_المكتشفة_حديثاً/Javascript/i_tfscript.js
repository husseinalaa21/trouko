var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "حقائق حول القارة الثامنة المكتشفة حديثاً";
adPhoto = "../../../imgs/island-1149508_640.jpg"
adDiscription = "زيلانديا هي قارة تقع في المحيط الهادئ انفصلت عن أستراليا قبل ٦٠ مليون سنة وانفصلت عن القارة القطبية الجنوبية قبل ١٣٠ مليون سنة. تبلغ مساحتها حوالي ٣,٥٠٠,٠٠٠ كم² و تعتبر أكبر قارة حاليا في المحيط الهادي."
namePpath = "https://www.trouko.com/subjects/geography/حقائق_حول_القارة_الثامنة_المكتشفة_حديثاً/"
infSuGuPageOn = '<p>  المواضيع / الجغرافية </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه  , 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
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