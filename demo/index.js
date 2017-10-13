import './index.css';
import '../node_modules/angular-material/angular-material.css';
import '../node_modules/angular-material-data-table/dist/md-data-table.css';
import angular from 'angular';
import ngMaterial from 'angular-material';

import {default as SerontComponents} from '../src/seront-ngmd-comps.module';

import main from './components/demo-table-1.component';
import 

import routes from './routes';

export default angular.module('app', [
    ngMaterial,
    mdTable
  ])
  .config(routes)
  .component('demoTable1', DemoTable1)
  .component('demoTable2', DemoTable2)
;
