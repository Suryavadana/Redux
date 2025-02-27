import React from 'react';
import { connect } from 'react-redux';
//import { increase,decrease } from './actions';

const Inc = ({count,increase,decrease}) => {
  return (
    <div>
      Count from Inc Component: {count} <br/> <br/>
      <button onClick={()=>increase()}>Increment</button>
      <button onClick={()=>decrease()}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    count: state // Assuming state is just a number (count)
  });
  
  const mapDispatchToProps =(dispatch) => {
   return{
    //dispatching the plain actions
        increase : ()=> dispatch({type: 'INCREMENT'}),
        decrease : ()=> dispatch({type: 'DECREMENT'}),
   }
  };
  



export default connect(mapStateToProps,mapDispatchToProps)(Inc);
