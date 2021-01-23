var socket = io('http://localhost:3000/');

var nameProject,googlet, checkAddUrlGoogle ,
urlPageGet,namePageGet,getAutoCharContainer,waiteOnLoad
,startCreateAWite,shstartCreate,shstartCreateM,urlPageGetNext,urlPageGetNextContainer
,shAnly,startAnlyData,createAll,issdataRead,startCreate,shSectionAll,createAllCase
,l_p_ch,path_r_n,lin
,namePage,check_name_pTH;

urlPageGet = document.getElementById("urlPageGet")
namePageGet = document.getElementById("namePageGet")

nameProject = document.getElementById("nameTheSubject")
googlet = document.getElementById("googlet")
getAutoCharContainer = document.getElementById("getAutoCharContainer")
waiteOnLoad = document.getElementById("waiteOnLoad")

shstartCreate = document.getElementById("shstartCreate")
startCreate = document.getElementById("startCreate")
shstartCreateM = document.getElementById("shstartCreateM")
getAutoCharContainer
urlPageGetNext = document.getElementById("urlPageGetNext")
wikiContainer = document.getElementById("urlPageGetNextContainer")
shAnly = document.getElementById("shAnly")
shSectionAll = document.getElementById("shSectionAll")
startAnlyData = document.getElementById("startAnlyData")
createAll = document.getElementById("createAll")

createAllCase = document.getElementById("createAllCase")

issdataRead = document.getElementById("issdataRead")

namePage = document.getElementById("namePage")

l_p_ch = document.getElementsByClassName("l_p_ch")
path_r_n = document.getElementById("path_r_n")
lin = document.getElementById("lin")
check_name_pTH = document.getElementById("check_name_pTW")


var caseCreate = false
var vmarkWord = false

// DATA PAGE 

var discriptions = [];
var sectionsTitle = [];
var sectionsContainer = [];
var clearTitle = [];
var urlsWiki = [];
var namsWiki = [];
var discriptionsWebs = [];
var markWord = [];
var markWordN = []

// بيانات الصفحات العشرة الاولة المأخوذه من جوجل

var disTpage = [];

// END

// DATA IMGS

var imgs = []
var numImg = 0;
var urlImgCh;

//.

// ترجمه الكلمات 

var wordsS;

// .

// check photo and translate

var pCheck = "false";

// .

// احالة صفحة تالفة

var nextWebPageReload = []
var isNextWebPageReload;
var nextElementWebPageReload  = 0;
// .

// البيانات المهمة التي سوف نحتاج اليها
   // --- هذه البيانات تلزم فقط لتخزين العناوين و الاستفادة منها
var jsonTitles = []
   // .

var containerAll = []
var containerTitlesSections = []
var dsJson = []

// .

// محاولات اخذ بيانات من ويكيبيديا

var namePageSplit;
var wikiMarkTitles = []
var wikiMarkUrls = []
var wikiMarkD = []
var jsonWiki = []

// .

// sections

var webPage = document.getElementById('webPage')

// end section var

// الكلمة الاكثر صلة بالموضوع 
var ppWord;
// .

var isCoDataDone = "false"


