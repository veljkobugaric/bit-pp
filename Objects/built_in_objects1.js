//1.Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

// function duplicateEachElement(array) {
//     var res = [];

//     for (var i = 0; i < array.length; i++) {
//         res.push(array[i]);
//         res.push(array[i]);
//     }

//     return res;
// }

// var input = [2, 4, 7, 11, -2, 1];
// var output = duplicateEachElement(input);
// console.log(output);




//  2.              Write a functional expression that removes all duplicates in a given array.


//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13] 

// function niz(array) {
//     var newNiz = [];
//     for (i = 0; i < array.length; i++) {
//         if (newNiz.indexOf(array[i]) === -1) {
//             newNiz[newNiz.length] = (array[i]);
//         }
//     } 
//          newNiz.sort(function (a, b) {
//         return a - b
//     })
//     return newNiz

// }


// var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// var output = niz(input);
// console.log(output)






//3.     pogresno protumacen zadatak


// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function niz(array) {
//     var res = false;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             res = true
//         }
//     }
//     return res
// }


// var input = [1, 2, 9, 2, 6];
// var output = niz(input);
// console.log(output)


////////////////////////////////




// 3. (a)                a moze i da se uradi samo samo ==>  return array.length % 2 !== 0; bez if-a

// function niz(array) {
//     var res = false;
//     if (array.length % 2 !== 0) {
//         res = true;
//     }
//     return res
// }

// var input = [1, 2, 9, 2, 6, 7];
// var output = niz(input);
// console.log(output)





//3.(b)
// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function niz(array) {
//     if (array.length % 2 === 0) {
//         return "error";
//     }
//     for (i = 0; i < array.length; i++) { 

//     }

// }


// var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11,];
// var output = niz(input);
// console.log(output)


