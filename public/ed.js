var socket = io('http://localhost:3000/');
socket.emit("okRead")

var sub,que,counSu,counQu,ad_sh,body,result_ed,link_css_page_view,title_ed_Page,body_maine_ed;

sub = document.getElementById("sub");
que = document.getElementById("que");
ad_sh = document.getElementById("ad_sh")
body = document.getElementById("body")
result_ed = document.getElementById("result_ed")
css_link = document.getElementById("css_link")
title_ed_Page = document.getElementById("title_ed_Page")
link_css_page_view = document.getElementById("link_css_page_view")
body_maine_ed = document.getElementById("body_maine_ed")

socket.on("sub",e =>{
    var i;
    for(i=0; i < e.length; i++){
        addS(e[i],sub,"csu")
    }
})

socket.on("que",e =>{
    var i;
    for(i=0; i < e.length; i++){
        addQ(e[i],que,"cqu")
    }
})

counSu = 0;
counQu = 0;
var nextsun = "true";
var nextsunTwo = "true";

function addS(e,v,x){
    if(nextsun == "true"){
        counSu++
        var m = document.createElement("div");
        m.className = "suu sh"
        m.id = counSu
        m.innerHTML = "<div class='coun "+x+"'>"+counSu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="edite_" onclick="edite_now_yes('+"'"+e+"'"+",'"+counSu+"'"+')" > <i class="material-icons" style="font-size:16px">border_color</i> </div>';
        v.append(m)
        return nextsun = "fales"
    } else {
        counSu++
        var m = document.createElement("div");
        m.className = "sunNext sh"
        m.id = counSu
        m.innerHTML = "<div class='coun "+x+"'>"+counSu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="edite_" onclick="edite_now_yes('+"'"+e+"'"+",'"+counSu+"'"+')" > <i class="material-icons" style="font-size:16px">border_color</i> </div>';
        v.append(m)
        return nextsun = "true"
    }
}

function addQ(e,v,x){
    if(nextsunTwo == "true"){
        counQu++
        var m = document.createElement("div");
        m.className = "suu sh"
        m.id = counQu
        m.innerHTML = "<div class='coun "+x+"'>"+counQu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="edite_" onclick="edite_now_yes('+"'"+e+"'"+",'"+counQu+"'"+')" > <i class="material-icons" style="font-size:16px">border_color</i> </div>';
        v.append(m)
        return nextsunTwo = "fales"
    } else {
        counQu++
        var m = document.createElement("div");
        m.className = "sunNext sh"
        m.id = counQu
        m.innerHTML = "<div class='coun "+x+"'>"+counQu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="edite_" onclick="edite_now_yes('+"'"+e+"'"+",'"+counQu+"'"+')" > <i class="material-icons" style="font-size:16px">border_color</i> </div>';
        v.append(m)
        return nextsunTwo = "true"
    }
}
/*
function edite_now(m,n){
    ad_sh.innerHTML = `<div id="o_delete">
    <div class="close_o_delete" id="close_o_delete"><i class="fa fa-close" style="font-size:24px"></i> </div>
    <div class="o_tixt">تأكيد التعديل </div> 
    <div class="ch_o_delete">
        <div class="yes_delete" id="yes_delete" onclick="edite_now_yes(`+"'"+m+"',"+"'"+n+"'"+`)"> نعم </div>
        <div class="no_delete" id="no_delete"> لا </div>
    </div>
 </div>`;
 var close_o_delete = document.getElementById("close_o_delete");
 close_o_delete.addEventListener("click", e=>{
     ad_sh.innerHTML = " ";
 })
 var no_delete = document.getElementById("no_delete");
 no_delete.addEventListener("click", e=>{
     ad_sh.innerHTML = " ";
 })

}
*/
function edite_now_yes(m,n){
    socket.emit("edite_page", {urlPage : m, numberPage : n})
}

socket.on("completeRead",e=>{
    socket.emit("okSend")
})

socket.on("okEdite",e=>{
    location.href = "oKOpEnEdItOr";
})
