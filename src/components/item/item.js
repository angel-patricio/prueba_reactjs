import React from 'react';
import { useStyles } from "./style";
import { Grid } from '@material-ui/core';

/**
 * Componente desacoplado de los valores del candidato
 * Este componente hace uso de los estilos CSS en JS de MaterialUI
 * @param {*} props Elementos para mostrar desde el servicio
 */
export default function ItemComponent(props)  {
    const classes = useStyles();

    const { element } = props;

    return (
        <div className={classes.articulo}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    Foto <br/>
                    {element.image}
                </Grid>
                <Grid item xs={8} className={classes.articulo_descripcion}>
                    <b style={{fontSize: 15}}>{element.name}</b>
                    <br/>
                    <br/>
                    {element.description}
                    <br/>
                    <br/>
                    SKU: {element.sku}
                    <br/>
                    Tipo: {element.type}
                </Grid>
                <Grid item xs={2}>
                    $ {element.price}
                </Grid>
            </Grid>
        </div>
    );
}