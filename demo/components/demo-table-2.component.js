import {tableConfig} from './demo-table-2.config';
class DemoTable1Controller {
    constructor($log, $mdDialog) {
    this.action1Value = false;
    this.log = $log.log;
    this.md = $mdDialog;
    this.headers = tableConfig.headers;
    this.config = tableConfig.config;
    this.pagination = tableConfig.pagination;
    this.actions = tableConfig.actions;

    this.objectConfig = tableConfig.objectConfig;

    var object1 = {
      key1: 'dashboard',
      key2: "Text in object 1",
      key3: {value: "child value"},
      key4: "http://lorempixel.com/50/40",
      key5: new Date()
    };
    var object2 = {
      key1: 'people',
      key2: "Text in object 2",
      key3: {value: "child value"},
      key4: "http://lorempixel.com/50/40",
      key5: new Date()
    };
    this.objects = [object1, object2];
  }

  show(name, object){
    this.view(name, object);
    this.md.show(
      this.md.alert()
        .parent(angular.element(document.querySelector('main')))
        .clickOutsideToClose(true)
        .title('Action: ' + name)
        .textContent(JSON.stringify(object))
        .ariaLabel('Alert Dialog Demo')
        .ok('Roger roger!')
        // .targetEvent(ev)
    );
  }

  view(name, object){
    this.actionName = name;
    this.object = object;
  }

  accionTabla(name, object) {
    // this.show(name, object);
    this.view(name, object);
  }

  $onInit() {
    this.log("user admin componente");
  }

  quitarAcciones(){
    this.actions = [];
  }

  onPaginate(page, limit){
    console.log("page " + page + " limit: " + limit);
  }

}

export const DemoTable2 = {
  template: require('./demo-table-2.html'),
  controller: ["$log", "$mdDialog", DemoTable1Controller],
  bindings: {

  }
};
