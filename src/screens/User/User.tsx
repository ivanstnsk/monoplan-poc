import * as React from 'react';
import { Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { SideMenu, Header, MonthSelect, Breadcrumbs } from './components';
import { Dashboard, Planning } from './screens';
import { useStore } from './useStore';
import { useStyles } from './styles';

export const User: React.FC = () => {
  const classes = useStyles();
  const Store = useStore();

  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleDrawerToggle = React.useCallback(() => {
    console.log(drawerOpen, !drawerOpen)
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen, setDrawerOpen]);

  const handleLogout = React.useCallback(() => {
    Store.onRemoveToken();
  }, [Store]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        drawerOpen={drawerOpen}
        onDrawerToggleClick={handleDrawerToggle}
        onLogout={handleLogout}
      />
      <SideMenu
        drawerOpen={drawerOpen}
        userName={Store.userName}
        onDrawerToggleClick={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Breadcrumbs />
        <Container maxWidth="lg" className={classes.container}>
          <MonthSelect />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/planning">
            <Planning />
          </Route>
        </Container>
      </main>
    </div>
  );
}
