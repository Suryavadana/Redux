import {createStore} from 'redux';


function countReducer(state=0, action){
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
//create store with reducer
const store = createStore(countReducer);
export default store;

