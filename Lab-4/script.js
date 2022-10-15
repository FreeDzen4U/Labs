function repaintText_1() {
    const setColor_first = document.getElementById("setColor_first");
    setColor_first.style.color = setColor();
    setColor_first.style.background = setColor();
}

function setColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + ", " + y + ", " + z + ")";
}

function repaintText_2() {
    const setColor_second = document.querySelector(".setColor_second");
    setColor_second.style.color = setColor();
    setColor_second.style.background = setColor();
}

let size = 600;

const addImage = document.getElementById('add');
const increaseImage = document.getElementById('increase');
const reduceImage = document.getElementById('reduce');
const removeImage = document.getElementById('remove');

function add() {
    document.getElementById("picture").src = "https://static5.depositphotos.com/1038117/460/i/600/depositphotos_4607170-stock-photo-river-and-summer-nature.jpg"
    document.getElementById("picture").style.display = ""

    addImage.disabled = true;
    increaseImage.disabled = false;
    reduceImage.disabled = false;
    removeImage.disabled = false;
}

function increase() {
    if (size < 800) {
        size += 20
        document.getElementById("picture").style.width = size + "px"
        reduceImage.disabled = false;
    } else {
        increaseImage.disabled = true;
        alert("Ви досягли максимального значення зображення!")
    }
}

function reduce() {
    if (size > 400) {
        size -= 20
        document.getElementById("picture").style.width = size + "px"
        increaseImage.disabled = false;
    } else {
        reduceImage.disabled = true;
        alert("Ви досягли мінімального значення зображення!")
    }
}

function remove() {
    document.getElementById("picture").style.display = "none"

    addImage.disabled = false;
    increaseImage.disabled = true;
    reduceImage.disabled = true;
    removeImage.disabled = true;
}