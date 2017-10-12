import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import translate from 'angular-translate';


import { default as CustomTableModule } from './components/table/table.module';



export default angular.module('md-dytable', [
  ngMaterial,
  ngSanitize,
  translate,
  CustomTableModule])
  .name;
