import angular from 'angular';
import material from 'angular-material';

import BreadcrumsComponent from './breadcrums.component';


export default angular.module('seront.breadcrums', [material])
  .component('serontBreadcrums', BreadcrumsComponent)
  .name;

