let CabezaBtn = document.getElementById("cabeza-btn");
let OrejaIzqBtn = document.getElementById("orejaIzq-btn");
let OrejaDerBtn = document.getElementById('orejaDer-btn');
let OjoIzqBtn = document.getElementById('ojoIzq-btn');
let OjoDerBtn = document.getElementById('ojoDer-btn');
let PupilaIzqBtn = document.getElementById('pupilaIzq-btn');
let PupilaDerBtn = document.getElementById('pupilaDer-btn');
let HocicoBtn = document.getElementById('hocico-btn');
let NarizBtn = document.getElementById('nariz-btn');
let LenguaBtn = document.getElementById('lengua-btn');

let colors = [
    'brown',
    'black',
    'white',
    'green',
    'grey',
    'red',
    'pink',
    'orenge',
    'purple',
    'blue',
    'yellow',
];


let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;
let counter8 = 0;
let counter9 = 0;
let counter10 = 0;

function setCounterValue(counter) {
    return counter < colors.length - 1 ? counter + 1
    : 0;

}

CabezaBtn.addEventListener("click", () => {
    document.querySelectorAll(".cabeza").forEach
    ((item) => {
        item.style.backgroundColor = colors[counter1];
        counter1 = setCounterValue(counter1);
    });
});


OrejaIzqBtn.addEventListener("click", () => {
    document.querySelector(".orejaIzq").style.backgroundColor = colors[counter2];
    counter2 = setCounterValue(counter2);
});

OrejaDerBtn.addEventListener("click", () => {
    document.querySelector(".orejaDer").style.backgroundColor = colors[counter3];
    counter3 = setCounterValue(counter3);
});

PupilaIzqBtn.addEventListener("click", () => {
    document.querySelector(".pupilaIzq").style.backgroundColor = colors[counter4];
    counter4 = setCounterValue(counter4);

});

PupilaDerBtn.addEventListener("click", () => {
    document.querySelector(".pupilaDer").style.backgroundColor = colors[counter5];
    counter5 = setCounterValue(counter5);
});

OjoIzqBtn.addEventListener("click", () => {
    document.querySelector(".ojoIzq").style.backgroundColor = colors[counter6];
    counter6 = setCounterValue(counter6);
});

OjoDerBtn.addEventListener("click", () => {
    document.querySelector(".ojoDer").style.backgroundColor = colors[counter7];
    counter7 = setCounterValue(counter7);
});

HocicoBtn.addEventListener("click", () => {
    document.querySelector(".hocico").style.backgroundColor = colors[counter8];
    counter8 = setCounterValue(counter8);
});

NarizBtn.addEventListener("click", () => {
    document.querySelector(".nariz").style.backgroundColor = colors[counter9];
    counter9 = setCounterValue(counter9);
});

LenguaBtn.addEventListener("click", () => {
    document.querySelector(".lengua").style.backgroundColor = colors[counter10];
    counter10 = setCounterValue(counter10);
});