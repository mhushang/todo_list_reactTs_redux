import React, { ChangeEvent, useState } from 'react';

import { makeStyles, Theme, createStyles, Fab, Toolbar, Grid, Paper, LinearProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';

import { IStateProps } from './model';
import { Todo } from './Todo';
import { Filter } from './Filter';
import { AddTodo } from './AddTodo';
import { ITodo } from '../../shared/models/Todos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },
    fab: {
      position: 'fixed',
      right: '50px',
      bottom: '50px',
    },
    paper: {
      maxWidth: 575,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      transition: '0.3s'
    },
    marginAuto: {
      margin: '0 auto',
    }
  }),
);

export const View = (props: IStateProps) => {
  const {
    todos,
    getExecutant,
    paginationPage,
    paginationTotalCount,
    handlePaginationChange,
    handleFilterChange,
    todoFetch
  } = props;
  const [isAddTodo, setIsAddTodo] = useState(false);
  const classes = useStyles();

  const todosCollection = todos.map((todo: ITodo, index: number) => (
    <div key={todo.id}>
      <Todo todo={todo} executant={getExecutant(todo.userId)} index={index} />
    </div>
  ));

  return (
    <div className={`home-page ${classes.root}`}>
      {todoFetch && <LinearProgress variant="query" />}
      <Toolbar />
      {isAddTodo ? <AddTodo /> : null}
      <Filter onFilterChange={handleFilterChange} />
      {todosCollection}
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Pagination
            className={classes.marginAuto}
            color="primary"
            count={paginationTotalCount}
            page={paginationPage}
            onChange={(event: ChangeEvent<any>, value: number) => handlePaginationChange(event, value)}
            showFirstButton showLastButton />
        </Grid>
      </Paper>
      <Fab
        onClick={() => setIsAddTodo(!isAddTodo)}
        className={classes.fab}
        color={isAddTodo ? 'secondary' : 'primary'}
        aria-label="add">
        {!isAddTodo ? <AddIcon /> : <Close />}
      </Fab>
      <Toolbar />
    </div>
  );
};
