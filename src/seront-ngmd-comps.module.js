import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import translate from 'angular-translate';


import { default as SideMenuModule } from './components/sidemenu/sidemenu.module';
import { default as SimpleMenuModule } from './components/simple-menu/simple-menu.module';
import { default as BreadcrumsModule } from './components/breadcrums/breadcrums.module';
import { default as AccordionModule } from './components/accordion/accordion.module';



export default angular.module('seront-ngmd-comps', [
  ngMaterial,
  ngSanitize,
  translate,
  AccordionModule,
  BreadcrumsModule,
  SideMenuModule,
  SimpleMenuModule])
  .name;
