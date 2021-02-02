import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ToDoAdd from './ToDoAdd';
import ToDoItem from './ToDoItem';
import todoApi from '../api/todoApi'; 
import { setTodos, search, sortTodosByAlpha, filterTodosByStatus } from '../redux/actions';

const ToDoApp = () => {
  const dispatch = useDispatch();
  // const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [status, setStatus] = useState('all');
  
  useEffect(() => {
    todoApi.getAll().then(res => dispatch(setTodos(res.data)));
  }, [dispatch]);
  
  const todos = useSelector(state => state.filteredTodos ? state.filteredTodos : state.todos);

  // const filteredByTitle = todos.filter(todo => {
  //   return todo.title.toLowerCase().includes(search.toLowerCase());
  // });

  // const sortedByTitle = filteredByTitle.sort((a, b) => {
  //   let isReversed = (sort === 'asc') ? 1 : -1;
  //   return isReversed * a.title.localeCompare(b.title);
  // });

  // const filterdByStatus = sortedByTitle.filter(todo => {
  //   if(status === 'all') {
  //     return todo;
  //   };
  //   let newStatus = status === '1' ? false : true;
  //   return todo.status === newStatus;
  // });

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-lg-8 col-md-12">
          <h1 className="py-5 d-md-flex align-items-center justify-content-between">
            <span>My to-dos</span>
            <input 
              type="text" 
              className="form-control search" 
              placeholder="Search something..." 
              onChange={e => dispatch(search(e.target.value))}
            />
            <select className="form-control sort" onChange={e => dispatch(sortTodosByAlpha(e.target.value))}>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
            <select className="form-control sort" onChange={e => dispatch(filterTodosByStatus(e.target.value))}>
              <option value="all">All</option>
              <option value="1">Active</option>
              <option value="2">Done</option>
            </select>
          </h1>
          <ToDoAdd />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <ul className="list-group">
            {todos.map((todo) => (
              <ToDoItem 
                key={todo.id}
                todo={todo} 
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToDoApp;