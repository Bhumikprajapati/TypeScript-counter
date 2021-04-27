import  React, { useState } from 'react';
import './App.css';
import FCCounter from "./components/FCCounter"

const App :React.FC=()=> {
  
const [count,setCount]=useState(0)
const [value,setValue]=useState('')

function onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {
  setValue(e.target.value)
}
    return (
      <div className='App'>
      <FCCounter 
        label={'Counter'}
        count={count}
        onIncrement={() => setCount( count + 1 )}
        onDecrement={()=>setCount(count-1)}
      />
      <br/><hr/>
      <input value={value} onChange={onChangeHandle} type="text" placeholder={"name"}   /><br/>
      {value}
      </div>
    );
  
}
export default App;