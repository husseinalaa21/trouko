var subject_list, subject_list_n_s;

subject_list = $('#subject_list');
subject_list_n_s = $('#subject_list_n_s');


window.onload = function () {
  document.getElementById('gsc-i-id1').placeholder = 'أبحث عن شيء ..';
};
document.getElementById("time_up").innerHTML = formatAMPM()
function formatAMPM() {
  var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? ' مسائاً ' : ' صباحاً ',
    months = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمير'],
    days = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعه', 'السبت'];
  return days[d.getDay()] + '  , ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' | ' + hours + ':' + minutes + ampm;

}

var iconT = document.getElementById("uMenuMine_m"),
  iconBarTh = document.getElementsByClassName("icon-bar")[0],
  iconBar = document.getElementsByClassName("icon-bar")[1],
  iconBarT = document.getElementsByClassName("icon-bar")[2],
  isClickMenu = false,
  menLis = document.getElementById("menuLisWeb");
var lisBox = `<div class="lisBox">
               <div class="toLisBox">
                   <div class="secMainLis" > <p class="inPage"> الصفحة الرئيسية </p><a href="#sugIndex"> مقترحات </a> <a href="#subIndex"> مواضيع </a></div>
                   <div class="secSecLis" > <a href="./container_s_q/about.html"> حول </a><a> دعمنا </a><a href="#qusIndex"> أسئلة </a></div>
               </div>
               <div class="medLis">
                   <a class="fasMaenu" href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
                   <a class="twiMaenu" href="https://twitter.com/trouko1"> <img src="../../../icons/twitter-m.svg" /> </a>
                   <a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" /> </a>
                   <a class="instgramMaenu" href="https://www.instagram.com/t.rouko/"> <img src="../../../icons/instagram-m.svg" /></a>
               </div>
           </div>`
iconT.addEventListener("click", e => {
  if (isClickMenu === false) {
    iconBarTh.className = "icon-bar bar_a";
    setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 100);
    setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 200);
    menLis.innerHTML = lisBox
    isClickMenu = true
  } else {
    cloLis()
  }
})
function cloLis() {
  iconBarTh.className = "icon-bar";
  iconBar.className = "icon-bar"
  iconBarT.className = "icon-bar"
  menLis.innerHTML = ""
  isClickMenu = false
}