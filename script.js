const counterSpan = document.querySelector(".counter");
const buttons = document.querySelectorAll("button"); //array of buttons;

let counter = 0;

buttons.forEach(button =>{ 
    button.addEventListener("click", ()=>{ //add eventListener to all buttons


        if(button.textContent == "DECREASE"){
            counter--;
        }
        else if(button.textContent == "RESET"){
            counter = 0;
        }
        else{
            counter++;
        }
        counterSpan.textContent = counter;
        counterSpan.classList.add(counterColor());

        if(counter == 0 || counter == 1 || counter == -1){

            for(clss of counterSpan.classList){
                 if(clss != counterColor() && clss != "counter"){
                    counterSpan.classList.remove(clss);
                }
            }
        }
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
        color = "white";
    }
    return color;
}