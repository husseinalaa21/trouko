var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ماذا يحدث عند ارتفاع درجة حرارة الاجسام";
adPhoto = "../../../imgs/jo18umg2w.jpg"
adDiscription = "الحرارة بكافة انواعها , هي أحدى اشكال الطاقة الفيزيائية , تحدث اثناء حركة الذرات أو الجزيئات أو أي جسيم يدخل في تركيب المادة . تتنقل الحرارة بين الأجسام بالتوصيل و الإشعاع الحراري والحمل الحراري . وتنتقل الحرارة تلقائيًا من درجة الحرارة الأعلى للأدنى.<br />و درجة الحرارة هي مقياس مدى سخونة جسم ما أو برودته، وهي التي تحدد اتجاه انتقال الحرارة تلقائيًا، إلا أنه ممكن استنفاذ شغل لنقلها في الاتجاه المعاكس.<br />أما  السعة الحرارية فهي كمية الحرارة اللازمة لرفع درجة حرارة جسم ما .<br /><br />و التغير في كمية حرارة الجسم تساوي حاصل ضرب حرارته النوعية x كتلته x التغير في درجة حرارته ."
namePpath = "https://trouko.com/subjects/physics/ماذا_يحدث_عند_ارتفاع_درجة_حرارة_الاجسام/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 1 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}