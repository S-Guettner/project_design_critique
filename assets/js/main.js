let count = 0;
let button = document.getElementById("button");
let counter = () =>{
    count ++ ;
    console.log(count);
    if(count % 2 !== 0){
        button.style.backgroundColor="black";
        button.style.color="white";
    }
    else{
        button.style.backgroundColor="white";
        button.style.color="black";
    }
}




