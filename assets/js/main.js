let countButton = 0;
let button = document.getElementById("buttonS");
let counter = () =>{
    countButton ++ ;
    console.log(countButton);
    if(countButton % 2 !== 0){
        button.style.backgroundColor="black";
        button.style.color="white";
    }
    else{
        button.style.backgroundColor="white";
        button.style.color="black";
    }
}



/* ========== hamburger menu ========== */

let countMenu = 0;
let menu = document.getElementById("hamburgerMenu");

let menucounter = () =>{
    countMenu ++;
    console.log(countMenu);
    if(countMenu % 2 !== 0){
        menu.style.display="block";
    }
    else{
        menu.style.display="none";
    }
}