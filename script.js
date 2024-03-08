

var lid_one = document.querySelector(".one-2");
var letter = document.querySelector(".letter");
var lid_two = document.querySelector(".two-2");
var button_open = document.querySelector(".open");
var button_next = document.querySelector(".next");

button_open.onclick = function () {
    lid_one.classList.toggle("active-1");
    lid_two.classList.toggle("active-2");
    letter.classList.toggle("active-letter");
    button_open.classList.add("run");
    button_next.classList.add("run");
}

button_next.onclick = function () {
    button_next.classList.add("run");
}



