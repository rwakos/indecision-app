
class Person {
    constructor(name = 'Anonymous', age = 0) {
        //this.name = name || 'no data provided'; //One way to define default
        this.name = name;
        this.age = age;
        console.log(this.name);
    }
    getGreeting() {
        //return 'Hellooo! ' + this.name;
        return `Hi i am test ${ this.name }, your age is: ${ this.age}`;
    }
    getDescription(){
        return `${ this.name } is: ${ this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor (name = 'Anonymous', age = 0, major = false){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description+= `, with Major: ${ this.major }`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor (name = 'Anonymous', age = 0, homeLocation = false){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation(){
        return !!this.homeLocation;
    }

    getGreeting() {
        let description = super.getGreeting();
        if (this.hasLocation()){
            description+= `, visiting from: ${ this.homeLocation }`;
        }
        return description;
    }
}

const me = new Traveler('Richard Reveron',38, 'Venezuela');
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());
