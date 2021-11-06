import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import PrintPage from './pages/Print/PrintPage';
import ScreenSizeK58 from './pages/Print/screen/ScreenSizeK58';

function Routes(props) {
    return (
      <Switch>
        <Redirect exact from="/" to="/print" />
        <Route path={`/print/k58`} component={ScreenSizeK58} />
        <Route path={`/print`} component={PrintPage} />
      </Switch>
    );
}

export default Routes;