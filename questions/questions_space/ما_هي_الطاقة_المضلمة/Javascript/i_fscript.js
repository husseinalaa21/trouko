var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
titleIn = "ما هي الطاقة المضلمة";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ilc_9yr_moll4096.png/1024px-Ilc_9yr_moll4096.png"
adDiscription = "الطاقة المضلمة في الفيزياء و علم الكون هي احد الاشكال الافتراظية للطاقة التي تملأ الفضاء و تحيط به و هي تمتلك ضغطاً سالبأ.<br>وفي النظرية العامة لاينشتاين أن الضغط السالب لهذه الطاقه يكون مشابهاً لقوة معاكسة للجاذبية في المقاييس الكبيرة .<br>و حسب ايضاً النسبية العامة ان هذا التأثير الناجم عن الطاقة المضلمة هو الاكثر شعبية حالياً لتفسير تمدد الكون بمعدل نتسارع"
namePpath = "https://www.trouko.co/questions/questions_space/ما_هي_الطاقة_المضلمة/"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}