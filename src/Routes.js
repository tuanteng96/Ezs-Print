import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import PrintPage from './pages/Print/PrintPage';
import ScreenSizeA5 from './pages/Print/screen/ScreenSizeA5';

function Routes(props) {
    return (
      <Switch>
        <Redirect exact from="/" to="/print" />
        <Route path={`/print/a5`} component={ScreenSizeA5} />
        <Route path={`/print`} component={PrintPage} />
      </Switch>
    );
}

export default Routes;