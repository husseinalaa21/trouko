var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي لغات البرمجة المستخدمة في برمجة الذكاء الاصطناعي";
adPhoto = "../../../imgs/code-1.jpg"
adDiscription = "من الواضح أن هوليوود لم تنجح في التصور الدقيق لفكرة الذكاء الاصطناعي , وصورته في الاعوام الماضية على أنه مرعب و خبيث في كثير من الاحيان . وتبين العكس هو الصحيح - فالذكاء الاصطناعي في الكثير من الاحيان ما هو الا وسيلة لمساعدة الناس في حياتهم و لكن هذا لا يمنع من القول بأن الذكاء الاصطناعي قد يحتوي على القليل من المخاطر اذا تم استخدامه في الامور الخطيرة . و تعتمد المزيد والمزيد من الصناعات على الذكاء الاصطناعي الذي يسمح لها بحل المشكلات العاجلة وتحديد أهداف طموحة.<br /><br />و بالطبع أن برمجة الذكاء الاصطناعي معقدة وقوية . وتحتاج الى الكثير من الذكاء و الصعوبة ولكن كيف يعلم المرء ما هو الافضل لعمله ؟ و ما هي لغة البرمجة الأفضل للذكاء الاصطناعي؟"
namePpath = "https://trouko.com/questions/questions_technology/ما_هي_لغات_البرمجة_المستخدمة_في_برمجة_الذكاء_الاصطناعي/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت  , 8 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}