var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي الاكوان المتوازية";
adPhoto = "../../../imgs/multiverse.jpg"
adDiscription = "الاكوان المتوازية أو الاكوان المتعددة يعود أصل الفرضية الى عام 1954، حيث كان هناك مرشح لشهادة الدكتوراه من جامعة برنسيتون اسمه هيو إيفيرت جاء بفكرة جذرية: أنه يوجد أكوان متوازية، بالضبط شبه كوننا. كل هذه الأكوان على علاقة بنا، وهذه الاكوان متفرعة منا، وكوننا متفرع أيضاً من الأكوان أخرى .و الكون المتعدد هو مجموعة افتراضية من أكوان متعددة. تشتمل هذه الأكوان معًا على المكان والزمان والمادة والطاقة والمعلومات والقوانين الفيزيائية والثوابت التي  تختلفف من كون الى آخر ."
namePpath = "https://trouko.com/questions/questions_space/ما_هي_الاكوان_المتوازية/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 15 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}