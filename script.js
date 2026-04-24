import {makenum} from "./engine.js"
var oprs = document.querySelectorAll(".opr")
var power = document.getElementById("on");
var bulb = document.getElementById("powerbulbof");
screen = document.getElementById("display");
var btns = document.querySelectorAll(".button")

function on() {
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
        }, 2000)
      }, 2000)
    },1500)
  }
}



function showinscreen(val){
  if (screen.placeholder == "DO SUM ;)") {
  }else {
    let a = screen.value + val
    screen.value = a
  }
}

var counter = 1

function showinscreenopr(val){
  if (screen.placeholder == "DO SUM ;)") {
  }else{
    let a = screen.value + val
    screen.value = a
    let key = `num${counter}`
    counter += 1
    makenum(key, screen.value)
    
    
  }
}


power.addEventListener("click", on)

oprs.forEach((val) => {
  val.addEventListener("click", () =>{
    let a = val.innerText
    showinscreenopr(a)
  });
});
btns.forEach((val) => {
  val.addEventListener("click", () =>{
    let a = val.innerText
    showinscreen(a)
  });
});

