import { createStore, combineReducers} from "redux";
import uuid from 'uuid';
//add expense
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

const removeExpense = ({id = ''} = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return [...state].filter((exp) => { action.expense.id !== exp.id})
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};


const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


//store creattion

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 120}))

store.dispatch(removeExpense({id: expenseOne.expense.id}));

const demoState = {
  expenses: [{
    id: 'asldkfjal;',
    description: "january rent",
    note: "this was the final payment for that address",
    amount: 23432,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
