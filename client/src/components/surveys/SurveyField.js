import React from "react";
// input is come form props.input
export default ({input, label}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    )
}