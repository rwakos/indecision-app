console.log("------------------------------------------------------------------------");
console.log("Init");
console.log("------------------------------------------------------------------------");
//---------------------------------------------------------------------------------------------------------
class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        console.log("handleToggleVisibility: "+this.state.visibility);
        this.setState((prevState) =>{
            return { 
                visibility:!prevState.visibility
             };
        });
    }

    render () { 
        return (
            <div className='container'>
                <div className='row'>
                    <h1>Visibility Toggle</h1>
                    <button className="btn btn-success" onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? 'Hide Det.' : 'Show Det.'}
                    </button>
                    {
                        this.state.visibility && (
                            <div>
                                <p>Now you see details....</p>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));