const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var fs = require('fs');
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
var rimraf = require("rimraf");

const addFileHtml = require('./addFileHtml');
const addFileHtmlFour = require('./addFileHtmlFour');
const addFileHtmlThree = require('./addFileHtmlThree');
const addFileHtmlTwo = require('./addFileHtmlTwo');
const addFileJs = require('./addFileJs');
const addFileJs_t = require('./addFileJs_t');
const addFileJs_tThree = require('./addFileJs_tThree');
const addFileJs_tTwo = require('./addFileJs_tTwo');
const { log } = require('./variables_logic/varLogic');


app.get('/', (req, res) =>{
    
    var d,xData,dataC,dataCx,dataUp,
    checkJX,checkDeleteR,checkediteR,checkuploadR;

    var countQ = 0;
    var countP = 0;
    var countAllPage = 0;
    try {    
        d = fs.readFileSync('../data.js');
        xData = JSON.parse(d);
        countQ = 0;
   
   
       for(i=0; i < xData.length; i++){
           if(xData[i].linkPage.includes('questions')){
               countQ ++;
           }
       }
        countP = 0;
       for(i=0; i < xData.length; i++){
           if(xData[i].linkPage.includes('subjects')){
               countP ++;
           }
       }
        countAllPage = 0;
       for(i=0; i < xData.length; i++){
           if(xData[i].linkPage){
               countAllPage ++;
           }
       }
      }
      catch(err) {
        console.log("obs!!")
      }

     // CHECKS B

      try {    
        var c = fs.readFileSync('dataCheck.js');
        dataC = JSON.parse(c);

        var cx = fs.readFileSync('dataCheckCon.js');
        dataCx = JSON.parse(cx);

        // check JX 1

        if(dataC[0].checkJsonXmap == dataCx[0].checkJsonXmap){
            checkJX = "true"
        } else {
            checkJX = "fales"
        }

        // check DE 2

        if(dataC[0].checkDelete == dataCx[0].checkDelete){
            checkDeleteR = "true"
        } else {
            checkDeleteR = "fales"
        }

        // check ED 3

        if(dataC[0].checkedite == dataCx[0].checkedite){
            checkediteR = "true"
        } else {
            checkediteR = "fales"
        }

        // check UP 4

        if(dataC[0].checkupload == dataCx[0].checkupload){
            checkuploadR = "true"
        } else {
            checkuploadR = "fales"
        }
        dataUp = dataCx[0].lastUp
      }
      catch(err) {
        console.log("obs!!")
      }
    countNFol()
    counNow()
    countSubjectsNumber = 0;
    countQuestionsNumber = 0;
    countNSubjects = [];
    countNQuestions = [];
    res.render('index',{numberAllPage : countAllPage , numberSubjectPage : countP , numberquestionsPage : countQ,dataUp
        ,checkJX,checkDeleteR,checkediteR,checkuploadR})
    
})

// ******* EDITE ********

app.get('/edite',(req,res)=>{
    readFol()
    res.render('edite')
    dataStorgeSubjects = [];
    dataStorgeQuestions = [];
})

app.get('/addAuto',(req,res)=>{
    res.render('addAuto')
})

// ******* DELETE ********

app.get('/delete', (req , res)=>{
    readFol()
    res.render('delete')
    dataStorgeSubjects = [];
    dataStorgeQuestions = [];
    
})

// ******** ADD ********

app.get('/add', (req, res) =>{
    res.render('main')
})

app.get("/add_done",(req,res) =>{
    var title_e = req.query.titleid;
    var namePathP = req.query.path;
    res.render('add_done',{titlea : title_e,namePaths : namePathP})
})

// Json File

const port = process.env.PORT || 3000;
http.listen(port, function() {

    console.log('server is runing');

})

// ****** REQ INDEX FILE AND RES ******

app.get('/indexPageUrl', (req, res) =>{
    res.render('indexPageUrl',{htmlDataIndex : htmlDataIndex,typePageI:typePageI})
})

// END

//  ****** REQ INDEX IMAGE AND RES ******

app.get('/searchImage', (req, res) =>{
    res.render('searchImage', {urlSearchImg:urlSearchImg})
})

//END

//  ****** REQ INDEX TRANSLATE WORDS AND RES ******

app.get('/tranWord', (req, res) =>{
    res.render('tranWord', {tranThisW:tranThisW})
})

//END

// ****** READ FOLDERS *******

var dataStorgeSubjects = [];
var dataStorgeQuestions = [];

function readFol(){
    fs.readdir('../subjects/', (err, files) => {
        files.forEach(file => {
            if(file === 'add' || file === 'container'){
                return false
            }
            fs.readdir("../subjects/" + file, (err, files) => {
                files.forEach(file_a => {
                    dataStorgeSubjects.push('../subjects/'+file+'/'+file_a)
                });
            });
        });
    });
        fs.readdir('../questions/', (err, files) => {
        files.forEach(file => {
            if(file === 'add' || file === 'container'){
                return false
            }
            fs.readdir("../questions/" + file, (err, files) => {
                files.forEach(file_a => {
                    dataStorgeQuestions.push('../questions/'+file+'/'+file_a)
                });
            });
        });
    });
}
var countSubjectsNumber = 0;
var countQuestionsNumber = 0;
function counNow(){
    fs.readdir('../subjects/', (err, files) => {
          files.forEach(file => {
              if(file === 'add' || file === 'container'){
                  return false
              }
              fs.readdir("../subjects/" + file, (err, files) => {
                  files.forEach(file_a => {
                    return countSubjectsNumber ++;
                  });
              });
          });
      });
      
      fs.readdir('../questions/', (err, files) => {
          files.forEach(file => {
              if(file === 'add' || file === 'container'){
                  return false
              }
              fs.readdir("../questions/" + file, (err, files) => {
                files.forEach(file_a => {
                  return countQuestionsNumber ++;
                });
              });
          });
      });}


// ******* END READ ********

// ****** COUNT NAME FOLDERS *******

var countNSubjects = [];
var countNQuestions = [];

function countNFol(){
    fs.readdir('../subjects/', (err, files) => {
        files.forEach(file => {
            if(file === 'add' || file === 'container'){
                return false
            }
            fs.readdir("../subjects/" + file, (err, files) => {
                files.forEach(file_a => {
                var x = { "name" : file + " | " + file_a  , "url" :  "file:///C:/Users/husei/OneDrive/المستندات/trouko-ar/subjects/"+file+"/"+file_a+"/index.html" }
                  countNSubjects.push(x)
                });
            });
        });
    });
    fs.readdir('../questions/', (err, files) => {
        files.forEach(file => {
            if(file === 'add' || file === 'container'){
                return false
            }
            fs.readdir("../questions/" + file, (err, files) => {
                files.forEach(file_a => {
                    var x = { "name" : file + " | " + file_a  , "url" :  "file:///C:/Users/husei/OneDrive/المستندات/trouko-ar/questions/"+file+"/"+file_a+"/index.html" }
                    countNQuestions.push(x)
                });
            });
        });
    });
}


