function runFunction(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var t=setInterval(runFunction,1000);