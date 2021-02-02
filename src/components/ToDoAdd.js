import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import todoApi from '../api/todoApi'; 
import { addTodo } from '../redux/actions';

const ToDoAdd = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, reset } = useForm();

  const onHandleSubmit = (data) => {
    todoApi.create(data).then(res => dispatch(addTodo(res.data)));
    reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Create a new to-do..." 
          name="title" 
          ref={register({
            required: true,
            minLength: 3,
            maxLength: 30,
            pattern: {
              value: /^\S/
            }
          })}
        />
        <small className="form-text text-danger">
          {errors.title && errors.title.type === "required" && <span>This field is required</span>}
          {errors.title && errors.title.type === "minLength" && <span>Min Length 3</span>}
          {errors.title && errors.title.type === "maxLength" && <span>Max Length 30</span>}
          {errors.title && errors.title.type === "pattern" && <span>Invalid space</span>}
        </small>
      </div>
    </form>
  );
};

export default ToDoAdd;
