import angular from 'angular';
import material from 'angular-material';

import SimpleMenuComponent from './simple-menu.component';


export default angular.module('seront.simple.menu', [material])
  .component('serontSimpleMenu', SimpleMenuComponent)
  .name;

