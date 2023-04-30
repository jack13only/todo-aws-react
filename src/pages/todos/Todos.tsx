import React from 'react';
import { useGetTodosQuery } from '../../app/RtkQuery';
import { Todo, TodoType } from '../../components/todo/Todo';

const Todos = () => {
  const { data = [] } = useGetTodosQuery('');
  return (
    <div>
      {data.map(({ title, description, id, done }: TodoType) => {
        return <Todo title={title} description={description} key={id} id={id} done={done} />;
      })}
    </div>
  );
};

export { Todos };
