//function 4.
//1.
/* 
var e = 33;
var niz = [5, -4.2, 3, 7, 333];
function provera(array, el) {
    var res = "no";
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] === e) {
            res = "yes"
        }
    }
    return res
}
var result = provera(niz, e);
console.log(result);
*/

//2.
function modify(nizulaz) {
    var res = [];

    for (i = 0; i < nizulaz.length; i++) {
        if (nizulaz[i] > 0) {
            res[i] = nizulaz[i] * 2;
        } else {
            res[i] = nizulaz[i];
        }
    }

    return res
}
var result = modify([-3, 11, 5, 0, 3.4, -8]);
console.log(result);

//3.

// function print(input) {
//     var min = input[0];
//     var index = 0;
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] < min) {
//             min = input[i];
//             index = i;
//         }
//     }
//     return [min, index]
// }

// var result = print([4, 2, 2, -1, 6]);
// console.log(result);

// 4.
// var add = function (input) {
//     var min = input[0];
//     var second = input[0];
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] < min) {
//             second = min
//             min = input[i];
//         }
//     }
//     return second
// }
// var result = add([4, 2, 2, -1, 6]);
// console.log(result);
// // 5.
// var sum = function (input) {
//     for (i = 0; i < input.length; i++)
//  }

var kafa = {
    name: 'jacobs',
    strength: '5',
    flavour: 'halsenot',
    milk: 'without',
    sugar: '3',
};
console.log(kafa);

//var movie = {
//     title: "english",
//     actors: ["Ksenija", "Mirko", "Zarko", "Milenko", "Ciciban", "Eva Mendes"],
//     director: "Veljko",
//     genre: "horor",
//     popularity: "asdtryui"

// };

// console.log(movie.actors[1]);

function createProject(description, progLanguage, gitRepository, logicalStatus) {
    return {
        description: description,
        progLanguage: progLanguage,
        gitRepository: gitRepository,
        logicalStatus: logicalStatus,
    }
}

var cssobject = createProject("css project", "css", "reposOngithub", "development");

console.log(object);





