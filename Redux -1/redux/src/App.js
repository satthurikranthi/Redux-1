import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from "react";

function App() {

let inputRef = useRef();
let dispatch = useDispatch();
let storeObj = useSelector((store)=>{return store});



  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button onClick={()=>{
        dispatch({type:"addActor",data:inputRef.current.value});
      }}>And Actor</button>
      <button onClick={()=>{
        dispatch({type:"addDancer",data:inputRef.current.value});
      }}>And Dancer</button>
      <button onClick={()=>{
        dispatch({type:"addSinger",data:inputRef.current.value});

      }}>And Singer</button>
      <br></br>
      <h2>Actors:{storeObj.actors.join()}</h2>
      <h2>Dancers:{storeObj.dancers.join()}</h2>
      <h2>Singers:{storeObj.singers.join()}</h2>
    </div>
  );
}

export default App;
