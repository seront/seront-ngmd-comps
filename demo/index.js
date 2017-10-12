import './index.css';
import '../node_modules/angular-material/angular-material.css';
import '../node_modules/angular-material-data-table/dist/md-data-table.css';
import angular from 'angular';
import ngMaterial from 'angular-material';

import {default as mdTable} from '../src/md-dytable.module';
// import {UserAdmin} from './components/user-admin/user-admin.component';
import {DemoTable1} from './components/demo-table-1.component';
import {DemoTable2} from './components/demo-table-2.component';


export default angular.module('app', [
    ngMaterial,
    mdTable
  ])
  // .component('userAdmin', UserAdmin)
  .component('demoTable1', DemoTable1)
  .component('demoTable2', DemoTable2)
;
