var socket = io('http://localhost:3000/');

var url = document.getElementById("getUrl").innerHTML
var containerImg = []

window.onload = function(){
    var inputGoogle = document.getElementById("gsc-i-id1")
    
    inputGoogle.value = url
    document.querySelector('.gsc-search-button .gsc-search-button-v2').click();
    setTimeout(function(){
        document.querySelectorAll('.gsc-tabsArea .gsc-tabHeader')[1].click();
        setTimeout(function(){
            getPhotosLink()
        },500)
        
    },1000)

}

function getPhotosLink(){
    try{
        var linkePhotoUrl = document.querySelectorAll('.gs-image-thumbnail-box .gs-image-box .gs-image img')
        for(var i =0; i < 5; i++){
            containerImg.push(linkePhotoUrl[i].src)
        }
        socket.emit("readImgLinks",{c : containerImg})
    } catch(err){
        setTimeout(function(){
            getPhotosLink()
        },500)
    }
    
}

socket.on("doneReadImg",e=>{
    socket.emit("doneReadImgOk")
})
socket.on("doneReadImgCloes",e=>{
    window.close();
}) 