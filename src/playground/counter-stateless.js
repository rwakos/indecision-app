console.log("------------------------------------------------------------------------");
console.log("Init");
console.log("------------------------------------------------------------------------");
//---------------------------------------------------------------------------------------------------------
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        //console.log('componentDidMount');
        try{
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
    
            if (!isNaN(count)){
                this.setState(() => ({ count })); 
            } 
        } catch (e){
            //do nothing...
        }       
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',json);
        }

        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }


    handleAddOne(){
        console.log("handleAddOne");
        this.setState((prevState) =>{
            return { 
                count:prevState.count+1
             };
        });
    }
    handleMinusOne(){
        console.log("handleMinusOne");
        this.setState((prevState) =>{
            return { 
                count:prevState.count-1
             };
        });
    }
    handleReset(){
        console.log("handleReset");
        this.setState(() =>{
            return { 
                count:0
             };
        });
    }
    render () { 
return (
    <div className='container'>
        <div className='row'>
                <h1>Count: {this.state.count}</h1>
                <button id="my-id" className="btn btn-success mar-lt-10" onClick={this.handleAddOne}>+1</button>
                <button id="my-id-2" className="btn btn-warning mar-lt-10" onClick={this.handleMinusOne}>-1</button>
                <button id="my-id-3" className="btn btn-danger mar-lt-10" onClick={this.handleReset}>Reset</button>
        </div>
    </div>
);

    }
}

/*const handleAddOne = (props) => {
    return (
        <div>
        <ol>
            <li>{props.optionText}</li>
        </ol>
        </div>     
    );
};*/

Counter.defaultProps = {
    count:0
};

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));

//---------------------------------------------------------------------------------------------------------
/*
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
*/ 