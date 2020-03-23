import React, { ChangeEvent } from 'react';
import {
    Grid,
    Typography,
    Checkbox,
    makeStyles,
    Theme,
    createStyles,
    Paper,
    TextField,
    IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

import { Link } from 'react-router-dom';

import { IStateProps } from './model';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 575,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
            transition: '0.3s',
        },
        completed: {
            '& p': {
                textDecoration: 'line-through',
            },
            backgroundColor: '#F5F7F7',
        },
        inProgress: {
            backgroundColor: '#ffffff',
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
        },
        linkStyles: {
            textDecoration: 'none',
            color: '#2196F3',
        },
        marginLeft: {
            marginLeft: '5px',
        },
        spaceAround: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    }),
);

export const View = (props: IStateProps) => {
    const classes = useStyles();
    const { completed, id } = props.todo;
    const {
        handleTodoStatusChange,
        handleDeleteTodo,
        handleEdit,
        index,
        rowEditId,
        handleCancelEdit,
        handleConfirmEdit,
        handleTodoTitleChange,
        title
    } = props;

    return (
        <>
            <Paper
                className={`${classes.paper} ${completed ? classes.completed : classes.inProgress}`}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs={2} className={classes.flexCenter}>
                        <Checkbox
                            checked={completed}
                            onChange={(e) => handleTodoStatusChange(e.target.checked, id)}
                            color="primary"
                            size="medium"
                            inputProps={{ 'aria-label': 'secondary checkbox' }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Link to={`/user/${props?.executant?.id}`} className={classes.linkStyles}>
                            <div className={classes.flexCenter}>
                                {props?.executant?.name && <Typography variant="caption">Person:</Typography>}
                                <Typography
                                    variant="subtitle2"
                                    className={classes.marginLeft}>
                                    {props?.executant?.name}
                                </Typography>
                            </div>
                        </Link>
                        {
                            rowEditId === index ?
                                <form noValidate autoComplete="off">
                                    <TextField
                                        label="Todo title"
                                        value={title}
                                        onChange={
                                            (e: ChangeEvent<HTMLInputElement>) => handleTodoTitleChange(e.target.value)
                                        }
                                        fullWidth
                                    />
                                </form> :
                                <Typography>{title}</Typography>
                        }
                    </Grid>
                    {
                        rowEditId === index ?
                            (<Grid item xs={2} className={classes.spaceAround}>
                                <IconButton onClick={() => handleConfirmEdit(id)} size="small" color="primary">
                                    <Check />
                                </IconButton>
                                <IconButton onClick={() => handleCancelEdit()} size="small">
                                    <Close />
                                </IconButton>
                            </Grid>) :
                            (<Grid item xs={2} className={classes.spaceAround}>
                                <IconButton onClick={() => handleEdit(index)} size="small" color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteTodo(id)} size="small" color="secondary">
                                    <Delete />
                                </IconButton>
                            </Grid>)
                    }
                </Grid>
            </Paper>
        </>
    );
};
