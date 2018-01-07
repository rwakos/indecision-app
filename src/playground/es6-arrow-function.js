const square = function(x){
    return x * x;
};

/*
//ES5 Arrow format
const squareArrow = (x) => {
    return x * x;
};*/

//ES6 Arrow format
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const fullName = 'Richard Reveron';
const firstName = (fN) => fN.split(' ')[0];
console.log(firstName(fullName));
