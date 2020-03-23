import React, { ChangeEvent } from 'react';
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
    IconButton
} from '@material-ui/core';
import { Fab } from '@material-ui/core';
import Close from '@material-ui/icons/Close';

import { IStateProps } from './model';
import { filterStatusOptions } from '../../../shared/constants/dictionaries';

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
        alignRight: {
            textAlign: 'right',
        }
    }),
);

const selectOptions = [
    { id: 0, value: filterStatusOptions.none, title: 'All' },
    { id: 1, value: filterStatusOptions.completed, title: 'Completed' },
    { id: 2, value: filterStatusOptions.inProgress, title: 'In progress' },
].map(option => <MenuItem key={option.id} value={option.value}>{option.title}</MenuItem>);

export const View = (props: IStateProps) => {
    const classes = useStyles();
    const { filterParams, handleStatusChange, handleTitleChange, handleClearAllFilters } = props;

    return (
        <Paper
            className={classes.paper}>
            <Typography align="left" variant="subtitle1" className={classes.space}>Filters</Typography>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={3}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-label">Status</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={filterParams.status}
                            onChange={
                                (event: ChangeEvent<{ value: unknown }>) => handleStatusChange(event.target.value as string)
                            }
                        >
                            {selectOptions}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        label="Find todo"
                        value={filterParams.title}
                        fullWidth
                        onChange={
                            (event: ChangeEvent<HTMLInputElement>) => handleTitleChange(event.target.value)
                        } 
                    />
                </Grid>
                <Grid item xs={2} className={classes.alignRight}>
                    <IconButton onClick={() => handleClearAllFilters()}>
                        <Close fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
};
