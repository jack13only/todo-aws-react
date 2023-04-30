import React from 'react';

export type TodoType = {
  id: string;
  title: string;
  description: string;
  done: boolean;
};

const Todo = (todoData: TodoType) => {
  const { title, description, done } = todoData;
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <input type="checkbox" checked={done} onChange={(event) => console.log(event)} />
    </div>
  );
};

export { Todo };
