// 1. Write a function that displays current date & time in your 
// browser. 

//ans) function showDateTime() {
//   var now = new Date();
//   document.write("Current Date and Time: " + now);
// }
// showDateTime();


// 2. Write a function that takes first & last name and then it 
// greets the user using his full name. 

//ans) function greetUser(firstName, lastName) {
//   var fullName = firstName + " " + lastName;
//   alert("Hello, " + fullName + "!");
// }
// greetUser("Ali", "Khan");


// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers. 

//ans) function addNumbers(a, b) {
//   return a + b;
// }
// var result = addNumbers(5, 3);
// document.write("Sum: " + result);


// 4. Calculator:  Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser. 

//ans) function calculator(num1, num2, operator) {
//   if (operator === "+") return num1 + num2;
//   if (operator === "-") return num1 - num2;
//   if (operator === "*") return num1 * num2;
//   if (operator === "/") return num1 / num2;
//   return "Invalid Operator";
// }
// document.write("Result: " + calculator(10, 2, "*"));


// 5. Write a function that squares its argument. 

//ans) function square(num) {
//   return num * num;
// }
// document.write("Square: " + square(4));


// 6. Write a function that computes factorial of a number. 

//ans) function factorial(n) {
//   var fact = 1;
//   for (var i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// document.write("Factorial: " + factorial(5));


// 7. Write a function that take start and end number as inputs 
// & display counting in your browser. 

//ans) function showCounting(start, end) {
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// showCounting(1, 10);


// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 

//ans) function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(x) {
//     return x * x;
//   }
//   var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//   return hypotenuse;
// }
// document.write("Hypotenuse: " + calculateHypotenuse(3, 4));


// 9. Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 

//ans) function area(width, height) {
//   return width * height;
// }
// document.write("Area: " + area(5, 6));

//2) var w = 4;
// var h = 7;
// document.write("Area: " + area(w, h));

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam. 

//ans) function isPalindrome(str) {
//   var reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// document.write(isPalindrome("madam"));  

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//ans) function capitalizeWords(str) {
//   var words = str.split(" ");
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
// document.write(capitalizeWords("the quick brown fox"));


// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development' 

//ans) function findLongestWord(str) {
//   var words = str.split(" ");
//   var longest = "";
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }
// document.write(findLongestWord("Web Development Tutorial"));


// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o'  

//ans) function countLetter(str, letter) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// document.write("Occurrences: " + countLetter("JSResourceS.com", "o"));


// 14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
// Circumference of circle    =     2πr 
// Area of circle       
// =     
// πr2

//ans) function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   document.write("The circumference is " + circumference.toFixed(2));
// }
// calcCircumference(5);

// ii. Area function
// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//   document.write("<br>The area is " + area.toFixed(2));
// }
// calcArea(5);
