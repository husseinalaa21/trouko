var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
titleIn = "النسبية العامة";
adPhoto = "https://lh3.googleusercontent.com/proxy/i7CG6Bw3vsGhphslYCOOajM6Z-QTdrk16OARZpMfpwB516RYWvNMvMekas7Zfm5W7KXcCDHuX_mpVqEevcETioUMmErDq5Kle1tkeqEh"
adDiscription = "تعرف النسبية العامة بأنها أساس الفيزياء الحديثة , كما انها النظرية الاولى لأينشتاين قبل النسبية الخاصة , وهي النضرية الهندسية للجاذبية و الوصف الحالي للجاذبية في الفيزياء الحديثة و التي نشرها ألبرت اينشتاين عام 1915 .<br>تقوم الجاذبية العامة على تنقيح قانون الجذب العام لنيوتن , وتقدم وصفاً موحداً للجاذبية كخاصية هندسية للمكان و الزمن أوما يعرف ب الزمكان .<br><br>ولتوضيح أهم مفهوم للنسبية ىالعامة , وفقاً للنسبية العامة فإن التجاذب الملاحظ بين الكتل ينتج من انحناء الزمكان الذي تحدثه هذه الكتل."
namePpath = "https://www.trouko.co/questions/questions_space/النسبية_العامة_و_الجاذبية/"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}