// arguments object = no longer bound with arrow functions

/*
const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
*/

const add = (a, b) =>  {
    //console.log(arguments); //Not accesible on Arrow Function
    return a + b;
}

console.log(add(1,3));

const user = {
    name: 'Richard',
    cities: ['Caracas', 'Orlando', 'San Francisco'],
    printPlacesLived () {
        /*console.log(this.name);
        console.log(this.cities);*/
    return this.cities.map((city) => { return this.name + ' has lived at ' + city;})

        /*this.cities.forEach( (city) => {
            console.log(this.name + ' has lived at ' + city);
        });*/
    }

}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,7,9,5,3,2],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((x) => x * this.multiplyBy);
    }
}

console.log(multiplier.multiply());

