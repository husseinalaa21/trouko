
var iconT = document.getElementById("uMenuMine_m"),
iconBarTh = document.getElementsByClassName("icon-bar")[0],
iconBar = document.getElementsByClassName("icon-bar")[1],
iconBarT = document.getElementsByClassName("icon-bar")[2],
isClickMenu = false,
isAppen = false,
isWebT= false,
menLis = document.getElementById("menuLisWeb");

var lisBox = `
<div class="newBody" id="covBody" onclick="iloveHusseinAlaa()"></div>
<div id="mySidenav" class="sidenav">
<div class="sliteLIst">
  <a href="/">الرئيسة</a>
  <a href="../../../container_s_q/about.html">عنا</a>
  <div class="sectionIns">
    <div class="headerIns" onclick="seIns('containerListOne')">
      <p>الاقسام</p>
      <p><span class="arrow" id="erSAre"><span></span><span></span></span></p>
    </div>
    <div class="containerIns" id="containerListOne" style="display : none;">
        <div class="containerStaff">
        <a href="https://trouko.com/sub_s/space/"> الفضاء </a>
        <a href="https://trouko.com/sub_s/else/"> منوعات </a>
        <a href="https://trouko.com/sub_s/technology/"> تكنلوجيا </a>
        <a href="https://trouko.com/sub_s/movies/"> افلام </a>
        <a href="https://trouko.com/sub_s/physics/"> فيزياء </a>
       </div>
    </div>
  </div>
<div class="socMedia"> 
<a class="fasMaenu"
 href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img
    src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
<a class="twiMaenu" href="https://twitter.com/trouko1"> <img
    src="../../../icons/twitter-m.svg" /> </a>
<a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" />
</a> </div>
</div>
</div>`
function iloveHusseinAlaa() {
iconBarTh.className = "icon-bar";
iconBar.className = "icon-bar"
iconBarT.className = "icon-bar"
document.getElementById("covBody").style.width = "0";
document.getElementById("mySidenav").style.width = "0";
isClickMenu = false
isWebT = false
}
function seIns(z) {
let element = document.getElementById(z)
element.style.display = (element.style.display == 'none') ? er(true) : er(false);
function er(params) {
    if (params === true) {
        element.style.display = 'block'
        document.getElementById("erSAre").className = "arrow active"
    } else {
        element.style.display = 'none'
        document.getElementById("erSAre").className = "arrow"
    }
}
}
var rt = document.getElementsByTagName('BODY')
iconT.addEventListener("click", e => {
    if (isClickMenu === false) {
        if(isAppen === false){
            menLis.innerHTML = lisBox
            isAppen = true
        }
        isClickMenu = true
        isWebT = true
        iconBarTh.className = "icon-bar bar_a";
        setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 150);
        setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 250);
        document.getElementById("covBody").style.width = "100%";
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.maxWidth = "500px";
    } else {
        iloveHusseinAlaa()
    }
})