var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "متى سيكون المريخ صالح للعيش";
adPhoto = "../../../imgs/marek-piwnicki-_1ZZDjSSIHw-unsplash.jpg"
adDiscription = "وجود حياة على سطح المريخ أثار اهتمام كبير في علم الأحياء الفلكي وذلك بسبب قرب المريخ وتشابهه للأرض و تشير الأدلة المتراكمة إلى أن بيئة سطح المريخ القديمة كانت تحتوي على الماء وأنها ربما كانت صالحة لعيش البكتيريا .ولا تزال البحوث العلمية لوجود حياة على المريخ قائمة حتى الان وذلك عن طريق التلسكوبات والمسابر الفضائية المنتشرة هناك ففي حين ركزت الأعمال المبكرة على الظواهر وما يحدها من خيال واسع، إلا أن البحث العلمي الحديث ركز البحث على المياه، البصمات الحيوية في التربة والصخور على سطح الكوكب، والواصمات الحيوية في الغلاف الجوي في ٢٢ نوفمبر ٢٠١٦ أفادت وكالة ناسا أنها عثرت على كمية كبيرة من الجليد تحت السطح في منطقة 'يوتوبيا بلانيتيا' على كوكب المريخ وتعادل كمية المياه التي عثر عليها كمية مياه بحيرة سوبيريور , و في 2021 ابريل 23 استطاعات ناسا و بفضل المركبة التي ارسلتها الى المريخ من تحويل غاز ثاني اكسيد الكاربون الى اكسجين نقي ."
namePpath = "https://trouko.com/questions/questions_space/متى_سيكون_المريخ_صالح_للعيش/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الجمعه, 23 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}