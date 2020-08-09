import * as React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import MaterialTable, { MTableEditField, MTableCell } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/EditOutlined';
import Search from '@material-ui/icons/Search';

import { CategoryType, Category } from '../../../../../../store/categories/categories.types';
import { PlanningCategory } from '../../../../../../store/planning/planning.types';
import { getMonthNameByIndex } from '../../../../../../utils';

import { ProgressBar } from './components';
import { useStore, CalculatedPlanningGroup } from './useStore';
import { useStyles } from './styles';

type RouteParams = {
  year?: string;
  month?: string;
}

const CATEGORIES_COLUMNS = [
  { title: 'id', field: 'id' },
  // { title: 'name', field: 'name', editable: 'never' },
  { title: 'prognosis', field: 'prognosis' },
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

// const renderBalanceTable = (
//   title: string,
//   balance: Balance,
//   classes: any,
//   color: string,
// ): JSX.Element => (
//     <Grid item xs={12} md={6}>
//       <Typography component="h2" variant="h5">
//         {title}
//       </Typography>
//       <Card className={classes.card}>
//         <div className={classes.cardDetails}>
//           <CardContent>
//             <Grid container>
//               <Grid item xs={3} md={3}>
//                 <Typography component="div" variant="body1">Prognosis</Typography>
//               </Grid>
//               <Grid item xs={3} md={3}>
//                 <Typography component="div" variant="body1">
//                   {balance.prognosis}
//                 </Typography>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <ProgressBar color={color} progress={0} />
//               </Grid>
//             </Grid>
//             <Grid container>
//               <Grid item xs={3} md={3}>
//                 <Typography component="div" variant="body1">Actual</Typography>
//               </Grid>
//               <Grid item xs={3} md={3}>
//                 <Typography component="div" variant="body1">
//                   {balance.actual}
//                 </Typography>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <ProgressBar color={color} progress={59} />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </div>
//       </Card>
//     </Grid>
//   );

// const renderCategoriesTable2 = (
//   categories: Array<CategoryPrognosis>,
//   title: string,
//   onRowUpdate: (newData: any, oldData: any) => Promise<void>,
// ): JSX.Element => (
//     <Grid item xs={12} md={6}>
//       <MaterialTable
//         title={title}
//         columns={CATEGORIES_COLUMNS as any}
//         data={categories}
//         editable={{
//           onRowUpdate,
//         }}
//         icons={tableIcons as any}
//         options={{
//           paging: false,
//           search: false,
//         }}
//         localization={{
//           header: {
//             actions: '',
//           },
//           body: {
//             editRow: {
//               deleteText: 'Видалити цю категорію?',
//             },
//             deleteTooltip: 'Видалити'
//           }
//         }}
//       />
//     </Grid>
//   );

const getRenderCell = (
  classes: any,
  categories: Record<string, Category>,
) => (props: any): JSX.Element => {
  if (props.columnDef.field !== 'id') {
    return (
      <MTableCell {...props} />
    );
  }
  const name = categories[props.value] ? categories[props.value].name : 'invalid';

  return (
    <td>{name}</td>
  );
}

const getRenderEditField = (
  classes: any,
  calculatedCategories: Record<string, PlanningCategory & { name: string }>,
  categories: Record<string, Category>,
) => (props: any): JSX.Element => {
  if (props.columnDef.field !== 'id') {
    return (
      <MTableEditField {...props} />
    );
  }

  return (
    <Select
      // className={classes.selectYear}
      labelId="select-category"
      id="select-category"
      value={props.value}
      displayEmpty
      onChange={(e) => props.onChange(e.target.value)}
    >
      <MenuItem disabled>Select category</MenuItem>
      {Object.values(categories).map((category) => {
        console.log('check', categories, props)
        const disabled = !!calculatedCategories[category.id];

        return (
          <MenuItem
            key={`select-category-${category.id}`}
            value={category.id}
            disabled={disabled}
          >
            {category.name}
          </MenuItem>
        )
      })}
    </Select>
  );
}

const renderPrognosisTable = (
  classes: any,
  calculatedGroup: CalculatedPlanningGroup | undefined,
  onRowAdd: (data: any) => any,
  onRowUpdate: (data: any) => any,
): JSX.Element | null => {

  if (!calculatedGroup) {
    return null;
  }

  return (
    <MaterialTable
      title='table'
      columns={CATEGORIES_COLUMNS as any}
      data={Object.values(calculatedGroup.categories)}
      editable={{
        onRowAdd,
        onRowUpdate,
      }}
      icons={tableIcons as any}
      options={{
        paging: false,
        search: false,
      }}
      components={{
        EditField: getRenderEditField(classes, calculatedGroup.categories, calculatedGroup.all),
        Cell: getRenderCell(classes, calculatedGroup.all),
        Header: () => null,
      }}
    />
  );
}

export const Month: React.FC = () => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const Store = useStore(params.year, params.month);

  console.log('Store', Store);

  const getRowUpdateHandler = React.useCallback((categoryType: CategoryType) => {
    return async (data: any, oldData: any): Promise<void> => {
      console.log(data);
      // Store.onUpdateCategory(categoryType, data.id, data.name)
      return Promise.resolve();
    }
  }, []);

  const getAddPrognosisHandler = React.useCallback((group: 'income' | 'expenses') => (data: any) => {
    const { id, prognosis } = data;
    Store.handleAddCategoryPrognosis(group, id, prognosis);
    return Promise.resolve();
  }, []);

  const getUpdatePrognosisHandler = React.useCallback((group: 'income' | 'expenses') => (data: any) => {
    return Promise.resolve();
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
        {!Store.invalid && (
          <Grid container spacing={4}>
            <Grid item>Income {Store.income?.prognosis}</Grid>
            <Grid item>Expenses {Store.expenses?.prognosis}</Grid>
            {/* {renderBalanceTable(
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
          )} */}
          </Grid>
        )}

        <Grid container spacing={4} className={classes.tableWrapper}>
          <Grid item xs={6} md={6}>
            {renderPrognosisTable(
              classes,
              Store.expenses,
              getAddPrognosisHandler('expenses'),
              getUpdatePrognosisHandler('expenses'),
            )}
          </Grid>
          <Grid item xs={6} md={6}>
            {renderPrognosisTable(
              classes,
              Store.income,
              getAddPrognosisHandler('income'),
              getUpdatePrognosisHandler('income'),
            )}
          </Grid>
        </Grid>
      </>
    </div>
  );
}