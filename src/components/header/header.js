import React from 'react';
import { styles } from "./style";
import { Container } from '@material-ui/core';
import logo from '../../assets/logo.png';

import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

export class HeaderComponent extends React.Component {
    constructor(props)  {
      super(props);
      console.log(props);
    }

    render() {
      return (
        <Container style={styles.general} maxWidth="lg">
          <Container style={styles.header} maxWidth="lg">
            <img src={logo} alt="Logo" width="100"></img>&nbsp;
            {this.props.mostrarBotonInicio ? (
              <div style={{flex: 1, justifyContent: 'flex-end', color: '#000', float: 'right'}}>
                <Button variant="contained" color="primary">
                  <Link to="/" style={{textDecoration: 'none', color: '#FFF'}}>Regresar</Link>
                </Button>
              </div>
            ):(<span></span>)}
          </Container>
          <Container style={styles.line} maxWidth="lg">
            &nbsp;
          </Container>
        </Container>
      );
    }
}