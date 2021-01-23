var socket = io('http://localhost:3000/');

var bodyHtmlIndex,htmlData,typePageI;

var numberSection = 1;
var numberSectionS = 2;

bodyHtmlIndex = document.getElementById("bodyHtmlIndex")
htmlData = document.getElementById("htmlData")
typePageI = document.getElementById("typePageI")

// data page
var container = [];
var titles = [];

window.onload = function(){
    bodyHtmlIndex.innerHTML = htmlData.innerText

    if(typePageI.innerText.includes("MS")){
        mow()
    }

    if(typePageI.innerText.includes("DW")) {
       dw()
    }

    if(typePageI.innerText.includes("SS")) {
        ss()
    }

    if(typePageI.innerText.includes("NAS")) {
        nas()
    }

    if(typePageI.innerText.includes("wiki")) {
        wiki()
    }
}

// موضوع 

function mow(){
    try{

    // discreption

    var dis = document.getElementsByTagName("P")[0];
    var disTWO = document.getElementsByTagName("P")[1];
    var disTHREE = document.getElementsByTagName("P")[2];

    var discreptionAll = dis.innerText + disTWO.innerText + disTHREE.innerText
    
    // sections
    addSections()
    var sectionOneTitle;
    var sectionOneContainer;
    var sectionTwoTitle;
    var sectionTwoContainer;
    var sectionThreeTitle;
    var sectionThreeContainer;

    function addSections(){
        if(numberSection == 1){
            var sectionTi = document.querySelectorAll('.mw-headline b')[numberSection]
            if(sectionTi.innerHTML != null || sectionTi.innerHTML != undefined|| sectionTi.innerHTML != ""){
                if(sectionTi.innerHTML.includes("مراجع")){
                sectionOneTitle = ""
                sectionOneContainer = ""
                } else {
                    var sectionOneTiW = document.querySelectorAll('h2')[numberSectionS]
                    var sectionCon = sectionOneTiW.nextElementSibling;
                    // next 2
                    try{
                        if(sectionCon.nextElementSibling.tagName == "UL" || sectionCon.nextElementSibling.tagName == "P"){
                            var nextTWO = sectionCon.nextElementSibling
                            sectionOneTitle = sectionTi.innerText
                            sectionOneContainer = sectionCon.innerText + nextTWO.innerText
                            // البيانات التي سوف نستخدمها
                            titles.push(sectionOneTitle)
                            container.push(sectionOneTitle)
                            container.push(sectionOneContainer)
                        }else {
                            sectionOneTitle = sectionTi.innerText
                            sectionOneContainer = sectionCon.innerText
                            // البيانات التي سوف نستخدمها
                            titles.push(sectionOneTitle)
                            container.push(sectionOneTitle)
                            container.push(sectionOneContainer)
                        }
                    } catch(err){
                            sectionOneTitle = sectionTi.innerText
                            sectionOneContainer = sectionCon.innerText
                            // البيانات التي سوف نستخدمها
                            titles.push(sectionOneTitle)
                            container.push(sectionOneTitle)
                            container.push(sectionOneContainer)
                    }
                }
            }else {
                sectionOneTitle = ""
                sectionOneContainer = ""
            }
            numberSection ++;
            numberSectionS ++;
            addSections()

        } else if (numberSection == 2){
            var sectionTi = document.querySelectorAll('.mw-headline b')[numberSection]
            if(sectionTi.innerHTML != null || sectionTi.innerHTML != undefined|| sectionTi.innerHTML != ""){
                if(sectionTi.innerHTML.includes("مراجع")){
                sectionTwoTitle = ""
                sectionTwoContainer = ""
                } else {
                    var sectionTiTWO = document.querySelectorAll('h2')[numberSectionS]
                    var sectionConTWO = sectionTiTWO.nextElementSibling;
                    // next 2
                   try{
                       if(sectionConTWO.nextElementSibling.tagName == "UL" || sectionConTWO.nextElementSibling.tagName == "P"){
                           var nextTWOT = sectionConTWO.nextElementSibling
                           sectionTwoTitle = sectionTiTWO.innerText
                           sectionTwoContainer = sectionConTWO.innerText + nextTWOT.innerText
                           // البيانات التي سوف نستخدمها
                           titles.push(sectionTwoTitle)
                           container.push(sectionTwoTitle)
                           container.push(sectionTwoContainer)
                        }else {
                            sectionTwoTitle = sectionTiTWO.innerText
                            sectionTwoContainer = sectionConTWO.innerText
                            // البيانات التي سوف نستخدمها
                            titles.push(sectionTwoTitle)
                            container.push(sectionTwoTitle)
                            container.push(sectionTwoContainer)
                        }
                    } catch(err){
                        sectionTwoTitle = sectionTiTWO.innerText
                        sectionTwoContainer = sectionConTWO.innerText
                        // البيانات التي سوف نستخدمها
                        titles.push(sectionTwoTitle)
                        container.push(sectionTwoTitle)
                        container.push(sectionTwoContainer)
                    }
                }
            }else {
                sectionTwoTitle = ""
                sectionTwoContainer = ""
            }
            numberSection ++;
            numberSectionS ++;
            addSections()
        
        } else if (numberSection == 3){
            var sectionTi = document.querySelectorAll('.mw-headline b')[numberSection]
            if(sectionTi.innerHTML != null || sectionTi.innerHTML != undefined|| sectionTi.innerHTML != ""){
                if(sectionTi.innerHTML.includes("مراجع")){
                sectionThreeTitle = ""
                sectionThreeContainer = ""
                } else {
                    var sectionTiTHREE = document.querySelectorAll('h2')[numberSectionS]
                    var sectionConTHREE = sectionTiTHREE.nextElementSibling
                    // next 2
                   try{
                       if(sectionConTHREE.nextElementSibling.tagName == "UL" || sectionConTHREE.nextElementSibling.tagName == "P"){
                           var nextTHREE = sectionConTHREE.nextElementSibling
                           sectionThreeTitle = sectionTiTHREE.innerText
                           sectionThreeContainer = sectionConTHREE.innerText + nextTHREE.innerText
                           // البيانات التي سوف نستخدمها
                           titles.push(sectionThreeTitle)
                           container.push(sectionThreeTitle)
                           container.push(sectionThreeContainer)
                        }else {
                            sectionThreeTitle = sectionTiTHREE.innerText
                            sectionThreeContainer = sectionConTHREE.innerText
                            // البيانات التي سوف نستخدمها
                            titles.push(sectionThreeTitle)
                            container.push(sectionThreeTitle)
                            container.push(sectionThreeContainer)
                    }
                } catch(err){
                    sectionThreeTitle = sectionTiTHREE.innerText
                    sectionThreeContainer = sectionConTHREE.innerText
                    // البيانات التي سوف نستخدمها
                    titles.push(sectionThreeTitle)
                    container.push(sectionThreeTitle)
                    container.push(sectionThreeContainer)
                }
            }
            }else {
                sectionThreeTitle  = ""
                sectionThreeContainer = ""
            }
            
            numberSection ++;
            numberSectionS ++;
            addSections()
        } else {
            // when done send data to server
            var titleWeb = document.getElementsByClassName('title')[0].innerHTML
            socket.emit("infoPageIndexHtml",{title : titleWeb , container,titles,d : discreptionAll})
            return false
        }
    }
    
   } catch(err) {
    var dis = "err"
   }
   var disPage = dis.innerHTML + disTWO.innerHTML + disTHREE.innerHTML

   /*socket.emit("infoPageIndexHtml",{disPage, sectionOneTitle, sectionTwoTitle, sectionThreeTitle,
    sectionOneContainer,sectionTwoContainer,sectionThreeContainer})*/

}

