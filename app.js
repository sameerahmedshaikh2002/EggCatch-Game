var score = 0;
var drop = 0;
var h1score = document.createElement('h1');
h1score.innerText = 'Score ' +score;
document.body.appendChild(h1score);
var h1drop = document.createElement('h1');
h1drop.innerText = 'Drop ' +drop;
document.body.appendChild(h1drop);
let basket = document.createElement("IMG");
let time = 0;
let h1 = document.createElement('h1');
document.body.appendChild(h1)
let timerId = setInterval(countdown, 1000);
function countdown() {
    if (time === 1000) {
        clearTimeout(timerId);
        alert("Game Over")
    } else {
        h1.innerText = time + ' Sec';
        ++time;
    }
}

function eggDrop() {
    let top = 0;
    let left = Math.random() * 1000;
    let div = document.createElement("DIV");
    let egg = document.createElement("IMG");
    document.body.appendChild(div);
    div.appendChild(egg);
    egg.setAttribute('src', "image/unnamed.png");
    egg.style.height = 70 + "px"
    egg.style.width = 40 + "px"
    let time = setInterval(function () {
        egg.style.position = 'absolute';
        egg.style.left = left + 'px';
        egg.style.top = ++top + 'px';
    if (top === 530) {
        let eggLeft = parseInt(egg.style.left);
        let basketLeft = parseInt(basket.style.left);
        console.log('basket',basketLeft);
        console.log('egg',eggLeft);
        if (eggLeft+20 > basketLeft && eggLeft < basketLeft+100) {
           h1score.innerHTML = 'Score ' + ++score
            console.log("Run")
        } else {
            h1drop.innerText = 'Drop  ' + ++drop;
            if (drop >= 10) {
                alert('Game Over');
                window.location.reload();
            }

        }



            div.removeChild(egg)
        }
    }, 1);



    }
setInterval(eggDrop, 1500);
let div2 = document.createElement("DIV");
document.body.appendChild(div2);
div2.appendChild(basket);
basket.setAttribute('src', "image/zfhAMa.png");
basket.style.height = 80 + "px"
basket.style.width = 100 + "px"
basket.style.position = "absolute"
basket.style.bottom = 10 + "px"
let a = 0
function baskets(e) {

    if (e.keyCode === 39) {

        if (a < screen.width-120) {
            a = a + 60;
        }
        basket.style.left = a + "px"
    }
    if (e.keyCode === 37) {
        if (a > 0) {
            a = a - 60;
            basket.style.left = a + "px";
        }
    }

}



