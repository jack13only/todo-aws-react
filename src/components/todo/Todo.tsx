import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteTodoMutation, usePostUpdateTodoMutation } from '../../app/RtkQuery';
import FormControlLabel from '@mui/material/FormControlLabel';
export type TodoType = {
  id: string;
  title: string;
  description: string;
  done: boolean;
};

const Todo = (todoData: TodoType) => {
  const { title, description, done, id } = todoData;
  const [postUpdateTodo] = usePostUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const handleChange = async () => {
    await postUpdateTodo({ ...todoData, done: !done });
  };

  return (
    <Card sx={{ width: 345, height: 300 }}>
      {/* <CardMedia sx={{ height: 140 }} image="/static/images/cards/contemplative-reptile.jpg" /> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 150 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          color="error"
          onClick={async () => await deleteTodo(id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ marginLeft: 5 }}
              checked={done}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Done' }}
            />
          }
          label="Done"
        />
      </CardActions>
    </Card>
  );
};

export { Todo };
