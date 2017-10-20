import angular from 'angular';
import material from 'angular-material';

import AccordionComponent from './accordion.component';


export default angular.module('seront.accordion', [material])
  .component('accordion', AccordionComponent)
  .name;

