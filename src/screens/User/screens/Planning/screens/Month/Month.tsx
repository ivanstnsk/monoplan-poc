import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';

import { getMonthNameByIndex } from '../../../../../../utils';

import { useStore } from './useStore';
import { useStyles } from './styles';

type RouteParams = {
  year?: string;
  month?: string;
}

export const Month: React.FC = () => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const Store = useStore(params.year, params.month);

  console.log(Store.monthPlan)
  return (
    <div className={classes.paper}>
      {!Store.monthPlan && (
        <div>Invalid month plan data</div>
      )}
      {Store.monthPlan && (
        <>
          {params.month && params.year && (
            <div className={classes.titleContainer}>
              <Typography component="h1" variant="h4">
                {`${getMonthNameByIndex(params.month)} ${params.year}`}
              </Typography>
            </div>
          )}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography component="h2" variant="h5">
                Expenses
              </Typography>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Grid container>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">Prognosis</Typography>
                      </Grid>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">
                          {Store.monthPlan.prognosis.income}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">Actual</Typography>
                      </Grid>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">
                          {Store.monthPlan.actual.income}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography component="h2" variant="h5">
                Income
              </Typography>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Grid container>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">Prognosis</Typography>
                      </Grid>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">
                          {Store.monthPlan.prognosis.expenses}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">Actual</Typography>
                      </Grid>
                      <Grid xs={3} md={3}>
                        <Typography component="div" variant="body1">
                          {Store.monthPlan.actual.expenses}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={4} className={classes.tableWrapper}>
            <Grid item xs={12} md={6}>
              <Typography component="h2" variant="h5">
                Expenses
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Prognosis</TableCell>
                      <TableCell align="right">Actual</TableCell>
                      <TableCell align="right">Difference</TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography component="h2" variant="h5">
                Income
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Prognosis</TableCell>
                      <TableCell align="right">Actual</TableCell>
                      <TableCell align="right">Difference</TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}