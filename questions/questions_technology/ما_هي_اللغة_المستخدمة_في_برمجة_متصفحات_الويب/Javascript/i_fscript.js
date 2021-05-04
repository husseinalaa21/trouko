var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي اللغة المستخدمة في برمجة متصفحات الويب";
adPhoto = "../../../imgs/webHtml.jpg"
adDiscription = "يعد تعلم لغة برمجة صفحات و مواقع الويب امراً مهماً في وقتنا الحالي وذلك لما توفره هذه اللغة من اهمية في حياتنا اليومية , فكل شيء في الوقت الحديث اذا اردت تعلمه , أو الاستفسار عنه أو حتى مشاهدته فلا بد لك من أن تبحث عليه في المواقع الالكترونية بأستخدام محرك بحث جوجل على سبيل المثال .<br />وتعد لغة البرمجة ( HTML ) هي اللغة الاساسية لأنشاء مواقع الويب , ويمكننا القول هي اللغة التي تفهمها المتصفحات . فيمكنك على سبيل المثال أن تبرمج موقع ويب بأستخدام لغات عدة مثل جافاسكريبت ( JAVASCRIPT ) أو ( PHP ) ولكنك بالطبع سوف تحتاج الى لغة البرمجة ( HTML  ) . كما وتعتبر لغة ( HTML ) من اسهل لغات البرمجة تعلماً كما وهي غير معقدة , ويمكنك ان تتعلمها في يوم واحد فقط أن شئت ."
namePpath = "https://trouko.com/questions/questions_technology/ما_هي_اللغة_المستخدمة_في_برمجة_متصفحات_الويب/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاربعاء  , 5 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}