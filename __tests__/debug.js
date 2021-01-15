// const MathQuill = require('../src/mathquill')
const global = typeof window !== 'undefined' ? window : this || Function('return this')();
const jquery = require('jquery');


console.log(jquery);
global.jQuery = jquery;

console.log(global.jQuery);

const MathQuill2 = require('@edtr-io/mathquill/build/mathquill');

// console.log(jquery);



// console.log(MathQuill2);
