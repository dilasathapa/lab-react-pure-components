import React, { Component } from "react";

class SimpleCounterComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        
        }
    }

    toggling = () => {
        this.setState({toggle : !this.state.toggle})
    }

    incrementCount = () => {
        if (this.state.toggle) {
            this.setState((prev) => ({ count: prev.count + 1 }))
        }else{
            this.setState((prev)=>({count : prev.count}))
        }
    }

    render() {

        let { count, toggle } = this.state
        console.log(toggle)

        var changeStyle = null;
        if(toggle){
            changeStyle ={
                backgroundColor : "green"
            }
        }else{
            changeStyle ={
                backgroundColor : "red"
            }
        }

        var changeButtonStyle = null;

        if(toggle){
            changeButtonStyle ={
                cursor : "pointer"
            }
        }else{
            changeButtonStyle ={
                cursor : "not-allowed"
            }
        }
        console.log("simple")
        return (
            <>
                <h1>simple counter</h1>
                <h3>count : {count}</h3>
                <button style={changeStyle} onClick={this.toggling}>Set toggle</button>
                <button  onClick={this.incrementCount} >counter</button>
            </>
        )
    }
}

export default SimpleCounterComponent;