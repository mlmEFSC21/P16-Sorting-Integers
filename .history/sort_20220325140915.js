//hardcoded array to create logic for the sort.
const unsortedArray = [];
const sortedArray = unsortedArray.sort((a, b) => a - b);
const arrayContainer = document.getElementById("arrayContainer");
const unsortedTable = document.createElement("table");
unsortedTable.className("unsortedTable");
arrayContainer.append(unsortedTable);

const sortedTable = document.createElement("table");

let i = 0;
while (i < 5) {
    unsortedArray[i] = parseInt(prompt("Please enter an integer."));
    i++;
}

console.log(unsortedArray);
console.log(sortedArray);

// prettier-ignore
// document.getElementById("unsorted").innerText =
// `${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

// // prettier-ignore
// document.getElementById("sorted").innerText =
// `${sortedArray[0]} ${sortedArray[1]} ${sortedArray[2]} ${sortedArray[3]} ${sortedArray[4]} `;
