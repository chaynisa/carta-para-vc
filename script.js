const pages = document.querySelectorAll(".page");
const button = document.getElementById("next");

let current = 0;

// Mostra apenas a primeira mensagem
pages.forEach((page, index) => {
    page.style.display = index === 0 ? "block" : "none";
});

button.addEventListener("click", () => {

    pages[current].style.display = "none";

    current++;

    if (current >= pages.length) {
        button.style.display = "none";
        return;
    }

    pages[current].style.display = "block";

    if (current === pages.length - 1) {
        button.style.display = "none";
    }

});

// =======================
// CORAÇÕES CAINDO
// =======================

function criarCoracao() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = (10 + Math.random() * 10) + "px";
    heart.style.color = "#c51f3a";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = -20;
    let x = parseFloat(heart.style.left);
    const velocidade = 1 + Math.random() * 2;

    const anim = setInterval(() => {

        y += velocidade;
        x += Math.sin(y / 40);

        heart.style.top = y + "px";
        heart.style.left = x + "px";

        if (y > window.innerHeight + 20) {
            clearInterval(anim);
            heart.remove();
        }

    }, 16);

}

setInterval(criarCoracao, 400);

// =======================
// FOTO BALANÇANDO
// =======================

const photo = document.getElementById("photo");

let angle = -3;
let dir = 1;

setInterval(() => {

    angle += dir * 0.08;

    if (angle > -1) dir = -1;
    if (angle < -5) dir = 1;

    photo.style.transform = `rotate(${angle}deg)`;

}, 30);