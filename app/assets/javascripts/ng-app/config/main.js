 app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
         /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
         // an abstract state that just serves as a
        // parent for the below child states
        // .state('dashboard', {
        //     abstract: true,
        //     url: '/dashboard',
        //     templateUrl: 'dashboard/layout.html'
        // })
            // the default route when someone hits dashboard
            .state('one', {
                url: '/one',
                templateUrl: 'one.html'
            })
            // this is /dashboard/two
            .state('two', {
                url: '/two',
                templateUrl: 'two.html'
            })
            // this is /dashboard/three
            .state('sign-up', {
                url: '/sign-up',
                templateUrl: 'sign-up.html'
            });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
    });