// ******* END COUNT ********


var htmlFile , cssFile,cssTwoFile,cssThreeFile,linkPage;

app.get("/oKOpEnEdItOr",(req,res)=>{
    res.render("editor",{htmlFile,cssFile,cssTwoFile,cssThreeFile,linkPage})
})

app.get("/updateDone",(req,res)=>{

titleContainerOneED = "";
titleContainerTwoED= "";
titleContainerThreeED= "";
titleContainerFourED= "";
titleContainerFiveED= "";
titleContainerSixED= "";
containerOneED_= "";
containerTwoED_= "";
containerThreeED_= "";
containerFourED_= "";
containerFiveED_= "";
containerSixED_= "";
 linkOneED= "";
linkTwoED= "";
linkThreeED= "";
linkFourED= "";
linkFiveED= "";
quoOneED= "";
quoTwoED= "";
quoThreeED= "";
quoFourED= "";
quoFiveED= "";
quoSixED= "";
quoOneaED= "";
quoTwoaED= "";
quoThreeaED= "";
quoFouraED= "";
quoFiveaED= "";
quoSixaED= "";
time_puED="";
pathEdED= "";
namePageED= "";
urlimgED= "";
discription_ED= "";
linEdED= "";
pspEd = "";
typePageED = "";

var title_e = req.query.titleid;
var namePathP = req.query.path;
res.render("updateDone",{titlea : title_e,namePaths : namePathP})

})

function times() {
    var d = new Date(),
     months = ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمير'],
     days = ['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعه','السبت'];
    return days[d.getDay()]+'  , '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
}

// LET UP

let titleContainerOneED ,
titleContainerTwoED,
titleContainerThreeED,
titleContainerFourED,
titleContainerFiveED,
titleContainerSixED;

let containerOneED_,
containerTwoED_,
containerThreeED_,
containerFourED_,
containerFiveED_,
containerSixED_;

let linkOneED,
linkTwoED,
linkThreeED,
linkFourED,
linkFiveED;


let quoOneED,
quoTwoED,
quoThreeED,
quoFourED,
quoFiveED,
quoSixED,
quoOneaED,
quoTwoaED,
quoThreeaED,
quoFouraED,
quoFiveaED,
quoSixaED,
pspEd;

let time_puED,pathEdED,namePageED,urlimgED, discription_ED,linEdED,typePageED;
let number = 0;
let numberCheck = 0;

// END VAR UP

var htmlDataIndex,typePageI,np;

var urlSearchImg;

var titlesIndexPage, containerIndexPage, titleIndexPage , dIndexPage;

var isReady = "false";
var isReadyImg = "false";
var containerImg;
var dataSearchIn;
var words;
var tranThisW;
var isReadyTran = "false"

