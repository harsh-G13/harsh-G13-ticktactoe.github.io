console.log("Welcome to tick tack toe")
let turn = "X"
let filled =0;
let gameOver = false;
const msg = document.querySelector('.winning-message')
const changeTurn = ()=>{
    return turn ==="X"?turn="O":turn ="X"
}
// Function for checking win
const checkWin = ()=>{
    let boxes = document.querySelectorAll(".cell")

    const cases = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]
    // console.log(cases[0])
    for(let c of cases)
    {
       if((boxes[c[0]].innerText===boxes[c[1]].innerText &&boxes[c[1]].innerText===boxes[c[2]].innerText) && boxes[c[0]].innerText!=="")
       {
         
        gameOver=true;
        if(gameOver)
        {

            document.querySelector('.winText').innerText= boxes[c[0]].innerText+ " Won!"
            if(msg.style.display==="")
            {
                msg.style.display= "flex"
            }
            // console.log(msg.style)
            // console.dir(msg)
            // msg.style.display= "flex"

        }
       }
    }
    if(gameOver==false && filled ==9)
    {
        document.querySelector('.winText').innerText= "DRAW"
        if(msg.style.display==="")
        {
            msg.style.display= "flex"
        }
    }
}
let flag = false;
let boxes = document.querySelectorAll(".cell")
boxes.forEach(element=> {
    // let boxText  = document.querySelector('')


     element.addEventListener('mouseover',()=>{
    if(element.innerText===""){ element.innerText=turn
     flag=true;}}
     )
     element.addEventListener('mouseleave',()=>{
    if(flag) {element.innerText="";flag=false}})

  element.addEventListener('click',()=>{
    if(element.innerText==="")element.innerText= turn;
    flag=false;
    changeTurn();
   filled++;
    checkWin();
    })

})
const btn = document.querySelector('.restartButton')
btn.addEventListener('click',()=>{
msg.style.display="";
boxes.forEach(element=>{
    element.innerText="";
    filled=0;
    gameOver=false
})
})
// boxes.forEach(element=>{
//     element.addEventListener('click',()=>{
//         console.log("harshs")
//     })
