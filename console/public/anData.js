var socket = io('http://localhost:3000/');

socket.emit("wordJson")

// بيانات التحليل [  ]

var jsonLogic;

socket.on("wordJsonK",e=>{
    jsonLogic = e
})


// عمليات تحليل البيانات

function anData(t){
    var hMChange = 0;
    var hMall = 0;

    // فحص الاخطاء 
    try{
    for(var i=0; i<jsonLogic.length;i++){
        // فحص ما بدلخل الحاوية المنطقيه كل عنصر في داخل عنصر نفحصه
        for(var insideJson = 0; insideJson < jsonLogic[i].length; insideJson++){
            
            // الان فحص عدد الحاوية المرسلة
            for(var ii =0;ii < t.length; ii++){
                // ازالة علامات الضم و الفتح و الكسر
                t[ii] = t[ii].replace(/َ/g,"").replace(/ً/g,"").replace(/ُ/g,"").replace(/ّ/g,"").replace(/ِ/g,"").replace(/ٍ/g,"").replace(/ْ/g,"").replace(/ٌ/g,"")
                // فحص ما بداخل كل قسم : من القسم المراد تحليله
                var tNew = t[ii].split(" ")
                for(var e = 0; e < tNew.length; e++){
                    if(tNew[e] == jsonLogic[i][insideJson]){
                        var wordXx = jsonLogic[i].indexOf(tNew[e])
                       
                        if(wordXx == 0){
                            var wordN = "<strong> "+jsonLogic[i][1]+" </strong>"
                            tNew[e] = tNew[e].replace(tNew[e],wordN)
                        } else {
                            var wordN = " <strong> "+jsonLogic[i][0]+" </strong>"
                            tNew[e] = tNew[e].replace(tNew[e],wordN)
                        }
                        hMChange ++;
                    }
                    if(tNew.length -1 == e){
                        hMall += tNew.length
                        var tNN = tNew.toString();
                        var tNE = tNN.replace(/,/g," ")
                        t[ii] = tNE
                    }
                }
            }

        }if(jsonLogic.length -1 == i){
            // فحص الانتهاء
           var co = [t,hMall,hMChange]
           return co
        }
    }} catch(err){
        t = [""]
        var co = [t,hMall,hMChange]
        return co
    }

}


// المرحلة التالية من التحليل

var wordsWrong = [
    "نشر",
    "بواسطة",
    "مصدر",
    "المصدر",
    "؟",
    "?",
    "!",
    ";",
    "يقول"
]

function anDataStepTwo(t){
    var Jc = []
    var nChange = 0;

    // فحص الاخطاء 
    try{
    for(var e =0;e< t.length; e++){
        const ele = t[e]
        var tSolt = t[e].split(" ")
        t[e] = t[e].replace(/۰/g,"0").replace(/۱/g,"1").replace(/٢/g,"2").replace(/٣/g,"3").replace(/٤/g,"4").replace(/٥/g,"5").replace(/٦/g,"6").replace(/٧/g,"7").replace(/٨/g,"8").replace(/٩/g,"9")
        
        // ازالة التوابع مع الارقام
        removeNam()
        function removeNam(){
            if(t[e].includes(']')){
                var mySubString = t[e].substring(
                    t[e].lastIndexOf("[")  , 
                    t[e].lastIndexOf("]") +1
                );
                t[e] = t[e].replace(mySubString,"")
                removeNam()
                nChange ++;
            } else {
                return false
            }
        }
        // .

        // ازالة الاسماء الانجليزية
        removeNamTwo()
        function removeNamTwo(){
            if(t[e].includes(')')){
                var mySubString = t[e].substring(
                    t[e].lastIndexOf("(")  , 
                    t[e].lastIndexOf(")") +1
                );
                t[e] = t[e].replace(mySubString,"")
                removeNamTwo()
                nChange ++;
            } else {
                return false
            }
        }
        // .

        // ازالة بعض الجمل القصيرة 
        removeNamString()
        function removeNamString(){
            var soltString = t[e].split(" ")
            if(soltString.length < 15){
                if(t[e].includes(":")){
                    return false
                } else {
                    for(var o = 0; o < soltString.length; o++){
                        if(wordsWrong.includes(soltString[o])){
                            Jc.push('<b class="red"> '+ele+' </b>')
                            t[e] = ''
                        } if(soltString.length - 1 == o){
                            nChange ++;
                        }
                    }
                }
            }
        }
        
        if(tSolt.length < 8){
            if(tSolt.length > 1){
                if(t[e].includes("?")){
                    // fales
                } else {
                    t[e] = "<b class='tiCon'>"+t[e] + " : </b>"
                    nChange ++;
                }
            }
        }

        if(t.length -1 == e){
            if(t == undefined){
              t = [""]
              var result = [t,nChange,Jc]
              return result
            } else {
                var result = [t,nChange,Jc]
                return result
            }
        }
    }} catch(err){
        t = [""]
        var result = [t,nChange,Jc]
        return result
    }
}

