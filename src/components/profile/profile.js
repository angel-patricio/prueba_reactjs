import React from 'react';
import { useStyles } from "./style";
import { Container, Grid } from '@material-ui/core';
import perfil from "../../assets/admin.png"

/**
 * Componente desacoplado de los valores del candidato
 * Este componente hace uso de los estilos CSS en JS de MaterialUI
 * @param {*} props Elementos para mostrar desde el servicio
 */
export default function ProfileComponent(props)  {
    const classes = useStyles();

    return (
        <Container className={classes.general} maxWidth="lg">
            <Grid container justify="center" spacing={0} alignItems="center" className={classes.grid}>
                <Grid item>
                    <div className={classes.div}>
                        <img src={perfil} width="150" alt="profile_pic"/>
                        <br/>
                        <b>{ (props.visitor) ? props.visitor.data.welcome : '' }</b>
                        <br/>
                        { (props.visitor) ? props.visitor.data.version : '' }
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}