io.on('connection', socket => { 

    socket.on("okRESTARTEVERYCHANGE",e=>{

        // UP
           var xc = fs.readFileSync('dataCheck.js');
           var data = JSON.parse(xc);

           var jsonXmap = data[0].checkJsonXmap
           var uploadFile = data[0].checkupload
           var ediiteFile =  data[0].checkedite
           var deleteFile = data[0].checkDelete

           var z = fs.readFileSync('dataCheckCon.js');
           var datax = JSON.parse(z);
           var lastUp = datax[0].lastUp


           fs.writeFileSync("dataCheckCon.js", `[ { "checkJsonXmap" : "`+jsonXmap+`" , "checkDelete" : "`+deleteFile+`" , "checkupload" : "`+uploadFile+`", "checkedite" : "`+ediiteFile+`", "lastUp" : "`+lastUp+`"  } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        });


        // END

        socket.emit("okDONEokRESTARTEVERYCHANGE")
    })
    
    socket.on("sendSiteMap", e =>{
        // UP

           var xc = fs.readFileSync('dataCheck.js');
           var data = JSON.parse(xc);

           var jsonXmap = data[0].checkJsonXmap

           var cc = fs.readFileSync('dataCheckCon.js');
           var datax = JSON.parse(cc);

           var uploadFileX = datax[0].checkupload
           var ediiteFileX =  datax[0].checkedite
           var deleteFileX = datax[0].checkDelete
           var lastUp = datax[0].lastUp


           fs.writeFileSync("dataCheckCon.js", `[ { "checkJsonXmap" : "`+jsonXmap+`" , "checkDelete" : "`+deleteFileX+`" , "checkupload" : "`+uploadFileX+`", "checkedite" : "`+ediiteFileX+`" , "lastUp" : "`+lastUp+`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        });
        

        // END
            socket.emit("donesendSiteMap")
    })

    socket.on('restartJX',function(a){
        storgData = [];
        storgXml = [];
        addInfoFileSunject()
        addInfoFileQuestions()
        socket.emit('doneJX')
    })

    socket.on("okRead", e=>{
        readFol()
        socket.emit("sub",dataStorgeSubjects)
        socket.emit("que",dataStorgeQuestions)
        dataStorgeSubjects = [];
        dataStorgeQuestions = [];

    })

    socket.on("readNumberQB", e=>{
        counNow()
        countNFol()
        socket.emit("OKreadNumberQB", {countSubjectsNumber,countQuestionsNumber})
        countSubjectsNumber = 0;
        countQuestionsNumber = 0;
        socket.emit("READNAMEALLSUBDONE",countNSubjects)
        socket.emit("READNAMEALLQUESTIONSDONE",countNQuestions)
        countNSubjects = [];
        countNQuestions = [];
    })

    socket.on("deleteF", e=>{
           var url = e.url
           var nump = e.number
           rimraf(url, function () { socket.emit("deleteDone",{url : url, nump : nump}) });
           
           // GET
           var xc = fs.readFileSync('dataCheck.js');
           var data = JSON.parse(xc);

           var jsonXmap = data[0].checkJsonXmap
           var uploadFile = data[0].checkupload
           var ediiteFile =  data[0].checkedite
           // END
           var randomOP = Math.floor(Math.random() * 2000910)
           var randomTP = Math.floor(Math.random() * 2000911)
           var ranrun = randomOP + randomTP;
           
           fs.writeFileSync("dataCheck.js", `[ { "checkJsonXmap" : "`+jsonXmap+`" , "checkDelete" : "`+ranrun+"d"+`" , "checkupload" : "`+uploadFile+`", "checkedite" : "`+ediiteFile+`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        })

        var z = fs.readFileSync('dataCheckCon.js');
        var datax = JSON.parse(z);

        var jsonXmapX = datax[0].checkJsonXmap
        var uploadFileX = datax[0].checkupload
        var ediiteFileX =  datax[0].checkedite
        var deleteFileX = datax[0].checkDelete


        fs.writeFileSync("dataCheckCon.js", `[ { "checkJsonXmap" : "`+jsonXmapX+`" , "checkDelete" : "`+deleteFileX+`" , "checkupload" : "`+uploadFileX+`", "checkedite" : "`+ediiteFileX+`" , "lastUp" : "`+times() +"  |  "+ " الساعة " + today.getHours() + " و " +today.getMinutes()+" من الدقائق " +`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        });

        // -----------> CREATE A PATH IN SITEMAP.XML 
        

        var pathU = url.replace("../","");
        var pathUrl ="https://www.trouko.com"+ pathU;
    
        
        fs.readFile( '../sitemap.xml', function(err, data) {
                    
        // ---> READ FILE
    
        var dJson = data.toString()
    
        // --> AFTER READ LET'S MAKE IT AGEN WITH NEW VALUE
        
        var findValue = `
        <url>
        <loc>`+pathUrl+`/</loc>`
        if(dJson.includes(findValue)){
            var thisValueOne = dJson.indexOf(findValue)
            var gle = dJson.substring(thisValueOne, dJson.length);
            var gel = gle.indexOf("</url>")
            var thisValueTwo = gel + thisValueOne + 6
            var res = dJson.substring(thisValueOne, thisValueTwo);
    
            var totalValue = dJson.replace(res,"")
        
            // -> CREATE A FILE WITH NEW VALUE 'FAINL' BACK VALUE TO FILE
        
            fs.writeFile('../sitemap.xml', totalValue , function(err) {
                if(err) {
                    return console.log(err);
                }});
        }
        });
    

    })
    
    socket.on("edite_page", e=>{
         linkPage = e.urlPage;
        var numberPage = e.numberPage;
        fs.readFile(linkPage+"/index.html",'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            htmlFile = data
        })
        fs.readFile("../trouko-css/index.css",'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            cssFile = data
            
        })
        fs.readFile("../trouko-css/info.css",'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            cssTwoFile = data
            
        })
        fs.readFile("../trouko-css/index_s.css",'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            cssThreeFile = data
            
        })
        socket.emit("completeRead")
        socket.on("okSend",e=>{
            socket.emit("okEdite")
        })
    })
// ************* UPDATE DATA IN PAGE ***************
    socket.on("updateData",e=>{
        typePageED = e.pptt
        time_puED = e.time_pu;
        pathEdED = e.pathEd;
        namePageED = e.namePage;
        urlimgED = e.urlimg;
        discription_ED = e.discription;
        linEdED = e.linEd;
        
        titleContainerOneED = e.titleContainerOne;
        titleContainerTwoED = e.titleContainerTwo;
        titleContainerThreeED = e.titleContainerThree;
        titleContainerFourED = e.titleContainerFour;
        titleContainerFiveED = e.titleContainerFive;
        titleContainerSixED = e.titleContainerSix;

        containerOneED_ = e.containerOne;
        containerTwoED_ = e.containerTwo;
        containerThreeED_ = e.containerThree;
        containerFourED_ = e.containerFour;
        containerFiveED_ = e.containerFive;
        containerSixED_ = e.containerSix;

        linkOneED = e.linkOne;
        linkTwoED = e.linkTwo;
        linkThreeED = e.linkThree;
        linkFourED = e.linkFour;
        linkFiveED = e.linkFive;
        quoOneED = e.quoOne;
        quoTwoED = e.quoTwo;
        quoThreeED = e.quoThree;
        quoFourED = e.quoFour;
        quoFiveED = e.quoFive;
        quoSixED = e.quoSix;
        quoOneaED = e.quoOnea;
        quoTwoaED = e.quoTwoa;
        quoThreeaED = e.quoThreea;
        quoFouraED = e.quoFoura;
        quoFiveaED = e.quoFivea;
        quoSixaED = e.quoSixa;
        sameUrlED = e.sameUrl;
        pspEd = e.psp

        var discriptionED =  discription_ED.replace(/\n\r?/g, '<br />');
        var disPMPre = discription_ED.replace(/\n\r?/g, ' ');
        var disPMEdTer = disPMPre.replace(/<br>/g, ' ');
        var disPMEd = disPMEdTer.replace(/"/g, "'");
        if(disPMEd.length > 120){
            var ondis = disPMEd.slice(0, 180);
            var twdis =  " ... " + ondis
            disPMEd = twdis
        }
        var containerOneED=containerOneED_.replace(/\n\r?/g, '<br />');
        var containerTwoED =containerTwoED_.replace(/\n\r?/g, '<br />');
        var containerThreeED= containerThreeED_.replace(/\n\r?/g, '<br />');
        var containerFourED = containerFourED_.replace(/\n\r?/g, '<br />');
        var containerFiveED = containerFiveED_.replace(/\n\r?/g, '<br />');
        var containerSixED = containerSixED_.replace(/\n\r?/g, '<br />');
        
        // ************ UPDATE HTML ***********

        if(typePageED == "typeOne"){
            fs.writeFileSync(pathEdED+"/index.html",addFileHtml.addHtmlFile(namePageED,urlimgED,discriptionED,time_puED, titleContainerOneED ,titleContainerTwoED ,titleContainerThreeED ,titleContainerFourED ,titleContainerFiveED ,titleContainerSixED ,
            containerOneED,containerTwoED,containerThreeED,containerFourED,containerFiveED,containerSixED,linEdED,linkOneED,linkTwoED,linkThreeED,linkFourED,linkFiveED,quoOneED,quoTwoED,quoThreeED,quoFourED,quoFiveED,quoSixED,quoOneaED,quoTwoaED,quoThreeaED,quoFouraED,quoFiveaED,quoSixaED,times(),sameUrlED,pspEd,disPMEd) , function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("UPDATE HTML FILE SUCCESSFLY ! / TYPE ONE");
            }); 
        }
        if(typePageED == "typeTwo"){
            fs.writeFileSync(pathEdED+"/index.html",addFileHtmlTwo.addHtmlFileTwo(namePageED,urlimgED,discriptionED,time_puED, titleContainerOneED ,titleContainerTwoED ,titleContainerThreeED ,titleContainerFourED ,titleContainerFiveED ,titleContainerSixED ,
            containerOneED,containerTwoED,containerThreeED,containerFourED,containerFiveED,containerSixED,linEdED,linkOneED,linkTwoED,linkThreeED,linkFourED,linkFiveED,quoOneED,quoTwoED,quoThreeED,quoFourED,quoFiveED,quoSixED,quoOneaED,quoTwoaED,quoThreeaED,quoFouraED,quoFiveaED,quoSixaED,times(),sameUrlED,pspEd,disPMEd) , function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("UPDATE HTML FILE SUCCESSFLY ! / TYPE TWO");
            }); 
        }
        if(typePageED == "typeThree"){
            fs.writeFileSync(pathEdED+"/index.html",addFileHtmlThree.addHtmlFileThree(namePageED,urlimgED,discriptionED,time_puED, titleContainerOneED ,titleContainerTwoED ,titleContainerThreeED ,titleContainerFourED ,titleContainerFiveED ,titleContainerSixED ,
            containerOneED,containerTwoED,containerThreeED,containerFourED,containerFiveED,containerSixED,linEdED,linkOneED,linkTwoED,linkThreeED,linkFourED,linkFiveED,quoOneED,quoTwoED,quoThreeED,quoFourED,quoFiveED,quoSixED,quoOneaED,quoTwoaED,quoThreeaED,quoFouraED,quoFiveaED,quoSixaED,times(),sameUrlED,pspEd,disPMEd) , function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("UPDATE HTML FILE SUCCESSFLY ! / TYPE THREE");
            }); 
        }
        if(typePageED == "typeFour"){
            fs.writeFileSync(pathEdED+"/index.html",addFileHtmlFour.addHtmlFileFour(namePageED,urlimgED,discriptionED,time_puED, titleContainerOneED ,titleContainerTwoED ,titleContainerThreeED ,titleContainerFourED ,titleContainerFiveED ,titleContainerSixED ,
            containerOneED,containerTwoED,containerThreeED,containerFourED,containerFiveED,containerSixED,linEdED,linkOneED,linkTwoED,linkThreeED,linkFourED,linkFiveED,quoOneED,quoTwoED,quoThreeED,quoFourED,quoFiveED,quoSixED,quoOneaED,quoTwoaED,quoThreeaED,quoFouraED,quoFiveaED,quoSixaED,times(),sameUrlED,pspEd,disPMEd) , function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("UPDATE HTML FILE SUCCESSFLY ! / TYPE FOUR");
            }); 
        }
        
        // ************ UPDATE JAVASCRIPT FILE ************

        var pathUrlED = pathEdED.replace("../", "https://www.trouko.com/")

        fs.writeFileSync(pathEdED+"/Javascript/script.js",addFileJs.addJsFile(quoOneED,quoTwoED,quoThreeED,quoFourED,quoFiveED,quoSixED,quoOneaED,quoTwoaED,quoThreeaED,quoFouraED,quoFiveaED,quoSixaED,linkOneED,linkTwoED,linkThreeED,linkFourED,linkFiveED,pathUrlED) , function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("UPDATE JS FILE SUCCESSFLY !");
        }); 

        // ONE 

        fs.writeFileSync(pathEdED+"/Javascript/i_fscript.js", addFileJs_t.addJsFile_two(namePageED,urlimgED,discriptionED,pathUrlED,time_puED,linEdED) , function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("UPDATE JS TWO FILE SUCCESSFLY !");
        }); 

        // seconed TWO

        fs.writeFileSync(pathEdED+"/Javascript/i_tfscript.js", addFileJs_tTwo.addJsFile_two(namePageED,urlimgED,discriptionED,pathUrlED,time_puED,linEdED) , function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("UPDATE JS TWO FILE SUCCESSFLY !");
        }); 

        // seconed THREE

        fs.writeFileSync(pathEdED+"/Javascript/i_tnfscript.js", addFileJs_tThree.addJsFile_two(namePageED,urlimgED,discriptionED,pathUrlED,time_puED,linEdED) , function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("UPDATE JS TWO FILE SUCCESSFLY !");
        }); 


        // GET
        var xc = fs.readFileSync('dataCheck.js');
        var data = JSON.parse(xc);

        var jsonXmap = data[0].checkJsonXmap
        var uploadFile = data[0].checkupload
        var deleteFile = data[0].checkDelete

        var randomOP = Math.floor(Math.random() * 2000910)
        var randomTP = Math.floor(Math.random() * 2000911)
        var ranrun = randomOP + randomTP;

        fs.writeFileSync("dataCheck.js", `[ { "checkJsonXmap" : "`+jsonXmap+`" , "checkDelete" : "`+deleteFile+`" , "checkupload" : "`+uploadFile+`", "checkedite" : "`+ranrun+"e"+`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        })

        var z = fs.readFileSync('dataCheckCon.js');
        var datax = JSON.parse(z);

        var jsonXmapX = datax[0].checkJsonXmap
        var uploadFileX = datax[0].checkupload
        var ediiteFileX =  datax[0].checkedite
        var deleteFileX = datax[0].checkDelete


        fs.writeFileSync("dataCheckCon.js", `[ { "checkJsonXmap" : "`+jsonXmapX+`" , "checkDelete" : "`+deleteFileX+`" , "checkupload" : "`+uploadFileX+`", "checkedite" : "`+ediiteFileX+`" , "lastUp" : "`+times() +"  |  "+ " الساعة " + today.getHours() + " و " +today.getMinutes()+" من الدقائق " +`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        });
        
        // END

        // ************ UPDATE DONE ! ************
        var openUrlEdite = pathEdED.replace("../", "file:///C:/Users/husei/OneDrive/المستندات/trouko-ar/")
        var openUrlEditeA = openUrlEdite + "/index.html";
        socket.emit("okUpdateData",{path: openUrlEditeA, title : namePageED})
    })

// *************** END UPDATE PAGE ****************

// check page

socket.on("reloadThisPage", e =>{
    number ++;
    if(number < 5){
      socket.emit("okReload")
    } else {
        socket.emit("okReloadPro")
        number = 0;
    }
})

socket.on("checkInfoAndDataPage", e =>{
    numberCheck ++;
    if(numberCheck < 4){
      socket.emit("okReload")
    } else {
        numberCheck = 0;
    }
})

// end

// *************** check Name ********************

socket.on("checkThat", e=>{
    if(e.path_r_n == ""){
        socket.emit("repCheckWAR","الرجاء ادخال اسم المسار واعادة كتابة أسم المقالة")
    }
    if(e.nameProject == ""){
        socket.emit("repCheckWAR"," الرجاء ادخال أسم المقالة")
        return false
    }
    if(e.path_r_n.length > 4){
    fs.readdir(e.path_r_n+e.nameProject, (err, noerr) => {
        if(err){
            socket.emit("repCheckAC","أسم المقالة صالح")
        }
        if(noerr){
            socket.emit("repCheckRE","هناك مقالة بهذا الاسم")
        }
    });
}
    
})
// *************** END CHECK ********************

// *************** INDEX PAGES ******************

socket.on("indexThisPageUrl", e=>{
    htmlDataIndex = e.data
    typePageI = e.typePageI
    socket.emit("indexThisPageUrlOK")
})

socket.on("indexThisPageUrlWIKI",e=>{
    htmlDataIndex = e.data
    typePageI = e.typePageI
    socket.emit("indexThisPageUrlWIKIOK")
})

// الاحالة

socket.on("indexThisPageUrlNext", e=>{
    htmlDataIndex = e.data
    typePageI = e.typePageI
    np = e.np
    socket.emit("indexThisPageUrlOKNext")
})

socket.on("readyToReadDataFromHtmlFileNext",e=>{
    checkIndexIsReadyNext()
})

socket.on("readyToReadDataFromHtmlFileWIKI",e=>{
    checkIndexIsReadyWIKINext()
})

// .

socket.on("infoPageIndexHtml", e=>{
   /*discription = e.disPage
   sectionOneTitleIndex = e.sectionOneTitle
   sectionTwoTitleIndex = e.sectionTwoTitle
   sectionThreeTitleIndex = e.sectionThreeTitle

   sectionOneContainerIndex = e.sectionOneContainer
   sectionTwoContainerIndex = e.sectionTwoContainer
   sectionThreeContainerIndex = e.sectionThreeContainer*/

   titleIndexPage = e.title
   containerIndexPage = e.container
   titlesIndexPage = e.titles
   dIndexPage = e.d

   socket.emit("doneReadIndexHtml")
})

socket.on("doneReadIndexHtmlOk", e=>{
    isReady = "true"
    socket.emit("doneReadIndexHtmlOkCloes")
})

socket.on("readyToReadDataFromHtmlFile",e=>{
    checkIndexIsReady();
})
// الاحتفا بالعناوين - قابلة للتحديث 
var numCall = 0;
socket.on("saveTS", e=>{
    if(e == null || e == "undefined"){
        numCall ++;
        socket.emit("saveTSNext",numCall)
        return false
    }
    var isHere = "false"
    var clearTitle = e.replace(/ /g, "_")
    numCall ++;
    fs.readFile('saveTitleTS.json',function(err,jsonmain){
        var jsonBmain = JSON.parse(jsonmain)
        fs.readFile('saveTS.json', function (err, data) {
            var json = JSON.parse(data)
            for(var i = 0;i < jsonBmain.length; i++){
                if(jsonBmain[i].titlePath.includes(clearTitle)){
                    isHere = "true"
                }
                if(jsonBmain.length - 1 == i){
                    if(isHere == "true"){
                        console.log("X[ -- PREPER FILE")
                        socket.emit("saveTSNext",numCall)
                    } if(json.includes(clearTitle)){
                        console.log("X( -- PREPER FILE")
                        socket.emit("saveTSNext",numCall)
                    } else {
                        json.push(clearTitle)
                        fs.writeFile("saveTS.json", JSON.stringify(json), function(err){
                            if (err) throw err;
                            socket.emit("saveTSNext",numCall)
                        });
                    }
                }
            }
        })
    })
    
    //socket.emit("saveTC",clearTitle)
})

socket.on("staSENDdata",e=>{
    fs.readFile('saveTS.json', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data)
        for(var u = 0; u < json.length; u++){
            if(json[u].includes("\n")){
                delete json[u]
                fs.writeFile("saveTS.json", JSON.stringify(json), function(err){
                    if (err) throw err;
                });
            } if(json[u].includes("\"")){
                delete json[u]
                fs.writeFile("saveTS.json", JSON.stringify(json), function(err){
                    if (err) throw err;
                });
            }
            if(json.length -1 == u){
                socket.emit("okSendDataTitleStep1",json)
            }
        }
    })
})

