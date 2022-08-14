import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

import {incNumber,decNumber} from './actions/coutersAction';

function App() {
   // it alternative to the useContext hooks in react / consumer from context API
   const numberChange = useSelector(state => state.numberChange);
   const dispatch = useDispatch();
  return ( 
    <>
       <div className="main-div">
      

      <div className="container"> 
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={numberChange} />
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
      </div>

          </div>
        </div>
    </>
  )
}

export default App;