window.onload = function (){

    var inputGoogle = document.getElementById("gsc-i-id1")

    socket.emit("IStakeThisInfoPls")
    socket.on("IStakeThisInfoPlsOK",e=>{
        nameProject.value = e[0]
        inputGoogle.value = e[0]
        lin.value = e[1]
        path_r_n.value = e[2]
        namePage.value = e[3]
        callCheck()
        document.querySelector('.gsc-search-button .gsc-search-button-v2').click();
        socket.emit("IStakeThisInfoPlsOKY")
        googlet.style.backgroundColor = "#34626c"
    })

    var okNextUrl = 0;
    var okNextUrlGot = 0;
    var countNamePage = 1;
    var countNumberDescription = 0;

    // اخذ مفاتيح الكلمات

    var isItakeKey = "false";
    var tkeyIs = "false"

    var buttom = document.getElementsByClassName("gsc-search-button");   

    buttom[0].addEventListener("click",e =>{

        var resultName = document.getElementsByClassName("gs-title");
        var resultDis = document.getElementsByClassName("gs-snippet");
        var urlPageChTac = [];

        // اشعارات
    
        var dataAccessTrue = document.createElement("div")
        dataAccessTrue.innerHTML = `<p class="green"> بدء الانشاء  </p>`
        issdataRead.append( dataAccessTrue)
    
        // 

        // تقسم اسم الصفحة 
        var nS = nameProject.value.split(" ")
        namePageSplit = nS
        // 

        setTimeout(function(){
            letsSearch()
            gotResultFromSearch()

            function letsSearch(){
                    if(okNextUrl < 10){
                        okNextUrl ++;
                        waiteOnLoad.innerHTML = `<i class="fas fa-cog fa-spin"></i>`
                        try {

                            var disResultJ = resultDis[okNextUrl].innerHTML
                            var clearHistoryGoogleResultOne = disResultJ.replace(/كانون الثاني|شباط|أيار|أيلول|تشرين الأول|حزيران|تشرين الثاني|كانون الأول|تموز|آذار|نيسان|آب|ديسمبر|نوفمبر|أكتوبر|سبتمبر|أغسطس|يوليو|يونيو|يناير|فبراير|مارس|مايو|إبريل/g, "")
                            var clearHistoryGoogleResult = clearHistoryGoogleResultOne.replace(/\(|\)|\.|\d|٠|١|٢|٣|٤|٥|٦|٧|٨|٩/g, "")
                            var clearHtmlElementSynTwo = clearHistoryGoogleResult.replace(/<b>/g, '').replace(/<\/b>/g,'').replace(/&nbsp;/g,"").replace(/<sup>/g, '').replace(/<\/sup>/g,'').replace(/\/|,|-|_|،|\+|=|\$|%|&|:|#|;/g,"");
                            
                            // اضافه البيانات المستخرجة من الصفحات الرئيسية
                            countNumberDescription ++;
                            var elP = document.createElement("p")
                            elP.innerHTML =' <mark class="ncd"> ( '+ countNumberDescription+' ) </mark> '+ clearHistoryGoogleResult
                            getAutoCharContainer.append(elP)
                            // انتهاء الاضافه 

                            // تخزين البيانات المستخرجة 
                            discriptionsWebs.push(clearHtmlElementSynTwo)
                            
                            disTpage.push(clearHistoryGoogleResult)
                            //

                          }
                          catch(err) {
                            return false
                          }
                        

                        letsSearch()
                        checkAddUrlGoogle = "addDone"
                } else {
                    tkeyIs = "true"
                }
            }

            function gotResultFromSearch(){
                if(okNextUrlGot < 4){

                        okNextUrlGot  ++;
                        var url = document.createElement("div")
                        url.innerHTML =' <p class="cTUn"> '+okNextUrlGot+'. </p> '+ '<a class="urlMi" href="'+resultName[countNamePage].href+'" >'+ resultName[countNamePage].innerHTML+'</a>'
                        urlPageGet.append(url)
                        urlPageChTac.push(resultName[countNamePage].href)
                        
                        var clearUrl = resultName[countNamePage].innerHTML
                        // تمميز الكلمات بواسطة جوجل

                        ccMark()
                        function ccMark(){
                            clearUrl = clearUrl.replace(/<b><\/b>/g, "")
                            if(clearUrl.includes('<b>')){
                                var xSub = clearUrl.substring(
                                    clearUrl.lastIndexOf("<b>"), 
                                    clearUrl.lastIndexOf("</b>")
                                );
                                vmarkWord = true
                                var clearX = xSub.replace(/</g,"").replace(/>/g,'').replace('/','').replace(/b/g,'')
                                if(markWord.includes(clearX)){
                                    // false
                                    var itemEX = markWord.indexOf(clearX)
                                    if(isNaN(markWordN[itemEX])){
                                        // false
                                    } else {
                                        var nnEX = markWordN[itemEX] + 1
                                        markWordN[itemEX] = nnEX
                                    }
                                } else {
                                    markWordN.push(0)
                                    markWord.push(clearX)
                                }
                                isItakeKey = "true"
                                clearUrl = clearUrl.replace("<b>"+clearX+"</b>","")
                                ccMark()
                            } else {
                                return false
                            }
                        }
                        // انتهاء
                        countNamePage += 4;
                        
                        gotResultFromSearch()
                } else {
                   tkey()
                    function tkey(){
                        if(isItakeKey == "false"){
                            if(tkeyIs == "false"){
                                setTimeout(() => {
                                    tkey()
                                }, 500);
                            } else {
                                for(var u =0;u < disTpage.length; u++){
                                    var thisT = disTpage[u]
                                    
                                    chWordsTaq()
                                    function chWordsTaq(){
                                        thisT = thisT.replace(/<b><\/b>/g, "")
                                        if(thisT.includes("<b>")){
                                            var xSub = thisT.substring(
                                                thisT.lastIndexOf("<b>"), 
                                                thisT.lastIndexOf("</b>")
                                            );

                                            var clearX = xSub.replace(/</g,"").replace(/>/g,'').replace('/','').replace(/b/g,'')
                                            if(markWord.includes(clearX)){
                                                // false
                                                var itemEX = markWord.indexOf(clearX)
                                                if(isNaN(markWordN[itemEX])){
                                                    // false
                                                } else {
                                                    var nnEX = markWordN[itemEX] + 1
                                                    markWordN[itemEX] = nnEX
                                                }
                                            } else {
                                                add()
                                                function add(){
                                                    markWordN.push(0)
                                                    markWord.push(clearX)
                                                }
                                            }
                                            thisT = thisT.replace("<b>"+clearX+"</b>","")
                                            chWordsTaq()
                                        } else {
                                            return false
                                        }
                                    }

                                    if(disTpage.length -1 == u){
                                        var mxE = Math.max.apply(null, markWordN);
                                        var nMxE = markWordN.indexOf(mxE)
                                        ppWord = markWord[nMxE]
                                    }
                                }
                            }
                        } else {
                            var mxE = Math.max.apply(null, markWordN);
                            var nMxE = markWordN.indexOf(mxE)
                            ppWord = markWord[nMxE]
                            return false
                        }
                    }
                    // الان جعل ويكي يبحث ايضا
                    dowiki(nameProject.value)
                    // انتهاء

                    // ترجمه الكلمة للبحث عن صور 
                    socket.emit("translateThis",nameProject.value)
                    // .
                }
            }

           var countPageIn =  document.getElementsByClassName("gsc-cursor-page")
            var i;
            for(i = 0; i < countPageIn.length ; i++){
               
            }

            var nextNPNX = 0;
            var countNamberCallCheck = 0;
            
            nextPageIndex()
            function nextPageIndex(){
                if(nextNPNX < 10){
                var number = nextNPNX
                setTimeout(function(){
                    okNextUrl = 0;
                    countNamberCallCheck = 0;
                    document.getElementsByClassName("gsc-cursor-page")[number].click();
                    setTimeout(function(){
                        chechNext()
                        function chechNext(){
                                countNamberCallCheck ++;
                                okNextUrl ++;
                                if(countNamberCallCheck < 10){
                                    try {
                                    var disResultJ = resultDis[okNextUrl].innerHTML
                                    var clearHistoryGoogleResultOne = disResultJ.replace(/كانون الثاني|شباط|أيار|أيلول|تشرين الأول|حزيران|تشرين الثاني|كانون الأول|تموز|آذار|نيسان|آب|ديسمبر|نوفمبر|أكتوبر|سبتمبر|أغسطس|يوليو|يونيو|يناير|فبراير|مارس|مايو|إبريل/g, "")
                                    var clearHistoryGoogleResult = clearHistoryGoogleResultOne.replace(/\(|\)|\.|\d|٠|١|٢|٣|٤|٥|٦|٧|٨|٩/g, "")
                                    var clearHtmlElementSynTwo = clearHistoryGoogleResult.replace(/<b>/g, '').replace(/<\/b>/g,'').replace(/&nbsp;/g,"").replace(/<sup>/g, '').replace(/<\/sup>/g,'').replace(/\/|,|-|_|،|\+|=|\$|%|&|:|#|;/g,"");
                                    
                                    // اضافه البيانات المستخرجة من الصفحات الرئيسية
                                    countNumberDescription ++;
                                    var elP = document.createElement("p")
                                    elP.innerHTML =' <mark class="ncd"> ( '+ countNumberDescription+' ) </mark> '+  clearHistoryGoogleResult
                                    getAutoCharContainer.append(elP)
                                    // انتهاء الاضافه 
        
                                    // تخزين البيانات المستخرجة 
                                    discriptionsWebs.push(clearHtmlElementSynTwo)
                                    //
                                    }
                                    catch(err) {
                                      return false
                                    }
                                    chechNext()
                                }
                        }
                    },1500)
                },1000)
                nextNPNX ++;

                setTimeout(function(){ nextPageIndex() },1500)

                } else{
                    waiteOnLoad.innerHTML = countNumberDescription

                    // بعد انتهاء جمع البيانات ما التالي
                    // اشعارات

                    var dataAccessTrue = document.createElement("div")
                    dataAccessTrue.innerHTML = `<p class="green"> انتهاء جمع بيانات تحليل الصفحات الرئيسية العدد  `+countNumberDescription+` جملة مستخرجة </p>`
                    issdataRead.append( dataAccessTrue)

                    // 
                }

            }

            setTimeout(function(){
                startIndex(numberPageIndex)
            },1000)

            var dataAccessTrueCoun =0;
            var numberPageIndex = 0;
            var typePageI = ""
            var nusec = ['الاول',"الثاني","الثالث","الرابع","الخامس","السادس"]
            
            function startIndex(){
                if(numberPageIndex < urlPageChTac.length){
                    console.log(numberPageIndex)
                    if(urlPageChTac[numberPageIndex].includes("mawdoo3")){
                        typePageI = "MS"
                        console.log("ms")
                    } if(urlPageChTac[numberPageIndex].includes("dw")){
                        typePageI = "DW"
                        console.log("DW")
                    } if(urlPageChTac[numberPageIndex].includes("scientificamerican")){
                        typePageI = "SS"
                        console.log("SS")
                    } if(urlPageChTac[numberPageIndex].includes("nasainarabic")){
                        typePageI = "NAS"
                        console.log("NAS")
                    }
                    try{
                        if(urlPageChTac[numberPageIndex].includes("pdf")){
                            socket.emit("indexThisPageUrl", {data : "",typePageI})
                        }else {
                            $.get(urlPageChTac[numberPageIndex], function( data) {
                                socket.emit("indexThisPageUrl", {data,typePageI})
                            });
                        }
                    } catch(err){
                        socket.emit("indexThisPageUrl", {data : "",typePageI})
                    }
                } else {
                    checksErorrUrl()
                    return false
                }
            }

            // فاكشن فحص

            function checksErorrUrl(){
                if(isNextWebPageReload == "true"){
                    if(nextElementWebPageReload < nextWebPageReload.length){
                        var t = nextElementWebPageReload;
                        var np = nextWebPageReload[t].numberPage
                        var idp = nextWebPageReload[t].idPage
                        addPagesNext(np,idp)
                        nextElementWebPageReload ++;
                        // اشعارات
                        
                        var dataAccessTrue = document.createElement("div")
                        dataAccessTrue.innerHTML = `<p class="gree"> جاري معالجة الخطء في القسم `+nusec[np]+` </p>`
                        issdataRead.append( dataAccessTrue)
        
                        //
                    } else {
                        console.log("done 1 +++++++++++++++=")
                        // اشعارات
                        
                        var dataAccessTrue = document.createElement("div")
                        dataAccessTrue.innerHTML = `<p class="green"> انتهاء معالجة الاخطاء </p>`
                        issdataRead.append( dataAccessTrue)
                        doneStepOne()
                        //
                    }
                } else {
                    console.log("done 2 +++++++++++++++=")
                    // بدء المرحلة الثانية {مرحلة تحليل البيانات}
                    doneStepOne()
                    return false
                }
            }
            
            function doneStepOne(){
                isCoDataDone = "true"
                document.getElementById("startCreateAWite").innerHTML = `<p class="gereen"> اكتمل </p>`
                document.getElementById("startAnalyzing").innerHTML = `<i class="fas fa-cog fa-spin"></i>`
                startAnData()
                isDataAn()

                // *------------------->  تشييك الصور .
                checkIsPhoto()
                // *-------------------> .

                // اشعارات
                
                var dataAccessTrue = document.createElement("div")
                dataAccessTrue.innerHTML = `<p class="green"> - انتهاء جمع البيانات بنجاح    </p>`
                issdataRead.append( dataAccessTrue)

                //

                if(jsonTitles.length >= 0){
                    socket.emit("saveTS", jsonTitles[0])
                    // اشعارات

                    var dataAccessTrue = document.createElement("div")
                    dataAccessTrue.innerHTML = `<p class="green"> بدء ارسال العناوين </p>`
                    issdataRead.append( dataAccessTrue)

                    // 
                }
            }

            // فاكشن الاحالة

            // فحص انتهاء مراحل جمع البيانات

            // .
            
            function addPagesNext(np,idp){
                okNextUrlGot  ++;
                var url = document.createElement("div")
                url.innerHTML =' <p class="cTUn cyan"> '+okNextUrlGot+'. </p> '+ '<a class="urlMi cyan" href="'+resultName[countNamePage].href+'" >'+ resultName[countNamePage].innerHTML+'</a>'
                urlPageGet.append(url)

                addPagesNextIndex(resultName[countNamePage].href,np)
            }

            function addPagesNextIndex(m,np){
                if(m.includes("mawdoo3")){
                    typePageI = "MS"
                    console.log("ms")
                } if(m.includes("dw")){
                    typePageI = "DW"
                    console.log("DW")
                } if(m.includes("marefa")){
                    typePageI = "MAR"
                    console.log("MAR")
                } if(m.includes("scientificamerican")){
                    typePageI = "SS"
                    console.log("SS")
                } 
                try {
                    if(m.includes("pdf")){
                        socket.emit("indexThisPageUrlNext", {data : "",typePageI, np})
                    } else {
                        $.get(m, function( data ) {
                            socket.emit("indexThisPageUrlNext", {data,typePageI, np})
                        });
                    }
                } catch(err){
                    socket.emit("indexThisPageUrlNext", {data : "",typePageI, np})
                }
            }

            socket.on('indexThisPageUrlOKNext',e=>{
                // do somethink untel download info page
                window.open('/indexPageUrl','mywin', 'width=100, height=100');
                socket.emit("readyToReadDataFromHtmlFileNext")
            })

            socket.on('readyToReadDataFromHtmlFileOKNext',e=>{
                // استلام البيانات
                var titleSection = e.title;
                var containerSection = e.container;
                var np = e.np
                var dd = e.d

                if(dd != ""){
                    dsJson.push(dd)
                }
                // متغيرات لفحص الاقسام 
                var deleteAfter = false
                var containerAllS = []
                var titleCall = 0
                var callContainer = "false"

                // تحديث  قسم البيانات الواردة
    
                var sectionWebPage = document.getElementById('sectionWeb'+np)
                sectionWebPage.innerHTML = `<div class="section_menu">بيانات القسم `+nusec[np]+`  </div> <div class="section_title">`+titleSection+`</div> <div class="section_container" id="section_container_`+np+`"> </div>`
                sectionWebPage.style.borderColor = '#493894'

                var titleSectionB = {"nameTitle": titleSection} 
                containerTitlesSections[np] = titleSectionB

                for(var e = 0; e < containerSection.length; e++){
                    // تفصيل البيانات 

                    // فحص البيانات بنائاً على ترتيبها
                    var containerElementCount = containerSection[e].split(" ")
                    
                    if( containerElementCount.length < 8){
                        // التاكد من اذا كان عنوان سليم
                        titleCall ++;

                        if(containerElementCount.includes(/مراجع|المراجع/g,'')){
                            console.log('false - one')
                            deleteAfter = true

                        } if(titleCall == 1){
                            console.log('false - one B')
                        } else {
                            // اضافة الى عناوين جاسون
                            if(chTitleErorr(containerSection[e]) == false){
                                console.log("false - part two")
                            }else {
                                if(callContainer == "true"){
                                    var containerElement = document.createElement('div')
                                    containerElement.innerHTML = containerSection[e]
                                    containerElement.className = 'titleInsideSection'
                                    document.getElementById("section_container_"+np).append(containerElement)
                                    containerAllS.push( containerSection[e])
                                    callContainer = "false"
                                } else {
                                    console.log('false - one B')
                                }
                            }
                        }

                    } else {
                        // هل تم تحذير القسم التالي ام لا
                        if(deleteAfter == true){
                            deleteAfter = false
                            console.log("false - two")
                        } else {
                            var containerElement = document.createElement('div')
                            containerElement.innerHTML = containerSection[e]
                            document.getElementById("section_container_"+np).append(containerElement)
                            containerAllS.push( containerSection[e])
                            callContainer = "true"
                        }
                    }
                }
                // عند الانتهاء تقوم بتخزين البيانات في جسون
                containerAll[np] = containerAllS
                containerAllS = []

                checksErorrUrl();

            })

            // .            
                    
            socket.on("indexThisPageUrlOK",e=>{
                window.open('/indexPageUrl','mywin', 'width=100, height=100');
                socket.emit("readyToReadDataFromHtmlFile")
                var dataAccessTrue = document.createElement("div")
                dataAccessTrue.innerHTML = `تم الوصول الى بيانات الصفحة [ `+nusec[dataAccessTrueCoun]+`ة ] `
                issdataRead.append( dataAccessTrue)
                dataAccessTrueCoun ++;
            })
            
            socket.on("readyToReadDataFromHtmlFileOK",e=>{
                isSectionOneDone()
                document.getElementById("startCreateAWite").innerHTML = `<i class="fas fa-cog fa-spin"></i>`

                // متغيرات لفحص الاقسام 
                var deleteAfter = false
                var containerAllS = []
                var titleCall = 0;
                var callContainer = "false"


                // استلام البيانات
                var titleSection = e.title;
                var containerSection = e.container;
                var dd = e.d

                if(dd != ""){
                    dsJson.push(dd)
                }

                // انشاء قسم للبيانات الواردة

                var sectionWebPage = document.createElement('div')
                sectionWebPage.className = 'section_Page'
                sectionWebPage.id = 'sectionWeb'+numberPageIndex
                sectionWebPage.innerHTML = `<div class="section_menu">بيانات القسم `+nusec[numberPageIndex]+`  </div> <div class="section_title">`+titleSection+`</div> <div class="section_container" id="section_container_`+numberPageIndex+`"> </div>`
                webPage.append(sectionWebPage)

                
                var titleSectionB = {"nameTitle": titleSection} 
                containerTitlesSections.push( titleSectionB)

                // احالة صفحة تالفة

                if(titleSection == null){
                    document.getElementById('sectionWeb'+numberPageIndex).style.borderColor = '#943838';
                    isNextWebPageReload = "true"
                    var infoThis  = {numberPage : numberPageIndex, idPage : 'sectionWeb'+numberPageIndex}
                    nextWebPageReload.push(infoThis)

                    // اشعارات
                    
                    var dataAccessTrue = document.createElement("div")
                    dataAccessTrue.innerHTML = `<p class="red"> العثور على بيانات تالفة في القسم  `+nusec[numberPageIndex]+` </p>`
                    issdataRead.append( dataAccessTrue)
    
                    //
                }

                // .

                for(var e = 0; e < containerSection.length; e++){
                    // تفصيل البيانات 

                    // فحص البيانات بنائاً على ترتيبها
                    var containerElementCount = containerSection[e].split(" ")
                    
                    if( containerElementCount.length < 8){
                        titleCall  ++;
                        // التاكد من اذا كان عنوان سليم

                        if(containerElementCount.includes(/مراجع|المراجع/g)){
                            console.log('false - one')
                            deleteAfter = true

                        } if(titleCall == 1){
                            console.log('false - one B')
                        }  else {
                            // اضافة الى عناوين جاسون
                            if(chTitleErorr(containerSection[e]) == false){
                                console.log("false - part two")
                            }else {
                                if(callContainer == "true"){
                                    var containerElement = document.createElement('div')
                                    containerElement.innerHTML = containerSection[e]
                                    containerElement.className = 'titleInsideSection'
                                    document.getElementById("section_container_"+numberPageIndex).append(containerElement)
                                    containerAllS.push( containerSection[e])
                                    callContainer = "false"
                                } else {
                                    console.log('false - one B')
                                }
                            }
                        }

                    } else {
                        // هل تم تحذير القسم التالي ام لا
                        if(deleteAfter == true){
                            deleteAfter = false
                            console.log("false - two")
                        } else {
                            var containerElement = document.createElement('div')
                            containerElement.innerHTML = containerSection[e]
                            document.getElementById("section_container_"+numberPageIndex).append(containerElement)
                            containerAllS.push( containerSection[e])
                            callContainer = "true"
                        }
                    } 
                }
                // عند الانتهاء تقوم بتخزين البيانات في جسون
                containerAll.push(containerAllS)

                numberPageIndex ++;

                startIndex()
            })

        },1000)
    })

    // معاينة الاقسام في ملف اج ت ام ل

    var isCloseShstartCreate = "fales";
    var isCloeShAnly = "fales";
    var isCloseAll = "fales";

    shstartCreate.addEventListener("click",e=>{
        if(isCloseShstartCreate == "fales"){
            shstartCreate.innerHTML = `<i class='fas fa-low-vision'></i>`
            isCloseShstartCreate = "true"
            startCreate.style.display = "block"
            shstartCreateM.style.borderBottom = "1px solid #393e4610"
        } else {
            shstartCreate.innerHTML = ` <i class="fa fa-eye"></i>`
            isCloseShstartCreate = "fales"
            startCreate.style.display = "none"
        }
    })

    shAnly.addEventListener("click",e=>{
        if(isCloeShAnly == "fales"){
            shAnly.innerHTML = `<i class='fas fa-low-vision'></i>`
            isCloeShAnly = "true"
            startAnlyData.style.display = "block"
            startAnlyData.style.borderBottom = "1px solid #393e4610"
        } else {
            shAnly.innerHTML = ` <i class="fa fa-eye"></i>`
            isCloeShAnly = "fales"
            startAnlyData.style.display = "none"
        }
    })

    shSectionAll.addEventListener("click",e=>{
        if(isCloseAll == "fales"){
            shSectionAll.innerHTML = `<i class='fas fa-low-vision'></i>`
            isCloseAll = "true"
            createAll.style.display = "block"
            createAll.style.borderBottom = "1px solid #393e4610"
        } else {
            shSectionAll.innerHTML = ` <i class="fa fa-eye"></i>`
            isCloseAll = "fales"
            createAll.style.display = "none"
        }
    })
    
    // . 


    googlet.addEventListener("click", e=>{
        if(caseCreate == true){
            var data = [inputGoogle.value,lin.value,path_r_n.value,namePage.value]
            socket.emit("takeThisInfoPls", data)
        } else {
            if(namePage.value != "" && path_r_n.value != "" && inputGoogle.value != "" && lin.value != ""){
                document.querySelector('.gsc-search-button .gsc-search-button-v2').click();
                googlet.style.backgroundColor = "#34626c"
                caseCreate = true
            } else {
                return false
            }
        }
    })

    $('#nameTheSubject').keyup(function(e) {
        inputGoogle.value = nameProject.value
        var tPage = nameProject.value
        var tPageM = tPage.replace(/ /g,"_")
        namePage.value = tPageM
        namePage.style.border = ""
        if(namePage.value == ""){
            namePage.style.border = "2px solid #681f1f"
        }
        callCheck()
    });
    socket.on("saveTC",e=>{
        alert(e)
    })
}

socket.on("saveTSNext",e=>{
    if(e <= jsonTitles.length){
       var da = jsonTitles[e]
       socket.emit("saveTS",da)
    } else {
        return false
    }
})

socket.on("OKtakeThisInfoPls",e=>{
    location.reload()
})

var numberCallDescripition = 0;
var callThisWiki = 0;
var thisNmWiki;
var isAgenWiki = "false";
var isWikiNo = "false"

function dowiki(w) {
    // اشعارات
    
    var dataAccessTrue = document.createElement("div")
    dataAccessTrue.innerHTML = `<p class="green"> بدء ويكي في البحث  </p>`
    issdataRead.append( dataAccessTrue)

    //
    var searchPrefix = "?action=query&list=search&format=json&srsearch=";
    var urlBase = "https://ar.wikipedia.org/w/api.php"
    var urlSuffix = "&callback=?"
    var www = w.replace(/ /g, "_")
    var url = urlBase + searchPrefix + www + urlSuffix;

    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',success: function(data) {
        //build an object for each result and put in array
        if(data.query.search.length == 0){
            if(isAgenWiki == "true"){
                isWikiNo = "true"
                return false
            } else {
                dowiki(ppWord)
                isAgenWiki = "true"
            }
        } else {
            thisNmWiki = data.query.search.length
            $.each(data.query.search, function(i, item) {
              addUrlWikiAndNam(item.title,item.snippet)
            })
        }
      }
    });
}

