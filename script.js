//import {makenum, nums} from "./engine.js"

var power = document.getElementById("on");
var bulb = document.getElementById("powerbulbof");

let ac = document.getElementById("allclear")
screen = document.getElementById("display");
var btns = document.querySelectorAll(".button")
let calculate = document.querySelector("#excute")
let delbtn = document.querySelector("#del")
function on(){
  let val = power.innerText
  if (val=="OF") {
    bulb.setAttribute("id", "powerbulbof");
    power.innerText = "ON"
    screen.value=""
    screen.placeholder=""
    
  }else if (val=="ON"){
    bulb.setAttribute("id", "powerbulbon");
    power.innerText = "OF"
    setTimeout(()=>{
      screen.value = "Turning on 💨...!!!"
      setTimeout(()=> {
        screen.value = "Turned on 🎉"
        setTimeout(()=>{
        screen.value = ""
          screen.placeholder= "DO SUM ;)"
        }, 500)
      }, 500)
    },500)
  }
}



function showinscreen(val){
  if (screen.placeholder == "DO SUM ;)") { 
    screen.value = screen.value + val
  }else{
    }
  }
function result(){
  if (screen.placeholder == "DO SUM ;)") {
    let a = screen.value 
    if ((a=="") || (a==null)){
      screen.value = "SYNTEX err"
      setTimeout(()=>{
        screen.value=""
      }, 1000)
    }else{
      try{
        let a = screen.value
        let b = a.replaceAll("×", "*")
        let c = b.replaceAll("÷", "/")
        screen.value = eval(c)
      }catch{
      screen.value = "SYNTEX err"
      setTimeout(()=>{
        screen.value=""
      }, 500)
      }
    }
  }
}


power.addEventListener("click", on)
btns.forEach((val) => {
  val.addEventListener("click", () =>{
    let a = val.innerText
    showinscreen(a)
  });
});
calculate.addEventListener("click", result)
delbtn.addEventListener("click", ()=>{
  let a = screen.value.length-1
  let b = screen.value.split("")
  delete b[a]
  let c = b.join("")
  screen.value=c
  
})
ac.addEventListener("click", ()=>{
  screen.value=""
})
