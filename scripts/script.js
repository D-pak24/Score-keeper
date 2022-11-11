const playerone = document.querySelector('.playerone');
const playertwo = document.querySelector('.playertwo');
const scoreInput = document.querySelector('input');
const scoreDisplay = document.getElementById('scoretowin');
const p1add = document.getElementById('playeronepointadd');
const p1minus = document.getElementById('playeronepointdecrease');
const p2add = document.getElementById('playertwopointadd');
const p2minus = document.getElementById('playertwopointdecrease');
const reset = document.getElementById('reset');
const point1 = document.querySelector('.pointone')
const point2 = document.querySelector('.pointtwo')


let winningscore;
let p1score = 0, p2score = 0;
let isNegativeNumber = false;
let isGameOver = false;

p1add.addEventListener('click', () => {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningscore) {
            playerone.style.color = '#35fa35';
            playertwo.style.color = '#d12c2c';
            point1.classList.add('unclickable');
            point2.classList.add('unclickable');
            scoreDisplay.classList.add('unclickable')
            isGameOver = true;
        }
        playerone.textContent = p1score;
    }

})
p1minus.addEventListener('click', () => {
    if (p1score === -0) {
        isNegativeNumber = true;
    } else {
        p1score -= 1;
        playerone.textContent = p1score;
    }
})
p2add.addEventListener('click', () => {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningscore) {
            playertwo.style.color = '#35fa35';
            playerone.style.color = '#d12c2c';
            point1.classList.add('unclickable');
            point2.classList.add('unclickable');
            scoreDisplay.classList.add('unclickable')
            isGameOver = true;
        }
        playertwo.textContent = p2score;
    }
})
p2minus.addEventListener('click', () => {
    if (p2score === 0) {
        isNegativeNumber = true;
    } else {
        p2score -= 1;
        playertwo.textContent = p2score;
    }

})
scoreInput.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    scoreDisplay.textContent = this.value;
    changed();

})
reset.addEventListener('click', resets);

function changed() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    playerone.textContent = 0;
    playertwo.textContent = 0;
    playerone.style.color = '#fff';
    playertwo.style.color = '#fff';

}
function resets() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    playerone.textContent = 0;
    playertwo.textContent = 0;
    scoreDisplay.value = "";
    playerone.style.color = '#fff';
    playertwo.style.color = '#fff';
    point1.classList.remove('unclickable');
    point2.classList.remove('unclickable');
    scoreDisplay.classList.remove('unclickable')

}