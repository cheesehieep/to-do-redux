import * as types from './actions';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case types.UPDATE_TODO: 
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case types.SET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case types.CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      };
    case types.SEARCH:
      return {
        ...state,
        filteredTodos: state.todos.filter(todo => todo.title.toLowerCase().includes(action.payload.toLowerCase()))
      };
    case types.SORT_TODOS_BY_ALPHA:
      return {
        ...state,
        filteredTodos: state.todos.sort((a, b) => (action.payload === "asc" ? 1 : -1) * a.title.localeCompare(b.title))
      };
    case types.FILTER_TODOS_BY_STATUS:
      return {
        ...state,
        filteredTodos: state.todos.filter(todo => {
          if(action.payload === 'all'){
            return todo;
          }
          const status = action.payload === '1' ? false : true;
          return todo.status === status;
        })
      };
    default:
      return state;
  }
};

export default reducer;