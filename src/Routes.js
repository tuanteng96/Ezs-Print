import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import PrintPage from './pages/Print/PrintPage';
import ScreenSizeK58 from './pages/Print/screen/ScreenSizeK58';
import ScreenPrintSizeK58T from './pages/Print/screen/ScreenPrintSizeK58T';
import ScreenPrintSizeK58TTKH from './pages/Print/screen/ScreenPrintSizeK58TTKH';
import ScreenPrintSizeK58DV from './pages/Print/screen/ScreenPrintSizeK58DV';
import ScreenSizeK58X from './pages/Print/screen/ScreenSizeK58X';
import ScreenSizeK58XuatKho from './pages/Print/screen/ScreenSizeK58XuatKho';


import ScreenPrintSizeK80 from './pages/Print/screen/ScreenPrintSizeK80';
import ScreenPrintSizeK80T from './pages/Print/screen/ScreenPrintSizeK80T';
import ScreenPrintSizeK80TTKH from './pages/Print/screen/ScreenPrintSizeK80TTKH';
import ScreenPrintSizeK80DV from './pages/Print/screen/ScreenPrintSizeK80DV';
import ScreenSizeK80X from './pages/Print/screen/ScreenSizeK80X';
import ScreenSizeK80XuatKho from './pages/Print/screen/ScreenSizeK80XuatKho'

import ScreenPrintSizeA5 from './pages/Print/screen/ScreenPrintSizeA5';
import ScreenPrintSizeA5T from './pages/Print/screen/ScreenPrintSizeA5T';
import ScreenPrintSizeA5TTKH from './pages/Print/screen/ScreenPrintSizeA5TTKH';
import ScreenPrintSizeA5DV from './pages/Print/screen/ScreenPrintSizeA5DV';
import ScreenPrintSizeA5X from './pages/Print/screen/ScreenPrintSizeA5X';

import ScreenPrintSizeA4 from './pages/Print/screen/ScreenPrintSizeA4';
import ScreenPrintSizeA4T from './pages/Print/screen/ScreenPrintSizeA4T';
import ScreenPrintSizeA4TTKH from './pages/Print/screen/ScreenPrintSizeA4TTKH';
import ScreenPrintSizeA4DV from './pages/Print/screen/ScreenPrintSizeA4DV';
import ScreenPrintSizeA4X from './pages/Print/screen/ScreenPrintSizeA4X';
import ScreenPrintSizeA5XuatKho from './pages/Print/screen/ScreenPrintSizeA5XuatKho';
import ScreenPrintSizeA4XuatKho from './pages/Print/screen/ScreenPrintSizeA4XuatKho';

function Routes(props) {
    return (
      <Switch>
        <Redirect exact from="/" to="/print" />
        <Route path={`/print/k58`} component={ScreenSizeK58} />
        <Route path={`/print/T58`} component={ScreenPrintSizeK58T} />
        <Route path={`/print/TTKH58`} component={ScreenPrintSizeK58TTKH} />
        <Route path={`/print/K58DV`} component={ScreenPrintSizeK58DV} />
        <Route path={`/print/K58X`} component={ScreenSizeK58X} />
        <Route path={`/print/K58XK`} component={ScreenSizeK58XuatKho} />

        <Route path={'/print/K80'} component={ScreenPrintSizeK80}/>
        <Route path={'/print/T80'} component={ScreenPrintSizeK80T}/>
        <Route path={'/print/TTKH80'} component={ScreenPrintSizeK80TTKH}/>
        <Route path={`/print/K80DV`} component={ScreenPrintSizeK80DV} />
        <Route path={`/print/K80X`} component={ScreenSizeK80X} />
        <Route path={`/print/K80XK`} component={ScreenSizeK80XuatKho} />

        <Route path={'/print/A5'} component={ScreenPrintSizeA5}/>
        <Route path={'/print/A5T'} component={ScreenPrintSizeA5T}/>
        <Route path={'/Print/A5TTKH'} component ={ScreenPrintSizeA5TTKH}/>
        <Route path={'/Print/A5DV'} component ={ScreenPrintSizeA5DV}/>
        <Route path={'/Print/A5X'} component ={ScreenPrintSizeA5X}/>
        <Route path={'/Print/A5XK'} component ={ScreenPrintSizeA5XuatKho}/>


        <Route path={'/print/A4'} component={ScreenPrintSizeA4}/>
        <Route path={'/print/A4T'} component={ScreenPrintSizeA4T}/>
        <Route path={'/print/A4TTKH'} component={ScreenPrintSizeA4TTKH}/>
        <Route path={'/print/A4DV'} component={ScreenPrintSizeA4DV}/>
        <Route path={'/print/A4X'} component={ScreenPrintSizeA4X}/>
        <Route path={'/print/A4XK'} component={ScreenPrintSizeA4XuatKho}/>
        <Route path={`/print`} component={PrintPage} />
      </Switch>
    );
}

export default Routes;