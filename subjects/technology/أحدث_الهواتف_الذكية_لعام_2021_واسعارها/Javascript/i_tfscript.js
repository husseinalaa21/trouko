var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أحدث الهواتف الذكية لعام 2021 واسعارها";
adPhoto = "../../../imgs/phones.jpg"
adDiscription = "مع تقدم وتيرة تطور الهاتف الذكي بسرعة كبيرة ، تتنافس الشركات في كل عام لتقديم كل ما هو جديد و حصري في عالم الهواتف الذكية. كما وشهدت السنوات القليلة الماضية تطور مأهول في عالم الهواتف الذكية مما جعل المهتمين في مجال الهواتف الذكية يترقبون كل هاتف جديد يطرح من قبل الشركات .و في هذه المقالة قمنا بتجميع أفضل الهواتف الذكية لعام 2021 , تلك الهواتف التي نعتبرها الأفضل عبر جميع الأنظمة الأساسية. و تعتبر الهواتف في هذه المقالة ما بين الفئة المتوسطة و عالية الثمن , و لم نركز على اسعار الهواتف بل رتبنا الهواتف بنائاً على حصريتها في عام 2021 ."
namePpath = "https://trouko.com/subjects/technology/أحدث_الهواتف_الذكية_لعام_2021_واسعارها/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 21 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}