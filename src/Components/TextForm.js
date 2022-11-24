
import React ,{ useState} from 'react'



export default function TextForm(props) {
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

const handleUpClick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
}
const handlelowerClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
}
const copy=()=>{
  let copy = document.getElementById("textArea");
  navigator.clipboard.writeText(copy.value);
}

const clear=()=>{
  const newLocal = '';
  setText(newLocal);
}

const noSpace=()=>{
  const newSet = text.split(/[ ]+/);
  setText(newSet.join(" "));}

  const [text,setText]=useState('Enter Text Here');
  return (
    <> 
    <div className='container my-3' >
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick }>Convert to Upper Case  </button>
<button className="btn btn-primary mx-2" onClick={handlelowerClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={copy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={noSpace}>Clear Spaces</button>
    </div>

    <div className="container">
      <h4 >YOUR TEXT SUMMARY</h4>
      Total Words = {(text.split(" ").length)} , Total characters = {(text.length)} ;

<h2>Preview</h2>
<p>{text}</p>
    </div>
    </>
  )
}
