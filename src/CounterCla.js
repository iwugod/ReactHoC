import { React, Component, Fragment } from 'react';
import withCounterHoC from './WithCounterHoC';

class CounterCla extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     counter: 0
        // }
    }

    // IncreamentCount(event){
    //     event.preventDefault();
    //    this.setState( (prevState) =>{
    //       return { counter: prevState.counter + 1}
    //    })
    // }

    render() {
        const { counter, IncreamentCount } = this.props;
        return (
            <>
                <p>Hello CounterCla</p>
                <button onClick={IncreamentCount}>Click to count {counter}</button>
            </>
        )
    }

}

export default withCounterHoC(CounterCla);