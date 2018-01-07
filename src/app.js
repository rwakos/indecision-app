import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log("------------------------------------------------------------------------");
console.log("Init");
console.log("------------------------------------------------------------------------");

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    );
}


const template = (
    <div>
        <h1>Page Title</h1>
        <p>My Page</p>
    </div>
);

//---------------------------------------------------------------------------------------------------------
ReactDOM.render(<IndecisionApp options={['Bar', 'Other']} />, document.getElementById('app'));

/* ---------------------------------------------------------------------------------------------------------
//With new babel transform class 
class NewSyntax {
    name = 'Richard';

    getGreeting = () => {
        return `hello ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getGreeting());
---------------------------------------------------------------------------------------------------------
*/