function addUrlWikiAndNam(title,d){
    callThisWiki ++;
    if(thisNmWiki == callThisWiki){
        setTimeout(() => {
            startAnDataWiki()
        }, 1000);
    }
    var urlBase = "https://ar.wikipedia.org/w/api.php"
    var requestLinkPrefix = "?action=query&prop=info&format=json&inprop=url&titles=";
    var urlSuffix = "&callback=?"
    // المتغيرات لتمييز الجمل
    var wordMarkTitle;
    
    var isTitleTrue = false
    // 

    $.ajax({
      url: urlBase + requestLinkPrefix + title + urlSuffix,
      dataType: 'json',
      type: 'POST',
      headers: {
        'Api-User-Agent': 'Wikipedia Search Tool for FreeCodeCamp challenge/0.1; contact progmacattack at GitHub'
      },
      success: function(data) {
        $.each(data.query.pages, function(j, item) {
          var namTitle = title
          var namUrl = item.fullurl
          var namDescription = d
          urlsWiki.push(namUrl)
          namsWiki.push(namTitle)
  
          numberCallDescripition ++;
          // تطابق العناوين
          
          if(vmarkWord == true){
            for(var w =0; w< markWord.length; w++){
                // تحضير المتغيرات
                var thisWord = markWord[w]
                // انتهاء التحضير
                if(namTitle.includes(thisWord)){
                    isTitleTrue = true
                    wordMarkTitle = thisWord
                } else if(thisWord.includes(namTitle)){
                    isTitleTrue = true
                    wordMarkTitle = thisWord
                }
                if(markWord.length - 1 === w) {
                    if(isTitleTrue == true){
                        IsTitle(true)
                    } else {
                        IsTitle(false)
                    }
                }
            }
        } else {
            IsTitle(false)
        }

        function IsTitle(c){
            if(c == true){
                var vnamTitle = namTitle.replace(wordMarkTitle, `<b>`+wordMarkTitle+`</b>`)
                var urla = document.createElement("div")
                urla.innerHTML =' <p class="cTUn"> '+numberCallDescripition+'. </p> '+  '<a class="urlMi" href="'+namUrl+'" >'+ vnamTitle +'</a>'
                addMarkThing()
                urlPageGetNext.append(urla)
            } else {
                var urla = document.createElement("div")
                urla.innerHTML =' <p class="cTUn"> '+numberCallDescripition+'. </p> '+  '<a class="urlMi" href="'+namUrl+'" >'+ namTitle +'</a>'
                urlPageGetNext.append(urla)
            }
        }
        function addMarkThing(){
            wikiMarkTitles.push(wordMarkTitle)
            wikiMarkUrls.push(namUrl)
            wikiMarkD.push(namDescription)
        }
  
        var cwiki = document.createElement("p")
        cwiki.innerHTML =' <mark class="ncd"> ( '+numberCallDescripition +' ) </mark> '+ namDescription
        wikiContainer.append(cwiki)

        })
      }
    })
}

