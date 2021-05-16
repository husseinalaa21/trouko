var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كم مجموعة شمسية توجد في مجرة درب التبانة";
adPhoto = "../../../imgs/milky-way.jpg"
adDiscription = "مجرة درب التبانة  تحتوي على نظامنا الشمسي ، مع اسم يصف مظهر المجرة من الأرض: شريط ضبابي من الضوء يُرى في سماء الليل يتكون من النجوم التي لا يمكن تمييزها بالعين المجردة بشكل فردي.تظهر مجرة درب التبانة كشريط لأن هيكلها على شكل قرص يُنظر إليه من الداخل. حل جاليليو جاليلي لأول مرة نطاق الضوء في النجوم الفردية باستخدام تلسكوبه في عام 1610. حتى أوائل العشرينات من القرن الماضي ، اعتقد معظم علماء الفلك أن مجرة درب التبانة تحتوي على جميع النجوم في الكون. بعد النقاش الكبير عام 1920 بين علماء الفلك هارلو شابلي وهيبر كيرتس ، أظهرت ملاحظات إدوين هابل أن مجرة درب التبانة هي مجرد واحدة من العديد من المجرات."
namePpath = "https://trouko.com/questions/questions_space/كم_مجموعة_شمسية_توجد_في_مجرة_درب_التبانة/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاحد, 16 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}