
/*
const rumerator = (input) => {
  const romNums = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  const romLets =["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  let arrayPlace = 12;
  let rumeral = [];
  
    while (arrayPlace > 0) { 
      let romPlaceAmount = Math.floor(input / romNums[arrayPlace]);
      console.log('Result of dividing input by base: ' + romPlaceAmount)
      
      if (romPlaceAmount === 0) {rumeral.push('')} 
      
      else rumeral.push(romLets[arrayPlace]);
      console.log('Rumeral array: ' + rumeral);
      arrayPlace--;
      console.log('arrayPlace: ' + arrayPlace)
    
        }
}
*/




const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/*
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};


const decimalToRoman = (input) => {
  const romNums = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  const romLets =["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  const arrayPlace = 12;

    while (arrayPlace > 0) { 
        const romNum = [];
        const romPlaceAmount = Math.floor(input / romNums[arrayPlace]);
        return romNum.push(romLets[arrayPlace]);
        arrayPlace--;
        }
}
*/

const rumerator = (input) => {
    let m = ["", "M", "MM", "MMM"];
    let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    
    let aThou = Math.floor(input/1000) * 1000;
    console.log('Thousands: ' + aThou);
    let aHun = Math.floor((input - aThou)/100) * 100;
    console.log('Hundreds: ' + aHun);
    let aTen = Math.floor((input - (aThou + aHun)) / 10) * 10;
    console.log('Tens: ' + aTen);
  
    let thousands = m[aThou / 1000];
        console.log(thousands);
    let hundreds = c[aHun / 100];
        console.log(hundreds);
    let tens = x[aTen / 10];;
        console.log(tens);
    let units = i[input - (aThou + aHun + aTen)];
        console.log(units);
  
    return thousands + hundreds + tens + units
}

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) 
  ) {
    alert("Please enter a valid number");
    return;
  }
  
  else if (
    parseInt(numberInput.value) < 1
  ) {
    alert("Please enter a number greater than or equal to 1");
    return;
  }
  
  else if (
    parseInt(numberInput.value) > 3999
  ) {
    alert("Please enter a number less than or equal to 3999");
    return;
  }
  
  else if (
    parseInt(numberInput.value) === 5
  ) {
    result.textContent = 'That was the fifth one!';
    return;
  }
  
  else if (
    parseInt(numberInput.value) === 2
  ) {
    result.textContent = 'Rocky V plus Rocky II equals Rocky...';
    return;
  }
  
  else if (
    parseInt(numberInput.value) === 7
  ) {
    result.textContent = "Adrian's Revenge!";
    return;
  }
  
  result.textContent = rumerator(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
