const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

// create grid of square divs
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);

    // randomly generate rgb value 
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    let rgbValue = "#" + randomColor

    // change the color in the grid container when mouse enters a div
    div.addEventListener("mouseenter", (e) => {
    div.style.backgroundColor = rgbValue;
});
}