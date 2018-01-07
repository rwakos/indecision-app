var nameVar = 'Richard';
nameVar = 'Alberto';
console.log('nameVar',nameVar);

let nameLet = 'Some..';
console.log('nameLet',nameLet);

nameLet = 'asas';
console.log('nameLet',nameLet);

const nameConst = '14564';
console.log('nameConst',nameConst);

//Block level scoping
var fullName = 'Richard Reveron';

if (fullName){
    const constFirstName = fullName.split(' ')[0];
    let letFirstName = fullName.split(' ')[0];
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
/*
console.log(constFirstName); //Will give error
console.log(letFirstName); //Will give error
*/