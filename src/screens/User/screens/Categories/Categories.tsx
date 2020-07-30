import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/EditOutlined';
import Search from '@material-ui/icons/Search';

import { Category, CategoryType } from '../../../../store/categories/categories.types';

import { useStore } from './useStore';
import { useStyles } from './styles';

const COLUMNS = [
  { title: 'category', field: 'name' },
];

const tableIcons = {
  Add: React.forwardRef((props: any, ref) => <AddBox {...props} ref={ref} />),
  Check: React.forwardRef((props: any, ref) => <Check {...props} ref={ref} />),
  Clear: React.forwardRef((props: any, ref) => <Clear {...props} ref={ref} />),
  Delete: React.forwardRef((props: any, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: React.forwardRef((props: any, ref) => <Edit {...props} ref={ref} />),
  ResetSearch: React.forwardRef((props: any, ref) => <Clear {...props} ref={ref} />),
  Search: React.forwardRef((props: any, ref) => <Search {...props} ref={ref} />),
  SortArrow: React.forwardRef((props: any, ref) => <ArrowDownward {...props} ref={ref} />),
};

const renderTable = (
  categories: Array<Category>,
  title: string,
  onRowAdd: (newData: any) => Promise<void>,
  onRowUpdate: (newData: any, oldData: any) => Promise<void>,
  onRowDelete: (oldData: any) => Promise<void>,
): JSX.Element => (
    <Grid item xs={12} md={6}>
      <MaterialTable
        title={title}
        columns={COLUMNS}
        data={categories}
        editable={{
          onRowAdd,
          onRowUpdate,
          onRowDelete,
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

export const Categories: React.FC = () => {
  const classes = useStyles();
  const Store = useStore();

  const getRowAddHandler = React.useCallback((categoryType: CategoryType) => {
    return async (data: any): Promise<void> => {
      Store.onAddCategory(categoryType, data.name);
      return Promise.resolve();
    }
  }, [Store]);

  const getRowUpdateHandler = React.useCallback((categoryType: CategoryType) => {
    return async (data: any, oldData: any): Promise<void> => {
      Store.onUpdateCategory(categoryType, data.id, data.name)
      return Promise.resolve();
    }
  }, [Store]);

  const getRowDeleteHandler = React.useCallback((categoryType: CategoryType) => {
    return async (data: any): Promise<void> => {
      const { id } = data;
      Store.onDeleteCategory(categoryType, id);
      return Promise.resolve();
    }
  }, [Store]);

  return (
    <div className={classes.paper}>
      <Grid container spacing={4} className={classes.tableWrapper}>
        {renderTable(
          Store.expenses,
          'Expenses',
          getRowAddHandler('expenses'),
          getRowUpdateHandler('expenses'),
          getRowDeleteHandler('expenses')
        )}
        {renderTable(
          Store.income,
          'Income',
          getRowAddHandler('income'),
          getRowUpdateHandler('income'),
          getRowDeleteHandler('income')
        )}
      </Grid>
    </div>
  );
}