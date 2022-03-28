import React from 'react';
import './App.css';

function TextBox(props: { label: string, change: any }) {
    return (
        <div>
            <label> Enter {props.label}:</label>
            <input type="text" onChange={(e)=>
                props.change(e.target.value)
            }/>
        </div>
    );
}

export default TextBox;