// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>Some Info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
    );
//----------------------------------------------------------------------------------
var templateExampleOne = (
<div>
    <h1>I.A Excercise 01 - Richard Reveron</h1>
    <p>38 years Old</p>
    <p>Location: Venezuela</p>
    <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
    </ol>
</div>
);
//----------------------------------------------------------------------------------
var userName = 'I.A Excercise 02 - Richard Reveron';
var userAge  = '38';
var userLocation  = 'Venezuela';
var userEducation = ['Friedman','Unimet'];
var templateExampleTwo = (
    <div>
        <h1>{userName}</h1>
        <p>{userAge} years Old</p>
        <p>Location: {userLocation}</p>
        <br />
        <em>Education:</em>
        <ol>
            <li>{userEducation[0]}</li>
            <li>{userEducation[1]}</li>
        </ol>
    </div>
    );
//----------------------------------------------------------------------------------
var user = {
    name: 'I.A Excercise 03 - Richard Reveron',
    age: 38,
    location: 'Venezuela',
    education:  ['Friedman','Unimet']
}

var templateExampleThree = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age} years Old</p>
        <p>Location: {user.location}</p>
        <br />
        <em>Education:</em>
        <ol>
            <li>{user.education[0]}</li>
            <li>{user.education[1]}</li>
        </ol>
    </div>
    );

//----------------------------------------------------------------------------------
    var app = {
        title: 'I.A Excercise 04 - Richard Reveron',
        subtitle: 'Venezuela',
        education:  ['Friedman','Unimet']
    }

    var templateExampleFour = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <br />
            <em>Education:</em>
            <ol>
                <li>{app.education[0]}</li>
                <li>{app.education[1]}</li>
            </ol>
        </div>
        );
//----------------------------------------------------------------------------------
/*name: 'I.A Excercise 05 - Richard Reveron', */ 
var user = {
    age: 38,
    education:  ['Friedman','Unimet']
}

function getLocation(location)
{
    if (location)
    {
        return <p>{location}</p>;
    } else {
        return <span style={{color: 'red'}}>Unknown</span>;
    }
}

var templateExampleFive = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age >= 18) && <p> {user.age} years Old</p>}
        <p>Location: </p>
        {getLocation(user.location)}
        <br />
        <em>Education:</em>
        <ol>
            <li>{user.education[0]}</li>
            <li>{user.education[1]}</li>
        </ol>
    </div>
    );
//----------------------------------------------------------------------------------    
var app = {
    title: 'I.A Excercise 04 - Richard Reveron',
    subtitle: 'Venezuela',
    education:  []
}

var templateExampleSix = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.education.lenght > 0 ? <em>Education:</em> : 'No Education'}</p>
        <br />
        
        <ol>
            <li>{app.education[0]}</li>
            <li>{app.education[1]}</li>
        </ol>
    </div>
    );
//----------------------------------------------------------------------------------    

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count=0;
    renderCounterApp();
}

const renderCounterApp = () => {
    const templateExampleSeven = (
        <div>
        <h1 id="counter">Count: {count}</h1>
        <button id="my-id" className="button" onClick={addOne}>+1</button>
        <button id="my-id-2" className="button" onClick={minusOne}>-1</button>
        <button id="my-id-3" className="button" onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateExampleSeven,appRoot);
}

//----------------------------------------------------------------------------------
var appRoot = document.getElementById('app');
renderCounterApp();