document.write("<br>");
document.write("<br>");
document.write("<br>");

/*The function for odd */



function oddList() {     
    document.write("Odd no.s between 1 to 20 :)   <br>");
    for(var i=1; i<20; i++)
    {
        if(i%2 == 1)
        document.write(i + " ");
    }
               
}

oddList();

//-----------------------------------------------------------------------------------------------------------------------------
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("Prime no. list upto 20 :) <br>");
let lowerNumber=1, higherNumber=20;
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
       document.write(i + " ");
    }
}


//-----------------------------------------------------------------------------------------

document.write("<br>");
document.write("<br>");
document.write("<br>");

/*   Fibonacci series  */
let n1 = 0, n2 = 1, nextTerm;
const number= parseInt(prompt("Enter the number for fibonacci series"));
document.write('<br> Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;  
    document.write(nextTerm + ' ');
}

document.write("<br>");
document.write("<br>");

/*Reversing Digits of a number using modulo */

let rev = 0;
let lastDigit;
let num= parseInt(prompt("Enter the number for reversing the digit"));
while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
document.write("reverse number be here");
document.write("Reverse number : "+rev);

//---------------------------------------------------------------------------------------------

document.write("<br>");
document.write("<br>");

var stringOne="String1:- This is my own string, HAHA"
document.write("<br>");
var stringTwo="String2:- This string ends with learn"

document.write(stringOne);
document.write("<br>");
document.write(stringTwo);
document.write("<br>The character value for 2nd character is :  ");
document.write(stringOne.charCodeAt(2));
document.write("<br>The string ending with learn is stringOne?  ");
document.write(stringOne.endsWith("learn"));


