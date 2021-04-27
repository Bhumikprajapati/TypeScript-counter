import   React from 'react';

type Props = {
  label: string;  
  count: number;
  color?:string;//? indicates it is optional
  text?:string;
  onIncrement: () => void; 
  onDecrement:()=>void;
};

const FCCounter: React.FC<Props> = props => {
  const { label, count,color="lightblue", text="red",onIncrement,onDecrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };
const handleDecrement=()=>{
  onDecrement();
}
  return (
    <div>
      <span>
        {label}: {count}
      </span><br/>
      <button type="button" onClick={handleIncrement} style={{background:color}}>
        {`Increment`}
      </button>
      <button  type="button" onClick={handleDecrement} style={{color:text}} >Decrement</button>
    </div>
  );
};
export default FCCounter;