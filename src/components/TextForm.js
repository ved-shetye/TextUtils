import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');
  
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleClearSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    return (
    <>
    <div className='container my-2' style={{backgroundColor: props.mode==='dark'?'#041e38':'white', color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="my-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-5" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-5" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-5" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-5" onClick={handleClearSpaceClick}>Clear Extra Spaces</button>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'#041e38':'white',color: props.mode==='dark'?'white':'black'}}>
        <h5>Text Summary</h5>
        <h6>{text.split(" ").length} words and {text.length} characters</h6>
    </div>
    </>
  )
}
