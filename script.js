const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

const rowColumns = {row: 16, column:16};
const total = rowColumns.row * rowColumns.column;

let currentMode = "rainbow";

// drawing method: hover or click & drag
let currentMethod = "hover";
let isDrawing = false;

window.addEventListener("mousedown", () => isDrawing = true);
window.addEventListener("mouseup", () => isDrawing = false);

function createGrid(total, squarePerSide) {
    // create grid of square divs
    for (let i = 0; i < total; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");

        // adjust the size of grid
        let percentage = 100 / squarePerSide;
        div.style.flex = `0 0 ${percentage}%`;
        div.style.height = `${percentage}%`;
        div.style.width = `${percentage}%`;

        container.appendChild(div);

        // randomly generate rgb value 
        // change the colour in the grid container when mouse enters a div
        // change colour mode to random colour or black 
        function colorDiv() {
            if (currentMode === "rainbow"){
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                let rgbValue = "#" + randomColor;
                div.style.backgroundColor = rgbValue;
            } else {
                div.style.backgroundColor = "black";
            }
        }

        // checks if click-drag rules are active
        div.addEventListener("mouseenter", () => {
            if (currentMethod === "drag" && !isDrawing) return;
            colorDiv();
        });

        // colours the square immediately on click if in drag mode
        div.addEventListener("mousedown", () => {
            if (currentMethod === "drag") {
                colorDiv();
            }
        });
    }
}

// change drawing method
function drawMethodToggle() {
    const methodBtn = document.querySelector(".clickDrag");
    if (!methodBtn) return; 

    methodBtn.addEventListener("click", () => {
        if (currentMethod === "hover") {
            currentMethod = "drag";
            methodBtn.textContent = "Hover";
        } else {
            currentMethod = "hover";
            methodBtn.textContent = "Click & Drag";
        }
    });
}

// change grid size with button
function createButton(){
    const gridSize = document.querySelector(".gridSize");
    gridSize.addEventListener("click", () => {
        let number = prompt("Enter the number of squares per side from 1 to 100.");

        if (number > 100) {
            alert("Please enter a number less than or equal to 100.");
        } else if (number > 0 && number < 101) {
        container.replaceChildren();
        createGrid(number * number, number);
        } else {
            alert("Please enter a valid integer from 1 to 100.");
        }
    })
}

// reset the grid with reset button
function resetGrid(){
    const resetGridSize = document.querySelector(".reset");
    resetGridSize.addEventListener("click", () => {
        container.replaceChildren();
        createGrid(16 * 16, 16);
    });
}

// set the colour to black
function blackInk(){
    const blackInk = document.querySelector(".black");
    blackInk.addEventListener("click", () => {
        currentMode = "black";
    })
}

// set the colour to random colour
function colorMode(){
    const colorMode = document.querySelector(".randomColor");
    colorMode.addEventListener("click", () => {
        currentMode = "rainbow";
    }
    )
}

createGrid(total, rowColumns.row);
createButton();
resetGrid();
blackInk();
colorMode();
drawMethodToggle();