var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "الموز"

adPhoto = "https://www.aljazeera.net/wp-content/uploads/2014/09/c5e6472d-530e-4b72-9129-53154598ea9d.jpeg?resize=686%2C513"

adDiscription = ' الموز أحد أهم محاصيل الفاكهة. باللغه  الأجنبية بـ "banana" أو نحو ذلك، وهي كلمة أصلها من اللغة الولوفية، إلا أن أصلها يعود إلى اللغة العربية، حيث يطلق على «إصبع الموز»بـ «بنان الموز»فتسمى «الموزة»الواحدة «بنانة».'
+b+"يعتبر الموز من أهم محاصيل الفاكهة الاستوائية في جميع أنحاء العالم، ويحتل الموز مركزاً كبيرًا في التجارة العالمية، حيث يؤدي دورًا هامًا في اقتصاد كثير من الدول، بالإضافة إلى قيمته الغذائية العالية وإقبال المستهلك عليه أكثر من باقي الفواكه الأخرى، لما يتميز به من حلاوة الطعم والنكهة المميزة للموز، ويتميز عن باقي الفواكه الأخرى بإمكانية توفره بالأسواق طوال العام، علاوة على قابلية ثماره للنقل والتداول والتخزين."

// path
namePpath = "https://www.trouko.co/subjects/food_fruits_vegetables/الموز/"
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