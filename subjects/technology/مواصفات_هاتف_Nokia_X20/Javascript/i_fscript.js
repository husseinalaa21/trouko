var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "مواصفات هاتف Nokia X20";
adPhoto = "../../../imgs/nokiax20.jpg"
adDiscription = "تم إطلاق الهاتف الذكي Nokia X20 في 8 أبريل 2021. و يأتي الهاتف بشاشة تعمل باللمس بمقاس 6.67 بوصة بدقة 1080 × 2400 بكسل كما ويأتي هاتف Nokia X20 بمعالج ثماني النواة Qualcomm Snapdragon 480. يأتي ايضاً مع 6 جيجابايت من ذاكرة الوصول العشوائي. يعمل هاتف Nokia X20 بنظام Android 11 ويتم تشغيله بواسطة بطارية تبلغ 4470 مللي أمبير في الساعة."
namePpath = "https://trouko.com/subjects/technology/مواصفات_هاتف_Nokia_X20/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 22 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}