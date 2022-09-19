"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroes = exports.replace = exports.isValid = exports.displayDirectory = exports.addCity = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Hello Cold World");
};
exports.testFunction = testFunction;
//NUMBER 1
var cityDirectory = [];
const addCity = (city) => {
    cityDirectory.push(city);
    (0, exports.displayDirectory)();
};
exports.addCity = addCity;
const displayDirectory = () => {
    let list = document.getElementById('cityDirectory');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityDirectory.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        }
    });
};
exports.displayDirectory = displayDirectory;
//NUMBER 2
var isbn = "";
const isValid = (isbn) => {
    var digits = isbn.split('');
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        if (digits[digits.length - 1] === 'X') {
            sum += 10 * (i + 1);
        }
        else {
            sum += Number(digits[i]) * (i + 1);
        }
    }
    if (sum % 11 == 0 && digits.length < 11) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};
exports.isValid = isValid;
(0, exports.isValid)("1112223339"); //1. true
(0, exports.isValid)("111222333"); //2. false
(0, exports.isValid)("1112223339X"); //3. false
(0, exports.isValid)("1234554321"); //4. true
(0, exports.isValid)("1234512345"); //5. false
(0, exports.isValid)("048665088X"); //6. true
(0, exports.isValid)("X123456788"); //7. false
//NUMBER 3
var str = "cat30";
console.log(str);
const replace = (str) => {
    var newStr1 = str.replace(/[a-z]/gi, function (c) {
        switch (c) {
            case 'z': return 'a';
            case 'Z': return 'A';
            default: return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });
    var newStr2 = newStr1.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
    console.log(newStr2);
};
exports.replace = replace;
(0, exports.replace)(str);
//NUMBER 4
var numList = [];
numList.push(false, 1, 0, 1, 2, 0, 1, 3, "a");
console.log(numList);
const moveZeroes = (numList) => {
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] == 0 && typeof numList[i] === 'number') {
            numList.splice(numList.length - 1, 0, numList.splice(i, 1)[0]);
        }
    }
    console.log(numList);
};
exports.moveZeroes = moveZeroes;
(0, exports.moveZeroes)(numList);
(0, exports.testFunction)();
