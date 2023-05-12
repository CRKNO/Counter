const counterSpan = document.querySelector(".counter");
const buttons = document.querySelectorAll("button"); //array of buttons;

let counter = 0;

buttons.forEach(button =>{ 
    button.addEventListener("click", ()=>{ //add eventListener to all buttons

        if(button.innerText == "DECREASE"){
            counter--;
        }
        else if(button.innerText == "RESET"){
            counter = 0;
        }
        else{
            counter++;
        }
        counterSpan.innerHTML = counter;
        counterSpan.style.color = counterColor();
    })
})

function counterColor(){
    let color;
    if(counter < 0 ){
        color = "red";
    }
    else if(counter > 0){
        color = "green";
    }
    else{
        color = "whitesmoke";
    }
    return color;
}