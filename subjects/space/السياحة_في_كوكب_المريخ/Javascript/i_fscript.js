var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "السياحة في كوكب المريخ";
adPhoto = "../../../imgs/mars-tourism.jpg"
adDiscription = "في 2021 يوليو 20 أعلنت شركة الفضاء Blue Origin أنها ستبدأ في بيع تذاكر الرحلات دون المدارية إلى حافة الفضاء  , وفي وقت سابق اعلنت سبيس أكس ايضاً عن نيتها لارسال اشخاص في رحلة سياحية الى الاشخاص . كما وتقوم شركة جيف بيزوس ببيع تذكرة واحدة لمن يدفع أعلى سعر بالمزاد للذهاب في رحلة سياحية الى الفضاء  . ولكن أذا رجعنا ثلاثين سنة الى الوراء و سألنا الناس عن السياحة الى الفضاء فلا شك أنهم سيقومون بالضحك . وقد يبدو ذلك مجنوناً , ولكن في الوقت الحالي تبدو السياحة في الفضاء امر مسلي وقابل للتحقيق وممتع و أغلب الاشخاص في العالم سوف يتحمسون لفكرة الذهاب كسياحة للفضاء ."
namePpath = "https://trouko.com/subjects/space/السياحة_في_كوكب_المريخ/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 10 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}