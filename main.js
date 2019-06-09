$('#menu').on('click', function () {
    $('.links a').fadeToggle();
});

$('.playbtn').on('click', function () {
    $('.popup-container').fadeToggle('slow');
});

$('#closebtn').on('click', function () {
    $('.popup-container').css('display', 'none');
});

const close = document.querySelector('#modalClose');
const popup = document.querySelector('.popup-container');

close.addEventListener("click", e => {
    if (e.target.id === "modalClose") {
        popup.style.display = "none";
    }
    console.log(e);
});

const more = document.querySelector("#forward");
const less = document.querySelector("#backwards");

let parts = ['.box', '.box.two'];
let current = 0;

function changeDiv(index) {
    const newDiv = document.querySelector(parts[index]);
    const oldDiv = document.querySelector(parts[current]);
    newDiv.style.left = "440px";
    oldDiv.style.left = "0px";
    current = index;
}

// Listeners
more.addEventListener("click", () => {
    let max = parts.length - 1;
    let newIndex = current + 1;
    if (newIndex > max) { newIndex = 0 };
    changeDiv(newIndex);
});

less.addEventListener("click", () => {
    let min = 0;
    let newIndex = current - 1;
    if (newIndex < min) { newIndex = parts.length - 1 };
    changeDiv(newIndex);
});