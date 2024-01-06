import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { SvgIcon } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon component={AutoStoriesIcon} sx={{mr: 2}}></SvgIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dapp
          </Typography>
          <Button color="inherit">Metamask Connect</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}