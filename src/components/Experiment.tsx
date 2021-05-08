import React from 'react';
import{ Data} from '../Ts/types';

// interface Data{
// name:string;
// } 

const Experiment:React.FC<Data>=(props)=>{

   
    return(
        <div>
            {props.name}
            </div>
    )
}
export default Experiment;
