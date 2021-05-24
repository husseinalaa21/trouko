var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مواصفات هاتف Asus Zenfone 8";
adPhoto = "../../../imgs/asus-zenfone8.jpg"
adDiscription = "اعلنت شركة اسوس عن هاتفها الجديد Zenfone 8 في 13 مايو 2021 . سيأتي الهاتف مع شاشة Super AMOLED ، و بتردد 90 هرتز ، و HDR10+ , ومعالج Qualcomm SM8350 Snapdragon 888 5G , ونضام تشغيل أندرويد إصدار 11.0 وبطارية بسعة 4000 مللي أمبير . كما وسوف يدعم الشحن السريع بقوة 30 واط، و شاحن عكسي ايضاً ."
namePpath = "https://trouko.com/subjects/technology/مواصفات_هاتف_Asus_Zenfone_8/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 24 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}