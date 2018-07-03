import  { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({count}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET",
  count: 0
});

//Reducers

const countReducer = (state = { count: 0}, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count +  action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action. decrementBy
      };
    case "SET":
      return {
        count: action.count
      }
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 40}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 243}));


// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//   type: "SET",
//   count: 1000
// });

// store.dispatch({
//   type: 'DECREMENT' ,
//   decrementBy: 3
// });
