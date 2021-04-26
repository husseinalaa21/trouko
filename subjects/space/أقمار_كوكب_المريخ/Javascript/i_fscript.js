var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "أقمار كوكب المريخ";
adPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzP357i7QOhwBuQJGQaGeq2HXylc6BMG8qcw&usqp=CAU"
adDiscription = "عدد اقمار المريخ اثنان ، هما: القمر ديموس، وفوبوس , تم اكتشافهما من قبل آساف هال في شهر آب من عام 1977م، عندما كان آساف على وشك التخلي عن بحثه عن أقمار المريخ إلا أن زوجته أنجلينا شجعته وحثته، واستطاع آساف اكتشاف ديموس في الليلة التالية واكتشاف فوبس بعد ذلك بست ليال، وقام آساف هال بتسمية الأقمار نسبة إلى أبناء أريز الأسطوريين، فوبس بمعني الخوف أو الذعر،"
namePpath = "https://www.trouko.com/subjects/space/أقمار_كوكب_المريخ/"
infSuGuPageOn = '<p>  المواضيع / الفضاء </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الاثنين, 18 يناير 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'undefined');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}