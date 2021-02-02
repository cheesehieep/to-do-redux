import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import todoApi from '../api/todoApi'; 
import { updateTodo, removeTodo, changeStatus } from '../redux/actions';

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [editing, setEditing] = useState(false);

  const onHandleSubmit = (data) => {
    todoApi.update(todo.id, data).then(res => dispatch(updateTodo(res.data)));
    setEditing(!editing);
  };

  const handleRemove = () => {
    todoApi.remove(todo.id).then(res => dispatch(removeTodo(res.data)));
  }

  const handleComplete = () => {
    todoApi.update(todo.id, {status: !todo.status}).then(res => dispatch(changeStatus(res.data)));
  }

  return (
    <li className="d-flex align-items-center list-group-item">
      <button className="btn shadow-none">
        <i className={"fas fa-check-circle" + (todo.status ? " text-success" : " invisible")}></i>
      </button>
      {editing ? 
        (<form className="flex-grow-1" autoComplete="off" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <input 
              type="text"
              className="form-control"
              name="title"
              defaultValue={todo.title} 
              autoFocus 
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 30,
                pattern: {
                  value: /^\S/
                }
              })}
              onBlur={handleSubmit(onHandleSubmit)}
            />
            <small className="form-text text-danger">
              {errors.title && errors.title.type === "required" && <span>This field is required</span>}
              {errors.title && errors.title.type === "minLength" && <span>Min Length 3</span>}
              {errors.title && errors.title.type === "maxLength" && <span>Max Length 30</span>}
              {errors.title && errors.title.type === "pattern" && <span>Invalid space</span>}
            </small>
          </div>
        </form>)
      : (<button 
          className={"btn flex-grow-1 shadow-none" + (todo.status ? " completed" : "")} 
          onClick={() => handleComplete()}>
          {todo.title}
        </button>)
      }
      <button className="btn btn-outline-primary border-0" onClick={() => setEditing(!editing)}><i className="fas fa-edit"></i></button>
      <button className="btn btn-outline-danger border-0" onClick={() => handleRemove()}><i className="fas fa-trash"></i></button>
    </li>
  );
};

export default ToDoItem;
