var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP;
titleIn = "استعمار المريخ";
adPhoto = "https://www.sciencealert.com/images/2019-12/processed/Mars2020RoverToPreparMarsForHoomans_1024.jpg"
adDiscription = "الكوكب الاحمر , او المريخ او (المستقبل البشري بعد 100 سنة) , كوكب المريخ احد اهم الكواكب القريبه من الارض و التي تنبأ بمستقبل البشرية في المستقبل , فلا يمكن ان تجد فلم او رواية او مقاله االتي تتحدث عن الخيال العلمي او المستقبل وتخلو من ذكر استعمار المريخ في اهم مواضيعها."
namePpath = "https://www.trouko.co/subjects/space/استعمار_المريخ/"
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_n_232');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="'+namePpath+'">'+" قراءة المزيد "+"</a> </div>"
addTitleIpage.append(ap)
}