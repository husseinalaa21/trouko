var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = "لا تنخدع بالربح من الانترنت";
adPhoto = "../../../imgs/makeMonyOnline2.jpg"
adDiscription = "قد تنخدع بعناوين المقالات و الفيديوهات التي تجذب انتباهك للربح من الانترنت و تبين لك أن ابوباً من المال قد فتحت لك بلا عناء أو جهد , ولكن الحقيقة عكس ذلك .<br />لا شك بأنك قد قرأت أو شاهدت مقاطع فيديو على الانترنت للربح من الانترنت , وضننت أن هذه الفيديوهات و المقالات هي حقيقة بل و أنك قد تتسأل لماذا قد يكذب الناس بشأن هذه الفيديوهات أو المقالات ؟ ولكن أعدك بعد قرأه هذه المقالة ستفهم المغز من كل تلك الاكذيب و ما هو الحقيقي منها وما هو الكاذب .<br />بالبداية دعنا نقل انك تعمل في شركة للاعلام و تريد نشر مقال يجذب انتباه الناس لكي يشاهدو مقالتك و يشاهدون الاعلانات لكي تربح المال , في هذه الحالة سوف تختار عنوانا يجعل اعين الناس تزغلل من الفرحة و بالتأكيد لا يوجد ما هو أجمل من عنوان ربح المال . وهنا سوف يختار معضم الكتاب و اليوتيوبرز و غيرهم عناويناً كالتي شرحناها , وهي في الحقيقة اغلبها مجرد كذب ووهم لجذب الاشخاص اليهم , ولكن بالتأكيد يوجد ما هو حقيقي بالفعل فيجب أن تكون حذر لتتجنب الانخداع .<br /><br />ولكن هل يوجد ربح حقيقي من الانترنت ؟<br />بالطبع يوجد فكثير من الشركات العالمية يكون مصدر دخلها الرئيسي و الوحيد هو الربح من الانترنت .<br />وسوف نستعرض أهم طرق الربح و الاكثرها اماناً ."
namePpath = "https://trouko.com/subjects/else/لا_تنخدع_بالربح_من_الانترنت/"
infSuGuPageOn = '<p>  المواضيع / متنوعة   </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p> الخميس, 22 ابريل 2021  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.com/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}