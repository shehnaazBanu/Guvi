//a. print odd numbers in an array using iife and anonymous function
//normal:
// let  arr = [3, 1, 6, 12, 8, 9, 4];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]%2!= 0) {
//         console.log(arr[i]);
//     }
// }

// anonymous: 
// function(arr) {
//     for(var i=0; i<arr.length; i++) {
//         if(arr[i]%2!= 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// //iife:
// (function(arr) {
//     for(var i=0; i<arr.length; i++) {
//         if(arr[i]%2!= 0) {
//             console.log(arr[i]);
//         }
//     }
// })([1, 2, 5, 7, 4, 8])

// //arrow function:
// oddnumbers = (array) =>{
//     for(var i=0; i<arr.length; i++) {
//         if(arr[i]%2!= 0) {
//             console.log(arr[i]);
//         }
//     } 
// }

//b.Convert all the strings into title caps in a string array

// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  console.log(sentence.join(" "));
//  return sentence;
//  }
//  titleCase("tutorix is one of best e-platforms");

 //anonymous:
//  function (string) {
//     var sentence = string.toLowerCase.split(" ");
//     for(var i=0; i<sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     console.log(sentence.join(" "));
//     return sentence;
//  }

//  //iifee:
//  (function(str) {
//     var sentence = string.toLowerCase.split(" ");
//     for(var i=0; i<sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     console.log(sentence.join(" "));
//     return sentence;
//  })("tutorix is one of best e-platforms");

//  //arrow function
//  titileCase = (str) => {
//     var sentence = string.toLowerCase.split(" ");
//     for(var i=0; i<sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     console.log(sentence.join(" "));
//     return sentence;
//  }

//c.sum of all numbers in an array:

// let arr = [1,2,3,4,5,6,7,8,9];
// let sum= 0;
// for(let i=0; i<arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

//anonymous function:
// function(arr) {
//     var sum = 0;
//                   for(var i = 0 ; i< array.length ; i++){
//                      sum = sum + array[i];
//                    }
//                    return sum;
// }

//iife function:
// (function(arr) {
//     var sum = 0;
//     for(var i = 0 ; i< arr.length ; i++){
//         sum = sum + arr[i];
//       }
//       return sum;
// })([1,2,3,4])


// arrow function:
// sum = function(arr)=> {
//     sum = (array)=>{
//         var sum = 0;
//              for(var i = 0 ; i< arr.length ; i++){
//                 sum = sum + array[i];
//               }
//               return sum;
//               }
// }

//d.Return all the prime numbers in an array:

//Anonymous Function:
// function(numArray){
//      numArray = numArray.filter((number) => {
//        for (var i = 2; i <= Math.sqrt(number); i++) {
//          if (number % i === 0) return false;
//        }
//        return true;
//      });
//      console.log(numArray);
 //}
//IIFE 
//   (  
//   function(numArray){
//      numArray = numArray.filter((number) => {
//        for (var i = 2; i <= Math.sqrt(number); i++) {
//          if (number % i === 0) return false;
//        }
//        return true;
//      });
//      console.log(numArray);
//  })([1,2,3,4])
// //Arrow Function :

// primeNumber = (numArray) => {
//      numArray = numArray.filter((number) => {
//        for (var i = 2; i <= Math.sqrt(number); i++) {
//          if (number % i === 0) return false;
//        }
//        return true;
//      });
//      console.log(numArray);

//e.Return all the palindromes in an array

// function isPalindrome(N)
//     {
//         let str = "" + N;
//         let len = str.length;
//         for (let i = 0; i < parseInt(len / 2, 10); i++)
//         {
//             if (str[i] != str[len - 1 - i ])
//                 return false;
//         }
//         return true;
//     }
    
//   Anonymous Function :  function (arr, n)
//     {
//         // Traversing each element of the array
//         // and check if it is palindrome or not
//         for (let i = 0; i < n; i++)
//         {
//             let ans = isPalindrome(arr[i]);
//             if (ans == false)
//                 return false;
//         }
//         return true;
//     }
    
//     IIFE : 

//               (  function (arr, n)
//         {
//             // Traversing each element of the array
//             // and check if it is palindrome or not
//             for (let i = 0; i < n; i++)
//             {
//                 let ans = isPalindrome(arr[i]);
//                 if (ans == false)
//                     return false;
//             }
//             return true;
//         })([1,2,3] , 3)

// Arrow : 
// Palindrome = (arr, n) =>
//     {
//         // Traversing each element of the array
//         // and check if it is palindrome or not
//         for (let i = 0; i < n; i++)
//         {
//             let ans = isPalindrome(arr[i]);
//             if (ans == false)
//                 return false;
//         }
//         return true;

//f.Return median of 2 sorted array with same order:
// function getMedian(ar1, ar2, n)
// {
//     var i = 0; /* Current index of i/p array ar1[] */
//     var j = 0; /* Current index of i/p array ar2[] */
//     var count;
//     var m1 = -1, m2 = -1;
 
//     /* Since there are 2n elements, median will be average
//     of elements at index n-1 and n in the array obtained after
//     merging ar1 and ar2 */
//     for (count = 0; count <= n; count++)
//     {
//         /*Below is to handle case where all elements of ar1[] are
//         smaller than smallest(or first) element of ar2[]*/
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
 
//         /*Below is to handle case where all elements of ar2[] are
//         smaller than smallest(or first) element of ar1[]*/
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         /* equals sign because if two
//             arrays have some common elements */
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar2[j];
//             j++;
//         }
//     }
 
//     return (m1 + m2)/2;
// }
 
// /* Driver program to test above function */
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     document.write("Median is "+ getMedian(ar1, ar2, n1));
// else
//     document.write("Doesn't work for arrays of unequal size");
 
//g.Remove duplicates from an array
//Anonymous Function : function(array){
//     let dup = [...new Set(array)];
//     console.log(dup);
//   }
// IIFE :                (function(array){
//     let dup = [...new Set(array)];
//     console.log(dup);
//    })([1,1,2,3,4])

//h.Rotate an array by K times

// function reverse(array , li , ri){
//     while(li < ri){
//          int temp = a[li];
//          a[li]= a[ri];
//          a[ri] = temp;
         
//          li++;
//          ri--;
//        }
//    }
//    Anonymous function : function(array , k){
//                              k = k % a.length;
//                                if(k < 0){
//                                  k += a.length;
//                                }
   
//                                reverse(a, 0, a.length - k - 1);
//                                reverse(a, a.length - k, a.length - 1);
//                                reverse(a, 0, a.length - 1);
//                              }
                             
//       IIFE :   (function(array , k){
//                              k = k % a.length;
//                                if(k < 0){
//                                  k += a.length;
//                                }
   
//                                reverse(a, 0, a.length - k - 1);
//                                reverse(a, a.length - k, a.length - 1);
//                                reverse(a, 0, a.length - 1);
//                              })([1,2,3,4] , 2)