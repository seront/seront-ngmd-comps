# Material Design dinamyc table

AngularJS component for the creation of tables under Material Design specs from a configuration, useful for large aplications where many tables are needed, if
you only need one or two tables probably this component is an overkill, in such case it's recommended use de original module of the table
in https://github.com/daniel-nagy/md-data-table, used by this component.

Demo available in https://seront.github.com/md-dytable/

## Getting started - Preparaciones

### Prerequisites - Prerequisitos

NPM

```angular-material```

AngularJS version >= 1.5.0

### Installing

```json

npm -i md-dytable --save

```
ES6

```javascript

import {default as MdDyTableModule} from 'md-dytable';
//Injecting the dependency in the root module
angular.module('app', [MdDyTableModule])

```

Optionally
```javascript

import './project-root/node_modules/md-dytable/dist/md-dytable.js';
//Injection
angular.module('app', ['md-dytable'])

```

## Usage

In order to use this component you must place an html snippet like the next in your code - Para usar este componente se debe usar un codigo parecido a este
```html

<md-dytable config="$ctrl.config"
    pagination="$ctrl.pagination"
    object-config="$ctrl.objectConfig" 
    headers="$ctrl.headers"
    objects="$ctrl.objects" 
    actions="$ctrl.actions"
    on-paginate="$ctrl.onPaginate(page, limit)" 
    on-action="$ctrl.accionTabla(name, object)"
    on-selection="$ctrl.onSelect" 
    on-deselection="$ctrl.onDeselect">
    </md-dytable>

```

## Options

### Config

Based on https://github.com/daniel-nagy/md-data-table#row-selection

 ```javascript
 this.config = {
      rowSelect: true,
      multiple: true,
      autoSelect: true,
      rowSelect: true,
      selectId: "",
      rowSelectDisable: ""
    };
```

### Object config

The main reason for creating this component, this object allow you to display the data of your objects in every way soported, adding more as are needed,
contact me if you need a better way of the current implementations or have sugestions on what data types add.

The keys in the object config must match the key of the data in the object that you wish to display, the ```order``` attribute is used to establish the displaying order of the attibutes of the object in the table row

 ```javascript
this.objectConfig = {
      key1: { type: "text", order: 0 },
      key2: {
        type: "date", options: {
          format: ""
        },
        order: 1
      },
      key3: { type: "number", order: 2 },
      key4: { type: "text" order: 3}
      key5: { type: "inputNumber", action: 'input-change', text: "DEPENDE", //configuración para input de número
      options:{depends: "key4", min: 0, max: 10} }//depende del valor que tenga el key4 del objeto el la fila
    };

```

#### Supported types

