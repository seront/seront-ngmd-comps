import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import translate from 'angular-translate';


import { default as SideMenuModule } from './components/sidemenu/sidemenu.module';
import { default as BreadcrumsModule } from './components/breadcrumbs/breadcrumbs.module';



export default angular.module('seront-ngmd-comps', [
  ngMaterial,
  ngSanitize,
  translate,
  BreadcrumsModule,
  SideMenuModule])
  .name;
