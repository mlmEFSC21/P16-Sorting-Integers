//hardcoded array to create logic for the sort.
const unsortedArray = [1, 2, 3, 4, 5];
// prettier-ignore
document.getElementById("unsorted").innerText = 
`${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

const sortedArray = unsortedArray.sort(function (a, b) {
    return a - b;
});
// prettier-ignore
document.getElementById("sorted").innerText = 
`${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

console.log(unsortedArray);
console.log(sortedArray);
