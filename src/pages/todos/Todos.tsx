import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import React from 'react';
import { useGetTodosQuery } from '../../app/RtkQuery';
import { Todo, TodoType } from '../../components/todo/Todo';

const Todos = () => {
  const { data = [] } = useGetTodosQuery('');
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={4}>
        {data.map(({ title, description, id, done }: TodoType) => (
          <Grid key={id}>
            <Todo title={title} description={description} key={id} id={id} done={done} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Todos };
