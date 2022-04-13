import React, { useState , useEffect} from "react";
const StateDemo = () => {
const [counter, setCounter] = useState(0);
useEffect(() => {
    document.title = `You clicked ${counter} times | useEffect Hook`
});
 return (
   <div>
     <h4>Counter | useState: {counter}</h4>
     <button onClick={() => setCounter(counter + 1)}>+</button>
     <button onClick={() => setCounter(counter - 1)}>-</button>
   </div>
 );
};

export default StateDemo;