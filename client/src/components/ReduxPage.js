import React, { useEffect, useState} from "react";
import {connect, useSelector , useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userAction } from '../actions/user-actions';
import { productAction} from '../actions/product-action';


function ReduxPage(){
  const f_name=useSelector(state=>state);
  const [product, setProduct] = useState("dew");
  const [user, setUser] = useState("dssadf");
  const dispatch = useDispatch();
    useEffect(() => {
        //console.log(f_name);      
    });
    function changeRedux(event){
        dispatch(productAction("ADD", {name:product}));
        dispatch(userAction("UPDATE", user))
    }
    //dispatch(productAction("ADD", {name:"dsa"}));
    //dispatch(userAction("UPDATE", "456"))
    
    
    return (
        <div>
            Product : <input text ={product} />
            User : <input text={user}/>
            <button onClick={changeRedux} > Update Store </button>
        </div>
    )
}
export default connect()(ReduxPage);
