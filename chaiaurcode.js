const randomColor = function(){
    const hex="0123456789ABCDEF"
    let color ='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalid
const startchanging = function(){
    if(!intervalid){
        intervalid =  setInterval(changebgcolor,1000)

    }
    function changebgcolor(){
        document.body.style.backgroundColor = randomColor()

    }
}
const stopchanging = function(){
 clearInterval(intervalid)
 intervalid = null;
}
document.querySelector("#start").addEventListener('click',startchanging);
document.querySelector("#stop").addEventListener('click',stopchanging);

