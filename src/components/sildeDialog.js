import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {  useState } from 'react';
import { Paper,Container, Card,Grid ,IconButton } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DropZone from './dropZone';
import { width } from '@mui/system';
import FotoInfo from './fotoInfo';


 function SwipeableTemporaryDrawer() {
  const sildeButtonStyle = { color: 'black', size: 'large' };
  const silderButton = { position: 'absolute ', zIndex: 1060, margin: '43vh 0 0 0 ', width:'300px' , height: '100%'} ;
  const swipeableStyle = {height: 'auto' , width: '300px'};
  const paperStyle = {height: '100vh' , width: '300px', backgroundColor:'darkseagreen' } ;
   
  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift'))
     {
      return;
    }

    setState({ ...state, ['left']: open });
  };

  const content = (anchor) => (
    <Paper style={paperStyle}>
    <Box style={swipeableStyle} 
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(false)}
    >
      <DropZone></DropZone>
    </Box>
    </Paper>
  );

  return (
    
    <Grid style={silderButton} > 
        <React.Fragment>
          
          <IconButton onClick={toggleDrawer(true)} style = {sildeButtonStyle}><KeyboardDoubleArrowRightIcon ></KeyboardDoubleArrowRightIcon></IconButton>
          <SwipeableDrawer   style={swipeableStyle}
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            // disableDiscovery ={false}
            disableSwipeToOpen ={true}
            // hysteresis = {0.52}
            minFlingVelocity ={250}
            swipeAreaWidth = {20}
          >
            {content()}
          </SwipeableDrawer>
        </React.Fragment>

    </Grid>
    
  );
}
export default SwipeableTemporaryDrawer;
