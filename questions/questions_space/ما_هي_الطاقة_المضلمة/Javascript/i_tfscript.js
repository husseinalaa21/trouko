var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي الطاقة المضلمة";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ilc_9yr_moll4096.png/1024px-Ilc_9yr_moll4096.png"
adDiscription = "الطاقة المضلمة في الفيزياء و علم الكون هي احد الاشكال الافتراظية للطاقة التي تملأ الفضاء و تحيط به و هي تمتلك ضغطاً سالبأ.<br>وفي النظرية العامة لاينشتاين أن الضغط السالب لهذه الطاقه يكون مشابهاً لقوة معاكسة للجاذبية في المقاييس الكبيرة .<br>و حسب ايضاً النسبية العامة ان هذا التأثير الناجم عن الطاقة المضلمة هو الاكثر شعبية حالياً لتفسير تمدد الكون بمعدل نتسارع"
namePpath = "https://www.trouko.com/questions/questions_space/ما_هي_الطاقة_المضلمة/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 9 نوفمبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggTwo"
ap.innerHTML ='<div class="img_p_sugg_pTw"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTw" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Tw'> <a class='s_sub_tTw' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTw">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTw'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTw" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}