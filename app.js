let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");

const msg= document.querySelector("#msg");

//get user and comp score by its id from html

const userscr = document.querySelector("#user-score");
const comscr = document.querySelector("#comp-score");

// generate computer choices
const getcompchs=()=>{
const option=["rock","paper","scissors"];

const indx= Math.floor(Math.random()*3);
return option[indx];
};

// draw function 
const draw= ()=>{
//console.log("The Game was draw");
msg.innerText= "Game was draw. Play again";
msg.style.backgroundColor = "#021322";

};


//it will run when else block is executed in main function
const winner= (userwon,userchoos,comp) =>{
    if(userwon){
        //increment user score as user wins the game
        userscore++;
    console.log("you win");
    userscr.innerText = userscore;
    msg.innerText= `You Win! ${userchoos} beats ${comp}`;
    msg.style.backgroundColor = "green";
}
else{
    compscore++;
    console.log("you loose");
    comscr.innerText= compscore;
    msg.innerText= `You Loose ${comp} beats ${userchoos}`;
    msg.style.backgroundColor = "red";

}
};

//declaration of main working function
const game=(userchoos)=>{
 console.log("user choice:",userchoos );
 // computer choice
 const comp = getcompchs();
 console.log("computer chooses:", comp);
 
 
 // if user choice is equals to computer choice
 if(userchoos===comp){
   draw();
 }
 //this block will execute when both chooses the different option
 else{
        let userwon= true;
        if(userchoos==="rock"){
            //if user chooses rock it means computer will choose paper and scissor here we are using ternary operator for this
            userwon= comp === "paper"? false : true;
        } 
        else if ( userchoos="paper"){
            // rock,scissors
            userwon = comp === "scissors"? false : true;
        }
        else {
            //paper,rock
            userwon = comp === "rock"? false : true;
    
        }
        winner(userwon,userchoos,comp);
    }
};

//main function
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoos= choice.getAttribute("id");
        game(userchoos);
    });
});