export const tableConfig = {
  headers: [
    { name: "Icon", numeric: false, tooltip:{text: "Header tooltip"} },
    { name: "Text", numeric: false },
    { name: "Child", numeric: false },
    { name: "Image", numeric: false },
    { name: "Date", numeric: true }
  ],
  config: {
    multiple: false, // seleccionar mas de una fila a la vez?
    progress: "", //promesa para mostrar barra de carga o cambio en
    autoSelect: false, //true
    rowSelect: false,
    selectId: "", // propiedad del objeto que lo identifica como unico
    rowSelectDisable: "" //propiedad del objeto en la fila que dice si la fila se puede seleccionar o no
  },
  objectConfig: {
    key1: { type: "icon", order: 0 },
    key2: {
      type: "text", order: 1
    },
    key3: { type: "child", child: 'value', order: 3 },
    key4: { type: "image", order: 4},
    key5: { type: "date", format: "dd-MM-yyyy"}
  },
  actions:[
    {
      style: ["md-raised", "md-primary", "md-fab"],
      cellStyle: ["action-cell-style-flat"],
      name: "action1",
      icon: {
        name: "people",
        style: []
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
    },
    {
      style: ["md-raised", "md-primary"],
      cellStyle: ["action-cell-style-flat"],
      text: "action2",
      name: "action2",//Nombre dentro del formulario
      model: '', //Nombre de la propiedad del objeto asociada a este switch
      tooltip: {
        style: [],
        zIndex: 0,
        direction: "top",
        text: "action button 2"
      },
      type: "button"
    },
    {
      style: [],
      cellStyle: ["action-cell-style-flat"],
      name: "switch-action",//Nombre dentro del formulario
      model: '', //Nombre de la propiedad del objeto asociada a este switch
      tooltip: {
        style: [],
        zIndex: 0,
        direction: "top",
        text: "Switch action"
      },
      type: "switch"
    }
  ],
  pagination: {
    style: ["pagination-label"], //array de strings, nombres de clases a aplicar, opcional
    limit: 2,
    page: 1,
    total: 5,
    pageSelect: 1,
    boundaryLinks: true, //boolean, default: false
    label: "{of: 'of', page: 'Page', rowsPerPage: 'Rows per page'}", //formato del string q se le pasa a la tabla
    limitOptions: [5, 10, 15]
  }
};
