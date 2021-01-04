import React, { Component } from 'react';
import { connect } from "react-redux";

import { styles } from "./style";
import { Container, Button } from '@material-ui/core';
import { HeaderComponent } from '../../components/header/header';

import ProfileComponent from '../../components/profile/profile';
import { bindActionCreators } from '@reduxjs/toolkit';

import { requestVisitor } from "../../redux/actions/productos";

import { Link } from "react-router-dom";

/**
 * Componente de la pantalla inicial que muestra la bienvenida al usuario con componentes de React desacoplados
 */
class Splash extends Component  {

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Mandamos a llamar la información del visitante cuando se inicia la aplicación
   */
  componentDidMount() {
    this.props.requestVisitor();
  }

  render()  {
    const { visitor } = this.props;
    return (
      <Container style={styles.body} maxWidth="lg">
          <HeaderComponent />

          <ProfileComponent
            visitor={visitor}
          />

        <Button variant="contained" color="primary">
          <Link to="/home" style={styles.link}>Continuar</Link>
        </Button>

        
      </Container>
    );
  }
}

/**
 * Mapeamos el estado desde Redux a las propiedades del componente
 * @param {*} state 
 */
const mapStateToProps = state => ({
  visitor: state.visitor
});

/**
 * Mapeamos los metodos desde el estado desde Redux
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ requestVisitor }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);