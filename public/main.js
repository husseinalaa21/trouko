var socket = io('https://trouko-console.herokuapp.com/');
var count_p_subject_f,count_p_questions_f,count_all_p_f,counSu,counQu,containerS,containerQ,addSiteMap,
whatUP,whatCon,whatContainerTitle,ifYNY,whatContainer
,checkUpdate,checkDeleteR,checkediteR,checkuploadR;

// add auto var.
var startAutoAddv = document.getElementById("startAutoAdd")
var saa = document.getElementById('saa')
var isAddStart = false

// .

counSu = 0;
counQu = 0;

count_p_subject_f = document.getElementById("count_p_subject_f")
count_p_questions_f = document.getElementById("count_p_questions_f")
count_all_p_f = document.getElementById("count_all_p_f")
containerS = document.getElementById("containerS")
containerQ = document.getElementById("containerQ")


checkUpdate = document.getElementById("checkUpdate").innerText
checkDeleteR = document.getElementById("checkDeleteR").innerText
checkediteR = document.getElementById("checkediteR").innerText
checkuploadR = document.getElementById("checkuploadR").innerText


addSiteMap = document.getElementById("addSiteMap")
whatUP = document.getElementById("whatUP")
whatCon = document.getElementById("whatCon")
whatContainerTitle = document.getElementById("whatContainerTitle")
ifYNY = document.getElementById("ifYNY")
whatContainer = document.getElementById("whatContainer")
dataUp = document.getElementById("dataUp")

socket.emit("readNumberQB")
socket.on("OKreadNumberQB", e=>{
    count_p_subject_f.innerHTML =  e.countSubjectsNumber;
    count_p_questions_f.innerHTML = e.countQuestionsNumber;
    count_all_p_f.innerHTML = e.countSubjectsNumber + e.countQuestionsNumber;
})

socket.on("READNAMEALLSUBDONE",e=>{
    var i;
    for(i=0; i < e.length; i++){
        addS(e[i].name,e[i].url)
    }
})

socket.on("READNAMEALLQUESTIONSDONE",e=>{
    var i;
    for(i=0; i < e.length; i++){
        addQ(e[i].name,e[i].url)
    }
})

function addS(e,v){
    counSu ++;
    var m = document.createElement("div");
    m.className = "nameSQW"
    m.innerHTML = "<div class='nameSQ'> <div class='coun subjects_NN'>"+counSu+"</div>. &nbsp;"+"<div class='p_c'>"+ e+'</div></div>'+`<div class="iconView"  onclick="opens('`+v+`')" > <i class="fa fa-eye" style="font-size:14px; margin-top: 10px"></i> </div>`;
    containerS.append(m)
}

function addQ(e,v){
    counQu ++;
    var m = document.createElement("div");
    m.className = "nameSQW"
    m.innerHTML = "<div class='nameSQ'> <div class='coun quseions_NN'>"+counQu+"</div>. &nbsp;"+"<div class='p_c'>"+ e+'</div></div>'+`<div class="iconView" onclick="opens('`+v+`')" > <i class="fa fa-eye" style="font-size:14px; margin-top: 10px"></i> </div>`;
    containerQ.append(m)
}

var count_all_p ,count_p_subject,refresh_json_j;
refresh_json_j = document.getElementById("refresh_json_j")


function resrartJX(){
  socket.emit('restartJX')
}

var JX,UP,DE,ED;

JX = document.createElement("div")
UP = document.createElement("div")
DE = document.createElement("div")
ED = document.createElement("div")

JX.innerHTML = ' <div class="sectionSiteMap up"> <div class="curX"></div>    الجيسون : لديك بيانات جديدة أو محدثة </div>';
UP.innerHTML = '<div class="sectionUpload up "> <div class="curX"></div> أضافة المقالات : يوجد مقالات جديدة   </div>';
DE.innerHTML = '<div class="sectiondelete up"> <div class="curX"></div> حذف المقالات : يوجد مقالات تم حذفها  </div>';
ED.innerHTML = '<div class="sectionedite up"><div class="curX"></div>  تعديل المقالات : يوجد مقالات محدثة </div>';

socket.on('doneJX', function(){
    location.reload();
})

addPSite();

