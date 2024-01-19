import React, { Component } from "react";

class SimpleCounterComponent extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            toggle : false
        }

    }
    incrementCount =()=>{
        if(this.state.toggle){
            this.setState((prev)=>({count : prev.count+1}))

        }
    }
    toggling=()=>{
        // console.log(this.state.toggle)
        this.setState((bool)=>({toggle:!bool.toggle}))
    }
    render(){
        let {count, toggle} = this.state;
        console.log(toggle)

        const changeStyle = {
            border : "2px solid green"
        }

        return (
        <>
        <div>
            count : {count}
            <button onClick={this.toggling} style={changeStyle}>set toggle : {toggle} </button>

            <button onClick={this.incrementCount}>add</button>
        </div>
        </>

        )
    }
}

export default SimpleCounterComponent;