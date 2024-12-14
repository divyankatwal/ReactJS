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

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode");

    const [myStyleBtn, setmyStyleBtn] = useState({
        color: 'white',
        backgroundColor: 'black'
    })


    const btnToggle = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText("Enable Light Mode")
            setmyStyleBtn({
                color: 'black',
                backgroundColor: 'white'
            })
        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("Enable Dark Mode")
            setmyStyleBtn({
                color: 'white',
                backgroundColor: 'black'
            })
        }
    }


    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-1">
                    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={myStyle}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn mx-2" onClick={btnToggle} style={myStyleBtn}>{btnText}</button>
            </div>

            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>Your text contains {text.split(" ").length} words and {text.length} characters. </p>
                <p>{0.008 * text.split(" ").length} minutes to read this text</p>
                <h2>Your text summary</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