function addPSite(){
    if(checkUpdate == "true"){
        addSiteMap.innerHTML = `<div class="refresh_mapX npms">
        <div "> أرسال ملف sitemap  </div><div "><i class="material-icons" style="font-size:14px;
        margin-top : 3px; margin-right : 6px">file_upload</i></div>
    </div>`
    }if(checkUpdate == "fales"){
        addSiteMap.innerHTML = `<div class="refresh_map npms">
        <div onclick="sendSiteMap()"> أرسال ملف sitemap  </div><div onclick="sendSiteMap()"><i class="material-icons" style="font-size:14px;
        margin-top : 3px; margin-right : 6px">file_upload</i></div>
    </div>`
    }

    setTimeout(function(){
        if(checkUpdate == "true" && checkDeleteR == "true" && checkediteR == "true" && checkuploadR == "true"){
            whatUP.innerHTML = `<div class="siteApo nnm">كل شيء محدث</div>`
            whatContainer.innerHTML = `<div class="dataGud"> <div class="timeDete">  أخر عملية تغيير أو أضافة كانت بتاريخ :  </div> <div class="dataDete"> `+dataUp.innerText+` </div></div>`
            whatContainer.style.display = "block"
        }
        if(checkUpdate == "fales"){
            whatCon.appendChild(JX);
        }
        if(checkuploadR == "fales"){
            whatCon.appendChild(UP);
        }
        if(checkDeleteR == "fales"){
            whatCon.appendChild(DE);
        }
        if(checkediteR == "fales"){
            whatCon.appendChild(ED);
        }
        if(checkUpdate == "fales" | checkDeleteR == "fales" | checkediteR == "fales" | checkuploadR == "fales"){
            whatContainer.style.display = "block"
            whatContainerTitle.className = "whatContainerTitle red sh";
            whatUP.innerHTML = `<div class="siteFales nnm"> <div class="siteFalesT">يرجى تحديث ملفات الموقع</div> <div class="siteCurc"></div> </div>`
            ifYNY.innerHTML = `<div class="ifOKup" > <div> هل تم رفع التغييرات ؟  </div> <div class="ifYes" id="ifOKup" onclick="okRESTART()"> نعم </div> </div>`
        }
    },1000)
}

function sendSiteMap(){
    window.open('https://www.google.com/ping?sitemap=https://trouko.co/sitemap.xml', '_blank');
    socket.emit("sendSiteMap")
}

socket.on("donesendSiteMap", e=>{
    location.reload();
})

function okRESTART(){
    socket.emit("okRESTARTEVERYCHANGE")
}

socket.on("okDONEokRESTARTEVERYCHANGE",e=>{
    location.reload();
})

function opens(filename){
    window.open("W"+filename);
}

// title info

setTimeout(() => {
    socket.emit("staSENDdata")
    socket.emit("staSENDdataTwo")
    document.getElementById("staSENDdataEd").innerHTML = ""
}, 1000);

socket.on("okSendDataTitleStep1",e=>{
    document.getElementById("sugg_add_container_edite_num").innerHTML = e.length
    for(var i=0; i < e.length; i++){
        addTitleOneCh(e[i])
    }
    if(e.length == 0){
        document.getElementById("sugg_add_container_edite").innerHTML = `<p class="empty"> لا يتوفر  </p>`
    }
})
var containerTitleEd = document.getElementById("sugg_add_container_edite")
var numvTi = 0;
function addTitleOneCh(m){
    numvTi ++;
    var vTi = document.createElement("div")
    vTi.className = "titleJSEd"
    vTi.id = "titleJSEd"+numvTi
    vTi.innerHTML = `<p id="edTitleNam`+numvTi+`P">`+m+`</p> <input autocomplete="off" type="text" value="`+m+`" id="titleJSEdED`+numvTi+`" style=" display: none;" onchange="changeTitleNam('edTitleNam`+numvTi+`','titleJSEdED`+numvTi+`','`+m+`')"> <div class="containerEdChooes"> <div class="deleteThisTitle" id="deleteThisTitle" onclick="deleteThisTi('`+m +"','titleJSEd"+numvTi+`')"> حذف </div>
    <select id="ratingThisTitle`+numvTi+`" onchange="iChooesThis('ratingThisTitle`+numvTi+`','`+m+`','titleJSEd`+numvTi+`')"  class="ratingThisTitle">
    <option >تصنيف</option>
    <option value="subjects/space/">الفضاء</option>
    <option value="questions/questions_space/">أسئلة عن الفضاء</option>
    <option value="subjects/physics/"> الفيزياء </option>
    <option value="questions/questions_physics/"> أسئلة عن الفيزياء </option>
    <option value="subjects/technology/"> تكنلوجيا </option>
    <option value="questions/questions_technology/"> أسئلة عن التكنلوجيا </option>
    <option value="subjects/geography/"> جغرافية </option>
    <option value="subjects/sciences/">العلوم</option>
    <option value="questions/questions_sciences/"> أسئلة عن العلوم </option>
    <option value="subjects/else/"> متنوعة </option>
    <option value="questions/questions_else/"> أسئلة متنوعة </option>
    <option >أسئلة عن العلوم </option>
  </select> </div>
  
  <div id="ratingThisTitle`+numvTi+`D"></div>
  <div id="edTitleNam`+numvTi+`"><div class="edTitleNam" onclick="edTTitleNam('titleJSEdED`+numvTi+`')"> تعديل </div></div>`
    containerTitleEd.append(vTi)
}

