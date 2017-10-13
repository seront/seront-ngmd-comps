import angular from 'angular';
import material from 'angular-material';

import {SidemenuComponent} from './sidemenu.component';


export default angular.module('sidemenu', [material])
  .component('sidemenu', SidemenuComponent)
  .name;

