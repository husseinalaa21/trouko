var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أفضل و ارخص سيارة كهربائية لهذا العام";
adPhoto = "../../../imgs/tesla-59370630.jpg"
adDiscription = "شهد العالم في السنوات القليلة الماضية تنافس كبير في مجال صناعه السيارات الكهربائية , و تصدرت شركة تسلا في المرتبة الاولة عالمياً في صناعة السيارات الكهربائية حيث أنها قدمت أفضل سعر و أفضل كفائة استخدام لمستخدمي سيارات تسلا و أيضا قدمت الشركة أفضل وسائل الراحة و الرفاهية لمستخدمي سيارات تسلا .وهذه قائمة لأفضل ثلاث سيارات لتسلا :-"
namePpath = "https://trouko.com/subjects/technology/أفضل_و_ارخص_سيارة_كهربائية_لهذا_العام/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 24 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}