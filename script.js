const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

const rowColumns = {row: 16, column:16};
const total = rowColumns.row * rowColumns.column;

function createGrid(total, squarePerSide) {
    // create grid of square divs
    for (let i = 0; i < total; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");

        // adjust the size of grid
        let percentage = 100 / squarePerSide;
        div.style.flex = `0 0 ${percentage}%`;
        div.style.height = `${percentage}%`;

        container.appendChild(div);

        // randomly generate rgb value 
        let randomColor = Math.floor(Math.random()*16777215).toString(16)
        let rgbValue = "#" + randomColor

        // change the color in the grid container when mouse enters a div
        div.addEventListener("mouseenter", (e) => {
        div.style.backgroundColor = rgbValue;
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
        createGrid(number * number);
        }
    })
}

createGrid(total, rowColumns.row);
createButton();