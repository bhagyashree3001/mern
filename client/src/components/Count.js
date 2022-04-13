import React from "react";


function Count({text, count}){
  console.log(`rendering:  ${text}`);
  return(
    <h6> Use CallBack Hook | {text} - {count} </h6> 
  )
}

export default React.memo(Count);