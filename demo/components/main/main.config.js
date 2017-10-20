export default {menu: [
    { icon: "dashboard", name: "DASHBOARD" },
    {
      expanded: false, icon: "next_week", name: "First section", state: 'app.first-section',
      items: [
        { state: 'app.first-section.child', icon: "settings", name: "Child" }
      ]
    },

    {
        expanded: false, icon: "people", name: "Second section", state: 'app.first-section',
        items: [
          { state: 'app.second-section.child', icon: "translate", name: "Chlid" }
        ]
      },
  ],
  configMenu: {
    class: ["md-sidenav-left", "md-whiteframe-4dp", "h-100"], // ng-class  general
    //https://material.angularjs.org/latest/api/directive/mdSidenav
    disableScrollTarget: "body",
    isLockedOpen: "$mdMedia('gt-md')",
    componentId: 'right'
  },
  configMenuToolbar: {
    class: ["md-theme-light", "md-hue-1", "flex"],
    menu: {
      icon: "expand_more",
      display: "nombre",
      text: '',
      action: "cambio-prestador",
    }
  }
}