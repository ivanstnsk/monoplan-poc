import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStore } from './useStore';
import { useStyles } from './styles';

export const Login: React.FC = () => {
  const classes = useStyles();
  const Store = useStore();

  const [token, setToken] = React.useState<string>('');

  const handleTokenChange = React.useCallback((event: any) => {
    setToken(event.target.value);
  }, [setToken]);

  const handleLoginClick = React.useCallback((event: any) => {
    event.preventDefault();
    Store.onSetToken(token);
  }, [Store, token]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Mono токен
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="token"
            label="Token"
            type="password"
            id="token"
            autoComplete="none"
            value={token}
            onChange={handleTokenChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLoginClick}
          >
            Авторизуватися
          </Button>
        </form>
      </div>
    </Container>
  );
}