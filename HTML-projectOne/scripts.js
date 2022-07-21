const card1= document.querySelector('.card1');
const card2 =  document.querySelector('.card2');
const logOrSign = document.querySelector('.logOrSign');
const login = document.querySelector('.login');
const base = document.querySelector('.base');
const headKoala = document.querySelector('.headKoala');

function removeCards() {
  card1.remove();
  card2.remove();
}

function openLogIn() {
    removeCards();
    base.appendChild(login);
    login.style.visibility= 'visible';
    base.appendChild(headKoala);
    headKoala.style.visibility='visible';
}

function openSignUp() {
    removeCards();
}

var ball = document.getElementsByClassName("ball");
document.onmousemove = function() {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 70 / window.innerHeight + "%";

    for (var i = 0; i < 2; i++) {
        ball[i].style.left = x / 2;
        ball[i].style.top = y / 2;
        ball[i].style.transform = "translate(" + x + "," + y + ")";
    }
}