function deleteThisTi(m,n){
    socket.emit("deleteThisTitle",{m,n})
}

socket.on("deleteThisTitleOk",e=>{
    var idthis = e.id
    var newData = e.jsonData
    var lengthData = e.lengthData
    document.getElementById(idthis).style.display = "none"

    // restart data
    containerTitleEd.innerHTML = ""
    document.getElementById("sugg_add_container_edite_num").innerHTML = lengthData
    for(var i=0; i < newData.length; i++){
        addTitleOneCh(newData[i])
    }
    if(newData.length == 0){
        document.getElementById("sugg_add_container_edite").innerHTML = `<p class="empty"> لا يتوفر  </p>`
    }
})

function edTTitleNam(m){
    document.getElementById(m).style.display = 'block';
}

function changeTitleNam(m,ne,old){
    var newValue = document.getElementById(ne).value
    document.getElementById(m).innerHTML = `<div class="edTitleNamK" onclick="saveChangeTi('`+newValue+`','`+old+`','`+m+`','`+ne+`')"> حفظ </div>`
}

function saveChangeTi(n,o,m,mm){
    document.getElementById(mm).style.display = "none"
    document.getElementById(m).innerHTML = `<div class="edTitleNamK"><i class="fas fa-cog fa-spin"></i></div>`
    socket.emit("changeThisTi",{n,o,m})
}

socket.on("changeThisTiK",e=>{
    var newValue = e.n;
    var idElemnt = e.m+"P";
    document.getElementById(idElemnt).innerHTML = newValue
    document.getElementById(e.m).innerHTML = `<div  class="edTitleNamDone">تم التعديل</div>`
})

function iChooesThis(m,valueE,idElemnt){
    var gt = document.getElementById(m).value
    document.getElementById(m+"D").innerHTML = `<div class="edTitleNamKSend" onclick="doneEDTi('`+idElemnt+`','`+valueE+`','`+gt+`')"> ارسال </div>`
}

function doneEDTi(idElemnt,el,gt){
    socket.emit("ratingTitle",{id:idElemnt,ele:el,rating:gt})
}

socket.on("ratingTitleK",e=>{
    var idthis = e.id
    var newData = e.jsonData
    var lengthData = e.lengthData
    document.getElementById(idthis).style.display = "none"

    // restart data
    containerTitleEd.innerHTML = ""
    document.getElementById("sugg_add_container_edite_num").innerHTML = lengthData
    for(var i=0; i < newData.length; i++){
        addTitleOneCh(newData[i])
    }
    if(newData.length == 0){
        document.getElementById("sugg_add_container_edite").innerHTML = `<p class="empty"> لا يتوفر  </p>`
    }

})

socket.on("saveTitlesTSOMG",e=>{
    containerMineTi.innerHTML = ""
    document.getElementById("sugg_add_container_num").innerHTML = e.length
    for(var ii=0; ii < e.length; ii++){
        var namTi =  e[ii].titleNam
        addTitleSuggMain(namTi)
    }

})

// step  two 

socket.on("okSendDataTitleStep2",e=>{
    document.getElementById("staSENDdataS").innerHTML = ""
    document.getElementById("sugg_add_container_num").innerHTML = e.length
    for(var ii=0; ii < e.length; ii++){
        var namTi =  e[ii].titleNam
        addTitleSuggMain(namTi)
    }
})
var containerMineTi = document.getElementById("sugg_add_container")
var numTiMaine = 0;

function addTitleSuggMain(m){
    numTiMaine ++;
    var ele = document.createElement("div")
    ele.className = "titlesMaineSugg"
    ele.id = "titlesMaineSugg"+numTiMaine
    ele.innerHTML = `<p>`+m+`</p>`+`<p></p>`+`<div class="deleteItem" id="deleteItem`+numTiMaine+`" onclick="deleteThisTiMin('`+m+`','titlesMaineSugg`+numTiMaine+`')"> حذف </div>`+`<div class="startWorkAuto"> بدء الأنشاء </div>`
    containerMineTi.append(ele)
}