socket.on("staSENDdataTwo",e=>{
    fs.readFile('saveTitleTS.json', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data)
        var isReomeSomeThing = "false"
        for(var m = 0; m < json.length; m++){
            var path = "../"+json[m].ratingNam
            fs.readdir(path, (err) => {
                if(err){
                    // NO PROBLEM
                    return false
                }else{
                    isReomeSomeThing = "true"
                    removeThis(m)
                }
            });
            if(json.length - 1 == m){
                fs.writeFile("saveTitleTS.json", JSON.stringify(json), function(err){
                    if (err) throw err;
                    console.log("clean saveTitlesTS.json")
                });
                socket.emit("okSendDataTitleStep2",json)
            }
        }
        function removeThis(v){
            json.splice(v,1)
        }
    })
})

socket.on("deleteThisTitle",e=>{
    var lengthData;
    var jsonData;
    fs.readFile('saveTS.json', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data)
        var index = json.indexOf(e.m);
        if (index !== -1) {
          json.splice(index, 1);
        }
        jsonData = json
        lengthData = json.length
        fs.writeFile("saveTS.json", JSON.stringify(json), function(err){
            if (err) throw err;
            socket.emit("deleteThisTitleOk",{id:e.n, jsonData,lengthData})
        });
    })
})

socket.on("changeThisTi",e=>{
    fs.readFile('saveTS.json', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data)
        var index = json.indexOf(e.o);
        json[index] = e.n
        fs.writeFile("saveTS.json", JSON.stringify(json), function(err){
            if (err) throw err;
            socket.emit("changeThisTiK",{n:e.n,m:e.m})
        });
    })
})

