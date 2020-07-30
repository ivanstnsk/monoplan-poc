import * as React from 'react';
import { useParams } from 'react-router-dom';
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

import MaterialTable, { Column } from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/EditOutlined';

import { Category, CategoryType } from '../../../../../../store/categories/categories.types';
import { getMonthNameByIndex } from '../../../../../../utils';

import { ProgressBar } from './components';
import { useStore, CategoryPrognosis, Balance } from './useStore';
import { useStyles } from './styles';

type RouteParams = {
  year?: string;
  month?: string;
}

const CATEGORIES_COLUMNS = [
  { title: 'category', field: 'name', editable: 'never' },
  { title: 'prognosis', field: 'prognosis' },
  { title: 'actual', field: 'actual' },
  { title: 'difference', field: 'difference', editable: 'never' },
];

const tableIcons = {
  Check: React.forwardRef((props: any, ref) => <Check {...props} ref={ref} />),
  Clear: React.forwardRef((props: any, ref) => <Clear {...props} ref={ref} />),
  Edit: React.forwardRef((props: any, ref) => <Edit {...props} ref={ref} />),
  SortArrow: React.forwardRef((props: any, ref) => <ArrowDownward {...props} ref={ref} />),
};

const renderBalanceTable = (
  title: string,
  balance: Balance,
  classes: any,
  color: string,
): JSX.Element => (
    <Grid item xs={12} md={6}>
      <Typography component="h2" variant="h5">
        {title}
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
                  {balance.prognosis}
                </Typography>
              </Grid>
              <Grid xs={6} md={6}>
                <ProgressBar color={color} progress={0} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={3} md={3}>
                <Typography component="div" variant="body1">Actual</Typography>
              </Grid>
              <Grid xs={3} md={3}>
                <Typography component="div" variant="body1">
                  {balance.actual}
                </Typography>
              </Grid>
              <Grid xs={6} md={6}>
                <ProgressBar color={color} progress={59} />
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );

const renderCategoriesTable2 = (
  categories: Array<CategoryPrognosis>,
  title: string,
  onRowUpdate: (newData: any, oldData: any) => Promise<void>,
): JSX.Element => (
    <Grid item xs={12} md={6}>
      <MaterialTable
        title={title}
        columns={CATEGORIES_COLUMNS as any}
        data={categories}
        editable={{
          onRowUpdate,
        }}
        icons={tableIcons as any}
        options={{
          paging: false,
          search: false,
        }}
        localization={{
          header: {
            actions: '',
          },
          body: {
            editRow: {
              deleteText: 'Видалити цю категорію?',
            },
            deleteTooltip: 'Видалити'
          }
        }}
      />
    </Grid>
  );

export const Month: React.FC = () => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const Store = useStore(params.year, params.month);

  const getRowUpdateHandler = React.useCallback((categoryType: CategoryType) => {
    return async (data: any, oldData: any): Promise<void> => {
      console.log(data);
      // Store.onUpdateCategory(categoryType, data.id, data.name)
      return Promise.resolve();
    }
  }, []);

  return (
    <div className={classes.paper}>
      <>
        {params.month && params.year && (
          <div className={classes.titleContainer}>
            <Typography component="h1" variant="h4">
              {`${getMonthNameByIndex(params.month)} ${params.year}`}
            </Typography>
          </div>
        )}
        <Grid container spacing={4}>
          {renderBalanceTable(
            'Expenses',
            Store.expenses.balance,
            classes,
            '#9E3D3D',
          )}
          {renderBalanceTable(
            'Income',
            Store.income.balance,
            classes,
            '#539E3D',
          )}
        </Grid>

        <Grid container spacing={4} className={classes.tableWrapper}>
          {renderCategoriesTable2(
            Store.expenses.categories,
            'Expenses',
            getRowUpdateHandler('expenses'),
          )}
          {renderCategoriesTable2(
            Store.income.categories,
            'Income',
            getRowUpdateHandler('income'),
          )}
        </Grid>
      </>
    </div>
  );
}