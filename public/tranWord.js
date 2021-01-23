var socket = io('http://localhost:3000/');


window.onload = function(){
    gettra()
}

function gettra(){
    try {
        var thisWord = document.querySelectorAll("#thisWord font font")[0].innerHTML
        if(thisWord != undefined){
            socket.emit("iTranThis",{t : thisWord})
        } else {
            setTimeout(function(){
                gettra()
            },500)
        }
        
    } catch(err){
        setTimeout(function(){
            gettra()
        },500)
    }
}

socket.on("iTranThisK",e=>{
    socket.emit("isTranThis")
})

socket.on("isTranThisK",e=>{
    window.close();
})