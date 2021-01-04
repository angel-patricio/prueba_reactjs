import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    articulo:   {
        color: "#000",
        fontSize: "11px",
        border: "1px solid #333",
        boxSizing: "border-box",
        flexGrow: 1,
        minWidth: "380px",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "8px",
        userSelect: "none",
        padding: 8 * 2,
        margin: `0 0 8px 0`,
    },
    articulo_descripcion:   {
        textAlign: 'left',
        justifyContent: 'flex-start'
    }
}));