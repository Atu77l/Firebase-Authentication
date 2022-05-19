import React ,{useState} from 'react';
import './Calculator.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Calculator = () => {
   const [result,setResult] = useState('');  
   function num(e){
         setResult(result.concat(e.target.name));
   }   
   function enter() {
       try{
           setResult(eval(result).toString());
       } catch (error) {
           setResult("Error");
       }
   }
   function clear()
   {
       setResult('');
   }
   function backspace(){
       setResult(result.slice(0,result.length()-1));
   }
    return (
        <>
        <div className="main11">
        <div className="head">
        <Navbar/>
        </div>
        <div className="calculator">
            <h2 className='header'>Calculator</h2>
            <input type="text" value={result} className="calculator_result" />
            <div classname="calci">
            <div className="number">
            <button name="1" className="button" onClick={num}>1</button>
            <button name="2" className="button" onClick={num}>2</button>
            <button name="3" className="button" onClick={num}>3</button>
            <button name="4" className="button" onClick={num}>4</button>
            <button name="5" className="button" onClick={num}>5</button>
            <button name="6" className="button" onClick={num}>6</button>
            <button name="7" className="button" onClick={num}>7</button>
            <button name="8" className="button" onClick={num}>8</button>
            <button name="9" className="button" onClick={num}>9</button>
            <button name="1" className="button" >#</button>
            <button name="0" className="button" onClick={num}>0</button>
            <button name="." className="button" >.</button>
            </div>
            <div className="sign">
            <button name="*" className="button" onClick={num} >*</button>
            <button name="/" className="button" onClick={num}>/</button>
            <button name="+" className="button" onClick={num}>+</button>
            <button name="-" className="button" onClick={num}>-</button>
            <button name="-" className="button1" onClick={clear}>Clear</button>
            <button name="-" className="button1" onClick={backspace}>Backspace</button>

            </div></div>
            <div className="enter" onClick={enter}>Enter</div>
            </div>
            </div>
            <Footer/>
            </>
        
    )
}

export default Calculator;
