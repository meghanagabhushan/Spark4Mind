angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.myProgess', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myProgess.html',
        controller: 'myProgessCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.settings', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })
  
  .state('menu.classes', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/classes.html',
        controller: 'classesCtrl'
      }
    }
  })

  .state('register', {
    url: '/page5',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })
  
 
   .state('menu.video', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/video.html',
        controller: 'videoCtrl'
      }
    }
  })
  
    .state('menu.gallery', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/page2')

  

});