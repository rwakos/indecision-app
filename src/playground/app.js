console.log("------------------------------------------------------------------------");
console.log("Init");
console.log("------------------------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount(){
        //console.log('componentDidMount');
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options){
                this.setState(() => ({ options })); 
            }
        } catch (e){
            //do nothing...
        }       
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }

        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        /*this.setState(() => {
            return {
                options: []
            }
        });*/

        this.setState(() => ({
                options: []          
        }));
    }

    handleDeleteOption(optionToRemove) {
    
        console.log("Delete "+optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)         
        }));
        /*this.setState(() => ({
                options: []          
        }));*/
    }

    handlePick(){
        let rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand]);
    }

    handleAddOption(option){
    if (!option){
        return 'Enter valid value';
    } else if (this.state.options.indexOf(option)>-1) {
        return 'Already exists';
    } 
        this.setState((prevState) => ({
                options: prevState.options.concat(option)
        }));
    
    }

    
    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life to a good place';
        return (
            <div className='container'>
                <div className='row'>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length>0}
                handlePick={this.handlePick}
                />
                <Options 
                
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                 />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
//---------------------------------------------------------------------------------------------------------
/*class Header extends React.Component {
    render() {
        console.log(props);
        return (
            <div>
            <h1>{ props.title }</h1>
            <h3>{ props.subtitle}</h3>
                <p>This is from Header</p>
            </div>
        );
    }
}*/
const Header = (props) => {
    return (
        <div>
        <h1>{ props.title }</h1>
        { props.subtitle && <h3>{props.subtitle}</h3>}
            <p>This is from Header</p>
        </div>    
    );
};

Header.defaultProps = {
    title: "Indecision App"
};
//---------------------------------------------------------------------------------------------------------
/*
class Action extends React.Component {
    render() {
        return (
            <div>
                <button className='btn btn-success' 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >What should i do?</button>
            </div>
        );
    }
}
*/
const Action = (props) => {
    return (
        <div>
            <button className='btn btn-success' 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >What should i do?</button>
        </div>
    );
};
//---------------------------------------------------------------------------------------------------------
/*class Options extends React.Component {
    
    render() {
        return (
            <div className='mar-top-20'>
                Options Components.... {props.options.length}
                {
                    props.options.map((option) => <Option key={option} optionText={option} />
                    )
                }
                <button className='btn btn-danger' onClick={props.handleDeleteOptions}>RemoveAll?</button>
            </div>
        );
    }
}*/
const Options = (props) => {
    return (
        <div className='mar-top-20'>
        <button 
        className='btn btn-danger' 
        onClick={props.handleDeleteOptions}>RemoveAll?</button>
        {props.options.length ===0 && <p className='mar-top-20 alert alert-info'>Please add options below</p>}
        {
            props.options.map((option) => 
            <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
            )
        }
    </div>     
    );
};
//---------------------------------------------------------------------------------------------------------
/*class Option extends React.Component {
    render() {
        return (
            <div>
            <ol>
                <li>{props.optionText}</li>
            </ol>
            </div>     
        );
    }
}*/
const Option = (props) => {
    return (
        <div className="mar-top-20">
        <ol>
            <li>{props.optionText} 
            <button 
            className="btn btn-danger mar-lt-20"
            onClick={(e) =>{
                props.handleDeleteOption(props.optionText)
            }}
            >Delete</button>
            </li>
        </ol>
        </div>     
    );
};


//---------------------------------------------------------------------------------------------------------
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption= this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        
            const option = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(option);
        
            this.setState(() => ({ error }));

            if (!error){
                e.target.elements.option.value = "";
            }
            
            /*if (option){
            //alert('Hit');
            props.handleAddOption(option);
            }*/
    }
    render() {
        return (
            <div className="form-inline mar-top-30">
            { this.state.error && <p className="alert alert-warning">{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" className="form-control" />
                <button className='btn btn-info'>Add Option</button>
                </form>
            </div>     
        );
    }
}

//stateless Functions
/*
const User = (props) => {
    return (
        <div className="row">
            <p>Name: { props.name }</p>
            <p>Age: { props.age }</p>
        </div>
    );
}*/
//---------------------------------------------------------------------------------------------------------
ReactDOM.render(<IndecisionApp options={['Bar', 'Other']} />, document.getElementById('app'));