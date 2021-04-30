var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "تيسلا - موتورز";
adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/800px-Tesla_Motors.svg.png"
adDiscription = "هي شركة لتصنيع السيارات الكهربائيه و تقع في كاليفورنيا ، وتقوم ايضاً بتصنيع المكونات الكهربائية للقطارات الكهربائية. يتم تداول أسهم الشركة في بورصة ناسداك بشعار TESLA، وقد حازت أرباحا بعد 10 سنوات في الربع الأول عام 2013. يعتبر ما سبب جذب انتباه واسع لشركة تيسلا هو إنتاجها لسيارات كهربائية من نوع سيدان، وعملية مثل السيارة تيسلا موديل إس وغيرها من سياراتها الحديثه. حيث تقوم الشركه ايضاً ببيع مجموعات بطاريات الليثيوم أيون لشركات عالمية، لاستخدامها في القطارات الكهربائية، وقد أعلن مجلس إدارة الشركة أنه يسعى للإنتاج الكمي للسيارات الكهربائية، لغرض خفض تكلفتها<br />تفوقت شركه تيسلا بتصنيع السيارات الكهربائيه والانتاج و في 1 يوليو 2020، وصلت تسلا إلى القيمة السوقية 206.5 بليون دولار، متجاوزة تويوتا وبعض الشركات الكبرى العامله في نفس المجال، وأصبحت بذلك شركة السيارات الأكثر قيمة بالعالم الى الان."
namePpath = "https://trouko.com/subjects/else/تيسلا_موتورز/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الثلاثاء, 27 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}