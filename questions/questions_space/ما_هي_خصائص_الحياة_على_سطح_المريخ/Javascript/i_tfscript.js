var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي خصائص الحياة على سطح المريخ";
adPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq_u4StAqyaUA5ZA8YYx8qzmR-U1UzyKFPslszfvJaKNcPGg8&s"
adDiscription = "كوكب المريخ يمتلك غلافا جويا رقيقا، وبسبب هذا الغلاف الجوي الرقيق، وبعده عن الشمس فإنه يعتبر أكثر برودة من الأرض، ويبلغ متوسط درجات الحرارة فيه حوالي 60 درجة مئوية تحت الصفر، وهناك عدد من العوامل التي تؤثر على ذلك المناخ، مثل: وجود القمم الجليدية، وبخار الماء، والعواصف الترابية على سطحه، وبالإضافة إلى ذلك فإن غلافه الجوي يتكون من ثاني أكسيد الكربون الذي يشكل تقريبا 95% منه . "
namePpath = "https://www.trouko.co/questions/questions_space/ما_هي_خصائص_الحياة_على_سطح_المريخ/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين  , 18 يناير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggTwo"
ap.innerHTML ='<div class="img_p_sugg_pTw"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTw" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Tw'> <a class='s_sub_tTw' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTw">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTw'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTw" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}