socket.on("ratingTitle",e=>{
    var id = e.id
    var element = e.ele
    var rating = e.rating
    var isHere = "false"
    var pathUrl = "../"+rating+element

    var titleNam = element.replace(/_/g," ")

    var objTitle = {titleNam : titleNam, titlePath : element, ratingNam : rating+element}

    fs.readFile('saveTitleTS.json', function (err, data) {
        var json = JSON.parse(data)
        for(var i = 0;i < json.length; i++){
            if(json[i].titlePath.includes(element)){
                isHere = "true"
            }
            if(json.length - 1 == i){
                if(isHere == "true"){
                    okNext()
                } else {
                    fs.readdir(pathUrl, (err, noerr) => {
                        if(err){
                            json.push(objTitle)
                            fs.writeFile("saveTitleTS.json", JSON.stringify(json), function(err){
                                if (err) throw err;
                                okNext()
                            });
                        }
                        if(noerr){
                            okNext()
                        }
                    });
                }
            }
        }
    })
    function okNext(){
        var lengthData;
        var jsonData;
        fs.readFile('saveTS.json', function (err, data) {
            if (err) throw err;
            var json = JSON.parse(data)
            var index = json.indexOf(element);
            if (index !== -1) {
              json.splice(index, 1);
            }
            jsonData = json
            lengthData = json.length
            fs.writeFile("saveTS.json", JSON.stringify(json), function(err){
                if (err) throw err;
                socket.emit("ratingTitleK",{id,jsonData, lengthData})
                newDataMM()
            });
        })
    }
    
})

function newDataMM(){
    var isReomeSomeThing = "false"
    fs.readFile('saveTitleTS.json', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data)
        for(var m = 0; m < json.length; m++){
            var path = "../"+json[m].ratingNam
            fs.readdir(path, (err) => {
                if(err){
                    // NO PROBLEM
                    return false
                }else{
                    isReomeSomeThing = "true"
                    removeThis(m)
                }
            });
            if(json.length - 1 == m){
                fs.writeFile("saveTitleTS.json", JSON.stringify(json), function(err){
                    if (err) throw err;
                    console.log("clean saveTitlesTS.json")
                });
                socket.emit("saveTitlesTSOMG",json)
            }
        }
        function removeThis(v){
            json.splice(v,1)
        }
    })
}

socket.on("deleteSaveTitleTS",e=>{
    var idItem = e.thisItem
    var lengthData;
    var jsonData;
    fs.readFile('saveTitleTS.json', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data)
        for(var b=0;b < json.length;b++){
            if(json[b].titleNam.includes(idItem)){
                deleteThisTT(b)
            }
            if(json.length - 1 == b){
                jsonData = json
                lengthData = json.length
                fs.writeFile("saveTitleTS.json", JSON.stringify(json), function(err){
                    if (err) throw err;
                    socket.emit("deleteSaveTitleTSOk",{id:e.id, jsonData,lengthData})
                });
            }
        }
        function deleteThisTT(v){
            json.splice(v,1)
        }
    })
})


