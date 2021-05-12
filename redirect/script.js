let content = document.querySelector('h1');
var changeContent = 0;

setInterval(() => {

    
    if(changeContent<=5){
        content.innerHTML = changeContent;
        changeContent++;
    }else{
        content.innerText = "Redirecting you to EmmjoyTechies";
    }
}, 1000)