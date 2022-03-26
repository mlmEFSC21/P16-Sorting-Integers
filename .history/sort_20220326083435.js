const unsortedArray = [];
//arrow function to sort the unsorted array.
const sortedArray = unsortedArray.sort((a, b) => a - b);
const arrayContainer = document.querySelector("#arrayContainer");
//create the unsorted table
const unsortedTable = document.createElement("table");
unsortedTable.setAttribute("class", "unsortedTable");
unsortedTable.setAttribute("id", "unsortedTable");
//create the sorted table
const sortedTable = document.createElement("table");
sortedTable.setAttribute("class", "sortedTable");
sortedTable.setAttribute("id", "sortedTable");
//fill the table with other elements
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
<td>2</td>
<td>5</td>
<td>1</td>
<td>4</td>
<td>3</td>
</tr>
</tbody>`;

arrayContainer.append(unsortedTable);

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
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
</tr>
</tbody>`;

arrayContainer.append(sortedTable);
// const unsortedTable = document.createElement("table");
// unsortedTable.setAttribute("class", "unsortedTable");
// arrayContainer.append(unsortedTable);
// const unsortedCaption = document.createElement("caption");
// unsortedCaption.innerText = "Unsorted Array Table";
// unsortedTable.append(unsortedCaption);
// const thead = document.createElement("thead");
// unsortedTable.append(thead);
// const unsortHeadRow = document.createElement("tr");
// thead.append(unsortHeadRow);

// const sortedTable = document.createElement("table");
// sortedTable.setAttribute("class", "sortedTable");
// arrayContainer.append(sortedTable);
// const sortedCaption = document.createElement("caption");
// sortedCaption.innerText = "Sorted Array Table";
// sortedTable.append(sortedCaption);

// let i = 0;
// while (i < 5) {
//     unsortedArray[i] = parseInt(prompt("Please enter an integer."));
//     i++;
// }

console.log(unsortedArray);
console.log(sortedArray);

// prettier-ignore
// document.getElementById("unsorted").innerText =
// `${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

// // prettier-ignore
// document.getElementById("sorted").innerText =
// `${sortedArray[0]} ${sortedArray[1]} ${sortedArray[2]} ${sortedArray[3]} ${sortedArray[4]} `;
