    let timeLeft = 59;
    let h1 = document.createElement('h1');
    document.body.appendChild(h1)
    let timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft === -1) {
            clearTimeout(timerId);
            alert("Game Over")
        } else {
            h1.innerText = timeLeft + ' Sec';
            timeLeft--;
        }
    }
    for (let i = 0;i < 10;i++) {
        let div = document.createElement("DIV");
        let image = document.createElement("IMG");
        document.body.appendChild(div);
        div.appendChild(image);
        div.setAttribute("class", "dawn");
        image.setAttribute('src',"image/unnamed.png");
        Math.floor(Math.random()*10)
    }


