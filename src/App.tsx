import  React, { useState ,useRef} from 'react';
import './App.css';
import FCCounter from "./components/FCCounter"
import Experiment from "./components/Experiment";

const App :React.FC=()=> {
  
const [count,setCount]=useState<Number>(0)
const [value,setValue]=useState<string>('')
const Inputref=useRef<HTMLInputElement>(null!);

function onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {
  
  setValue(e.target.value)
}
const focusInput=()=>{
  if(Inputref && Inputref.current){
    Inputref.current.focus()
  }
}

    return (
      <div className='App'>
      <FCCounter 
        label={'Counter'}
        count={Number(count)}
        onIncrement={() => setCount(Number(count) + 1 )}
        onDecrement={()=>setCount(Number(count)-1)}
      />
      <br/><hr/>
      <button onClick={focusInput}>Click to focus</button><br/>
      <input value={value}  ref={Inputref} onChange={onChangeHandle} type="text" placeholder={"name"}   /><br/>
      {value}
      <hr/>
      <Experiment name='cfff' />
      </div>

    );
  
}
export default App;