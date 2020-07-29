import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Category } from '../../../../store/categories/categories.types';

import { useStore } from './useStore';
import { useStyles } from './styles';

const renderTable = (categories: Array<Category>, title: string): JSX.Element => (
  <Grid item xs={12} md={6}>
    <Typography component="h2" variant="h5">
      {title}
    </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell component="th" scope="row">
                {category.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
);

export const Categories: React.FC = () => {
  const classes = useStyles();
  const Store = useStore();

  return (
    <div className={classes.paper}>
      <Grid container spacing={4} className={classes.tableWrapper}>
        {renderTable(Store.expenses, 'Expenses')}
        {renderTable(Store.income, 'Income')}
      </Grid>
    </div>
  );
}