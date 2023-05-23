import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, Colors, ArcElement, Tooltip, Legend } from 'chart.js';
import { useGetTodosQuery } from '../../app/RtkQuery';
import { TodoType } from '../../components/todo/Todo';
Chart.register(ArcElement, Tooltip, Legend, Colors);

const ChartJs = () => {
  const { data: todos = [] } = useGetTodosQuery('');
  const doneTodos = todos.filter((todo: TodoType) => todo.done).length;
  const data = {
    labels: ['Done', 'Not done'],
    datasets: [
      {
        label: 'Number of todos',
        data: [doneTodos, todos.length - doneTodos],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export { ChartJs };
