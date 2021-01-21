var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "عالم الكم و الزمان";
adPhoto = "https://vid.alarabiya.net/images/2020/08/29/5e3c3989-4d61-42b9-bd10-1f3ad993bdef/5e3c3989-4d61-42b9-bd10-1f3ad993bdef_16x9_1200x676.jpg?width=1138"
adDiscription = "ميكانيكا الكم هي مجموعة من النظريات الفيزيائية ظهرت في القرن العشرين ، وهي أهم النضريات التي غيرت من فهمنا للفيزياء . و التي عمل عليها البرت أينشتاين بين عام 1879 و 1955 بالرغم من تناقضها الكبير مع النسبية العامة . <br>والميكانيكا الكم تشرح الزمان وكأنه شيء قابل للتغير بالنسبة للشخص ( كالرجوع بالزمن أو التقدم بالزمن) - على عكس النسبية العامة التي تحرم فكرة الرجوع بالزمن أو التقدم به وذلك بسبب عدم قدرة الاجسام على عبور سرعة الضوء ."
namePpath = "https://www.trouko.com/subjects/physics/عالم_الكم_و_الزمان/"
infSuGuPageOn = '<p>  المواضيع / الفيزياء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 12 نوفمبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
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