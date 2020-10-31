var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
var b = " <br> "

titleIn = "التفاح"

adPhoto = "https://s3-us-west-2.amazonaws.com/melingoimages/Images/4315.jpg"

adDiscription = "التفاح هو الفاكهة المثالية للأكل في أي وقت ، وله دور إيجابي في تحقيق التوازن الغذائي. قد تكون بشرتهم خضراء أو صفراء أو حمراء ، ويتراوح مذاق اللحم من المر إلى النكهة الحلوة." + b+
"إنها واحدة من أكثر الفاكهة استهلاكًا في العالم. هناك كمية كبيرة من الأصناف. بفضل ذلك ، يتوفر التفاح على مدار السنة." + b+
"بدأت نشأة الشجرة في آسيا الوسطى، حيث ما زلنا نجد سلفها البري إلى اليوم.هناك أكثر من 7500 مُستنبت معروف للتفاح، مما أدى إلى امتلاك التفاح طائفة من الخصائص المرغوبة. يختلف المستنبتون في حجم محاصيلهم والحجم النهائي للشجرة لديهم، حتى عندما تُزرع الشجرة على الجذر نفسه." + b+
"يوفر التفاح كمية كبيرة من الفيتامينات والمواد المغذية الأخرى للإنسان ، ولها آثار مفيدة متعددة على الصحة. "

// path
namePpath = "https://www.trouko.co/subjects/food_fruits_vegetables/التفاح/"
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