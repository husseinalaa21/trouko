var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "تيسلا - موتورز"

adPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/800px-Tesla_Motors.svg.png"

adDiscription = "هي شركة لتصنيع السيارات الكهربائيه و تقع في كاليفورنيا ، وتقوم ايضاً بتصنيع المكونات الكهربائية للقطارات الكهربائية.  يتم تداول أسهم الشركة في بورصة ناسداك بشعار TESLA، وقد حازت أرباحا بعد 10 سنوات في الربع الأول عام 2013. يعتبر ما سبب جذب انتباه واسع لشركة تيسلا هو إنتاجها لسيارات كهربائية من نوع سيدان، وعملية مثل السيارة تيسلا موديل إس وغيرها من سياراتها الحديثه. حيث تقوم الشركه ايضاً ببيع مجموعات بطاريات الليثيوم أيون لشركات عالمية، لاستخدامها في القطارات الكهربائية، وقد أعلن مجلس إدارة الشركة أنه يسعى للإنتاج الكمي للسيارات الكهربائية، لغرض خفض تكلفتها " 
+b+ "تفوقت شركه تيسلا بتصنيع السيارات الكهربائيه والانتاج و  في 1 يوليو 2020، وصلت تسلا إلى القيمة السوقية 206.5 بليون دولار، متجاوزة تويوتا وبعض الشركات الكبرى العامله في نفس المجال، وأصبحت بذلك شركة السيارات الأكثر قيمة بالعالم الى الان."

// path
namePpath = "https://www.trouko.co/subjects/company/تسلا_موتورز/"
nameP = namePpath.replace('https://www.trouko.co/',"")
// path


addTitleIpage = document.getElementById(nameP+'_pag_n_232');

addt(titleIn)

function addt(m){
    var textDis = adDiscription.slice(0, 80);
    var o = document.createElement('div')
    o.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
    addTitleIpage.append(o)
}