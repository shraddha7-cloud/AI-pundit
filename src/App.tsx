import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

// function App() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm" style={{ textAlign: 'center', paddingTop: '4rem' }}>
//         <Typography variant="h4" gutterBottom>
//           🚀 Hello MUI + React + TypeScript!
//         </Typography>
//         <Button variant="contained" color="primary">
//           Click Me!
//         </Button>
//       </Container>
//     </React.Fragment>
//   );
// }

// export default App;


import MyMUIPlayground from './components/MyMUIPlayground';
import Comp2 from './components/Comp2';
import AppShell from './components/AppShell';
import PageHeading from './components/PageHeading';
function App() {
  return (
    <div>
      {/* <Comp2 /> */}
      {/* <MyMUIPlayground /> */}
      <AppShell />
      <PageHeading />
    </div>
  );
}

export default App;
