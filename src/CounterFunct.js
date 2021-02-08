import {React, useState } from 'react';
import withCounterHoC from './WithCounterHoC';

const Fcounter = (props)=> {

//    const [counter, setCounter] = useState(0);

//      function increatMentCount(event){
//          event.preventDefault();
//          setCounter(counter+1);
//     };

    return (<>
        <p>Testing functional component {props.learn}</p>
    <button onMouseOver={props.IncreamentCount}>Increatment counter {props.counter}</button>
    </>)
}


export default withCounterHoC(Fcounter);