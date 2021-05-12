import * as React from 'react';
import { Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { SideMenu, Header, Breadcrumbs } from './components';
import { Dashboard, Planning, Categories } from './screens';
import { useStyles } from './styles';
import { useUser } from './hooks';

export const User: React.FC = () => {
  const classes = useStyles();
  const UserHelper = useUser();

  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleDrawerToggle = React.useCallback(() => {
    console.log(drawerOpen, !drawerOpen)
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen, setDrawerOpen]);

  // if (!UserHelper.isAuth) {
  //   return null;
  // }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        drawerOpen={drawerOpen}
        onDrawerToggleClick={handleDrawerToggle}
        onLogout={UserHelper.logout as any}
      />
      <SideMenu
        drawerOpen={drawerOpen}
        userName={UserHelper.username}
        onDrawerToggleClick={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Breadcrumbs />
        <Container maxWidth="lg" className={classes.container}>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/planning">
            <Planning />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Container>
      </main>
    </div>
  );
}
