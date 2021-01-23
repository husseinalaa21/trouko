// أعلانان

function addHtmlFileThree(title,urlImg,discription,time, titleContainerOne ,titleContainerTwo ,titleContainerThree ,titleContainerFour ,titleContainerFive ,titleContainerSix ,
    containerOne,containerTwo,containerThree,containerFour,containerFive,containerSix,lin,linkOne,linkTwo,linkThree,linkFour,linkFive,quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,timeUP,sameUrl,psp,disPM){
    var htmlFile = `<!DOCTYPE html>
   <html lang="en">
   <head>
        <link rel="stylesheet" type="text/css" href="../../../container_s_q/index.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="`+disPM+`" >
        <meta name="application-name" content="تروكو">
        <meta name="short_name" content="تروكو">
        <meta name="apple-mobile-web-app-title" content="تروكو">
        <script data-ad-client="ca-pub-8002456001478908" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link rel="stylesheet" type="text/css" href="../../../index_style/info.css">
        <link rel="stylesheet" type="text/css" href="../../../container_s_q/index_s.css">
        <link rel="shortcut icon" type="image/x-icon" href="../../../container_s_q/logo.png" />
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script>
          window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
           gtag('config', 'UA-161831073-4');
         </script>
         <title id="title">`+title+`</title>
   </head>   
   <!-- THREE -->
   <header>
       <div class="header_m_t" id="header_m_t">
         <img src="../../../icons/logotrouko.svg" class="ico_m">
      </div>
      
      <div class="header_main" id="menu_main">
         <div class="main_menu_main">
            <div class="menu_top menu_main">
               <div class="menu_sec">
                  <div class="men" id="home_menu">
                     <a href="/">الرئيسية</a>
                  </div>
                  <div class="men scrNo" id="samePage">
                     <a href="/">البحث</a>
                  </div>
                  <div class="men" id="sbSugMainMenu">
                     التصنيفات
                     <span class="sccs"></span>
                  </div>
                  <div class="men scrNo" id="samePage">
                     <a href="`+sameUrl+`">مقالات مشابهة </a>
                  </div>
               </div>
               
               <div class="menu_sec">
                  <div class="men scrNo" id="twitter">
                     <a href="https://twitter.com/trouko1"> <img src="../../../icons/twitterPage-brands.svg" style="width: 17px; margin-top: 2px;" id="icon_twitter">  </a>
                  </div>
                  <div class="men scrNo" id="telegram">
                     <a href="https://t.me/trouko"><img src="../../../icons/telegramPage-plane-brands.svg" style="width: 17px" id="icon_telegram"> </a>
                  </div>
               </div>
               
               <div class="uMenuMine_m" id="uMenuMine_m">
                  <div class="icon-bar"></div>
                  <div class="icon-bar"></div>
                  <div class="icon-bar"></div>
               </div>
            </div>
         </div>
         
         <div class="menu_sugmen" id="menu_sugmen" style="display: none;">
            <div id="ele_sugmen"></div>
         </div>
      </div>
   </header>

   <body>
   <!-- وقت النشر -->

   <div class="main_un_t_inf_o">

   <div class="time_write_this_page_o" >
   <div class="adConIn">
   <img src="../../../icons/folder-regular.svg" style="width: 14px;" id="icon_folder">&nbsp;
     `+addLin(lin,sameUrl)+`
   </div>
   <div class="adConIn">
      <p> بواسطة :  </p> &nbsp;&nbsp;
      <img src="../../../icons/user-circle-solid.svg" style="width: 12px;" id="icon_user-circle">&nbsp;
      <p>  Admin </p>
   </div>
   </div>

   <div class="time_write_this_page_p" id="time_write_this_page">
   <div class="adConIn">
     <img src="../../../icons/clockPage-solid.svg" style="width: 12.3px;" id="icon_clockPage"> &nbsp;&nbsp;`
      +addTime(time)+`
   </div>
   <div class="adConIn" id="edTime">
      <img src="../../../icons/edit-regular.svg" style="width:14px" id="icon_edit">&nbsp;&nbsp;
      `+upTime(timeUP)+`
   </div>
   </div>
   
   </div>
   
   <div class="sh_contr_Pa"></div>
   <div class="contr_Pa" id="contr_Pa">
   <div class="control_contact_p" ><div class="isVis" id="isVisb" onclick="isVisb();"><p id="wtvis">أخفاء</p> <i class='fas fa-low-vision' style="font-size: 15px;"></i></div>
   <div id="control_contact_p"><div class="control_c_b">
   <div class="c_c_b_black" onclick="changeCo('bl')"> C </div>
   <div class="c_c_b_white" onclick="changeCo('wh')"> C </div>
   <div class="c_c_b_yellow" onclick="changeCo('yell')"> C </div>
   <div class="c_c_b_def" onclick="changeCo('def')"> C </div>
   </div><div class="control_text_ss">
   <div class="t_t_small" onclick="changeTx('small')">   Aa </div>
   <div class="t_t_med" onclick="changeTx('def')">  Aa </div>
   <div class="t_t_larg" onclick="changeTx('lar')">  Aa </div>
   </div><div class="header"><div class="progress-container"><div class="progress-bar" id="myBar"></div></div></div></div></div>
   </div>

   <div class="ads_eq">
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
   <!-- main_ads -->
   <ins class="adsbygoogle"
        style="display:inline-block;width:728px;height:90px"
        data-ad-client="ca-pub-8002456001478908"
        data-ad-slot="8153122926"></ins>
   <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
   </script>
   </div>
  
   <div class="container_header">
      <div class="info_index">
         <div class="index_page" id="index_page">
           <p class="index_p_info menfontmen">  محتويات ~</p>
            <div class="index_list_i" id="index_list_i"> 
               <a class="a_index" id="a_index_int" href="#introudiction"> المقدمه </a>
               <a href="#title_sour_an_qou"> المراجع </a>
               `+
                 addIndexPage(titleContainerOne,"#title__ad_subject_one")+
                 addIndexPage(titleContainerTwo,"#title__ad_subject_two")+
                 addIndexPage(titleContainerThree,"#title__ad_subject_three")+
                 addIndexPage(titleContainerFour,"#title__ad_subject_four")+
                 addIndexPage(titleContainerFive,"#title__ad_subject_five")+
                 addIndexPage(titleContainerSix,"#title__ad_subject_six")
               +`
            </div>
         </div>
      </div>

      <div class="info_index i_index_">
          <div class="index_page index_page_" id="index_page">
             <p class="index_p_sugg menfontmen"> <img src="../../../icons/stream-solid.svg" style="width:13px;"> &nbsp; مقترحات </p>
             <div id="index_sugg_p" class="index_sugg_p"><div id="hol_sugg"> <div class="hol_sugg"><div class="hol_suggOne hol"></div><div class="hol_suggTwo hol"></div> <div class="hol_suggThree hol"></div></div> </div></div>
          </div>
      </div>

   </div>
    
      <div class="index__page__main" id="introudiction">

         <div class="tit_index__"><p id="title_index"> <div class="ad_intro_in_p_h" id="main_t_page">`+title+`</div> </p>
         </div>
         
         <div class="Content__for__index__m">
            <div id="ad_photo">`
            +addImageMain(urlImg)+`
            </div>
            <div class="container_text"  id="Content__for__index__m">
               `+addDiscription(discription)+
               `
            </div>
         </div>
         <div id="ad_sources_quotes_index" class="source_quotes"></div>
         <!-- اعلانات جوجل --> 
         <div class="ad_page_one" id="ad_page_one">
                <!-- one -->
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-layout="in-article"
                     data-ad-format="fluid"
                     data-ad-client="ca-pub-8002456001478908"
                     data-ad-slot="6906137822"></ins>
                 <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                 </script>
         </div>
      </div>  
    
      <!-- add a sub -->
      <div class="s_add">
              <div class="ad_sub_one" id="ad_sub_one">
                  <div class="title__ad_subject" id="title__ad_subject_one">
                    <!-- title here -->
                    ` +addTitleCon(titleContainerOne,"titleContainerOne_")+
                    `
                  </div>
                  <div class="ad_i_subject" id="ad_container_subject_one">
                    <!-- continer here --> 
                    ` +addContainer(containerOne,"containerOne_")+
                    `
                  </div>
                  <div id="ad_sources_quotes_one" class="source_quotes"></div>
              </div>
    
    
              <div class="ad_sub_two" id="ad_sub_two">
                 <div class="title__ad_subject" id="title__ad_subject_two">
                  <!-- title here -->
                  ` +addTitleCon(titleContainerTwo,"titleContainerTwo_")+
                  `
                 </div>
                 <div class="ad_i_subject" id="ad_container_subject_two">
                   <!-- continer here --> 
                   ` +addContainer(containerTwo,"containerTwo_")+
                   `
                 </div>
                 <div id="ad_sources_quotes_two" class="source_quotes"></div>
              </div>

    
              <div class="ad_sub_three" id="ad_sub_three">
                 <div class="title__ad_subject" id="title__ad_subject_three">
                  <!-- title here -->
                  ` +addTitleCon(titleContainerThree,"titleContainerThree_")+
                  `
                 </div>
                 <div class="ad_i_subject" id="ad_container_subject_three">
                   <!-- continer here --> 
                   ` +addContainer(containerThree,"containerThree_")+
                   `
                 </div>
                 <div id="ad_sources_quotes_three" class="source_quotes"></div>
              </div>
    
              <div class="ad_sub_four" id="ad_sub_four">
                 <div class="title__ad_subject" id="title__ad_subject_four">
                  <!-- title here -->
                  ` +addTitleCon(titleContainerFour,"titleContainerFour_")+
                  `
                 </div>
                 <div class="ad_i_subject" id="ad_container_subject_four">
                      <!-- continer here --> 
                      ` +addContainer(containerFour,"containerFour_")+
                      `
                 </div>
                 <div id="ad_sources_quotes_four" class="source_quotes"></div>
              </div>
    
              <div class="ad_sub_five" id="ad_sub_five">
                <div class="title__ad_subject" id="title__ad_subject_five">
                  <!-- title here -->
                  ` +addTitleCon(titleContainerFive,"titleContainerFive_")+
                  `
                </div>
                <div class="ad_i_subject" id="ad_container_subject_five">
                      <!-- continer here --> 
                      ` +addContainer(containerFive,"containerFive_")+
                      `
                </div>
                <div id="ad_sources_quotes_five" class="source_quotes"></div>
             </div>
    
             <div class="ad_sub_six" id="ad_sub_six">
                <div class="title__ad_subject" id="title__ad_subject_six">
                  <!-- title here -->
                  ` +addTitleCon(titleContainerSix,"titleContainerSix_")+
                  `
                </div>
                <div class="ad_i_subject" id="ad_container_subject_six">
                      <!-- continer here --> 
                      ` +addContainer(containerSix,"containerSix_")+
                      `
                </div>
                <div id="ad_sources_quotes_six" class="source_quotes"></div>
             </div>
    
             <div class="ad_sub_seven" id="ad_sub_seven">
                <div class="title__ad_subject" id="title__ad_subject_seven">
                  <!-- title here -->
                </div>
                <div class="ad_i_subject" id="ad_container_subject_seven">
                      <!-- continer here --> 
                </div>
                <div id="ad_sources_quotes_seven" class="source_quotes"></div>
             </div>

   </div>
    
   <div class="ch_sub_ sug" id="suggest_sugg">  
       <div class="text_sub_s sug_t tar">  <p class="s_tas" id="title_p_index"> ــــــ </p>   ذات صلة بـ &nbsp;  </div>

       <div class="sub_r_n" id="sub_r_n"> لا تتوفر معلومات </div>
       <div class="containerSugg" id="containerSugg">
          <div class="sub_r_s subsr" id="sub_r_s"></div>
       </div>
   </div> 

   <div class="ch_sub_ sug" id="suggest_sugg">  
       <div class="text_sub_s sug_t tar">  مقترحات  </div>
       
       <div class="containerSugg" id="containerSugg">
          <div class="sub_r_n" id="sub_r_nSugg"> لا تتوفر معلومات </div>
          <div class="sub_r_s" id="sub_r_sSugg"></div>
       </div>
   </div> 
    
   <div class="sou_an_quo"> 
      <div class="title_sour_an_qou" id="title_sour_an_qou">
          <p class="title_sour_an_qou_p">  المراجع | المصادر | الأقتباسات </p>&nbsp; <img src="../../../icons/quote-left-solid.svg" style="width:12.5px; margin-bottom: 10px;">
      </div>

      <div class="notesQ" id="notesQ"><p>. يتم أضافة المصادر و المراجع و الاقتباسات  لغاية تحسين جودة معلومات المقالة   </p></div>
      
      <div class="sou_an_quo_content" id="souquo">
      <p id="hide_text" class='p_t_container'>لا يتوفر مراجع لهذه الصفحة</p>
     </div>
  </div>

   <div style="display:none;"><div id="lin_k_One">`+addLink(linkOne)+`</div><div id="lin_k_Two">`+addLink(linkTwo)+`</div><div id="lin_k_Three">`+addLink(linkThree)+`</div><div id="lin_k_Four">`+addLink(linkFour)+`</div><div id="lin_k_Five">`+addLink(linkFive)+`</div> </div>
   <div style="display:none;"><div id="quoOne_">`+addLinkQue(quoOne)+`</div><div id="quoTwo_">`+addLinkQue(quoTwo)+`</div><div id="quoThree_">`+addLinkQue(quoThree)+`</div><div id="quoFour_">`+addLinkQue(quoFour)+`</div><div id="quoFive_">`+addLinkQue(quoFive)+`</div><div id="quoSix_">`+addLinkQue(quoSix)+`</div> </div>
   <div style="display:none;"><div id="quoOnea_">`+addLinkQuea(quoOnea)+`</div><div id="quoTwoa_">`+addLinkQuea(quoTwoa)+`</div><div id="quoThreea_">`+addLinkQue(quoThreea)+`</div><div id="quoFoura_">`+addLinkQuea(quoFoura)+`</div><div id="quoFivea_">`+addLinkQuea(quoFivea)+`</div><div id="quoSixa_">`+addLinkQuea(quoSixa)+`</div> <div id="Urlsame">`+sameUrl+`</div><div id="psp">`+psp+`</div></div>

   <div class="information">
      <div class="sweb">

       <div class="">
          <div class=" m_each"> <a class="a_link" href="../../../container_s_q/contact.html">أتصل بنا عبر البريد</a>   </div>
          <div class="support_us m_each">
            <a class="a_link" href="../../../container_s_q/supportUs.html"> للدعم والمساعدة </a>
          </div>
          <div class="support_us m_each">
            <a class="a_link" href="../../../container_s_q/developers.html"> مطور الموقع  </a>
          </div>
       </div>

       <div class="">
          <div class=" m_each"> <a class="a_link" href="/">الصفحة الرئيسية</a>   </div>
          <div class="about_us m_each randPag" id="random_page" onclick="randoPag();">
             مقالة عشوائية 
          </div>
          <div class="about_us m_each">
            <a class="a_link" href="../../../container_s_q/about.html">  حول الموقع </a>
          </div>
       </div>
      </div>
    
       <div id="info_information">
       </div>
    
       <div class="b_sess dis_sess"> 
       <div class="m_facebook w_each">
         <a class="face" href="https://web.facebook.com/%D8%AA%D8%B1%D9%88%D9%83%D9%88-trouko-104470178026820"> <img src="../../../icons/facebook-f-brands.svg" style="width: 12px"> </a>
       </div>
       <div class="m_twiter twi w_each">
         <a class="twi" href="https://twitter.com/trouko1">  <img src="../../../icons/twitter-brands.svg" style="width: 18px"> </a>
       </div>
       <div class="m_telegram w_each">
        <a class="m_telegram" href="https://t.me/trouko"> <img src="../../../icons/telegram-plane-brands.svg" style="width: 18px"> </a>
       </div>
       <div class="m_instgram w_each">
        <a class="m_instgram" href="https://www.instagram.com/t.rouko/"> <img src="../../../icons/instagram-brands.svg" style="width: 18px"></a>
       </div>
    </div>
 </div>
 <div class="trouko_about">
     <div class="trouko-about_p"> <img src="../../../icons/check-circle-regular.svg" style="width: 9px;"> &nbsp; موقع تروكو  هو مدونة لنشر المقالات المختلفة باللغة العربية , و الهدف الرئيسي من أنشائها هو لرفع نسبة المدونات المطروحة باللغة العربية , مع أطيب التحيات . </div>
     <div class="trouko_about_t">
      <div>  
         جميع الحقوق محفوضة لدى مدونة تروكو
      </div>
      <div>  
         2020  trouko | تروكو  @ 
      </div>
   </div>
 </div>

 </body>
    <script src="../../../container_s_q/jquery.js"></script>
    <script src="./JavaScript/script.js"></script>
    <script src="../../../container_s_q/index_main.js"></script>
    <script src="../../../container_s_q/script.js"></script>
    <script src="../../../container_s_q/sub.js"></script>
</html>`;
    
    // functions add html
    
    function addImageMain(m){
         if(m == null|| m == ''){
            var imgFales = ""
            return imgFales
         }
         var imgTrue = `
         <div class="photo_page_im" id="photo_page_im">
           <img class="img" id="img" src="`+m+`">
           <p class="pText_Image">
           <i id="click_material">
             <img src="../../../icons/expand-solid.svg" class="material_i" style="width: 16px;">
           </i>
           </p>
         </div>`;
        return imgTrue
    }
    
    function addTime(m){
       if(m == null|| m == ''){
          var timeFales = "";
          return timeFales;
       }
         var timeTrue = `<p id="timeWrite">  تاريخ النشر  : ` + m +`</p>`;
        return timeTrue;
    }
    
    function addLin(m,n){
       if(m == null|| m == ''){
          var linFales = "";
          return linFales;
       }
       var linTrue = `التصنيفات : رئيسي / <a id="lin" href="`+n+`">`+m+`</a>`
       return linTrue;
    }
    
    function addDiscription(m){
         if(m == null|| m == ''){
            var disFales = ""
            return disFales
         }
         var disTrue = `<div class="ad_continer"> <p id="discription_page">`+m+`</p> </div>`
         return disTrue
    }
    
    function addTitleCon(m,n){
         if(m == null || m == ''){
            var titleFales = "";
            return titleFales
         }
         var titleTrue = `<div class="title__ad_subject_p" id="`+n+`">`+m+`</div>`
         return titleTrue
    }
    
    function addContainer(m,n){
       if(m == null|| m == ''){
          var containrFales = "";
          return containrFales
       }
       var containerTrue = `
       <div class="ad_i_subject_p">
           <p class="p_container" id="`+n+`">`+m+`</p>
       </div>`
       return containerTrue
    }
    
    function addIndexPage(m,n){
       if(m == null|| m == ''){
          var index = ""
          return index
       }
       var indexTrue = `<div class="index_list_"><a href="`+n+`"> `+m+` </a></div>`;
       return indexTrue
    }
    
    
    function addLink(m){
       if(m == null|| m == ''){
          var index = ""
          return index
       }
       var linKTrue = m;
       return linKTrue;
    }
    
    function addLinkQue(m){
       if(m == null|| m == ''){
          var index = ""
          return index
       }
       var linKTrue = m;
       return linKTrue;
    }
    
    function addLinkQuea(m){
       if(m == null|| m == ''){
          var index = ""
          return index
       }
       var linKTrue = m;
       return linKTrue;
    }
    
    function upTime(m){
       if(m == null|| m == ''){
          var timeFales = `  <p>  تاريخ التعديل  : ____  </p>`
          return timeFales
       }
       var timeTrue = ` <p>   تاريخ التعديل  :  `+m+` </p>`
       return timeTrue
    }
    
    // end add .
    
       return htmlFile;
    }
    
    module.exports = {
        addHtmlFileThree
    }