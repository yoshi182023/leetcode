function intToRoman(num: number): string {

    let roman = "";
    let remainder = num;
     while (remainder >= 1000){
        roman += "M"
        remainder -= 1000;
    }
    while (remainder >= 900){
        roman += "CM"
        remainder -= 900;
    }
     while (remainder >= 500){
        roman += "D"
        remainder -= 500;
    }
    while (remainder >= 400){
        roman += "CD"
        remainder -= 400;
    }
     while (remainder >= 100){
        roman += "C"
        remainder -= 100;
    }
    while (remainder >= 90){
        roman += "XC"
        remainder -= 90;
    }
      while (remainder >= 50){
        roman += "L"
        remainder -= 50;
    }
      while (remainder >= 40){
        roman += "XL"
        remainder -= 40;
    }
      while (remainder >= 10){
        roman += "X"
        remainder -= 10;
    }
    if(remainder === 9){
        roman += "IX"
        remainder -=9;
    }
    if(remainder >= 5) {
        roman += "V"
        remainder -= 5;
    }
    if(remainder === 4) {
        roman += "IV"
        remainder -= 4
    }
     
    for(let i = 0; i < remainder;i++){
        roman += "I"

    }
    return roman
};