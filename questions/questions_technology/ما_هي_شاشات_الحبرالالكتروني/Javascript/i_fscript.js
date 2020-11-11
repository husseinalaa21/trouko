var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي شاشات الحبر الإلكتروني";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Electronic_paper_%28Side_view_of_Electrophoretic_display%29.PNG/250px-Electronic_paper_%28Side_view_of_Electrophoretic_display%29.PNG"
adDiscription = "شاشات الحبر الالكتروني او ما تعرف ب E Ink , هذا النوع من الشاشات لا يحتاج الى استخدام الضوء المباشر من الشائة الى العين كما هو مستخدم مع الشاشات العادية , لذا فأن شاشة الحبر الالكترون تستخدم انعكاس الضوء أذ انها لا تستخدم الضوء لكي تعمل ' فهي بلا أي اضواء ' , وتكون الية عملها عن طريق الجزيئات السالبة و الموجبة الموجودة بداخلها , حيث ان الجزيئات تقوم بالتغيير الى السالب و الموجب عن طريق النبضات الكهربائيه الصداره اليها , وبنئاً على تلك النبضات تتدرج الالوان ' سواء التدريج الرمادي أو اللوان ' .<br>وتدريج الالوان يكون حسب الجزيأت السالبة و الموجبة التي تتغير بأستمرام ."
namePpath = "https://www.trouko.co/questions/questions_technology/ما_هي_شاشات_الحبرالالكتروني/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p>  تاريخ النشر : الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">query_builder</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<p class='p_t_inf'>"+textDis +"..."+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</p>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}