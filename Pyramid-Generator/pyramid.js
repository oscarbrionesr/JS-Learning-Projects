/*This project outputs a character pyramid to the console by taking 3 inputs:

- character: the string character that will be used o shape the pyramid.
- count: how big the pyramid is going to be. The amount of rows or levels it will have.
- inverted: wether or not the pyramid will be inverted

*/

//array needed to store strings of characters for the pyramid:
const rows = [];

//input variables to shape the pyramid
const character = "@";
const count = 4;
let inverted = false;


//METHOD:

/*
This function takes in two parameters:
- rowNumber: tracks the row number the operation is being done in.
- rowCount: indicates how many lines the pyramid will have.

The function takes in rowNumber and rowCount to return a string made out of spaces on either sided of the pre-selected characters. 
The string will get bigger with spaces and characters as rowNumber increases.
*/
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }

/*
This loop assigns strings to the rows array by calling the padRow function. Each iteration the row number increases and,
based on wether or not it is inverted, it will add the string to either the begining or the end of the array. 
It then stops when it reaches the count number, which represents the size of the pyramid.
*/  
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

    

  //Finally, through a loop, each element of the array is added into a new line of a string.
  let result = ""
  
  for (const row of rows) {
    result = result + row + "\n";
  }
  
  //The string is then printed in the console.
  console.log(result);