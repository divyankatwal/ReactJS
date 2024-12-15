import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText)
    }


    const [text, setText] = useState("");



    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#03012b'}}>
                <h1>{props.heading}</h1>
                <div className="mb-1">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'dark':'light', color: props.mode==='light'?'dark':'light'}}></textarea>
                </div>
                <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={handleUpClick} >Convert to Uppercase</button>
                <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleLowClick} >Convert to Lowercase</button>
            </div>

            <div className="container my-2" style={{color: props.mode==='dark'?'white':'#03012b'}}>
                <h2>Your Text Summary</h2>
                <p>Your text contains {text.split(" ").length} words and {text.length} characters. </p>
                <p>{0.008 * text.split(" ").length} minutes to read this text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
