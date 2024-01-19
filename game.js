let box=document.querySelector(".box")
let obj=document.querySelector(".box1")
let d= 1300;

let score=0;
window.addEventListener("keydown", (e) => {
  if(e.key==" "){
    console.log(`Key "${e.key}" pressed [event: keydown]`);
    box.classList.add(`animate`);
    setTimeout(()=>{
      
      box.classList.remove(`animate`)
    },1250)
    

  }
  
  })
  
  async function c(){
let ox = parseInt(window.getComputedStyle(obj).getPropertyValue("left"));

let dy=parseInt(window.getComputedStyle(box).getPropertyValue("top"));

let dx=parseInt(window.getComputedStyle(box).getPropertyValue("left"));

let x=ox-dx
if(x<150 && x>-50 && dy>200){
 setTimeout(()=>{
  obj.remove()
  document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>Your score: ${score}</h1>
       </div>
       <div class="main">
        <a href="game.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
  },100)
}
document.querySelector(".container2").innerHTML=`
<h1>Your score: ${score}</h1>`
  }
  setInterval(()=>{
    c();
    score++;
  },100)
  setInterval(()=>{
    obj.style.left= d+"px"
    if(score<100)
    {
    d=d-5
    }
    else if(score<200 && score>100){
      d=d-6
    }
    else if(score<400 && score>200){
      d=d-7
    }
       else if(score<1000 && score>400){
      d=d-8
    }
    else if(score>1000){
      d=d-9
    }
    if(d<100){
       d= 900+700*Math.random();
    }
  },10)
 
   