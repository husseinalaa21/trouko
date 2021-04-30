var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "كيفية شراء اسهم من الشركة";
adPhoto = "../../../imgs/blur2_640.jpg"
adDiscription = "تمثل الاسهم حصة من ملكية الشركة بما يتناسب مع إجمالي عدد الأسهم , و يمنح هذا عادةً حامل الأسهم حقًا في ذلك الجزء من أرباح الشركة ، والعائدات من تصفية الأصول،  أو قوة التصويت ، وغالبًا ما يتم تقسيمها بما يتناسب مع مبلغ الأموال التي استثمرها كل مساهم .<br />ليس بالضرورة أن تكون جميع الأسهم متساوية ، حيث قد يتم إصدار فئات معينة من الأسهم على سبيل المثال بدون حقوق التصويت ، مع حقوق تصويت معززة ، أو مع أولوية معينة لتلقي الأرباح أو عائدات التصفية قبل أو بعد فئات أخرى من المساهمين .<br />كما و تعتبر الاسهم وسيلة جيدة لربح الاموال بسهولة في الوقت الحالي بسبب تزايد الشركات و زيادة التنافس بينهم , الذي يعود بالمنفعة للمستثمرين ."
namePpath = "https://trouko.com/subjects/else/كيفية_شراء_اسهم_من_الشركة/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 29 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}