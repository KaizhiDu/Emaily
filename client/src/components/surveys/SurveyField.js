import React from "react";
// input is come form props.input
// meta is html metadata
// {touched && error} mean if you have error or touch , this message will show.
export default ({input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
            <input style={{marginBottom: '5px'}} {...input} />
            <div className="red-text">
                {touched && error}
            </div>

        </div>
    )
}