// take data and respons 
socket.on("IStakeThisInfoPls",e=>{
    if(dataSearchIn == null || dataSearchIn == undefined || dataSearchIn == ""){
        return false
    } else {
        socket.emit("IStakeThisInfoPlsOK", dataSearchIn)
    }
})
socket.on("takeThisInfoPls",e=>{
    dataSearchIn = e
    socket.emit("OKtakeThisInfoPls")
})

socket.on("IStakeThisInfoPlsOKY",e=>{
    dataSearchIn = null
})
// end 

// check if url has erorr
socket.on('iErorrUrl',e=>{
    if(isReady == "true"){
        return false
    } else {
        titleIndexPage = null
        containerIndexPage = []
        titlesIndexPage =  null
        dIndexPage = null
        isReady = "true"
        socket.emit("doneReadIndexHtmlOkCloes")
    }
})
//.

// search google image api url


socket.on("searchImgUrlSend",e=>{
    urlSearchImg = e
    socket.emit("searchImgUrlSendK")
})

socket.on("readyToTakeImage",e=>{
    isImagesReady()
})

socket.on("readImgLinks",e=>{
    containerImg = e.c
    socket.emit("doneReadImg")
})

function isImagesReady(){
    if(isReadyImg == "true"){
        socket.emit("readyToTakeImageK",containerImg)
        isReadyImg = "false"

    } else {
        setTimeout(function(){
            isImagesReady()
        },1000)
    }
}

socket.on("doneReadImgOk",e=>{
    isReadyImg = "true";
    socket.emit("doneReadImgCloes")
})

// .

// tanslate words

socket.on("translateThis",e=>{
    tranThisW = e
    socket.emit("translateThisK")
})

socket.on("readyToTakeTran",e=>{
    isTranReady()
})

socket.on("iTranThis",e=>{
    words = e.t
    socket.emit("iTranThisK")
})

socket.on("isTranThis",e=>{
    isReadyTran = "true"
    socket.emit("isTranThisK")
})

function isTranReady(){
    if(isReadyTran == "true"){
        socket.emit("readyToTakeTranK",words)
        isReadyTran = "false"

    } else {
        setTimeout(function(){
            isTranReady()
        },1000)
    }
}

// معالجة الكلمات 

socket.on("wordJson",e=>{
    
    var xc = fs.readFileSync('./variables_logic/varLogic.json');
    var data = JSON.parse(xc);

    socket.emit("wordJsonK",data)

})

    //  فحص الكلمات المدخلة

    socket.on("isWordJson",e=>{
        var isTrueW = "false"
        var cWord = e.eW
        var idE = e.id
        var xc = fs.readFileSync('./variables_logic/varLogic.json');
        var data = JSON.parse(xc);
        for(var e = 0; e < data.length; e++){
            if(data[e].includes(cWord)){
                isTrueW = "true"
            } 
            if(data.length -1 == e){
                if(isTrueW == "true"){
                    socket.emit("isWordJsonTrue",idE)
                } else {
                    socket.emit("isWordJsonFalse",idE)
                }
            }
        }

    })
    
    socket.on("addThisWords",e=>{
        var tOne = "true"
        var tTwo = "true"

        var wOne = e.wOne
        var wTwo = e.wTwo
        var xc = fs.readFileSync('./variables_logic/varLogic.json');
        var data = JSON.parse(xc);

        for(var e = 0; e < data.length; e++){
            if(data[e].includes(wOne)){
                tOne = "false"
                socket.emit("addThisWordsFalseOne")
            } 
            if(data.length -1 == e){
                nextFor()            
            }
        }

        function nextFor(){
            for(var ee = 0; ee < data.length; ee++){
                if(data[ee].includes(wTwo)){
                    tTwo = "false"
                    socket.emit("addThisWordsFalseTwo")
                } 
                if(data.length -1 == ee){
                    checksWords()
                }
            }
        }

        function checksWords(){
            if(tOne == "true" && tTwo == "true"){
                var newObj = [wOne , wTwo]
                data.push(newObj)
                fs.writeFile('./variables_logic/varLogic.json', JSON.stringify(data), function(err){
                    if (err) throw err;
                    socket.emit("addThisWordsSucc")
                });
            } else {
                return false
            }
        }

    })



//.


function checkIndexIsReady(){    
    if(isReady == "true"){
    
    /*socket.emit("readyToReadDataFromHtmlFileOK",{discription, sectionOneTitleIndex,sectionTwoTitleIndex,sectionThreeTitleIndex
    ,sectionOneContainerIndex,sectionTwoContainerIndex,sectionThreeContainerIndex})*/
    socket.emit("readyToReadDataFromHtmlFileOK",{title : titleIndexPage,container :  containerIndexPage,titles : titlesIndexPage, d : dIndexPage})
    
    isReady = "fales"
    discription = ""
} else {
    setTimeout(function(){
        checkIndexIsReady()
        
    },1000)
}
}

function checkIndexIsReadyNext(){    
    if(isReady == "true"){
    
    /*socket.emit("readyToReadDataFromHtmlFileOK",{discription, sectionOneTitleIndex,sectionTwoTitleIndex,sectionThreeTitleIndex
    ,sectionOneContainerIndex,sectionTwoContainerIndex,sectionThreeContainerIndex})*/
    socket.emit("readyToReadDataFromHtmlFileOKNext",{title : titleIndexPage,container :  containerIndexPage,np, d : dIndexPage})
    
    isReady = "fales"
    discription = ""
} else {
    setTimeout(function(){
        checkIndexIsReadyNext()
        
    },1000)
}
}

