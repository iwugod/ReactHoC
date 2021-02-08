import { React, Component } from 'react';

const withCounterHoC = (WrappedComponent) => {
    class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            }
        }

        IncreamentCount(event) {
            event.preventDefault();
            this.setState((prevState) => {
                return { counter: prevState.counter + 1}
            })
        }

        render() {
            return <WrappedComponent 
            counter={this.state.counter} IncreamentCount={this.IncreamentCount.bind(this)} {...this.props}/>
        }
    }
    return NewComponent;
}

export default withCounterHoC;