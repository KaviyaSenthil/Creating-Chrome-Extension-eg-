function click(e) {

    chrome.tabs.executeScript(null, 
    
    {code:"document.body.style.backgroundImage='url("+images[e.target.id]  
    +"'"}); //change the color to the color clicked
    
    window.close(); //close the popup window
    }
    document.addEventListener ('DOMContentLoaded', function () {//1/1. when don is completely loaded
    
    var divs = document.querySelectorAll('div');//2. find all divs for (var i = 0; i< divs.length; 1++) { //3. loop through the divs
    for (var i = 0;i< divs.length; i++) {

    divs[i].addEventListener('click', click); // 1/4. wait for a click
     }
    });
    
    
    
    
    
     var images = {
    
     prane:'https://avatars0.githubusercontent.com/u/42145604?s=400&u=db996db262bb23577b38605480f473a108aa7599&v=4',
    
    
    
     kavi: 'https://avatars1.githubusercontent.com/u/48328752?s=400&u=778da72be1b09abd3e176f0a1ec98f1afae5e3a8&v=4'

     }
    