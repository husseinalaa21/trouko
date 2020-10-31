/*var sub_r_s,title,sub_r_s_x,title;

sub_r_s = document.getElementById('sub_r_s');
title = document.getElementById('h_d_n').innerHTML;
sub_r_s_x = document.getElementById('sub_r_s_x');
title_t = document.getElementById("title").innerText;


var xReq = new XMLHttpRequest();
xReq.open('GET','../../data.js');

xReq.send();

xReq.onload = function(){

    addNewSubr();

}



function addNewSubr(){
    var i;

    var xData = JSON.parse(xReq.responseText);

    for(i=0; i < xData.length; i++){
        if(/فاكهة/.test(title) || /طعام/.test(title)){
            if(xData[i].nameSub === "طعام"){
                addNewSubrt(xData[i].linkPage, xData[i].namePage)
            }
        }
        if(/شركة/.test(title) && /فضاء/.test(title) || /وكالة/.test(title)|| /وكاله/.test(title)){
            if(xData[i].nameSub === "فضاء"){
                addNewSubrt(xData[i].linkPage, xData[i].namePage)
            }
        }
        if(/فضاء/.test(title)){
            if(xData[i].nameSub.includes("فضاء")){
                addNewSubrt(xData[i].linkPage, xData[i].namePage)
            }
        }

        if(/تقنية/.test(title)){
            if(xData[i].nameSub === "تقنيه"){
                addNewSubrt(xData[i].linkPage, xData[i].namePage)
            }
        }
    }

}


function addNewSubrt(m,mm){
    if(mm.includes(title_t)){
        return false
    }
    sub_r_s_x.style.display = "none";
    var li = document.createElement("div");
    li.className = "s_sub_t_d";
    li.innerHTML = "<p>"+"<a class='s_sub_t' href='"+m+"'>"+"⤵ مقاله ذات صله "+"</a></p>"+"<a class='s_sub_t' href='"+m+"'>"+mm+"&nbsp;&nbsp; '' انقر للقرائة '' "+"</a>";
    sub_r_s.append(li)
}*/