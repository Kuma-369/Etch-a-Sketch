const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

const rowColumns = {row: 16, column:16};
const total = rowColumns.row * rowColumns.column;

let currentMode = "rainbow";

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
        // change the color in the grid container when mouse enters a div
        div.addEventListener("mouseenter", (e) => {
            if (currentMode === "rainbow"){
                let randomColor = Math.floor(Math.random()*16777215).toString(16)
                let rgbValue = "#" + randomColor
                div.style.backgroundColor = rgbValue;
            } else {
                div.style.backgroundColor = "black";
            }
    });
    }
}

// change grid size with button
function createButton(){
    const gridSize = document.querySelector(".gridSize");
    gridSize.addEventListener("click", (e) => {
        let number = prompt("Enter the number of squares per side.");

        if (number > 100) {
            alert("Please enter a number less than or equal to 100.");
        } else {
        container.replaceChildren();
        createGrid(number * number, number);
        }
    })
}

// reset the grid with reset button
function resetGrid(){
    const resetGridSize = document.querySelector(".reset");
    resetGridSize.addEventListener("click", (e) => {
        container.replaceChildren();
        createGrid(16 * 16, 16);
    });
}

function blackInk(){
    const blackInk = document.querySelector(".black");
    blackInk.addEventListener("click", (e) => {
        currentMode = "black"
    })
}

createGrid(total, rowColumns.row);
createButton();
resetGrid();
blackInk();