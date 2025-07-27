let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


let turnO = true;

let winpattern = [
  // Horizontal wins
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Vertical wins
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal wins
  [0, 4, 8],
  [2, 4, 6]
];


boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("Clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const checkwinner = ()=>{
    for(let pattern of winpattern){
        

        let pos1val  = boxes[pattern[0]].innerText;
        let pos2val  = boxes[pattern[1]].innerText;
        let pos3val  = boxes[pattern[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner" , pos1val);
                showWinner(pos1val);
            }
        }
    }
}

const showWinner = (winner)=>{
    msgcontainer.style.display="block"
    msg.innerText= `Congratulations , ${winner} is the winner!`

    boxes.forEach((box)=>{
        box.disabled=true; // Disable all boxes after a win
    });
}

resetbutton.addEventListener("click", ()=>{
    msgcontainer.style.display="none"

    boxes.forEach((box)=>{
        
        box.innerText="";
        box.disabled=false; // Enable all boxes for a new game
        
    })
})