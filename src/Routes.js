import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import PrintPage from './pages/Print/PrintPage';

function Routes(props) {
    return (
      <Switch>
        <Redirect exact from="/" to="/print" />
        <Route path={`/print`} component={PrintPage} />
      </Switch>
    );
}

export default Routes;