// فاكشن لترتيب الجملة وازالة التوابع

function removeXBreak(t,Jc){
    try {

    var changeN = 0;
    for(var e = 0; e < t.length; e++){
        var elementSection = t[e]
        var nSearch = 0;

        searchEle()
        function searchEle(){
            if(elementSection.includes('.')){
                nSearch++;
                elementSection = elementSection.replace('.',"$"+nSearch+"$")
                searchEle()
            } else {
                return false
            }
        }
        // تحديد كيف سيتم ازالة اقسام من الاقسام الاساسية
        
        var nRand = Math.floor(Math.random() * 2); 


        changeRemovePlace()
        function changeRemovePlace(){
            if(nSearch == 2){

                var mySubString = elementSection.substring(
                    elementSection.lastIndexOf("$1$")  , 
                    elementSection.lastIndexOf("$2$") +3
                );
                Jc.push("<b class='red'> . { "+mySubString+" } </b>")
                elementSection = elementSection.replace(mySubString, " . ")
                t[e] = elementSection
                changeN ++;

            } else if(nSearch == 3){
                if(nRand == 0){
                    var mySubString = elementSection.substring(
                        elementSection.lastIndexOf("$1$")  , 
                        elementSection.lastIndexOf("$2$") +3
                    );
                    Jc.push("<b class='red'> . { "+mySubString+" } </b>")
                    elementSection = elementSection.replace(mySubString, " . ")
                    elementSection = elementSection.replace('$3$', ".")
                    t[e] = elementSection
                    changeN ++;
                } else {
                    var mySubString = elementSection.substring(
                        elementSection.lastIndexOf("$2$")  , 
                        elementSection.lastIndexOf("$3$") +3
                    );
                    Jc.push("<b class='red'> . { "+mySubString+" } </b>")
                    elementSection = elementSection.replace(mySubString, " . ")
                    elementSection = elementSection.replace('$1$', ".")
                    t[e] = elementSection
                    changeN ++;
                }

            } else if(nSearch > 3){
                var mySubString = elementSection.substring(
                    elementSection.lastIndexOf("$3$")  , 
                    elementSection.lastIndexOf("$"+nSearch+"$") +3
                );
                Jc.push("<b class='red'> . { "+mySubString+" } </b>")
                elementSection = elementSection.replace(mySubString, " . ")
                elementSection = elementSection.replace('$1$', ".")
                elementSection = elementSection.replace('$2$', ".")
                elementSection = elementSection.replace(/\$/g, "")
                t[e] = elementSection
                changeN ++;

            }

        }


        if(t.length -1 == e){
            var result = [t,changeN,Jc]
            return result
        }
    }
        
    } catch (err){
        t = [""]
        var result = [t,changeN,Jc]
        return result
    }
}

function anDataTitles(t){
    try{
        var newTitle = t.replace(/\?/g,"").replace(/:/g,"").replace(/;/g,"").replace(/!/g,"").replace(/؟/g,"")
        return newTitle
    } catch(err){
        return t
    }
}