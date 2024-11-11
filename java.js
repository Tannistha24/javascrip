let boxes =document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset");
let newgamebtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],   
];
const resetgame=()=>{
turn0=true;
enabledboxes();
msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked") ;
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disabledboxes=()=>{
    for(let box of boxes)
        box.disabled=true;
};

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // Clear each box
    }
};

const showwinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msg.classList.add("big-bold-text");
    msgContainer.classList.remove("hide");
    disabledboxes();
};
const checkwinner=()=>{
    for (let pattern of winpatterns)
    {
    let post1val= boxes[pattern[0]].innerText;
    let post2val= boxes[pattern[1]].innerText; 
    let post3val= boxes[pattern[2]].innerText;

        if(post1val!=""&&post2val!=""&&post3val!="")
        {
            if(post1val===post2val&&post2val===post3val){
                console.log("winner",post1val)
                showwinner(post1val);
            }
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);