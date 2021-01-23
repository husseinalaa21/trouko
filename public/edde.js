var socket = io('http://localhost:3000/');
socket.emit("okRead")

var sub,que,counSu,counQu,ad_sh;

sub = document.getElementById("sub");
que = document.getElementById("que");
ad_sh = document.getElementById("ad_sh")

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
    counSu++
    if(nextsun == "true"){
        var m = document.createElement("div");
        m.className = "suu sh"
        m.id = counSu
        m.innerHTML = "<div class='coun "+x+"'>"+counSu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="delete_" onclick="delete_now('+"'"+e+"'"+",'"+counSu+"'"+')" > <i class="fa fa-trash" style="font-size:16px"></i> </div>';
        v.append(m)
       return nextsun = "fales";
    } else {
        var m = document.createElement("div");
        m.className = "sunNext sh"
        m.id = counSu
        m.innerHTML = "<div class='coun "+x+"'>"+counSu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="delete_" onclick="delete_now('+"'"+e+"'"+",'"+counSu+"'"+')" > <i class="fa fa-trash" style="font-size:16px"></i> </div>';
        v.append(m)
        return nextsun = "true";
    }
}

function addQ(e,v,x){
    counQu++
    if(nextsunTwo == "true"){
        var vcounQu = counQu + ".1"
        var m = document.createElement("div");
        m.className = "suu sh"
        m.id = vcounQu
        m.innerHTML = "<div class='coun "+x+"'>"+counQu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="delete_" onclick="delete_now('+"'"+e+"'"+",'"+vcounQu+"'"+')" > <i class="fa fa-trash" style="font-size:16px"></i> </div>';
        v.append(m)
       return nextsunTwo = "fales";
    } else {
        var vcounQu = counQu + ".1"
        var m = document.createElement("div");
        m.className = "sunNext sh"
        m.id = vcounQu
        m.innerHTML = "<div class='coun "+x+"'>"+counQu+"</div>"+"<div class='p_c'>"+ e+'</div> <div class="delete_" onclick="delete_now('+"'"+e+"'"+",'"+vcounQu+"'"+')" > <i class="fa fa-trash" style="font-size:16px"></i> </div>';
        v.append(m)
       return nextsunTwo = "true";
    }
}

function delete_now(e,n){
     ad_sh.innerHTML = `<div id="o_delete">
     <div class="close_o_delete" id="close_o_delete"><i class="fa fa-close" style="font-size:24px"></i> </div>
     <div class="o_tixt">هل تريد الحذف</div> 
     <div class="ch_o_delete">
         <div class="yes_delete" id="yes_delete" onclick="delete_now_yes(`+"'"+e+"',"+"'"+n+"'"+`)"> نعم </div>
         <div class="no_delete" id="no_delete"> لا </div>
     </div>
  </div>`

  var close_o_delete = document.getElementById("close_o_delete");
  close_o_delete.addEventListener("click", e=>{
      ad_sh.innerHTML = " ";
  })
  var no_delete = document.getElementById("no_delete");
  no_delete.addEventListener("click", e=>{
      ad_sh.innerHTML = " ";
  })
}

function delete_now_yes(e,n){
    ad_sh.innerHTML = " ";
    socket.emit("deleteF",{url : e, number : n})
}

socket.on("deleteDone", e =>{
    var hide = document.getElementById(e.nump)
    hide.innerHTML = `
    <div class="coun cqu">`+e.nump+`</div>
    <div class="p_cdelete">`+e.url+`</div>`
})