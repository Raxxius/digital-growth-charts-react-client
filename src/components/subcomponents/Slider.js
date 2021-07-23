import React from 'react';

const Slider = (props) => {
    return <div style={{textAlign: 'left'}}>
        <label style={{padding: "10px"}}>{props.min}</label>
        
        <input 
            type="range" 
            min={props.min} 
            max={props.max} 
            value={props.value}
            step={props.step}
            className="slider" 
            id="myRange"
            onChange={(e)=> props.onChange(e.target.value)}
        />
        
        <label style={{padding: "10px"}}>{props.max}</label>

        <h5 style={{display:'inline'}}>{props.label}: {props.value} SDS</h5>
    </div>
}

export default Slider