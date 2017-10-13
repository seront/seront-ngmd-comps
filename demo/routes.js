function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  
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
        abstract: true,
        component: 'child'
      })
      .state('app.second-section', {
        url: 'second-section',
        component: 'secondSection'
      })
      .state('app.second-section.child', {
        url: '/child',
        abstract: true,
        component: 'child'
      })

      ;
  }
  export default ['$urlRouterProvider', '$stateProvider', routes];