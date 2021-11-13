import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import PrintPage from './pages/Print/PrintPage';
import ScreenSizeK58 from './pages/Print/screen/ScreenSizeK58';
import ScreenPrintSizeK58T from './pages/Print/screen/ScreenPrintSizeK58T';
import ScreenPrintSizeK80 from './pages/Print/screen/ScreenPrintSizeK80';
import ScreenPrintSizeA5 from './pages/Print/screen/ScreenPrintSizeA5';
import ScreenPrintSizeA4 from './pages/Print/screen/ScreenPrintSizeA4';
import ScreenSizeK58C from './pages/Print/screen/ScreenSizeK58C';
import ScreenSizeK58X from './pages/Print/screen/ScreenSizeK58X';
import ScreenPrintSizeK80T from './pages/Print/screen/ScreenPrintSizeK80T';


function Routes(props) {
    return (
      <Switch>
        <Redirect exact from="/" to="/print" />
        <Route path={`/print/k58`} component={ScreenSizeK58} />
        <Route path={`/print/T58`} component={ScreenPrintSizeK58T} />
        <Route path={`/print/C58`} component={ScreenSizeK58C} />
        <Route path={`/print/X58`} component={ScreenSizeK58X} />

        <Route path={'/print/K80'} component={ScreenPrintSizeK80}/>
        <Route path={'/print/T80'} component={ScreenPrintSizeK80T}/>

        <Route path={'/print/A5'} component={ScreenPrintSizeA5}/>
        <Route path={'/print/A4'} component={ScreenPrintSizeA4}/>
        <Route path={`/print`} component={PrintPage} />
      </Switch>
    );
}

export default Routes;