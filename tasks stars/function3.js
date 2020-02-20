
function string(a, b, c) {
    var newStr = "";
    for (var i = 0; i < a.length; i++) {
        if (i === c) {
            newStr += b;
        }
        newStr += a[i];
    }
    return newStr;

}

var result = string("My random string", " js ", 10);
console.log(result);
