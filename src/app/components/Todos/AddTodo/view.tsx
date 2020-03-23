import React from 'react';
import {
    Grid,
    makeStyles,
    createStyles,
    Paper,
    TextField,
    Theme,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Typography,
} from '@material-ui/core';

import { Fab } from '@material-ui/core';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

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
            transition: '0.3s'
        },
        formControl: {
            width: '100%',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        space: {
            marginBottom: '5px',
        },
        flexEnd: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    }),
);


export const View = (props: IStateProps) => {
    const classes = useStyles();
    const { users, handleSubmit, errors, touched, handleChange, isValid, values: { todo, user } } = props;
    
    const selectOptions = users && users.map(user => (
        <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
    ));

    return (
        <Paper
            className={classes.paper}>
            <Typography align="left" variant="subtitle1" className={classes.space}>Add todo</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="select-label">Users List</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                name="user"
                                value={user}
                                error={Boolean(errors.user)}
                                onChange={handleChange}
                                fullWidth>
                                {selectOptions}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Todo title"
                            name="todo"
                            helperText={touched.todo ? errors.todo : ""}
                            error={Boolean(errors.todo)}
                            value={todo}
                            onChange={handleChange}
                            fullWidth />
                    </Grid>
                    <Grid item xs={2} className={classes.flexEnd}>
                        <Fab type="submit" disabled={!isValid} size="small" color="primary" aria-label="edit">
                            <Check />
                        </Fab>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};
