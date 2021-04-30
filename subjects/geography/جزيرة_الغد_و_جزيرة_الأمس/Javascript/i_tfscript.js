var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "جزيرة الغد و جزيرة الأمس";
adPhoto = "../../../imgs/annie-spratt-vI-uFNolpLA-unsplash.jpg"
adDiscription = "وهما جزيرتين متقاربتان ولكن الفرق الزمني 21 ساعة هم جزر ديوميد تقعان في مضيق بيرنغ بين سيبيريا الروسية و ألاسكا الامريكية تسميان 'ديوميد الكبرى' و 'ديوميد الصغرى' ويقعان في وسط المسافة بين قارتي آسيا وأميركا الشمالية و يعود التفارق الزمني الكبير بينهما رغم قرب المسافة , ألى خط التاريخ الدولي وهو خط وهمي يمر من الفطب الشمالي حتى الجنوبي يحد بين الجدود الزمنية بين اليوم الحالي و اليوم الذي يليه لهذا السبب تتقدم جزيرة ديوميد الكبرى بفارق زمني 21 ساعه عن جارتها ديوميد الصغرى .<br />وتسمى ديوميد الكبرى ' بجزيرة الغد ' وذلك بسبب تقدمها ب21 ساعة , و تتقلص المدة في الصيف الى 20 ساعة .<br />وتسمى جزيرة ديوميد الصغرى 'بجيزيرة الأمس' لأنها تتأخر عن جارتها ديوميدي الكبرى الروسية ب21 ساعة .<br />و يستطيع الاشخاص الساكنين في الجزيرتين من التنقل بين الجزيرتين مشياً في فصل الشتاء عندما تكون المياه متجمدة ."
namePpath = "https://trouko.com/subjects/geography/جزيرة_الغد_و_جزيرة_الأمس/"
infSuGuPageOn = '<p>  المواضيع / الجغرافية </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 24 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_x_242');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}