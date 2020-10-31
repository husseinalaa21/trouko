var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "البورصه"

adPhoto = "https://www.magltk.com/wp-content/uploads/2019/05/%D8%A7%D9%84%D8%A8%D9%88%D8%B1%D8%B5%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9.jpg"

adDiscription = "ويعرف بأسم سوق الاوراق الماليه , هو لا يتعرض ولايمتلك في معظم الأحوال البضائع والسلع، فالبضاعة أو السلعة التي يتم تداولها بها ليست أصول حقيقية بل أوراق مالية أو أصول مالية، وغالباً ما تكون هذه البضائع أسهم وسندات كبورصه العملات." 
+b+"وعند متابعه جو المنافسة الحرة في البورصة (سوق الأوراق المالية) فإن ذلك يقود في كثير من الأحيان إلى عمليات مضاربة شديدة انهارت فيها مؤسسات مالية وشركات كبرى، كما حصل في يوم الإثنين الأسود في بورصة نيويورك،  أو كارثة شهر فبراير في سوق الأسهم السعودية حيث فقد المؤشر 50% من قيمته كما فقدت معظم المتداولين السعوديين 75% من رؤوس أموالهم وأيضاً كارثة يوم الثلاثاء الأسود يوم 14 مارس 2006."
+b+"ويشار إلى مستوى سوق الأسهم بما يسمى نقطة، ويتم إحصاء النقاط للخسارة والارتفاع بما يسمى سعر الإغلاق للسوق في اليوم , لاحصاء الربح و الخسارة."


// path
namePpath = "https://www.trouko.co/subjects/economie/البورصه/"
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