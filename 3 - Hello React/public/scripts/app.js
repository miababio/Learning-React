'use strict';

// arguments object - no longer bound w/ arrow functions

// ES5
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// ES6
// const add = (a, b) => {
//     console.log(arguments); // Error! arguments is not defined!
//     return a + b;
// };
// console.log(add(55, 1, 1001));

// this keyword - no longer bound w/ arrow functions

var user = {
    name: 'Michael',
    cities: ['Madison', 'Platteville', 'Rothbury'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    // numbers array to multiply
    // multiplyBy - single number
    // multiply - method return new array where numbers have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