// انتهاء موضوع


// ###################################


// dw

function dw(){

    try{
        var titleWeb = document.getElementsByTagName('h1')[0].innerText;
        var containersWeb = document.querySelectorAll('.longText p')
        for(var w = 0; w < containersWeb.length; w++){
            container.push(containersWeb[w].innerText)
        }
        socket.emit("infoPageIndexHtml",{title : titleWeb , container,d : ""})
    } catch (err){
        var titleWeb = null;
        socket.emit("infoPageIndexHtml",{title : titleWeb , container,d : ""})
    }
}

// انتهاء dw


// العلم

function ss(){

    try{
        var titleWeb = document.getElementsByClassName('article-header__title')[0].innerText
        var containersWeb = document.querySelectorAll('.mura-region-local p')
        for(var w = 0; w < containersWeb.length; w++){
            container.push(containersWeb[w].innerText)
        }
        socket.emit("infoPageIndexHtml",{title : titleWeb , container,d : ""})
    } catch(err){
        var titleWeb = null;
        socket.emit("infoPageIndexHtml",{title : titleWeb , container,d : ""})
    }
}

// nasa arabic
function nas(){
    try{
        var titleWeb = document.querySelectorAll('header h1')[0].innerText

        // GET CONTAINER
        var containers = document.querySelectorAll('.text-justify p')
        for(var i =0; i < containers.length; i++){
            container.push(containers[i].innerText)
        }


        socket.emit("infoPageIndexHtml",{title : titleWeb , container,d : ""})
    } catch (err){
        var titleWeb = null;
        socket.emit("infoPageIndexHtml",{title : titleWeb , container,d : ""})
    }
}
//.

// wikipedia

function wiki(){
    try{
        var container;
        var countThis = 0;
        try{
            checkThis()
            function checkThis(){
                var containert = document.querySelectorAll(".mw-parser-output p")[countThis]
                var containerC = containert.innerText
                if(containerC.length > 10){
                    return container = containert
                }else{
                    if(countThis < 5){
                        countThis ++
                        checkThis()
                    } else {
                        return container = containert
                    }
                }
            }
        }catch(err){
            container = document.getElementsByTagName("p")[0]
        }
        if(container == "" || container == undefined){
            socket.emit("infoPageIndexHtml",{title : "" , container : "",d : ""})
        } else {
            var containerDS = container.innerText
            socket.emit("infoPageIndexHtml",{title : "" , container : containerDS,d : ""})
        }
    } catch (err){
        socket.emit("infoPageIndexHtml",{title : "" , container : "",d : ""})
    }
}

// .

// ###################################

// المعرفة

// انتهاء موقع معرفة

// ###################################

// رد اتصال للسيرفر

   
socket.on("doneReadIndexHtml",e=>{
    socket.emit("doneReadIndexHtmlOk")
})
socket.on("doneReadIndexHtmlOkCloes",e=>{
    window.close();
}) 