import   React from 'react';

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
  onDecrement:()=>void;
};

const FCCounter: React.FC<Props> = props => {
  const { label, count, onIncrement,onDecrement } = props;

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
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
      <button  type="button" onClick={handleDecrement} >Decrement</button>
    </div>
  );
};
export default FCCounter;