//hardcoded array to create logic for the sort.
const unsortedArray = [];
while (let i =0; i < 5; i++) {
    unsortedArray = parseInt(prompt("Please enter an integer."))
}
// prettier-ignore
document.getElementById("unsorted").innerText = 
`${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

const sortedArray = unsortedArray.sort(function (a, b) {
    return a - b;
});
// prettier-ignore
document.getElementById("sorted").innerText = 
`${sortedArray[0]} ${sortedArray[1]} ${sortedArray[2]} ${sortedArray[3]} ${sortedArray[4]} `;

console.log(unsortedArray);
console.log(sortedArray);
