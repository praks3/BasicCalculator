let screen = document.getElementById('inputData');
buttons = document.querySelectorAll('button');
let screenValue="";
for (item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
if (buttonText == '*') {
    screenValue += buttonText;
    screen.value = screenValue;
}
else if (buttonText == 'clr') {
    screenValue = "";
    screen.value = screenValue;
}
else if (buttonText == '=') {
    screen.value = eval(screenValue);
}
else {
    screenValue += buttonText;
    screen.value = screenValue;
}

    })
}

