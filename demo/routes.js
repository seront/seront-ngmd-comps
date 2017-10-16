function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/first-section/child');
  
    $stateProvider
      .state('app', {
        url: '/',
        abstract: true,
        component: 'main'
      })
      .state('app.first-section', {
        url: 'first-section',
        abstract: true,
        component: 'firstSection'
      })
      .state('app.first-section.child', {
        url: '/child',
        component: 'child',
        icon: "settings"
      })
      .state('app.second-section', {
        url: 'second-section',
        abstract: true,
        component: 'secondSection'
      })
      .state('app.second-section.child', {
        url: '/child',
        component: 'child'
      })

      ;
  }
  export default ['$urlRouterProvider', '$stateProvider', routes];