function checkIndexIsReadyWIKINext(){    
    if(isReady == "true"){
    
    /*socket.emit("readyToReadDataFromHtmlFileOK",{discription, sectionOneTitleIndex,sectionTwoTitleIndex,sectionThreeTitleIndex
    ,sectionOneContainerIndex,sectionTwoContainerIndex,sectionThreeContainerIndex})*/
    socket.emit("readyToReadDataFromHtmlFileOKWIKI",{title : titleIndexPage,container :  containerIndexPage,titles : titlesIndexPage, d : dIndexPage})
    isReady = "fales"
    discription = ""
} else {
    setTimeout(function(){
        checkIndexIsReadyWIKINext()
        
    },1000)
}
}

    // var all data send .
    var typePage,
    nameProject,
    pathPage,
    title,
    discription_,
    urlImg;

    var titleContainerOne ,
    titleContainerTwo,
    titleContainerThree,
    titleContainerFour,
    titleContainerFive,
    titleContainerSix;

    var containerOne_,
    containerTwo_,
    containerThree_,
    containerFour_,
    containerFive_,
    containerSix_;

    var linkOne,
    linkTwo,
    linkThree,
    linkFour,
    linkFive;


    var quoOne,
    quoTwo,
    quoThree,
    quoFour,
    quoFive,
    quoSix,
    quoOnea,
    quoTwoa,
    quoThreea,
    quoFoura,
    quoFivea,
    quoSixa,
    lin,
    sameUrl;

    

    socket.on("dataPartOneNMDT", e =>{
         typePage = e.pptt
         nameProject = e.nameProject;
         pathPage = e.pathPage;
         title = e.titleName;
         discription_ = e.discription;
         urlImg = e.urlimg;

        socket.emit("okPartOne")

    })

    socket.on("dataPartTwo",e =>{
        titleContainerOne = e.titleContainerOne;
        titleContainerTwo = e.titleContainerTwo;
        titleContainerThree = e.titleContainerThree;
        titleContainerFour = e.titleContainerFour;
        titleContainerFive = e.titleContainerFive;
        titleContainerSix = e.titleContainerSix;

        socket.emit("okPartTwo")
    })

    socket.on("dataPartThree", e =>{
        containerOne_ = e.containerOne;
        containerTwo_ = e.containerTwo;
        containerThree_ = e.containerThree;
        containerFour_ = e.containerFour;
        containerFive_ = e.containerFive;
        containerSix_ = e.containerSix;

        socket.emit("okPartThree")
    })
    socket.on("dataPartFour",e=>{
    
        linkOne = e.linkOne;
        linkTwo = e.linkTwo;
        linkThree = e.linkThree;
        linkFour = e.linkFour;
        linkFive = e.linkFive;
        quoOne = e.quoOne;
        quoTwo = e.quoTwo;
        quoThree = e.quoThree;
        quoFour = e.quoFour;
        quoFive = e.quoFive;
        quoSix = e.quoSix;
        quoOnea = e.quoOnea;
        quoTwoa = e.quoTwoa;
        quoThreea = e.quoThreea;
        quoFoura = e.quoFoura;
        quoFivea = e.quoFivea;
        quoSixa = e.quoSixa;
        lin = e.lin;
        sameUrl = e.sameUrl;

    // بناء الموقع

    var path = pathPage+nameProject;
    var discription = discription_.replace(/\n\r?/g, '<br />');
    var disPM = discription_.replace(/\n\r?/g, ' ');
    var containerOne=containerOne_.replace(/\n\r?/g, '<br />');
    var containerTwo =containerTwo_.replace(/\n\r?/g, '<br />');
    var containerThree= containerThree_.replace(/\n\r?/g, '<br />');
    var containerFour = containerFour_.replace(/\n\r?/g, '<br />');
    var containerFive = containerFive_.replace(/\n\r?/g, '<br />');
    var containerSix = containerSix_.replace(/\n\r?/g, '<br />');
    var psp = pathPage.replace("../","")

    var pathU = path.replace(".../","");
    var pathUrl ="https://www.trouko.com"+ pathU;
    
    fs.mkdir(path, (err) => {

        // ***** MAKE PATH *****

        if(err){
            console.log(" NAME "+pathPage+" IS TAKE.")
        }

        console.log("MAKE "+pathPage+" , IS DONE!")


        // ***** JAVASCRIPT PATH AND  FILES *****


        fs.mkdir(path+"/Javascript", (err) => {
            if(err){
                console.log("somethink wrong!")
            }
            console.log("make javascript path done!")
            
        });

        // JAVASCRIPT MAKE FILES 

        fs.appendFile(path+'/Javascript/script.js', addFileJs.addJsFile(quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,linkOne,linkTwo,linkThree,linkFour,linkFive,pathUrl), function (err) {
            if (err) throw err;
            console.log('JAVESCRIPT / SCRIPT FILE , DONE! ');
        });

        // ONE

        fs.appendFile(path+'/Javascript/i_fscript.js', addFileJs_t.addJsFile_two(title,urlImg,discription,pathUrl,times(),lin), function (err) {
            if (err) throw err;
            console.log('JAVESCRIPT / I_FSCRIPT FILE , DONE!');
        });

        // seconed TWO
        

        fs.appendFile(path+'/Javascript/i_tfscript.js', addFileJs_tTwo.addJsFile_two(title,urlImg,discription,pathUrl,times(),lin), function (err) {
            if (err) throw err;
            console.log('JAVESCRIPT / I_FSCRIPT FILE , DONE!');
        });

        // seconed THREE

        fs.appendFile(path+'/Javascript/i_tnfscript.js', addFileJs_tThree.addJsFile_two(title,urlImg,discription,pathUrl,times(),lin), function (err) {
            if (err) throw err;
            console.log('JAVESCRIPT / I_FSCRIPT FILE , DONE!');
        });

        // ****** HTML PATH AND FILES ******

        if(typePage == "typeOne"){
            fs.appendFile(path+'/index.html', addFileHtml.addHtmlFile(title,urlImg,discription,times(), titleContainerOne ,titleContainerTwo ,titleContainerThree ,titleContainerFour ,titleContainerFive ,titleContainerSix ,
            containerOne,containerTwo,containerThree,containerFour,containerFive,containerSix,lin,linkOne,linkTwo,linkThree,linkFour,linkFive,quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,"",sameUrl,psp,disPM), function (err) {
                if (err) throw err;
                console.log('HTML ONE / HTML , DONE!');
              });
        }
        if(typePage == "typeTwo"){
            fs.appendFile(path+'/index.html', addFileHtmlTwo.addHtmlFileTwo(title,urlImg,discription,times(), titleContainerOne ,titleContainerTwo ,titleContainerThree ,titleContainerFour ,titleContainerFive ,titleContainerSix ,
            containerOne,containerTwo,containerThree,containerFour,containerFive,containerSix,lin,linkOne,linkTwo,linkThree,linkFour,linkFive,quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,"",sameUrl,psp,disPM), function (err) {
                if (err) throw err;
                console.log('HTML TWO / HTML , DONE!');
              });
        }
        if(typePage == "typeThree"){
            fs.appendFile(path+'/index.html', addFileHtmlThree.addHtmlFileThree(title,urlImg,discription,times(), titleContainerOne ,titleContainerTwo ,titleContainerThree ,titleContainerFour ,titleContainerFive ,titleContainerSix ,
            containerOne,containerTwo,containerThree,containerFour,containerFive,containerSix,lin,linkOne,linkTwo,linkThree,linkFour,linkFive,quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,"",sameUrl,psp,disPM), function (err) {
                if (err) throw err;
                console.log('HTML THREE / HTML , DONE!');
              });
        }
        if(typePage == "typeFour"){
            fs.appendFile(path+'/index.html', addFileHtmlFour.addHtmlFileFour(title,urlImg,discription,times(), titleContainerOne ,titleContainerTwo ,titleContainerThree ,titleContainerFour ,titleContainerFive ,titleContainerSix ,
            containerOne,containerTwo,containerThree,containerFour,containerFive,containerSix,lin,linkOne,linkTwo,linkThree,linkFour,linkFive,quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoOnea,quoTwoa,quoThreea,quoFoura,quoFivea,quoSixa,"",sameUrl,psp,disPM), function (err) {
                if (err) throw err;
                console.log('HTML FOUR / HTML , DONE!');
              });
        }


    });

    // -----------> CREATE A PATH IN SITEMAP.XML 

    
    fs.readFile( '../sitemap.xml', function(err, data) {
    
    var getTime = today.getFullYear()+'-'+(today.getMonth()+01)+'-'+today.getDate();
        
    // ---> READ FILE

    var dJson = data.toString()
    var ddJson = dJson.replace('</urlset>', "")

    // --> AFTER READ LET'S MAKE IT AGEN WITH NEW VALUE
    
    var newValueXml = `<url>
        <loc>`+pathUrl+`/</loc>
        <lastmod>`+getTime+`</lastmod>
        <changefreq>weekly</changefreq>
        </url>
        </urlset>`

    var totalValue = ddJson + newValueXml

    // -> CREATE A FILE WITH NEW VALUE 'FAINL' BACK VALUE TO FILE

    fs.writeFile('../sitemap.xml', totalValue , function(err) {
        if(err) {
            return console.log(err);
        }});
    });


    // -----------> END CREATE 

    // GET
    var xc = fs.readFileSync('dataCheck.js');
    var data = JSON.parse(xc);

    var jsonXmap = data[0].checkJsonXmap
    var ediiteFile =  data[0].checkedite
    var deleteFile = data[0].checkDelete

    var randomOP = Math.floor(Math.random() * 2000910)
    var randomTP = Math.floor(Math.random() * 2000911)
    var ranrun = randomOP + randomTP;

    fs.writeFileSync("dataCheck.js", `[ { "checkJsonXmap" : "`+jsonXmap+`" , "checkDelete" : "`+deleteFile+`" , "checkupload" : "`+ranrun+"u"+`", "checkedite" : "`+ediiteFile+`" } ]` , function(err) {
        if(err) {
            return console.log(err);
        }
    })

    var z = fs.readFileSync('dataCheckCon.js');
    var datax = JSON.parse(z);

    var jsonXmapX = datax[0].checkJsonXmap
    var uploadFileX = datax[0].checkupload
    var ediiteFileX =  datax[0].checkedite
    var deleteFileX = datax[0].checkDelete


    fs.writeFileSync("dataCheckCon.js", `[ { "checkJsonXmap" : "`+jsonXmapX+`" , "checkDelete" : "`+deleteFileX+`" , "checkupload" : "`+uploadFileX+`", "checkedite" : "`+ediiteFileX+`" , "lastUp" : "`+times() +"  |  "+ " الساعة " + today.getHours() + " و " +today.getMinutes()+" من الدقائق " +`" } ]` , function(err) {
        if(err) {
            return console.log(err);
        }
    });
    

    // END

         var openUrladd = path.replace("../", "file:///C:/Users/husei/OneDrive/المستندات/trouko-ar/")
         var openUrladdA = openUrladd + "/index.html";
        socket.emit("okPartFour" ,{title : title, path:openUrladdA} )
        socket.emit("restartJX")
    })
})