// ترجمه الكلمات قبل البحث عنها 

socket.on("translateThisK",e=>{
    // اشعارات
    
    var dataAccessTrue = document.createElement("div")
    dataAccessTrue.innerHTML = `<p class="gree"> بدء الترجمة  </p>`
    issdataRead.append( dataAccessTrue)

    //
    window.open('/tranWord','Tran', 'width=110, height=110');
    socket.emit("readyToTakeTran")
})

socket.on("readyToTakeTranK",e=>{
    // اشعارات
    
    var dataAccessTrue = document.createElement("div")
    dataAccessTrue.innerHTML = `<p class="gree"> استلام الترجمة  </p>`
    issdataRead.append( dataAccessTrue)

    //
    wordsS = e
    
    socket.emit("searchImgUrlSend",wordsS)
    document.getElementById("isLoadImg").innerHTML = `<i class="fas fa-cog fa-spin"></i>`
})


// .

// استلام بيانات الصور 

socket.on("searchImgUrlSendK",e=>{
    // اشعارات
    
    var dataAccessTrue = document.createElement("div")
    dataAccessTrue.innerHTML = `<p class="gree"> جاري استلام بيانات الصور </p>`
    issdataRead.append( dataAccessTrue)

    //
    // do somethink untel download info page
    pCheck = "true"
    window.open('/searchImage','Images', 'width=120, height=120');
    socket.emit("readyToTakeImage")
})

