export const tableConfig = {
  headers: [{
      name: "Checkbox",
      numeric: false,
      tooltip: {
        text: "MENSAJE_TOOLTIP"
      }
    },
    {
      name: "Number",
      numeric: false
    },
    {
      name: "Input text",
      numeric: false
    },
    {
      name: "Switch",
      numeric: false
    },
    {
      name: "Objects Array",
      numeric: true
    },
    {
      name: "Copy",
      numeric: true
    },
    {
      name: "Icon set",
      numeric: true
    },
    {
      name: "Filter copy",
      numeric: true
    }
  ],
  config: {
    multiple: false, // seleccionar mas de una fila a la vez?
    progress: "", //promesa para mostrar barra de carga o cambio en
    autoSelect: true, //true
    rowSelect: true,
    selectId: "", // propiedad del objeto que lo identifica como unico
    rowSelectDisable: "" //propiedad del objeto en la fila que dice si la fila se puede seleccionar o no
  },
  objectConfig: {
    key1: {
      type: "checkbox",
      order: 1,
      action: "checkbox"
    },
    key2: {
      type: "input-number",
      action: "input number changed"
    },
    key3: {
      type: "input-text",
      order: 2,
      action: "input text changed"
    },
    key4: {
      type: "switch",
      trueValue: 1,
      falseValue: 0,
      action: "switch changed"
    },
    key5: {
      type: "array-object",
      value: "email",
      limit: 2
    },
    // key6: { type: "text", avoid: '{"@nil":true}'},
    key6: {
      type: "copy",
      copy: "key2"
    },
    key7: {
      type: "icon-set",
      options: [{
          value: 1,
          icon: "person",
          style: []
        },
        {
          value: 2,
          icon: "settings"
        },
        {
          value: 3,
          icon: "dashboard"
        }
      ]
    },
    key8: {
      type: "filter-copy",
      copy: "key2",
      filter: "currency",
      option: "$ "
    }
  },
  pagination: {
    style: ["pagination-label"], //array de strings, nombres de clases a aplicar, opcional
    limit: 2,
    page: 1,
    total: 5,
    pageSelect: 1,
    boundaryLinks: true, //boolean, default: false
    label: "{of: 'DE', page: 'PAGINA', rowsPerPage: 'FILAS_PAGINAS'}", //formato del string q se le pasa a la tabla
    limitOptions: [5, 10, 15]
  }
};