function addInfoFileSunject(){
    fs.readdir('../subjects/', (err, files) => {
    files.forEach(file => {
        if(file === 'add' || file === 'container'){
            return false
        }
        addInfoFileSunjectPage(file)
    });
});
}

function addInfoFileQuestions(){
    fs.readdir('../questions/', (err, files) => {
    files.forEach(file => {
        if(file === 'add' || file === 'container'){
            return false
        }
        addInfoFileQuestionsPage(file)
    });
});
}

function addInfoFileSunjectPage(m){
    fs.readdir("../subjects/" + m, (err, files) => {
        files.forEach(file => {
            var pathFirst = "https://www.trouko.com/subjects/";
            var pathSeconed = m;
            storageCheckData(pathFirst+pathSeconed+"/"+file+"/" , file)
        });
    });
}

function addInfoFileQuestionsPage(m){
    fs.readdir("../questions/" + m, (err, files) => {
        files.forEach(file => {
            var pathFirst = "https://www.trouko.com/questions/";
            var pathSeconed = m;
            storageCheckData(pathFirst+pathSeconed+"/"+file+"/", file)
        });
    });
}

var today = new Date();
var getTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var storgData = [];
var storgXml = {};

function storageCheckData(m,n){
       var b =  n.replace(/_/g, " ")
        var c = '{\n "linkPage" : "'+m+'", \n "namePath" : "'+b+'" \n}'
        storgData.push(c)
        const storgDataFinish ="[\n"+ storgData+"\n]";
        fs.writeFileSync('../data.js', storgDataFinish , finished)
        function finished(){
            storgData = [];
        }

        var url = `<url>
        <loc>`+m+`</loc>
        <lastmod>`+getTime+`</lastmod>
        <changefreq>weekly</changefreq>
        </url>`;

        storgXml.push(url);
        var storgXmlQ = '"'+storgXml+'"'
        var storgXmlW =  storgXmlQ.replace(/,/g,"\n        ")
        var storgXmlE = storgXmlW.replace(/"/g,"")

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
        <loc> https://www.trouko.com/ </loc>
        <lastmod>`+getTime+`</lastmod>
        <changefreq>weekly</changefreq>
        </url>
        `+storgXmlE+`
        </urlset>`
       // fs.writeFileSync('../trouko-ar/sitemap.xml', sitemap , finished)
        function finished(){
            storgXml = [];
        }
        var randomOP = Math.floor(Math.random() * 2000109)
        var randomTP = Math.floor(Math.random() * 2000119)
        var ranrun = randomOP + randomTP;
        // GET
        var xc = fs.readFileSync('dataCheck.js');
        var data = JSON.parse(xc);

        var uploadFile = data[0].checkupload
        var ediiteFile =  data[0].checkedite
        var deleteFile = data[0].checkDelete

        fs.writeFileSync("dataCheck.js", `[ { "checkJsonXmap" : "`+ranrun+"JX"+`" , "checkDelete" : "`+deleteFile+`" , "checkupload" : "`+uploadFile+`", "checkedite" : "`+ediiteFile+`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        })

        var z = fs.readFileSync('dataCheckCon.js');
        var datax = JSON.parse(z);

        var uploadFileX = datax[0].checkupload
        var ediiteFileX =  datax[0].checkedite
        var deleteFileX = datax[0].checkDelete
        var jsonXmapX = datax[0].checkJsonXmap


        fs.writeFileSync("dataCheckCon.js", `[ { "checkJsonXmap" : "`+jsonXmapX+`" , "checkDelete" : "`+deleteFileX+`" , "checkupload" : "`+uploadFileX+`", "checkedite" : "`+ediiteFileX+`" , "lastUp" : "`+times() +"  |  "+ " الساعة " + today.getHours() + " و " +today.getMinutes()+" من الدقائق " +`" } ]` , function(err) {
            if(err) {
                return console.log(err);
            }
        });
        
        // END
}