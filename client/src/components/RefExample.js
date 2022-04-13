
import React, {Fragment, useRef} from 'react';
 
function RefExample() {
 
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const focusText = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value ="Hi.. Your textarea";
    focusPoint.current.focus();
  };
  const onClickText = () => {
    focusText.current.value ="Hi.. Your textbox";
    focusText.current.focus();
  };
  return (
    <Fragment>
      <div>
        <button onClick={onClickHandler}>Text Area </button>
        <button onClick={onClickText}>Text</button>
      </div>
      <label>Click on the button to focus and populate the text.</label><br/>
      <textarea ref={focusPoint} /><br />
      <input ref={focusText}/>
    </Fragment>
  );
};
 
export default RefExample;