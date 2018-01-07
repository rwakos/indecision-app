import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
state = {
    options:[],
    selectedOption: undefined
}

    handleDeleteOptions = () => {
        this.setState(() => ({
                options: [],
                selectedOption: undefined          
        }));
    };

    handleDeleteOption = (optionToRemove) => {
        console.log("Delete "+optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)         
        }));
    };

    handlePick = () =>{
        let rand = Math.floor(Math.random() * this.state.options.length);
        //alert(this.state.options[rand]);
        const option = this.state.options[rand];
        this.setState(() => ({
            selectedOption: option         
    }));
    };

    handleAddOption = (option) => {
    if (!option){
        return 'Enter valid value';
    } else if (this.state.options.indexOf(option)>-1) {
        return 'Already exists';
    } 
        this.setState((prevState) => ({
                options: prevState.options.concat(option)
        }));
    
    };

    handleCloseModal = () => {
        console.log("Closing... ")
        this.setState(() => ({
            selectedOption: undefined         
        }));
    };

    constructor(props){
        super(props);
        /*this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            options: []
        };*/
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

    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life to a good place';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                <Action 
                hasOptions={this.state.options.length>0}
                handlePick={this.handlePick}
                />
                <div className="widget">
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
                
               
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

