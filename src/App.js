import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { routes } from "./config/routes";

function App() {
  return (
    <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteConfigs key={i} {...route} />
          ))}
        </Switch>
    </Router>
  );
}

/**
 * Función que permite que las rutas se carguen de forma dinámica desde un archivo de configuración: 
 * ./config/routes.js
 * @param {*} route 
 */
function RouteConfigs(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
