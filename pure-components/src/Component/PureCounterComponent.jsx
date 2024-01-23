import React, {PureComponent } from "react";

class PureCounterComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        }
    }

    toggling = () => {
        this.setState((bool) => ({ toggle: !bool.toggle }))
    }

    incrementCount = () => {
        if (this.state.toggle) {
            this.setState((prev) => ({ count: prev.count + 1 }))
        }
    }

    render() {

        let { count, toggle } = this.state
        console.log("pure", count)
        return (
            <>
            <h1>pure component</h1>
                <h3>count : {count}</h3>
                <button onClick={this.toggling}>Set toggle</button>
                <button onClick={this.incrementCount}>counter</button>

            </>
        )
    }
}

export default PureCounterComponent;