Many types support actions trougth the config value 'action', to use it please refer to [handlign actions](#Actions)

#### type: "checkbox"

 ```javascript
key1: {type: "checkbox", order: 0, action: "checkbox"}, // binds the value of the 'key1' to the checkbox and the name of the action
 ```

 ```html

<md-checkbox ng-if="(conf[1].type === 'checkbox)" ng-model="object[conf[0]]" aria-label="{{conf[0]}}"
            ng-change="$ctrl.onAction({name: conf[1].action, object: object})" ng-class="conf[1].style" ng-disabled="conf[1].disabled">
          </md-checkbox>

 ```

#### type: "input-text"

 ```javascript
key3: {type: "input-text", order: 0, action: "input-text-change"}, // binds the value of the 'key3' to the input type text and the name of the action executed on change
 ```

  ```html

<md-input-container ng-if="(conf[1].type === 'input-text')" ng-model="object[conf[0]]" aria-label="{{conf[0]}}" ng-class="conf[1].style">
            <label></label>
            <input ng-model="object[conf[0]]" ng-change="$ctrl.onAction({name: conf[1].action, object: object})" ng-disabled="conf[1].disabled">
          </md-input-container>

 ```

#### type: "input-number"

__options__

 _min_: Minumun value of the number input

_max_: Maximun value of the number input

_depends_: key of the object (row) which makes the input disabled
 ```javascript
key4: {type: "input-number", order: 0, options:{min: 0, max: 0, depends: "key1"}, action: "input-text-change"}
 ```

```html

<md-input-container ng-if="(conf[1].type === 'input-number')" ng-model="object[conf[0]]" aria-label="{{conf[0]}}" ng-class="conf[1].style">
            <label translate="{{conf[1].text}}"></label>
            <input ng-model="object[conf[0]]"
            ng-change="$ctrl.onAction({name: conf[1].action, object: object})"
            type="number"
             ng-disabled="conf[1].disabled || object[conf[1].options.depends]"
             min="{{conf[1].options.min}}"
             max="{{conf[1].options.max}}">
          </md-input-container>

 ```

#### type: "text"

Span that show the value of the key in the object (row)

```javascript
key4: {type: "text", order: 0}
```

```html

<span ng-if="(conf[1].type === 'text')" ng-class="conf[1].style" ng-disabled="conf[1].disabled" translate="{{object[conf[0]]}}">
          </span>

 ```

#### type: "icon"

Renders an md-icon in the table

```javascript

key4: {type: "icon", order: 0}

```

```html

<md-icon ng-if="(conf[1].type === 'icon')" ng-class="conf[1].style">
            {{object[conf[0]]}}
          </md-icon>

 ```

#### type: "icon-set"

Given a set of icons, Renders an md-icon in the table that matches the value for that option

```javascript
key7: { type: "icon-set", options: [
         {value: 1, icon: "person", style: []},
         {value: 2, icon: "settings"}]
      }
```

```html

<div ng-if="(conf[1].type === 'icon-set')">
  <div ng-repeat="option in conf[1].options">
     <md-icon ng-if="object[conf[0]] == option.value" ng-class="option.style" >
        {{option.icon}}
      </md-icon>
  </div>
</div>

 ```

#### type: "array-text"

Expects that the value of 'key7' be an array of string

```javascript

key7: { type: "array-text"}

```

```html

<div ng-if="(conf[1].type === 'array-text')" ng-class="conf[1].style">
  <span ng-repeat="value in object[conf[0]]">
    <span>
      {{value|translate}}
    <span ng-if="!$last"></span>
    </span>
  </span>
</div>

 ```

#### type: "filter"

Apply an Angular Filter to the value of the given key

_filter_: The name of the registred filter to be apply

_option_: Second (optional) useful for the filter function

```javascript

key7: { type: "filter", filter: "currency", option: "$ ", style: []}

```

```html

<span ng-if="(conf[1].type === 'filter')" ng-class="conf[1].style">
              {{$ctrl.applyFilter(object[conf[0]], conf[1].filter, conf[1].option)}}
</span>

 ```

#### type: "child"

Used to show a value of a nested object ```{key1: value, key7:{childKey7: childValue}}```

```javascript

key7: { type: "child", child: "childKey7" style: []}

```

```html

 <span ng-if="(conf[1].type === 'child')" ng-class="conf[1].style" ng-disabled="conf[1].disabled">
         {{object[conf[0]][conf[1].child]}}
      </span>

 ```

#### type: "copy"

Used to show a value a value that is already displayed in another cell

```javascript

key7: { type: "copy", copy: "childKey7" style: []}

```

```html

<span ng-if="(conf[1].type === 'copy')" ng-class="conf[1].style" ng-disabled="conf[1].disabled">
         {{object[conf[1].copy]}}
</span>

 ```

#### type: "filter-copy"

Used to show a value a value that is already displayed in another cell and applying a filter

```javascript

key7: { type: "filter-copy", copy: "childKey7", filter: "currency", option: "$ ", style: []}

```

```html

<span ng-if="(conf[1].type === 'filter-copy')" ng-class="conf[1].style" ng-disabled="conf[1].disabled">
              {{$ctrl.applyFilter(object[conf[1].child], conf[1].filter, conf[1].option)}}
</span>

 ```

#### type: "image"

Displays an image in the table applying the classes passed

```javascript

key7: { type: "image", alt: "altImage", style: []}

```

```html

<img ng-if="(conf[1].type === 'image')" ng-src="{{object[conf[0]]}}" ng-class="conf[1].style" alt="{{conf[1].alt}}"/>

 ```

#### type: "date"

Displays a date object in the specified format

```javascript

key7: { type: "date", format: "dd-MM-yyyy", style: []}

```

```html

<span ng-if="(conf[1].type === 'date')" ng-class="conf[1].style" ng-disabled="conf[1].disabled">
         {{object[conf[0]]|date: conf[1].format}}
</span>

 ```

#### type: "switch"

Displays a value as a switch

```javascript

key7: { type: "switch", trueValue: "si", falseValue: "no", action: "switchChanged", style: []}

```

```html

<div ng-if="conf[1].type === 'switch'" layout="row">
        <span  flex></span>
          <md-switch ng-if="conf[1].type === 'switch'" ng-model="object[conf[0]]"
          ng-true-value="{{conf[1].trueValue}}" ng-false-value="{{conf[1].falseValue}}"
          ng-change="$ctrl.onAction({name: conf[1].action, object: object})" aria-label="{{conf[0]}}" ng-disabled="conf[1].disabled">
          </md-switch>
          <span flex></span>
        </div>

 ```

### Pagination

Based on https://github.com/daniel-nagy/md-data-table#pagination

 ```javascript

 this.pagination = {
      style: ["pagination-label"], //optional, string array 
      limit: 2, //required
      page: 1, //required, must default to 1
      total: 5, //required
      pageSelect: 1, //optional
      boundaryLinks: true, //boolean, default: false
      label: "{of: 'De', page: 'Página', rowsPerPage: 'Filas por paginas'}", //labels of the pagination
      limitOptions: [5, 10, 15] // Limit options
    };

```

### Headers

 The table headers, the name is displayed using ```$translate```

  ```javascript

this.headers = [
      { name: "header1", numeric: false },
      { name: "header2", numeric: false },
      { name: "header3", numeric: false },
      { name: "header4", numeric: false }
    ];

```

### Objects

 Array of objects to display

```javascript

var object1 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: 1,
      key5: 6
    };
    var object2 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: 1,
      key5: 10
    };
    this.objects = [object1, object2];

```

actions: Array of objects containing the config of the buttons to be added at the end of every row

```javascript

  let action1 = {
      style: ["md-raised", "md-primary", "md-fab"], //opcional, array de strings nombre de clases a aplciar al elemento
      text: "action1",// texto a mostrar, pasa por "$translate"
      name: "action1", // nombre por el cual se ejecuta en el controlador, vease mas adelante
      icon: {//opcional
        name: "people",//opcional, nombre del icono segun a libreria material icons
        style: [] //opcional, array de strings nombre de clases a aplciar al elemento
      },
      tooltip: {
        text: "ACTION1", //texto a desplegar en el tooltip, se le aplica el filtro $translate
        // direction: "top", //opcional, Direccion en la que se desplega el tooltip, default: bottom
        // style: [], //opcional, array de strings nombre de clases a aplciar al elemento
        // zIndex: 0, //opcional
        // delay: 500, //opcional
        // autohide: true //opcional, default: true
      },
      type: "button"
    };

    let action2 = {
      style: [],
      text: "action2",// texto a mostrar, pasa por "$translate"
      name: "action2", // nombre por el cual se ejecuta en el controlador, vease mas adelante
      model: '', //Nombre de la propiedad del objeto asociada a este switch
      tooltip: {
        style: [],
        zIndex: 0,
        // visible: true,
        // delay: 500,
        direction: "top",
        text: "action switch"
      },
      type: "switch" // hasta ahora solo admite valores switch y button
    };
    this.actions = [action1, action2];

```

on-paginate: ejecutará una funcion del controlador cada vez que se presione uno de los botones de la paginacion de la tabla, esa funcion debe esperar recibir 3 valores
    -page = pagina despues del cambio
    -limit = limite de elementos

```javascript

//recomendacion de como usar el binding "onAction"
onPaginate(page, limit){
    console.log("page " + page + " limit: " + limit);
  }

```

### Actions

on-action: ejecutará una funcion del controlador cada vez que se presione uno de los botones de acciones de la tabla, esa funcion debe esperar recibir dos valores
    -name = nombre de la accion que se esta ejecutando, equivalente al "name" de una accion del array "actions".
    -object = objeto correspondiente a la fila en la que se esta ejecutando la accion

```javascript

//recomendacion de como usar el binding "onAction"
accionTabla(name, object) {
    switch (name) {
      case 'action1':
        //ejecutar algo
        break;
      case 'action2':
        action2(object);
        break;
      default:
        this.log(name);
        this.log(object);
    }
  }

```
on-selection y on-deselection: ejecutará una funcion del controlador cada vez que se seleccione/deseleccione una de las filas de la tabla, esa funcion debe esperar recibir el objeto correspondiente a esa fila

```javascript

onSelect(object){
    //do something with the selected object (row)
  }
onDeselect(object){
    //do something with the deselected object (row)
}

```
