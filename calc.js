const Btn = document.getElementsByClassName("btn");
let display = document.querySelector('.display');
let oparatobBtns = document.querySelectorAll('.oparatorBtn');
let result =[]
for(let i = 0; i < Btn.length; i++){
Btn[i].addEventListener("click", myvalue)
}
function myvalue(e) {
let content = e.target.innerHTML;
display.value+=content
}
for(i=0; i<oparatobBtns.length; i++){
    oparatobBtns[i].addEventListener("click", oparate)
}
function oparate(e) {
    if(e.target.innerHTML === "AC"){
    result.length = 0
    display.value=""
    }
    else if ( e.target.innerHTML ==="Del"){
     if(display.value){
       let popedArr =display.value.toString().slice(0,-1)
       display.value=popedArr
     }
     else{
        console.log('none')
     }
    }
    else if ( e.target.innerHTML === "="){
    result.push(eval(display.value))
    if(display.value.length>0){
        display.value=''
        display.value=result
    }
    else{
        display.value=result
    }
   
   
}

}