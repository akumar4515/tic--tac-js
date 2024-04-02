let play = document.querySelectorAll('.btn1');
let ticTac = document.querySelectorAll('.ticBtn'); 

let msg=document.getElementById('msg');

let turn = true;

let winPattern=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]
];

ticTac.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn===true){
            box.innerText='0';
            turn=false;
        }
        else{
            box.innerText='x';
            turn=true;

        }
        box.disabled=true;
        checkWinner();

    });
});

const checkWinner=()=>{
    for(pattern of winPattern){
        const val1=ticTac[pattern[0]].innerText;
        const val2=ticTac[pattern[1]].innerText;
        const val3=ticTac[pattern[2]].innerText;


if(val1!=''&&val2!=''&&val3!=''){
    if(val1===val2&&val2===val3){
        msg.innerText=`winner is ${val1}`;
      ticTac.forEach((box)=>{
        box.disabled=true;
      })
    }
}
      
    }

    
}

play.forEach((xxx)=>{
    xxx.addEventListener('click',()=>{
        ticTac.forEach((box)=>{
            box.disabled=false;
            msg.innerText='';
            box.innerText='';
            turn=true;
         })


    })
    
 
})









