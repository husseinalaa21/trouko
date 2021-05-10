var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مخاطر عملة دوجكوين";
adPhoto = "../../../imgs/dogecoin.jpg"
adDiscription = "عملة دوجكوين هي من  العملات المشفرة  . كما و تتميز دوجكوين برسمة لوجو الكلب من نوع شيبا اينو كشعار لها . و في العام الماضي نمت دوج كوين ما يقرب من 23000 ٪  . وهذا الارتفاع يدل على الاهتمام الكبير التي حضيت به العملات المشفرة في الاعوام السابقة , وبالطبع هذا يدل على الارتفاع الذي سوف تحضى به العملات المشفرة مستقبلاً  ."
namePpath = "https://trouko.com/subjects/else/مخاطر_عملة_دوجكوين/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 10 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}