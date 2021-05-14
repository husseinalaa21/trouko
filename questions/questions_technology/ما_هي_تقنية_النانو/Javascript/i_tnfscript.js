var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "ما هي تقنية النانو";
adPhoto = "../../../imgs/bamdad-no.jpg"
adDiscription = "شهدت السنوات الماضية تطور هائل في مجال التقنية و ابرز ما شهد تطور هائل هو بلا شط , اختراع إلكترونيات السيليكون أو  ' الترانزيستور ' والمعامل الإلكتروني ، أدى تطويرها إلى ظهور ما يسمى بالشرائح الصغرية والتي بدورها  أدت إلى ثورة تقنية في جميع المجالات مثل الاتصالات والحاسوب والطب و الفضاء وغيرها الكثير . ولا شك ان كل الاختراع التي يشهدها العالم اليوم يعود الفضل فيها إلى الشرائح الصغرية والتي أدى ازدياد الطلب عليها إلى انخفاض أسعارها بشكل سهل دخولها في تصنيع جميع الإلكترونيات الاستهلاكية التي تحيط بنا اليوم . وخلال السنوات القليلة الفائتة، برز إلى الأضواء مصطلح جديد ألقى بثقله على العالم وأصبح محط الاهتمام بشكل كبير، و هو ' تقنية النانو '.تقنية النانو تبشر بتطور هائل في جميع فروع العلوم والهندسة، ويرى العلماء أنها ستلقي بظلالها على كافة مجالات الطب الحديث والاقتصاد العالمي  فهي بساطة ستمكننا من صنع أي شيء نتخيله وذلك عن طريق صف جزيئات المادة إلى جانب بعضها البعض بشكل لا نتخيله وبأقل كلفة ممكنة، فلنتخيل حواسيبَ خارقة الأداء يمكن وضعها على رؤوس الأقلام والدبابيس، ولنتخيل أسطولا من روبوتات النانو الطبية والتي يمكن لنا حقنها في الدم أو ابتلاعها لتعالج الجلطات الدموية والأورام والأمراض المستعصية."
namePpath = "https://trouko.com/questions/questions_technology/ما_هي_تقنية_النانو/"
infSuGuPageOn = '<p>  أسئلة / التقنية  </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> السبت, 1 مايو 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}