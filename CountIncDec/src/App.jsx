import React from 'react'
import Inc from './inc';
import { connect } from 'react-redux';


const App = ({count}) => {
  return (
    <div>
      <center>
        <p>Count from AppJS component: {count}</p> <br/> <hr/>
        <Inc />
      </center>
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state // Access the count from the Redux store
});


export default connect(mapStateToProps)(App);
