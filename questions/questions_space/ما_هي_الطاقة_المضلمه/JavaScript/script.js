var  adTime , discriptionPage ,  addTitleIpage,addTitleContainerOne_n
,addContainerOne_n , addTitleContainerTwo_n , addContainerTwo_n ,addSourcesAndQuotesTwo_n , addTitleContainerThree_n,addContainerThree_n,
addTitleContainerFour_n,addContainerFour_n ,addSourcesAndQuotesFour_n ,
addTitleContainerfive_n,addContainerfive_n,addTitleContainerSix_n,addContainerSix_n,addTitleContainerSeven_n,addContainerSeven_n,addSourcesAndQuotesOne_n
,addSourcesAndQuotesThree_n,addSourcesAndQuotesfive_n,addSourcesAndQuotesSix_n,addSourcesAndQuotesSeven_n;

var b = " <br> "

// add time
adTime = "الثلاثاء ,  2020  اغسطس  6"


// add discription to another page 
discriptionPage = "اسئلة الفضاء"


// one container
addTitleContainerOne_n = " التأثير على سرعة تمدد الكون"

addContainerOne_n = "تأثير المادة المضلمة على تمدد الكون وانكماشه , المادة المضلمة تغمل على خفض سرعة تمدد الكون وانكماشه"
+b+"اما الثابت الكوني بالنسبة (لاينشتاين) فإنه في صورته الموجية يعمل على تسريع تمدد الكون"

addSourcesAndQuotesOne_n

// tow conainer 
addTitleContainerTwo_n = "الثابت الكوني"

addContainerTwo_n = "الثابت الكوني هو تفسير للتسارع في تمدد الكون"
+b+"بالنسبة لنموذج نشأه الكون الشائع بين العلماء , يفترض وجود ثابت كوني ذو قيمة تختلف عن الصفر , و الثابت الكوني يعادل طاقة تسمى بطاقة الفراغ و طاقه الفراغ تعمل  مضادة لقوىالتجاذب بين المادة في الكون"

addSourcesAndQuotesTwo_n


// three container 
addTitleContainerThree_n = "هل تمت مشاهدة الطاقة المضلمة "

addContainerThree_n = "تأكد الفلكيون و الفيزيائيون من مشاهدة تمدد الكون , باستخدام قياس الانزياح الأحمر لأطياف الجرات ." +
+b+"تقوم القياسات على النحو الخاص بقياس المستعمرات العضمى البعيدة عن الارض من نوع a1"

addSourcesAndQuotesThree_n


// four container 
addTitleContainerFour_n

addContainerFour_n

addSourcesAndQuotesFour_n


// five container 
addTitleContainerfive_n

addContainerfive_n 

addSourcesAndQuotesfive_n



// sex container 
addTitleContainerSix_n

addContainerSix_n 

addSourcesAndQuotesSix_n


// seven container
addTitleContainerSeven_n

addContainerSeven_n 

addSourcesAndQuotesSeven_n


// send data


addTitleIpage = document.getElementById(bnt+'_pag_n_232');

addt(titleIn)

function addt(m){
    var textDis = adDiscription.slice(0, 80);
    var o = document.createElement('div')
    o.innerHTML ='<div class="img_p_sugg_p"> <a href="https://www.trouko.co/questions/'+bnt+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='https://www.trouko.co/questions/"+bnt+"/'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="https://www.trouko.co/questions/'+bnt+'">'+" قراءة المزيد "+"</a> </div>"
    addTitleIpage.append(o)
}