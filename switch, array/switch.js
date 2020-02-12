// 1
var day = 1;
var result = "";

switch (day) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;

}
console.log(result);

// 2
var day = 10;
var result = "";

switch (day) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
    default:
        result = "Input must be a number between 1 and 7";
        break;

} console.log(result);


// 3
var day = 5;
var result = "";

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'Weekday';
        break;
    case 6:
        result = 'weekend';
        break;
    case 7:
        result = 'weekend';
        break;
    default:
        result = "Input must be a number between 1 and 7";
        break;

} console.log(result);

// 4

var month = 13;
var result = "";

switch (month) {
    case 1:
        result = 'January';
        break;
    case 2:
        result = 'February';
        break;
    case 3:
        result = 'March';
        break;
    case 4:
        result = 'April';
        break;
    case 5:
        result = 'May';
        break;
    case 6:
        result = 'June';
        break;
    case 7:
        result = 'July';
        break;
    case 8:
        result = 'August';
        break;
    case 9:
        result = 'September';
        break
    case 10:
        result = 'October';
        break
    case 11:
        result = 'November';
        break
    case 12:
        result = 'December';
        break
    default:
        result = "Input must be a number between 1 and 12";
        break
}
console.log(result);

// 5
var month = 9;
var result = "";

switch (month) {
    case 3:
    case 4:
    case 5:
        result = "spring";
        break;
    case 6:
    case 7:
    case 8:

        result = 'summer';
        break
    case 9:
    case 10:
    case 11:
        result = "autumn"
        break;
    case 12:
    case 1:
    case 2:
        result = "winter";
        break;
    default:
        result = "Input must be a number between 1 and 12";
        break
}
console.log(result);

// 6

var grade = 'A';
var result = "";

switch (grade) {
    case 'A':
        result = 'Good job';
        break;
    case 'B':
        result = 'Pretty good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not good';
        break;
    case 'F':
        result = 'Failed';
        break;
    default:
        result = "Unknown grade";
        break;
}
console.log(result);


// array 1
var months = ["January", "February", "March", "April", "May", "June", "August", "September", "October", "November", "December"];
console.log(months[5]);
console.log(months[8]);
console.log(months[0]);

// 2

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days[6]);

// 3
var niz = [2, -4, 5, -2, -11]
if (niz[0] < 0) {
    console.log(niz[0]);
}
if (niz[1] < 0) {
    console.log(niz[1]);
}
if (niz[2] < 0) {
    console.log(niz[2]);
}
if (niz[3] < 0) {
    console.log(niz[3]);
}
if (niz[4] < 0) {
    console.log(niz[4]);
}

// 4
var nizDva = [5, 15, -5, 20, 12, 18, 72, 14, 9];
if (nizDva[0] % 3 === 0) {
    console.log(nizDva[0]);
}