socket.on("readyToTakeImageK",e=>{
    isPhoto()
    // اشعارات
    
    var dataAccessTrue = document.createElement("div")
    dataAccessTrue.innerHTML = `<p class="gree"> تم استلام بيانات الصور </p>`
    issdataRead.append( dataAccessTrue)

    //
    var cImg = e
    document.getElementById("isLoadImg").innerHTML = cImg.length
    for(var m = 0; m < cImg.length; m++){
        var img = document.createElement('div')
        img.id = "imgN"+m
        img.className = "imgDivClass"
        img.innerHTML = `<img class="imgSug" src="`+cImg[m]+`" id="thisImg`+m+`" onclick="thisImgCh('imgN`+m+`','`+m+`')">`
        document.getElementById("urlImgs").append(img)
        imgs.push(cImg[m])
        numImg ++;
    }
    setTimeout(function(){
        document.getElementById("imgN"+0).style.border = "3px solid #294e7c"
        urlImgCh = imgs[0]
    },500)
})

// .

// فحص اخطاء العناوين

var erTorr = ["حقوق","ساهم","ساهمت","نشر","فيديو","UTC","_","-","/",")","(","*",":","@","#","!","'",',',';','.','DW','الرابط','الكاتب','لمتابعة','مراجع','كاتب','كتابة','كتابه','معلومات','المصادر','مصادر','المراجع','بواسطة','بواسطه'];
var number = /[0-9]/

function chTitleErorr(m){
    for(var i =0; i < erTorr.length; i++){
        if(m.includes(erTorr[i])){
            return false
        }
        if(erTorr.length -1 === i ){
            nextStep()
        }
        
    }
    function nextStep(){
        // المرحلة التالية من الفحص
        if(m < 5){
           return false
       } else {
           // اضافة العناوين المستخرجة الى جسون للاسفادة منها
           var cM = m.replace(/\n/g,"")
           jsonTitles.push(cM)
           console.log(m)
           return true
       }
    }
}

// اختيار صورة 
 function thisImgCh(id,idn){
     var imC = document.getElementsByClassName("imgDivClass")
     for(var c =0;c < imC.length; c++){
        imC[c].style.border = ""
        if(imC.length -1 == c){
            document.getElementById(id).style.border = "3px solid #294e7c"
        }
     }
     urlImgCh = imgs[idn]
 }

var waitPhotocome = 0;

function checkIsPhoto(){
    if(pCheck == "false"){
        if(wordsS != undefined){
            // معناها ترجم ولكن لم يبحث
            setTimeout(function(){ 
                socket.emit("searchImgUrlSend",wordsS)
                document.getElementById("isLoadImg").innerHTML = `<i class="fas fa-cog fa-spin"></i>`
                // اشعارات
                
                var dataAccessTrue = document.createElement("div")
                dataAccessTrue.innerHTML = `<p class="red"> خطء الصور ترجم ولم يبحث </p>`
                issdataRead.append( dataAccessTrue)
            
                //
             },500)
        } else{
            // معناها لم يترجم وبالتالي لم يبحث
            
            socket.emit("translateThis",nameProject.value)
            // اشعارات
            
            var dataAccessTrue = document.createElement("div")
            dataAccessTrue.innerHTML = `<p class="red"> خطء الصور لم يترجم ولم يبحث </p>`
            issdataRead.append( dataAccessTrue)
        
            //
            
        }
    } else {
        if(imgs.length > 0){
            // في بيانات فا تمام
            // اشعارات
            
            var dataAccessTrue = document.createElement("div")
            dataAccessTrue.innerHTML = `<p class="green"> انتهاء قسم اضافة الصور بنجاح </p>`
            issdataRead.append( dataAccessTrue)
        
            //
            return true
        } else {
            // ننتضر لكي نتحقق اذا في مشكلة
            waitPhotocome ++;
            if(waitPhotocome < 10){
                setTimeout(function(){
                    checkIsPhoto()
                },500)
            }else{
                socket.emit("searchImgUrlSend",wordsS)
                setTimeout(function(){
                    waitPhotocome = 0
                    checkIsPhoto()
                },3000)
            }
        }
    }
}


