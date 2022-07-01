import React from 'react'
import { useState } from 'react'
const Textbox = ({mode}) => {

    const [text,setText] = useState("")

   const handleOnchange = (e)=>{
        setText(e.target.value);
    }

    const handleUpclick = ()=>{
        setText(text.toUpperCase());
    }
    const handleLoclick = ()=>{
        setText(text.toLowerCase());
    }

    const clearText = ()=>{
        setText("");

    }
        


    return (
        <>
        <div className="container" >
            <div className="mb-3 text-center" style={{color: mode==="light"? "black": "white"}} >
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>Enter your text to analyze</h3></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Start writing here...' name="boxtext" value={text} onChange={handleOnchange}
                style={{backgroundColor: mode==="light"? "white": "#b8e6ef", color: mode==="light"? "black": "grey"}}></textarea>
            </div>
            <button className="btn btn-primary me-3" onClick={handleUpclick}>toUpperCase</button>
            <button className="btn btn-primary me-3" onClick={handleLoclick}>toLowerCase</button>
            <button className="btn btn-primary" onClick={clearText}>Clear Text</button>

        </div>
        <div className="container my-5" style={{color: mode==="light"? "black": "white"}}>
            <h4>Your text analysis</h4>
            {text.length> 0? <p>Total no of words written <b>{text.split(" ").length-1}</b> and number of characters typed is <b>{text.length}</b></p>: "Enter something to analyze"}
        </div>
        </>
    )
}

export default Textbox
