var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "النسبية العامة";
adPhoto = "https://community-static.arageek.com/wp-content/uploads/2020/04/%D8%A7%D9%8A%D9%86%D8%B4%D8%AA%D8%A7%D9%8A%D9%86.jpg"
adDiscription = "تعرف النسبية العامة بأنها أساس الفيزياء الحديثة , كما انها النظرية الاولى لأينشتاين قبل النسبية الخاصة , وهي النضرية الهندسية للجاذبية و الوصف الحالي للجاذبية في الفيزياء الحديثة و التي نشرها ألبرت اينشتاين عام 1915 .<br>تقوم الجاذبية العامة على تنقيح قانون الجذب العام لنيوتن , وتقدم وصفاً موحداً للجاذبية كخاصية هندسية للمكان و الزمن أوما يعرف ب الزمكان .<br><br>ولتوضيح أهم مفهوم للنسبية ىالعامة , وفقاً للنسبية العامة فإن التجاذب الملاحظ بين الكتل ينتج من انحناء الزمكان الذي تحدثه هذه الكتل."
namePpath = "https://www.trouko.co/questions/questions_space/النسبية_العامة_و_الجاذبية/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 29 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}