// JSX - Javascript XML
const app = {
    title: 'Forms and Inputs',
    subtitle: 'whatever...',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
}

const numbers = [55, 77, 99];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
}

const render = () => {
    var template = (
        <div>
            <h1>{ app.title }</h1>
            <p>{ app.subtitle }</p>
            <br />
            <p>{app.options.length > 0 ? 'Options listed:' : 'No options at the moment...'}</p>
            {/*
                numbers.map((number) => {
                    return <p key={number}> Number: {number}</p>
                })
            */}
            <ol>
                {
                    app.options.map((text) => {
                        return <li key={text}> Text: {text}</li>
                    })
                }
            </ol>
            <br/>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>onMakeDecision</button><br/>
            <button onClick={removeAll}>removeAll</button><br/>&nbsp;
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <br />
            
        </div>
        );
        ReactDOM.render(template,appRoot);
    }
var appRoot = document.getElementById('app');

render();