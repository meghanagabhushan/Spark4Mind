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

     .state('menu.nytimes', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nytimes.html',
        controller: 'nytimesCtrl'
      }
    }
  })

  .state('menu.articles', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/articles.html',
        controller: 'articlesCtrl'
      }
    }
  })

    .state('menu.books', {
      url: '/page16',
      views: {
        'side-menu21': {
          templateUrl: 'templates/books.html',
          controller: 'booksCtrl'
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

      .state('menu.feedback', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
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

    .state('menu.music', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/music.html',
        controller: 'musicCtrl'
      }
    }
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
  .state('menu.game', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game.html',
        controller: 'gameCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/page2')



});
