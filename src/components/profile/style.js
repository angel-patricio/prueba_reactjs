import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    paper: {
        height: 140,
        width: 100,
        borderWidth: 0,
        borderColor: 'none',
        border: 0
    },
    grid:   {
        minHeight: '50vh'
    },
    box:    {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    div:    {
        fontSize: 15,
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    general:    {
        padding: "0px",
        alignContent: "center",
        alignItems: "center"
    }
}));