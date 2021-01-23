window.onload = function (){
    var namePath = document.getElementById("ppp").innerHTML;
    var view = document.getElementById("view").innerHTML = `<div onclick="opens('`+ namePath +`')" ><i class="fa fa-eye" style="font-size:18px"></i>مشاهدة</div>`
}

function opens(filename){
    window.open("W"+filename);
}