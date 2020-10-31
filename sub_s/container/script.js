document.getElementById("time_up").innerHTML = formatAMPM()
function formatAMPM() {
var d = new Date(),
 minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
 hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
 ampm = d.getHours() >= 12 ? ' مسائاً ' : ' صباحاً ',
 months = ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمير'],
 days = ['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعه','السبت'];
return days[d.getDay()]+'  , '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' | '+hours+':'+minutes+ampm;

}

var title = document.getElementById('check_s').innerHTML;
var sub_main = document.getElementById('main_sub_ad');
var sub_main_q = document.getElementById('main_sub_ad_q');
var random_t_ser = document.getElementById('random_t_ser');

var xReq = new XMLHttpRequest();
xReq.open('GET','../../data.js');

xReq.send();

xReq.onload = function(){

    addNewSubr();

}



var count_number_p = [];


function random_a(){

    var xData = JSON.parse(xReq.responseText);

    var i;

    for(i=0; i < xData.length; i++){
        if(/الفضاء/.test(title)){
            if(xData[i].linkPage.includes("/space")){
                count_number_p.push(i);
                ad_sugg()
            }
        }
        
        if(/طعام/.test(title)){
            if(xData[i].linkPage.includes("/food")){
                count_number_p.push(i);
                ad_sugg()
            }
        }
        
        if(xData[i].linkPage.includes("/company")){
            if(xData[i].nameSub === "شركات" || xData[i].nameSub === "اسئلة شركات"){
                count_number_p.push(i);
                ad_sugg()
            }
        }
    }
    
    function ad_sugg(){
        var r = Math.floor(Math.random() * count_number_p.length)
        var v = count_number_p[r]
        random_t_ser.innerHTML = "   الموضوع المقترح :  " + xData[v].namePage +"<a class='r' href='"+ xData[v].linkPage+"'>"+" [ انقر هنا للقرأه ]"+"</a>";
    }
}

function addNewSubr(){
    var i;

    var xData = JSON.parse(xReq.responseText);

    for(i=0; i < xData.length; i++){
        if(/الفضاء/.test(title)){
            if(xData[i].linkPage.includes("/space/")){
                addNewSubrm(xData[i].linkPage, xData[i].namePath)
            }
            if(xData[i].linkPage.includes("/questions_space/")){
                addNewSubrm_q(xData[i].linkPage, xData[i].namePath)
            }
        }

        if(/طعام/.test(title)){
            if(xData[i].linkPage.includes("/food_fruits_vegetables/")){
                addNewSubrm(xData[i].linkPage, xData[i].namePath)
            }
            if(xData[i].linkPage.includes("/questions_food_fruits_vegetables/")){
                addNewSubrm_q(xData[i].linkPage, xData[i].namePath)
            }
        }

        if(/الشركات/.test(title)){
            if(xData[i].linkPage.includes("/company/")){
                addNewSubrm(xData[i].linkPage, xData[i].namePath)
            }
            if(xData[i].linkPage.includes("/questions_company/")){
                addNewSubrm_q(xData[i].linkPage, xData[i].namePath)
            }
        }
    }
}

var countNumM = 0;
var countNumq = 0;

function addNewSubrm(m,mm){
    countNumM ++;
    var li = document.createElement("div");
    li.className = "s_sub_t_d_";
    li.innerHTML =  "<p class='number_c'>"+countNumM +"</p>"+ "<p>  &nbsp;" +".&nbsp; <a class='s_sub_t_ite' href='"+m+"'>"+mm+"</a></p>";
    sub_main.append(li)
}

function addNewSubrm_q(m,mm){
    countNumq ++;
    var li = document.createElement("div");
    li.className = "s_sub_t_d_";
    li.innerHTML =  "<p class='number_c'>"+countNumq +"</p>"+ "<p>  &nbsp;" +".&nbsp; <a class='s_sub_t_ite' href='"+m+"'>"+mm+"</a></p>";
    sub_main_q.append(li)
}