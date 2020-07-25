import * as React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './styles';

interface Props {
  drawerOpen: boolean;
  onDrawerToggleClick: () => void;
  onLogout: () => void;
}

export const Header: React.FC<Props> = ({
  drawerOpen,
  onDrawerToggleClick,
  onLogout,
}) => {
  const classes = useStyles();

  const appClasses = clsx(classes.appBar, drawerOpen && classes.appBarShift);
  const drawIconClasses = clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden);

  return (
    <AppBar position="absolute" className={appClasses}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerToggleClick}
          className={drawIconClasses}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Page
        </Typography>
        <IconButton color="inherit" onClick={onLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}