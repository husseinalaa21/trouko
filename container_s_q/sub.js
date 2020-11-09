var index_sugg_p ,nameP ,title_p_index,sub_r_s,sub_r_n,hol_sugg; 
sub_r_s = document.getElementById("sub_r_s")
sub_r_n = document.getElementById("sub_r_n")
hol_sugg = document.getElementById("hol_sugg")

addSugg(addSugg_vrOne);
addSugg(addSugg_vrTwo);
addSugg(addSugg_vrThree);
addSugg(addSugg_vrFour);
addSugg(addSugg_vrFive);



function addSugg(m){
    if(m == null || m == ""){
        return false
    }
    sub_r_n.style.display = "none"
     var n = m.replace("https://www.trouko.co/","")
     var g = Math.floor(Math.random() * 2000911); 
     var li = document.createElement("div");
     li.className = "s_sub_t_d";
     li.id = n +"_J_n_Hus_"+ g
     li.innerHTML = '<div id="'+n+'_pag_n_232"></div>'
     sub_r_s.append(li)
     var pMine = document.getElementById(n+"_J_n_Hus_"+g)
    $.getScript( m+"JavaScript/i_fscript.js", function( data) {
    var li = document.createElement("div");
    li.innerHTML = "<script id='inf_sc_p'>"+data+"</script>";
    pMine.append(li)
  });
}