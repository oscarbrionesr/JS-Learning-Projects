const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romNums = [
  {
    value: 1000,
    romanSymbol: 'M'
  },
  {
    value: 900,
    romanSymbol: 'CM'
  },
  {
    value: 500,
    romanSymbol: 'D'
  },
  {
    value: 400,
    romanSymbol: 'CD'
  },
  {
    value: 100,
    romanSymbol: 'C'
  },
  {
    value: 90,
    romanSymbol: 'XC'
  },
  {
    value: 50,
    romanSymbol: 'L'
  },
  {
    value: 40,
    romanSymbol: 'XL'
  },
  {
    value: 10,
    romanSymbol: 'X'
  },
  {
    value: 9,
    romanSymbol: 'IX'
  },
  {
    value: 5,
    romanSymbol: 'V'
  },
  {
    value: 4,
    romanSymbol: 'IV'
  },
  {
    value: 1,
    romanSymbol: 'I'
  },
];

const toRoman = (num) => {
  let result = [];
  for (let rn = 0; rn < romNums.length; rn++) {
    while (num >= romNums[rn].value){
      result.push(romNums[rn].romanSymbol);
      num -= romNums[rn].value;
    }
  }
  return result.join("");
}

const checkInput = () => {

  let numInput = parseInt(numberInput.value);

  if (!numInput){
    output.textContent = "Please enter a valid number";
  } else if (numInput <= -1){
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numInput >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
  } else{
    output.textContent = toRoman(numInput);
    numberInput.value = "";
  }
}

convertBtn.addEventListener("click", checkInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});