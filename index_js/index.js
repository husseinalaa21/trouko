var subject_list, subject_list_n_s;

subject_list = $('#subject_list');
subject_list_n_s = $('#subject_list_n_s');

var iconT = document.getElementById("uMenuMine_m"),
  iconBarTh = document.getElementsByClassName("icon-bar")[0],
  iconBar = document.getElementsByClassName("icon-bar")[1],
  iconBarT = document.getElementsByClassName("icon-bar")[2],
  isClickMenu = false,
  isAppen = false,
  isWebT= false,
  menLis = document.getElementById("menuLisWeb");
  var lisBox = `
  <div class="lisBox" id="mEdNavMenu">
     <div class="maNaLis">
        <div class="mainList">
           <div class="mulist">
              <div class="mulist-title"> القائمة الرئيسية </div>
              <div class="mulistContainer">
                 <a href="/"> الصفحة الرئيسة </a>
                 <a href="../../../container_s_q/about.html">حول </a>
                 <a href="../../../container_s_q/contact.html"> اتصل بنا </a>
              </div>
           </div>
           <div class="mulist">
              <div class="mulist-title"> الاقسام </div>
              <div class="mulistContainer">
              <a href="../../../sub_s/space/">  مواضيع عن الفضاء </a>
              <a href="../../../sub_s/physics/">مواضيع عن الفيزياء </a>
              <a href="../../../sub_s/technology/">مواضيع عن التقنية </a>
              <a href="../../../sub_s/else/"> مواضيع متنوعة </a>
              </div>
           </div>
        </div>
        <div class="endNaMa">
           <div class="socLink">
           <div class="medLis">
              <a class="fasMaenu"
                 href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img
                    src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
              <a class="twiMaenu" href="https://twitter.com/trouko1"> <img
                    src="../../../icons/twitter-m.svg" /> </a>
              <a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" />
              </a>
           </div>
           <div class="conSharLin" ><i class="arrow left"></i> تابعنا على </div>
           </div>
     </div>
  </div>`
  function shoLiThisPage() {
      document.getElementById("rlsh").innerHTML = `<div class="resLinShar"> <div onclick="copThis()"> <img src="../../../icons/link-solid.svg" class="linSharICon"/> </div> <div class="sharLinContainer" >` +decodeURI(window.location.href) + `</div> </div>`
  }
  function typePage() {
      if(window.location.href.includes("/else/")){
          return " مواضيع "
      } else {
          return " أسئلة "
      }
  }
  var someEncodedString = encodeURI(window.location.href)
  var lisBox = `
  <div class="lisBox" id="mEdNavMenu">
     <div class="maNaLis">
        <div class="mainList">
           <div class="mulist">
              <div class="mulist-title"> القائمة الرئيسية </div>
              <div class="mulistContainer">
                 <a href="/"> الصفحة الرئيسة </a>
                 <a href="../../../container_s_q/about.html">حول </a>
                 <a href="../../../container_s_q/contact.html"> اتصل بنا </a>
              </div>
           </div>
           <div class="mulist">
              <div class="mulist-title"> الاقسام </div>
              <div class="mulistContainer">
              <a href="../../../sub_s/space/">  مواضيع عن الفضاء </a>
              <a href="../../../sub_s/physics/">مواضيع عن الفيزياء </a>
              <a href="../../../sub_s/technology/">مواضيع عن التقنية </a>
              <a href="../../../sub_s/else/"> مواضيع متنوعة </a>
              </div>
           </div>
        </div>
        <div class="endNaMa">
           <div class="socLink">
           <div class="medLis">
              <a class="fasMaenu"
                 href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img
                    src="../../../icons/facebook-m.svg" class="fasImg" /> </a>
              <a class="twiMaenu" href="https://twitter.com/trouko1"> <img
                    src="../../../icons/twitter-m.svg" /> </a>
              <a class="telegramMaenu" href="https://t.me/trouko"> <img src="../../../icons/telegram-m.svg" />
              </a>
           </div>
           <div class="conSharLin" ><i class="arrow left"></i> تابعنا على </div>
           </div>
     </div>
  </div>`
  
  var rt = document.getElementsByTagName('BODY')
  iconT.addEventListener("click", e => {
      if (isClickMenu === false) {
          if(isAppen === false){
              menLis.innerHTML = lisBox
              isAppen = true
          }
          iconBarTh.className = "icon-bar bar_a";
          setTimeout(function () { iconBar.className = "icon-bar bar_a" }, 150);
          setTimeout(function () { iconBarT.className = "icon-bar bar_a" }, 250);
          isClickMenu = true
          isWebT = true
          rt[0].style.overflow = "hidden"
          document.getElementById("mEdNavMenu").style.height = "100%";
      } else {
          iconBarTh.className = "icon-bar";
          iconBar.className = "icon-bar"
          iconBarT.className = "icon-bar"
          rt[0].style.overflow = "auto"
          document.getElementById("mEdNavMenu").style.height = "0";
          isClickMenu = false
          setTimeout(() => {
              isWebT = false
          }, 1000);
      }
  })
  var prevScrollpos = window.pageYOffset;
  /*var shtPagr = document.getElementById("infDir"),
      nbxc = document.getElementById("titleTs").innerHTML*/
  window.onscroll = function () {
      if(isWebT === false){
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos || 53 > currentScrollPos) {
              document.getElementById("navMean").style.top = "0";
          } else {
              document.getElementById("navMean").style.top = "-90px";
          }
          prevScrollpos = currentScrollPos;
      }
      /*
      if(window.scrollY > 170){
        shtPagr.innerHTML = '<div class="titPage" ><p> عنوان المقالة : '+nbxc+' </p></div>'
      } else {
        shtPagr.innerHTML = ""
      }*/
  }