import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import PrintPage from './pages/Print/PrintPage';
import ScreenSizeK58 from './pages/Print/screen/ScreenSizeK58';
import ScreenPrintSizeK58T from './pages/Print/screen/ScreenPrintSizeK58T';
import ScreenPrintSizeK58TTKH from './pages/Print/screen/ScreenPrintSizeK58TTKH';
import ScreenPrintSizeK58DV from './pages/Print/screen/ScreenPrintSizeK58DV';


import ScreenPrintSizeK80 from './pages/Print/screen/ScreenPrintSizeK80';
import ScreenPrintSizeK80T from './pages/Print/screen/ScreenPrintSizeK80T';
import ScreenPrintSizeK80TTKH from './pages/Print/screen/ScreenPrintSizeK80TTKH';
import ScreenPrintSizeK80DV from './pages/Print/screen/ScreenPrintSizeK80DV';

import ScreenPrintSizeA5 from './pages/Print/screen/ScreenPrintSizeA5';
import ScreenPrintSizeA5T from './pages/Print/screen/ScreenPrintSizeA5T';
import ScreenPrintSizeA5TTKH from './pages/Print/screen/ScreenPrintSizeA5TTKH';

import ScreenPrintSizeA4 from './pages/Print/screen/ScreenPrintSizeA4';
import ScreenPrintSizeA4T from './pages/Print/screen/ScreenPrintSizeA4T';
import ScreenPrintSizeA4TTKH from './pages/Print/screen/ScreenPrintSizeA4TTKH';


function Routes(props) {
    return (
      <Switch>
        <Redirect exact from="/" to="/print" />
        <Route path={`/print/k58`} component={ScreenSizeK58} />
        <Route path={`/print/T58`} component={ScreenPrintSizeK58T} />
        <Route path={`/print/TTKH58`} component={ScreenPrintSizeK58TTKH} />
        <Route path={`/print/K58DV`} component={ScreenPrintSizeK58DV} />

        <Route path={'/print/K80'} component={ScreenPrintSizeK80}/>
        <Route path={'/print/T80'} component={ScreenPrintSizeK80T}/>
        <Route path={'/print/TTKH80'} component={ScreenPrintSizeK80TTKH}/>
        <Route path={`/print/K80DV`} component={ScreenPrintSizeK80DV} />

        <Route path={'/print/A5'} component={ScreenPrintSizeA5}/>
        <Route path={'/print/A5T'} component={ScreenPrintSizeA5T}/>
        <Route path={'/Print/A5TTKH'} component ={ScreenPrintSizeA5TTKH}/>


        <Route path={'/print/A4'} component={ScreenPrintSizeA4}/>
        <Route path={'/print/A4T'} component={ScreenPrintSizeA4T}/>
        <Route path={'/print/A4TTKH'} component={ScreenPrintSizeA4TTKH}/>
        <Route path={`/print`} component={PrintPage} />
      </Switch>
    );
}

export default Routes;