// checke sections 

var isSectioneOneN, dataFromUrlPage,writeSectionOne,isSOneDone ;

dataFromUrlPage = document.getElementById("dataFromUrlPage")
isSectioneOneN = 0;


function isSectionOneDone(){
    isSectioneOneN ++;
    if(isSectioneOneN >= 4){
        document.getElementById("sectionOneD").innerHTML = `<p> الانتهاء من جمع البيانات </p>  <p><i class="fa fa-check" style="color:#3d8069"></i></p>`
        isSOneDone  = "true"
    } else {
        // اشعارات 
        if(writeSectionOne == "true"){
            return false
        }else{
            writeSectionOne = "true"
            var eE = document.createElement("div")
            eE.className = "divNotPanel gree"
            eE.id = "sectionOneD"
            eE.innerHTML = `<p> جاري جمع البيانات </p>  <p><i class="fa fa-cog fa-spin"></i></p>`
            dataFromUrlPage.append(eE)
        }
        if(isSOneDone == "true"){
            return false
        } else {
            setTimeout(() => {
                if(isSectioneOneN >= 4){
                    return false
                }
            }, 5000);
        }
    }
}

// photo

function isPhoto(){
    var eE = document.createElement("div")
    eE.className = "divNotPanel gree"
    eE.id = "sectionPhotoD"
    eE.innerHTML = `<p> الانتهاء من قسم الصور </p>  <p><i class="fa fa-check" style="color:#3d8069"></i></p>`
    dataFromUrlPage.append(eE)
}

function isDataAn(){

    var eE = document.createElement("div")
    eE.className = "divNotPanel gree"
    eE.id = "sectionAnDataLoad"
    eE.innerHTML = `<p>  جاري تحليل البيانات </p>  <p><i class="fa fa-cog fa-spin"></i></p>`
    dataFromUrlPage.append(eE)
}


// بدء تحليل البيانات

var desAnly = document.getElementById("desAnly")
var sectionsAnly = document.getElementById("sectionsAnly")
var sectionCall = 0;

// تحليل بيانات ويكي و الوصف
var indexArrW = []
// تحليل بيانات ويكي في العناون
var indexArrWT = []
var isRedyWiki = "false"
var isResPonsDis = "false"

function startAnDataWiki(){
    if(wikiMarkD.length >= 1){
        for(var i = 0; i < wikiMarkD.length; i++){
            var numberSameThis = 0;
            // الان نفحص كل قسم 
            var secDsWiki = wikiMarkD[i].split(" ")
            for(var d = 0 ; d < secDsWiki.length; d ++){
                // الان فحص كلمة كلمة للتأكد
                var word = secDsWiki[d]
                // الان ندخل في كل مرة الى الكلمات المعلمة
                for(var a =0; a < markWord.length; a++){
                    if(word.includes(markWord[a])){
                        numberSameThis ++;
                    } if(markWord[a].includes(word)) {
                        numberSameThis ++;
                    }
                }
    
                if(secDsWiki.length - 1 == d){
                    indexArrW.push(numberSameThis)
                }
            }
    
            if(wikiMarkD.length -1 == i){
                // فحص العناوين قبل البدء و اختيار الاقصر الى العنوان الرئيسي
                function checkFirst(){
                    for(var y = 0; y < wikiMarkTitles.length; y ++){
                        var titleThisWikiB = wikiMarkTitles[y]
                        var titleMainPageB = namePage.value
                        var titleMainPage = titleMainPageB.replace(/ /g, "").replace(/َ/g,"").replace(/ً/g,"").replace(/ُ/g,"").replace(/ّ/g,"").replace(/ِ/g,"").replace(/ٍ/g,"").replace(/ْ/g,"").replace(/ٌ/g,"")
                        var titleThisWiki = titleThisWikiB.replace(/ /g, "").replace(/َ/g,"").replace(/ً/g,"").replace(/ُ/g,"").replace(/ّ/g,"").replace(/ِ/g,"").replace(/ٍ/g,"").replace(/ْ/g,"").replace(/ٌ/g,"")
                        // التحقق الاول
    
                        if(titleMainPage == titleThisWiki){
                            return true
                        } else if (titleMainPage.length == titleThisWiki.length){
                            return true
                        }
                    }
                }

                if(checkFirst() == true){
                    // خلاص اخترنا الصفحة
                } else {
                    
                    // سيتعين علينا ايجادالاقرب الى العنوان وتشابه الكلمات او الرفض

                    // نبدي البحث باستخدام نقطتين مهمتين اولا تشابه وتكرار عدد الكلمات المتشابهة في الوصف و ثانيا وهو الاهم العنوان نفسه
                    // بعد البحث في الكلمات المتشابهه في الوصف 

                    // دعنا الان نبحث في العنوان ونقارن
                    soltTitle()
                    function soltTitle(){
                        for(var b =0; b < wikiMarkTitles.length; b++){
                            var titleThis = wikiMarkTitles[b].split(" ")
                            var titlemainPage = namePageSplit

                            var nNC = 0;

                            // اذا كان صفر فهذا شيء جيد وهو المطلوب
                            
                            for(var t = 0; t < titleThis.length; t++){
                                if(titlemainPage.includes(titleThis[t])){
                                    // false
                                } if(titleThis[t].includes(titlemainPage)){
                                    // false again
                                } else {
                                    nNC ++;
                                }

                                if(titleThis.length - 1 == t){
                                    indexArrWT.push(nNC)
                                }
                            }

                            if(wikiMarkTitles.length -1 == b){
                                finealStep()
                            }
                        }
                    }

                    function finealStep(){
                        var mxE = Math.max.apply(null, indexArrW);
                        var nMxE = indexArrW.indexOf(mxE)
                        var ppWord = wikiMarkUrls[nMxE]
                        var pnWord = wikiMarkTitles[nMxE]

                        // المصفوفة الثانية
                        var nnUm = indexArrWT[nMxE]
                        if(nnUm == 0 || nnUm == 1 || nnUm == 2){
                            var typePageI = "wiki"
                            sendData()
                            function sendData(){
                                if(isCoDataDone == "true"){
                                    try{
                                        $.get(ppWord, function( data) {
                                        socket.emit("indexThisPageUrlWIKI", {data,typePageI})});
                                        
                                    } catch(err){
                                        socket.emit("indexThisPageUrlWIKI", {data : "",typePageI})
                                    }
                                } else {
                                    setTimeout(() => {
                                        sendData()
                                    }, 1000);
                                }
                            }

                            socket.on("indexThisPageUrlWIKIOK",e=>{
                                window.open('/indexPageUrl','wiki', 'width=150, height=200');
                                socket.emit("readyToReadDataFromHtmlFileWIKI")
                                var dataAccessTrue = document.createElement("div")
                                dataAccessTrue.innerHTML = `جاري اخذ بيانات  الوصف من ويكيبديا `
                                issdataRead.append( dataAccessTrue)
                            })

                            socket.on("readyToReadDataFromHtmlFileOKWIKI",e=>{
                                var disWiki = e.container;
                                jsonWiki.push(disWiki)
                                isRedyWiki = "true"
                            })

                        } else {
                            isRedyWiki = "true"
                            // مافي تشابه
                        }
                    }
                }

            }
        }
    } else {
        console.log("no")
    }
}

