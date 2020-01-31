import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return (
        <div>
            <Child doWhatever={props.changeTheWorldEvent} title={props.title}/>
            <Child doWhatever={props.keepTheWorldTheSame} title={props.title}/>
        </div>
    )
}

export default Parent;