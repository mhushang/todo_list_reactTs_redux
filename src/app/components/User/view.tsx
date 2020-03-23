import React from 'react';

import { Typography, AppBar, Toolbar, Container, Box, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Link } from 'react-router-dom';

import { Todo } from '../Todos/Todo';
import { Routes } from '../../shared/constants/routes';
import { ITodo } from '../../shared/models/Todos';
import { IStateProps } from './model';


export const View = (props: IStateProps) => {
  const { userTodos, user } = props;
  
  const todosCollection = userTodos.map((todo: ITodo, index: number) => (
    <div key={todo.id}>
        <Todo todo={todo} executant={user?.name} index={index} />
    </div>
  ));

  return (
    <div className="user-page">
      <AppBar>
        <Toolbar>
          <Link to={Routes.empty}>
            <IconButton size="medium">
              <ArrowBackIosIcon />
            </IconButton>
          </Link>
          <Typography align="center" variant="subtitle2">{user?.name}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box my={2}>
          {todosCollection}
        </Box>
      </Container>
      <Toolbar />
    </div>
  );
};