function wikiDoIt(){
    if(isRedyWiki == "true"){
        if(jsonWiki.length == 0){
            isResPonsDis = "true"
        } else {
            anyDisSetUp(jsonWiki[0])
        }
    }else{
        setTimeout(() => {
            wikiDoIt()
        }, 1000);
    }
}

// البيانات النهائية

var dJson = []

function startAnData(){
    if(sectionCall < 4){
        startSectionsAn()
    } else {
        document.getElementById("startAnalyzing").innerHTML = `<p class="gereen"> اكتمل </p>`
        document.getElementById("sectionAnDataLoad").innerHTML = `<p> الانتهاء من تحليل البيانات بنجاح </p>  <p><i class="fa fa-check" style="color:#3d8069"></i></p>`
        addDataToPage()
        return false
    }
}


var nusec = ['الاول',"الثاني","الثالث","الرابع","الخامس","السادس"]

function startSectionsAn(){
    if(containerAll[sectionCall].length == 0 || containerAll[sectionCall] == undefined){
        // false data
        var numberAll = 0;
        var numberChange = 0;
        var resNumberFinal = numberAll % numberChange
        var containerArrNewA = anDataTitles(containerTitlesSections[sectionCall].nameTitle)
    
        function isGood(n){
            if(n > 3){
                var nr = "anGreen"
                return nr
            }else {
                var nr = "anRed"
                return nr
            }
        }

        var containerElement = document.createElement('div')
        containerElement.className = "count_y sectionAn"
        containerElement.innerHTML = `<div class="count_a_text nnn anSW"><div>بيانات القسم `+nusec[sectionCall]+`  </div>  <div class="nuChange `+isGood(resNumberFinal)+`">`+resNumberFinal+`%</div></div>
        <div class="containerW"><div class="container_W wsub"  id="dataSectionAn`+sectionCall+`">`+containerArrNewA+`</div></div>`
        sectionsAnly.append(containerElement)
    


        sectionCall ++
        
        setTimeout(() => {
            startAnData()
        }, 100);

    } else {
        
        var containerArrNewB1 = anData(containerAll[sectionCall])
        var containerArrNewB2 = anDataStepTwo(containerArrNewB1[0])
        var containerArrNewB3 = removeXBreak(containerArrNewB2[0],containerArrNewB2[2])
        var containerArrNew = containerArrNewB3[0]

        var dataJc = containerArrNewB3[2]

        // حساب التغييرات
        var numberChangeOne = containerArrNewB1[2]
        var numberChangeTwo = containerArrNewB2[1]
        var numberChangeThree = containerArrNewB3[1]
        var numberChange = numberChangeTwo + numberChangeOne + numberChangeThree
        var numberAll = containerArrNewB1[1]
        var resNumberFinal = numberAll % numberChange
    
        function isGood(n){
            if(n > 3){
                var nr = "anGreen"
                return nr
            }else {
                var nr = "anRed"
                return nr
            }
        }
    
        // .
    
        var containerArrNewA = anDataTitles(containerTitlesSections[sectionCall].nameTitle)
    
    
        var containerElement = document.createElement('div')
        containerElement.className = "count_y sectionAn"
        containerElement.innerHTML = `<div class="count_a_text nnn anSW"><div>بيانات القسم `+nusec[sectionCall]+`  </div>  <div class="nuChange `+isGood(resNumberFinal)+`">`+resNumberFinal+`%</div></div>
        <div class="containerW"><div class="container_W wsub"  id="dataSectionAn`+sectionCall+`">`+containerArrNewA+`</div></div>
        <div class="containerW"><div class="container_W wsub"  id="dataChange`+sectionCall+`"> <h1 class="titleChangeData"> الجمل المحذوفة </h1> </div></div>`
        sectionsAnly.append(containerElement)
    
        for(var ci = 0; ci < containerArrNew.length; ci++){
            var sEM = document.createElement("div")
            sEM.innerHTML = containerArrNew[ci]
            document.getElementById("dataSectionAn"+sectionCall).append(sEM)
            containerArrNew[ci] = containerArrNew[ci].replace(/<strong>/g,"").replace(/<\/strong>/g,"")
            if(containerArrNew.length -1 == ci){
                if(resNumberFinal > 3){
                    var dataAll = {title : containerArrNewA, container : containerArrNew}
                    dJson.push(dataAll)
                }

                try{
                    if(dataJc.length != 0){
                        // تخزين التغييرات في قسم
                        for(var i = 0; i < dataJc.length; i++){
                            var sEM = document.createElement("div")
                            sEM.innerHTML = dataJc[i]
                            document.getElementById("dataChange"+sectionCall).append(sEM)
                            if(dataJc.length -1 == i){
                                setTimeout(() => {
                                    startAnData()
                                }, 100);
                            }
                        }
                    } else {
                        var sEM = document.createElement("div")
                        sEM.innerHTML = " لا يوجد "
                        document.getElementById("dataChange"+sectionCall).append(sEM)
                        setTimeout(() => {
                            startAnData()
                        }, 100);
                    }
                } catch(err){
                    var sEM = document.createElement("div")
                    sEM.innerHTML = " لا يوجد "
                    document.getElementById("dataChange"+sectionCall).append(sEM)
                    setTimeout(() => {
                        startAnData()
                    }, 100);
                }

            }
        }
        
        sectionCall ++
    }
}


function anyDis(){
    if(dsJson.length >= 1){
        anyDisSetUp(dsJson[0])
    } else {
        wikiDoIt()
    }
}

var disRealFinsh = []

function anyDisSetUp(m){
    var containerFake = [m,"",""]
    var containerArrNewB1 = anData(containerFake)
    var containerArrNewB2 = anDataStepTwo(containerArrNewB1[0])
    var containerArrNewB3 = removeXBreak(containerArrNewB2[0],containerArrNewB2[2])
    var containerArrNew = containerArrNewB3[0]

    for(var ci = 0; ci < containerArrNew.length; ci++){
        var sEM = document.createElement("div")
        sEM.innerHTML = containerArrNew[ci]
        document.getElementById("desAnly").append(sEM)
        containerArrNew[ci] = containerArrNew[ci].replace(/<strong>/g,"").replace(/<\/strong>/g,"")
        if(containerArrNew.length -1 == ci){
            disRealFinsh.push(containerArrNew)
            isResPonsDis = "true"
        }
    }
}

// أنشاء المقالة المرحلة النهائية

function analysDone(){
    createAllCase.innerHTML = `<i class="fas fa-cog fa-spin"></i>`

    var eE = document.createElement("div")
    eE.className = "divNotPanel gree"
    eE.id = "sectionFinal"
    eE.innerHTML = `<p>  جاري أنشاء المقالة </p>  <p><i class="fa fa-cog fa-spin"></i></p>`
    dataFromUrlPage.append(eE)
}

// تجميع البيانات

var naSeOne,naSeTwo,naSeThree,naSeFour,
conSeOne,conSeTwo,conSeThree,conSeFour
,Dis;

