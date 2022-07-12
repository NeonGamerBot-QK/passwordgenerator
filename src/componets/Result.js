import { useState } from "react";
import ReactSlider from "react-slider";
import { ToastContainer, toast } from 'react-toast'
export default function Result() {
    const upperCase = "QWERTYUIOPASDFGHNMJKLZXCVBNM"
    const lowerCase = "qwertyuiopasdfghnmjklxcvbnm"
    const numbers = "0123456789"
    const staticW = "!'^+%&/()=?_#${[]}|;:>`<.*-@".toString()
    const makePass = (useUpper, useLower, useStatic,useNumbers, length) => {
        let useWords = ((useUpper ? upperCase : "") + (useLower ? lowerCase : "") + (useStatic ? staticW : "") + (useNumbers ? numbers : "")).split("").join("")  
let pass = ""
// console.clear()
// console.log(useWords)
        for (let i = 0; i < length; i++) {
            const number = Math.round(Math.random() * useWords.length)
            const word = useWords.charAt(number)
             useWords = useWords.replace(word, "")
pass += (word)
// console.log(word, pass)
}
return pass.split("").join("");
    }
    /**
     * @see https://github.com/somanath-goudar/react-password-generator/blob/master/src/App.js#L61-L68
     */
    const copyToClipboard = () => {
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = result
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove()
      }
    const [useUpper, setUpperCase] = useState(true)
    const [useLower, setLower] = useState(true)
    const [useStatic, setStatic] = useState(true)
    const [useNumbers, setNumbers] = useState(true)
    const [result, setResult] = useState(makePass(useUpper, useLower, useStatic,useNumbers, 10))
    const [state, setState] = useState({
        value: 10
      });
const updateOptions = (useUppe, useLowe, useStati,useNumber, length) => {
if(useUppe !== useUpper) setUpperCase(useUppe);
if(useLowe !== useLower) setLower(useLowe);
if(useStati !== useStatic) setStatic(useStati);
if(useNumber !== useNumbers) setNumbers(useNumber);
setState({
    value: length
})
setResult(makePass(useUpper, useLowe, useStati, useNumbers, state.value))
}
if(result === "") setResult("No password config")
console.log(result)
const wave = () => {
    toast('Password copied!', {
      position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
})
}
return (
        <div>
             <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
<div className="result ">
            {/* <div className="title">Result</div> */}
            <div className="content ">
                <h1  className='generator__header'>Password generator</h1>
                <div className='generator__password'>
                    <h3>{result}</h3> 
                    <button onClick={(e) => {
                        copyToClipboard()
                        wave()
                        }} className='copy__btn'>
              <i className='far fa-clipboard'></i>
            </button>
            </div>
            </div>
        </div>
        <div className="input">
        <input type="checkbox" name="doUppercase" checked={useUpper} onChange={(e) => updateOptions(e.target.checked, useLower, useStatic, useNumbers, state.value)} />
        <label htmlFor="doUppercase"> UpperCase</label><br />
        <input type="checkbox" name="doLowercase" checked={useLower} onChange={(e) => updateOptions(useUpper, e.target.checked, useStatic, useNumbers, state.value)} />
        <label htmlFor="doUppercase"> lowerCase</label><br />
        <input type="checkbox" name="dostatic" checked={useStatic} onChange={(e) => updateOptions(useUpper, useLower, e.target.checked, useNumbers, state.value)} />
        <label htmlFor="doUppercase"> Symbols</label><br />
        <input type="checkbox" name="donumber" checked={useNumbers} onChange={(e) => updateOptions(useUpper, useLower, useStatic, e.target.checked, state.value)} />
        <label htmlFor="doUppercase"> Numbers</label><br /><br />  
<div>Length {state.value}</div>
       
        <ReactSlider
    className="horizontal-slider"
    // marks
    min={7}
    max={20}
    onChange={(e) => {
    console.log(e)
        updateOptions(useUpper, useLower, useStatic, useNumbers, (e))
    }}
    value={state.value}
    thumbClassName="example-thumb"  
    trackClassName="example-track"
    renderTrack={(props, state) => <div {...props} />}//custom track
/>
<button onClick={(e) => updateOptions(useUpper, useLower, useStatic, useNumbers, state.value)}className='generator__btn'>
            Generate Password
          </button>
    </div>
        </div>
        
    )
}