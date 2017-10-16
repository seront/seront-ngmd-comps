import './index.css';
import angular from 'angular';
import ngMaterial from 'angular-material';
import '../node_modules/angular-material/angular-material.css'
import ngRoutes from '@uirouter/angularjs';

import {default as SerontComponents} from '../src/seront-ngmd-comps.module';

import main from './components/main/main.component';
import firstSection from './components/firstSection/firstSection.component';
import secondSection from './components/secondSection/secondSection.component';
import child from './components/child/child.component';

import routes from './routes';

export default angular.module('app', [
    ngMaterial, ngRoutes, SerontComponents
  ])
  .config(routes)
  .component('main', main)
  .component('firstSection', firstSection)
  .component('secondSection', secondSection)
  .component('child', child)
;