naSeOne = document.getElementById("naSeOne")
naSeTwo = document.getElementById("naSeTwo")
naSeThree = document.getElementById("naSeThree")
naSeFour = document.getElementById("naSeFour")

conSeOne = document.getElementById("conSeOne")
conSeTwo = document.getElementById("conSeTwo")
conSeThree = document.getElementById("conSeThree")
conSeFour = document.getElementById("conSeFour")

Dis = document.getElementById("Dis")

function addDataToPage(){
    analysDone()
    for(var i = 0; i < dJson.length; i++){
        document.getElementById("naSe"+i).value = dJson[i].title

        document.getElementById("conSe"+i).value = dJson[i].container
        document.getElementById("conSe"+i).value = document.getElementById("conSe"+i).value.replace(/,/g, "<br>").replace(/  /g, " ").replace(/     /g, " ").replace(/     /g, " ").replace(/    /g, " ").replace(/   /g, " ").replace(/  /g, " ").replace(/<br><br>/g, "")

        document.getElementById("tS"+i).style.display = "block"
        document.getElementById("cS"+i).style.display = "block"

        document.getElementById("tS"+i).style.border = "3px solid rgb(95, 125, 160)"
        document.getElementById("cS"+i).style.border = "3px solid cadetblue"

        if(dJson.length -1 == i){
            anyDis()
            checkDis()
        }
    }
}

function checkDis(){
    if(isResPonsDis == "true"){
        if(disRealFinsh.length >= 1){
            document.getElementById("conDis").value = disRealFinsh[0]
            document.getElementById("conDis").value = document.getElementById("conDis").value.replace(/,/g, "<br>").replace(/  /g, " ").replace(/     /g, " ").replace(/     /g, " ").replace(/    /g, " ").replace(/   /g, " ").replace(/  /g, " ").replace(/<br><br>/g, "")
            checkDes()
        } else {
            checkDes()
        }
    }else{
        setTimeout(() => {
            checkDis()
        }, 500);
    }
}

// البيانات

var desThisPage = document.getElementById("disCase")

var redBorder = "3px solid #944338"

function checkDes(){
    var conDis = document.getElementById("conDis").value
    
    if(conDis.length < 8 || conDis.length == 0){
        desThisPage.style.border = redBorder
        doneAllStepThree(false)
    } else {
        desThisPage.style.border = ""
        doneAllStepThree(true)
    }
}

$('#disCase').keyup(function(e) {
    var conDis = document.getElementById("conDis").value
    
    if(conDis.length < 8 || conDis.length == 0){
        desThisPage.style.border = redBorder
        doneAllStepThree(false)
    } else {
        desThisPage.style.border = ""
        doneAllStepThree(true)
    }
});


function doneAllStepThree(v){
    if(v == true){
        createAllCase.innerHTML = `<p class="gereen"> اكتمل </p>`
    
        document.getElementById("sectionFinal").innerHTML = `<p> أكتمال أنشاء المقالة </p>  <p><i class="fa fa-check" style="color:#3d8069"></i></p>`
    
        // الانتهاء من عمل كل شيء
    
        document.getElementById("saveThis").innerHTML = `<div class="choose_s_p section blueSave"> حفظ </div>`
    } else {
        createAllCase.innerHTML = `غير مكتمل`
    
        document.getElementById("sectionFinal").innerHTML = `<p> أكتمال أنشاء المقالة </p>  <p><i class="fa fa-check" style="color:#3d8069"></i></p>`
    
        // الانتهاء من عمل كل شيء
    
        document.getElementById("saveThis").innerHTML = `<div class="choose_s_p section blueSaveWait"> حفظ </div>`
    }
}


// بيانات اششيك العنوان

socket.on("repCheckAC",e=>{
    check_name_pTH.innerHTML = e
  
    check_name_pTH.style.backgroundColor = "#a0c1b8";
    check_name_pTH.style.border = "1px solid #709fb0";
    check_name_pTH.style.color = "#0d7377";
    check_name_pTH.style.padding = "8px";
  })
  
  socket.on("repCheckWAR",e=>{
    check_name_pTH.innerHTML = e
  
    check_name_pTH.style.backgroundColor = "#e6d5b8";
    check_name_pTH.style.border = "1px solid #ac4b1c";
    check_name_pTH.style.color = "#ac4b1c";
    check_name_pTH.style.padding = "8px";
    
    
  })
  
  socket.on("repCheckRE",e=>{
    check_name_pTH.innerHTML = e
  
    check_name_pTH.style.backgroundColor = "#e97171";
    check_name_pTH.style.border = "1px solid #cd0a0a";
    check_name_pTH.style.color = "#931a25";
    check_name_pTH.style.padding = "8px";
  })


function chooseeP(p){
    if(p == "space_sb"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/space/";
        lin.value = " المواضيع / الفضاء";
        sameUrl = "https://www.trouko.co/sub_s/space/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#12437eb6";
        callCheck()
    }
    if(p == "spy_sb"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
          l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/physics/";
        lin.value = " المواضيع / الفيزياء";
        sameUrl = "https://www.trouko.co/sub_s/physics/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#12437eb6";
        callCheck()
    }
    if(p == "technology_sb"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/technology/";
        lin.value = " المواضيع / تكنلوجيا";
        sameUrl = "https://www.trouko.co/sub_s/technology/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#12437eb6";
        callCheck()
    }
    if(p == "g_sb"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/geography/";
        lin.value = " المواضيع / الجغرافية";
        sameUrl = "https://www.trouko.co/sub_s/geography/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#12437eb6";
        callCheck()
    }
    if(p == "sc_sb"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/sciences/";
        lin.value = " المواضيع / العلوم  ";
        sameUrl = "https://www.trouko.co/sub_s/sciences/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#12437eb6";
        callCheck()
    }
    if(p == "else_sb"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/subjects/else/";
        lin.value = " المواضيع / متنوعة  ";
        sameUrl = "https://www.trouko.co/sub_s/else/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#12437eb6";
        callCheck()
    }

    // q


    if(p == "space_q"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_space/";
        lin.value = " أسئلة / الفضاء ";
        sameUrl = "https://www.trouko.co/sub_s/space/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#7e1212b6";
        callCheck()
    }
    if(p == "technology_q"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_technology/";
        lin.value = " أسئلة / التقنية ";
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#7e1212b6";
        callCheck()
    }
    if(p == "spy_q"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_physics/";
        lin.value = " أسئلة / الفيزياء ";
        sameUrl = "https://www.trouko.co/sub_s/physics/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#7e1212b6";
        callCheck()
    }
    if(p == "sc_q"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_sciences/";
        lin.value = " أسئلة / العلوم ";
        sameUrl = "https://www.trouko.co/sub_s/sciences/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#7e1212b6";
        callCheck()
    }
    if(p == "else_q"){
        var i;
        for (i = 0; i < l_p_ch.length; i++) {
            l_p_ch[i].style.backgroundColor = "";
          l_p_ch[i].style.color = "  #393e46";
        }
        pathCh = "../trouko-ar/questions/questions_else/";
        lin.value = " أسئلة / متنوعة ";
        sameUrl = "https://www.trouko.co/sub_s/else/"
        path_r_n.value = pathCh
        document.getElementById(p).style.color = " #edf2f6";
        document.getElementById(p).style.background = "#7e1212b6";
        callCheck()
    }
    if(namePage.value == ""){
        namePage.style.border = "2px solid #681f1f"
    }
}

function callCheck(){
    socket.emit("checkThat",{nameProject: namePage.value,path_r_n : path_r_n.value})
}