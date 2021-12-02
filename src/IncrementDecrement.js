
import React, {useState} from 'react';


let counter =5;





const IncDec = ()=>{
    const [state, setState] = useState(5);
//1
    // function incrementCounter(){

    //     setState(state + 1);
    //     //counter = counter + 1;
    //     //console.log(counter);
        
    // }
//2
    // function incrementCounter(){

    //  setState(prevState=> 
    //  prevState + 1 );
    //  }
//3
function incrementCounter(){

    setState(prevState=> {
    return prevState + 1 
});
    }

    function decrementCounter(){

        setState(prevState=> {
        return prevState - 1 
    });
        }
//comment
//comment2
console.log("INC");
    return(
<>
{//4 /* <button onClick= {()=> setState(state + 1)}>+</button> */ 
}
<button onClick= {incrementCounter}>+</button>
{state}
<button onClick= {decrementCounter}>-</button>
</>

    );
}

export default IncDec;