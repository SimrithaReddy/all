import React from "react"

export class CounterClass extends React.Component {
    constructor() {
        console.log("I am Constructor")
        super()
        this.incrementNode = null;
        //Explicit binding when arrow function is not used to get data
        // this.handleIncrement = this.handleIncrement.bind(this)
        this.state = {
            counter: 0,
            value:""
        }
    }

    componentDidMount() {
        console.log("I am componentDidMount");
    }

    componentDidUpdate() {
        console.log("I am ComponentDidUpdate");
    }

    componentWillUnmount() {
        console.log("I am ComponentWillUmount");
    }

    // shouldComponentUpdate() {
    //     console.log("I am COMPONENTSHOULDMOUNT");
    // }

    handleIncrement=()=>{
        // this.setState({...this.state, counter:this.state.counter+1})
        // this.setState({...this.state, counter:this.state.counter+1})
        this.setState((prev)=>{
            return {...this.state, counter: prev.counter+1}
        })
         this.setState((prev)=>{
            return {...this.state, counter: prev.counter+1}
        })
    }

    handleDecrement=()=>{
        this.setState({...this.state, counter:this.state.counter-1})
    }

    render() {
        console.log("I am Render")
        return (
            <>
                Class Works!
                <div>
                    <button onClick={this.handleIncrement} ref={this.incrementNode}>+</button>
                    <button onClick={this.handleDecrement}>-</button>
                </div>
                <div>{this.state.counter}</div>
                <Child data={[]} name="Simritha Reddy"/>
            </>
        )
    }
}

export class Child extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props, "from parent")
        return (
            <>I am a child Component</>
        )
    }
}