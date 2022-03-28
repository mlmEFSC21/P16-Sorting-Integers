const unsortedArray = [];
const form = document.querySelector("#inputForm");
const inputNum = document.querySelector("#numInp");
form.addEventListener("submit", getNumber);
function getNumber(e) {
    e.preventDefault();
    unsortedArray.push(inputNum.value);
    createUnsortedTable();
    const sortedArray = unsortedArray.sort((a, b) => a - b);
    createSortedTable();
    inputNum.value = "";
}

const arrayContainer = document.querySelector("#arrayContainer");
//create the unsorted table
const unsortedTable = document.createElement("table");
unsortedTable.setAttribute("class", "unsortedTable");
unsortedTable.setAttribute("id", "unsortedTable");
//create the sorted table
const sortedTable = document.createElement("table");
sortedTable.setAttribute("class", "sortedTable");
sortedTable.setAttribute("id", "sortedTable");
function createUnsortedTable() {
    //fill the table with other elements using template literals
    unsortedTable.innerHTML = `
<caption>
Unsorted Array Table
</caption>
<thead>
<tr class="theadRow">
<th>Index 0</th>
<th>Index 1</th>
<th>Index 2</th>
<th>Index 3</th>
<th>Index 4</th>
</tr>
</thead>
<tbody>
<tr>
<td>${unsortedArray[0]}</td>
<td>${unsortedArray[1]}</td>
<td>${unsortedArray[2]}</td>
<td>${unsortedArray[3]}</td>
<td>${unsortedArray[4]}</td>
</tr>
</tbody>`;
    arrayContainer.append(unsortedTable);
}
//arrow function to sort the unsorted array.
// const sortedArray = unsortedArray.sort((a, b) => a - b);
function createSortedTable() {
    //fill the table with other elements using template literals
    sortedTable.innerHTML = `
<caption>
Sorted Array Table
</caption>
<thead>
<th>Index 0</th>
<th>Index 1</th>
<th>Index 2</th>
<th>Index 3</th>
<th>Index 4</th>
</thead>
<tbody>
<tr>
<td>${sortedArray[0]}</td>
<td>${sortedArray[1]}</td>
<td>${sortedArray[2]}</td>
<td>${sortedArray[3]}</td>
<td>${sortedArray[4]}</td>
</tr>
</tbody>`;

    arrayContainer.append(sortedTable);
}
console.log(unsortedArray);
console.log(sortedArray);

// prettier-ignore;
// document.getElementById(
//     "unsorted"
// ).innerText = `${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

// // prettier-ignore
// document.getElementById("sorted").innerText =
// `${sortedArray[0]} ${sortedArray[1]} ${sortedArray[2]} ${sortedArray[3]} ${sortedArray[4]} `;
