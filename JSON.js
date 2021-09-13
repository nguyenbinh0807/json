//JSON la mot dinh dang du lieu (chuoi)
//stringify tu js sang json
//parse tu json sang js
var json = '1';
    console.log(typeof JSON.parse(json));
//javascipt ES6
//let, const
//multi-line string
//arow function
//classes
//default parameter values
//destructuring
//rest parameters
//spread
//enhanced object literals
//tagged template literal
//modules
//vi du
//arow function
const logger = (log) => {
    console.log(log);
}
logger('mes...');

const sum = (a, b) => a + b;//neu khong co ngoac la co return
console.log(sum(2, 2));
//co mot tham so thi ta bo ngoac duoc
const obj = {
    name: 'java',
    getName: function() {
       return this.name; 
    }    
};
console.log(obj.getName());
//vi du 3
const list = function(name, price) {
    this.name = name;
    this.price = price;
}
let result = new list('vuejs', 20000);
console.log(result);
//template literals
var ngay = 'hom qua'
var ob = `nhu ngay ${ngay}`;
var li = `line1
line2
line3`;
//classes
//la cach viet khac contrucster function
class corse {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const phpcourse = new corse('php', 1000);
//enhanced object literals
//định nghĩa key: value cho object
//định nghĩa method cho object
//định nghĩa key cho object dưới dạng biến
var fiedlname = 'name',
    fieldPrice = 'price';
    const course = {
        [fiedlname]: 'java',//no se giup tu thay doi bien
        [fieldPrice]: 1000
    };
    console.log(corse)
//default parameter values
//destructuring
var array = ['java', 'php', 'vuejs', 'js'];
var [a, ...rest] = array;
console.log(a);
console.log(rest);
//rest parameters
//dung ...
const logg =  (...params) => {
    console.log(params)
}
console.log(logg(1,2,3,4,5));
//su dung rest se ra mang
//spread
var array1 = ['js', 'php', 'vuejs'],
    array2 = ['reactsjs', 'dart'];
var array3 = [...array2, ...array1];
console.log(array3); 
//vi du
var array4 = ['js', 'php', 'ruby', 'vuejs'];

function log(...rest) {
    for(var index of rest) {
        console.log(index);
    }  
}

log(...array4)
//tagged template literals
//modules: import(nap vao)/export(xuat ra)
import logger2 from './JSON2.js';

logger2('text messeg...', 'error')