function deleteThisTiMin(m,n){
    socket.emit("deleteSaveTitleTS",{id:n,thisItem:m})
}

socket.on("deleteSaveTitleTSOk",e=>{
    var idthis = e.id
    var newData = e.jsonData
    var lengthData = e.lengthData
    document.getElementById(idthis).style.display = "none"

    // restart data
    containerMineTi.innerHTML = ""
    document.getElementById("sugg_add_container_num").innerHTML = lengthData
    for(var i=0; i < newData.length; i++){
        var namTi =  newData[i].titleNam
        addTitleSuggMain(namTi)
    }
    if(newData.length == 0){
        containerMineTi.innerHTML = `<p class="empty"> لا يتوفر  </p>`
    }
})

function startAutoAdd(){
    if(isAddStart == false){
        isAddStart = true
        startAutoAddv.style.borderColor = "#2196F3"
        saa.innerHTML = `<div class="startSp"> <div class="loader">  <div><ul><li><svg viewBox="0 0 90 120" fill="currentColor"><path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path></svg></li><li><svg viewBox="0 0 90 120" fill="currentColor"><path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path></svg></li><li><svg viewBox="0 0 90 120" fill="currentColor"><path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path></svg></li><li>
        <svg viewBox="0 0 90 120" fill="currentColor"><path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path></svg></li><li><svg viewBox="0 0 90 120" fill="currentColor"><path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path></svg></li><li><svg viewBox="0 0 90 120" fill="currentColor"><path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path></svg></li></ul></div> </div></div>`
    } else {
        isAddStart = false
        startAutoAddv.style.borderColor = ""
        saa.innerHTML = ``
    }
}


// معالجة الكلمات
var iswordsSmart= "false";

function wordsSmart(){
    if(iswordsSmart == "false"){
        iswordsSmart = "true"
        document.getElementById("wordsSmart").style.display = "block"
        document.getElementById("changWords").className = "changWordsY npms"
    } else {
        iswordsSmart = "false"
        document.getElementById("wordsSmart").style.display = "none"
        document.getElementById("changWords").className = "changWords npms"
    }
}

function checkThisWord(id){
    var eWX = document.getElementById(id)
    var eW = eWX.value
    if(eW != ""){
        socket.emit("isWordJson",{eW,id})
    }else {
        document.getElementById("errWord").style.display = "none"
        document.getElementById("passWord").innerHTML = ` <div class="passWordX"> معالجة </div> `
    }
}

socket.on("isWordJsonFalse",e=>{
    document.getElementById("errWord").style.display = "none"
    document.getElementById("passWord").innerHTML =  ` <div class="passWord" onclick="sendThis()"> معالجة </div> `
    document.getElementById(e).style.border = "3px solid  #6599d8"
})

socket.on("isWordJsonTrue",e=>{
    document.getElementById("errWord").style.display = "block"
    document.getElementById("passWord").innerHTML = ` <div class="passWordX"> معالجة </div> `
    document.getElementById(e).style.border = "3px solid #d86565"
})

function sendThis(){
    var wOne = document.getElementById("enWordOne")
    var wTwo = document.getElementById("enWordTwo")

    if(wOne.value != ""){
        if(wTwo.value != ""){
            socket.emit("addThisWords", {wOne : wOne.value, wTwo : wTwo.value})
        } else {
            wTwo.style.border = "3px solid  #d86565"
            checkThisWord(wTwo)
        }
    } else {
        wOne.style.border = "3px solid  #d86565"
        checkThisWord(wOne)
    }
}

socket.on("addThisWordsSucc",e=>{
    var sW = document.getElementById("sucWord")
    sW.style.display = "block"
    document.getElementById("errWord").style.display = "none"
    setTimeout(() => {
        sW.style.display = "none"
    }, 2000);
})

socket.on("addThisWordsFalseOne",e=>{
    var tWt = document.getElementById("enWordOne")
    document.getElementById("errWord").style.display = "block"
    tWt.value = ""
    checkThisWord(tWt)
})

socket.on("addThisWordsFalseTwo",e=>{
    var tWt = document.getElementById("enWordTwo")
    document.getElementById("errWord").style.display = "block"
    tWt.value = ""
    checkThisWord(tWt)
})