//when you mouseover random letter displayed
//for each one

let inputLetter = document.querySelectorAll('.inputLetter');

let circles = document.querySelectorAll('.circle')
circles.forEach(add => {
    add.addEventListener('mouseover', letter)
});

let alphabet =
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function letter() {


    let newLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

    this.innerHTML = newLetter;
}

