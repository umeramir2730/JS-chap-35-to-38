//CHAP 35 to 38

//Q1
// var date = myFunction();
// function  myFunction() {
//     document.write(Date())
// }

//Q2
// var firstLastName = myFunction(prompt("Enter your first name: "),prompt("Enter your last name: "));

// function myFunction( a , b ){
//     alert("Hello " + a + " " + b + "!");
// }

//Q3
// var number = myFunction(prompt("Enter your first number: "), prompt("Enter your last number: "));
// function myFunction(num1,num2){
//     var sum = Number(num1) + Number(num2);
//     document.write(sum)
// }

//Q4
// var number = calculate(prompt("Enter your first number: "), prompt("Enter your last number: "), prompt("Enter any one +|-|*|/ operator: "));
// function calculate(num1, num2, operator) {

//     var result;
//     switch (operator) {
//       case '+':
//         result = Number(num1) + Number(num2);
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
//     document.write("The result is: " + result);
//   }

//Q5
// function square(number) {
//     return number * number;
//   }
//   document.write(square(5));

//Q6
// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     }
    
//     var result = 1;
//     for (let i = 2; i <= number; i++) {
//       result *= i;
//     }
    
//     return result;
//   }
//   document.write(factorial(5));

//Q7
// var num =   countNumbers(prompt("Enter your starting number: "), prompt("Enter your ending number: "));
// function countNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//       document.write(i + "<br>");
//     }
//   }  

//Q8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//       return number * number;
//     }
    
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
//   }
//   document.write(calculateHypotenuse(3, 4)+"<br>"+"The inputs were 3 and 4 ");
  
//Q9
// function calculateRectangleArea(width, height) {
//     return width * height;
//   }
//   document.write(calculateRectangleArea(5, 3));

//Q10
// var palindrome = isPalindrome(prompt("Enter any palindrome word, or not"))
// function isPalindrome(str) {
//     var reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
//   }
//   document.write(palindrome);
  
//Q11
// var cptl = capitalizeFirstLetter(prompt("Enter any sentence"))
// function capitalizeFirstLetter(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
    
//     return capitalizedWords.join(' ');
//   }
//   document.write(cptl);  

//Q12
// var lngst = findLongestWord(prompt("Enter any sentence I'll give you the longest word in it"))
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
    
//     words.forEach(function(word) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     });
    
//     return longestWord;
//   }
//   document.write(lngst);  

//Q13
// var occurences = countOccurrences(prompt("Enter any sentence"),prompt("Enter the letter that you want to know, repeated..."))
// function countOccurrences(str, letter) {
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
    
//     return count;
//   }
//   document.write(occurences);
  