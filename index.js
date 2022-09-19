"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayDirectory = exports.addCity = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Hello Cold World");
};
exports.testFunction = testFunction;
//displaying in html
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
(0, exports.testFunction)();
