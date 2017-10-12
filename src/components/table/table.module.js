import angular from 'angular';
import materialTable from 'angular-material-data-table';
import {TableComponent} from './table.component';


export default angular.module('md-dytable.table', [materialTable])
  // .component('customTable', TableComponent)
  .component('mdDytable', TableComponent)
  .name;
