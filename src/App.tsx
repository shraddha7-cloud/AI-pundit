import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


import MyMUIPlayground from './components/MyMUIPlayground';
import AppShell from './components/AppShell';
import PageHeading from './components/PageHeading';
import SideNav from './components/SideNav';
import DropdownHeaderCollapsed from './components/DropdownHeaderCollapsed';
import RoutingForm from './components/RoutingForm';
function App() {
  return (
    <div>
    
      <AppShell />
   
      <SideNav />
      <DropdownHeaderCollapsed />
      <RoutingForm />


    </div>
  );
}

export default App;
