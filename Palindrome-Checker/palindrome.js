const checkButton = document.getElementById('check-btn');
const resultTag = document.getElementById('result');

const checkPalindrome = () => {

  let checkedText = document.getElementById('text-input').value;

  if(checkedText.length != 0){
      
      let newcheckedText = checkedText.toLowerCase();

      const regex = /[,';:\/\&{}'\-\>%()\]\.!"#?+=*|^_$[@\s]/g;
      newcheckedText = newcheckedText.replace(regex, '');

      if(newcheckedText.split('').reverse().join('') === newcheckedText){
        resultTag.innerText = `${checkedText} is a Palindrome`;
      } else{
          resultTag.innerText = `${checkedText} is not a Palindrome`;
      }
      
  } else {
      alert("Please input a value");
  } 
}

checkButton.addEventListener("click", checkPalindrome);