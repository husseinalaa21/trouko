var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هو تاريخ الأشعة الكونية";
adPhoto = "data:image/jpeg;base64,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"
adDiscription = " تم اكتشاف الأشعة الكونية في بدايات القرن العشرين، علم العلماء بأن شيئا غامضا كان يحدث في ثمانينيات القرن السابع عشر، وذلك عندما لاحظ الفيزيائي الفرنسي شارل أوجستين دي كولوم Charles-Augestin de Coulomb - الذي اشتهر بوجود شحنة كهربائية تحمل اسمه - كرة مشحونة كهربائيا فجأة وبشكل غامض تفقد شحنتها بشكل نهائي .<br /><br />و تقفي أثر الإشعاع الكوني 'قصص الأصل' استغرق أكثر من قرن من الزمن، في سنة 2013، عرض تلسكوب فيرمي لأشعة غاما Fermi Gamma-ray التابع لناسا نتائج من مراقبة بقايا انفجار نجمين من المستعر الأعظم الموجود في مجرة درب التبانة وهما: IC 433 و W44."
namePpath = "https://www.trouko.com/questions/questions_space/ما_هو_تاريخ_الأشعة_الكونية/"
infSuGuPageOn = '<p>  أسئلة / الفضاء  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 26 يناير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.className = "suggThree"
ap.innerHTML ='<div class="img_p_sugg_pTh"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_iTh" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23Th'> <a class='s_sub_tTh' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQuTh">'+infSuGuPageOn+'</div>'+"<div class='p_t_infTh'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_pTh" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTwTh">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}