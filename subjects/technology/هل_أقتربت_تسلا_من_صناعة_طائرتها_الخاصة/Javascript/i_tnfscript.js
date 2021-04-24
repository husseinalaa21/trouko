var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "هل أقتربت تسلا من صناعة طائرتها الخاصة";
adPhoto = "../../../imgs/tesla-plane-electric-battery.jpeg"
adDiscription = "منذ أن ضهرت شركة تسلا في السنوات القليله الماضية , و العالم شهد تطور كبير في مجال السيارات التي تعمل بالكهرباء بل و أنها أستطاعات في ثلاث سنوات فقط تحقيق ارباح أكثر من التي حققتها كبار الشركات مثل ( BMW )  وغيرها , ويعود السبب في ذلك ألى وجود العالم الملياردير أيلون ماسك ضمن الشركة , فقد أسهمت أختراعاته التي قدمها الى الشركة منذ 2008 الى الان من تطور السيارت الخاصة بتسلا بل وأضهرت سيارات تسلا و كأنها قادمه من المستقبل .<br />وفي 2020 ، كرر أيلون ماسك دعمه لتطوير طائرة كهربائية ، ملمحًا لإنتاج آلة طيران خالية من الانبعاثات. على وجه التحديد ، وكتب على تويتر : 'يجب أن تكون هناك طائرة جديدة أسرع من الصوت ، وهذه المرة تعمل بالكهرباء'."
namePpath = "https://www.trouko.com/subjects/technology/هل_أقتربت_تسلا_من_صناعة_طائرتها_الخاصة/"
infSuGuPageOn = '<p>  المواضيع / تكنلوجيا </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 24 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
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