import {tableConfig} from './demo-table-1.config';
function DemoTable1Controller($log, $mdDialog) {
  var $ctrl = this;
  $ctrl.action1Value = false;
  $ctrl.log = $log.log;
  $ctrl.md = $mdDialog;

  $ctrl.headers = tableConfig.headers;
  $ctrl.config = tableConfig.config;
  $ctrl.objectConfig = tableConfig.objectConfig;
  $ctrl.pagination = tableConfig.pagination;

  var object1 = {
    key1: true,
    key2: 111222333,
    key3: "Object 1 input text",
    key4: 1,
    key5: [{email: "correo@dominio.com"}, {email: "correo@dominio.com"}],
    key7: 1
  };
  var object2 = {
    key1: false,
    key2: 111222333,
    key3: "Object 2 input text",
    key4: "0",
    key5:[{email: "correo@dominio.com"}, {email: "correo@dominio.com"}],

    key7: 2
  };
  var object3 = {
    key1: true,
    key2: 111222333444,
    key3: "Object 3 input text",
    key4: "0",
    key5: [{email: "correo@dominio.com"}, {email: "correo@dominio.com"}],
    key7: 3
  };
  $ctrl.objects = [object1, object2, object3];

  $ctrl.show = function(name, object){
    $ctrl.view(name, object);
    $ctrl.md.show(
      $ctrl.md.alert()
        .parent(angular.element(document.querySelector('main')))
        .clickOutsideToClose(true)
        .title('Action: ' + name)
        .textContent(JSON.stringify(object))
        .ariaLabel('Alert Dialog Demo')
        .ok('Roger roger!')
        // .targetEvent(ev)
    );
  };

  $ctrl.view = function(name, object){
    $ctrl.actionName = name;
    $ctrl.object = object;
  };

  $ctrl.accionTabla = function(name, object) {
    $ctrl.view(name, object);
  };

  $ctrl.onSelect = function(object){
    $ctrl.selection = "Selected";
    $ctrl.object = object;
  };

  $ctrl.onDeselect = function(object){
    $ctrl.selection = "Deselected";
    $ctrl.object = object;
  };

  $ctrl.$onInit = function() {
    $ctrl.log("user admin componente");
  };

 $ctrl.onPaginate = function(page, limit){
    console.log("page " + page + " limit: " + limit);
  };
}

export const DemoTable1 = {
  template: require('./demo-table-1.html'),
  controller: ["$log", "$mdDialog", DemoTable1Controller],
  bindings: {

  }
};
