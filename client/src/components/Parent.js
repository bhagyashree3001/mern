import React, { useState , useCallback, useMemo, useEffect} from "react";
import Button from './Button';
import Count from './Count';
import {connect, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userAction } from '../actions/user-actions';
import { productAction} from '../actions/product-action';


function Parent({propOne,dispatch}){
  const f_name=useSelector(state=>state.user);
    useEffect(() => {
       console.log(propOne);
        //console.log(f_name);
        
    });
    const[age,setAge]=useState(30);
    const[salary,setSalary]=useState(10000);
    const incrementAge= useCallback(()=>{
        setAge(age+1);
    },[age])

    const incrementSalary= useCallback(()=>{
        setSalary(salary+1000);
        dispatch(productAction("ADD", {name:calculation}));
        dispatch(userAction("UPDATE", salary))
    },[salary]) ;

    const calculation = useMemo(() => expensiveCalculation(age), [age]);
    
    
    return (
        <div>
            <Count text="age" count={age}></Count>
            <Button handleClick={incrementAge}>Age</Button>
            <Count text="salary" count={salary}></Count>
            <Button handleClick={incrementSalary}>Salary</Button>
            <h5>Use Momo Hook : {calculation}</h5>
        </div>
    )
}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 10; i++) {
      num += 1;
    }
    return num;
  };
  function mapStateToProps(state){
    return { propOne: state };
  }
export default connect(mapStateToProps)(Parent);
