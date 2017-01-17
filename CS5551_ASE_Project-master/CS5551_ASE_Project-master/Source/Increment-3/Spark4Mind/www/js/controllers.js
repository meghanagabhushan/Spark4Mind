angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

$scope.FBlogin= function () {

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '227985260951259',
                cookie     : true,  // enable cookies to allow the server to access
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use graph api version 2.5
            });

            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function(response) {
                        console.log('Good to see you, ' + response.name + '.');

                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });

            FB.getLoginStatus(function(response) {
                console.log(response.status);
            });
        };
    }

}])

.controller('myProgessCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])



.controller('registerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('videoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])

.controller('galleryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  .controller('booksCtrl', function ($scope, $http) {

    $scope.booksResult = [];



    $scope.searchBooks=function(){

      var searchAuthor = document.getElementById("author").value;
      var searchTitle = document.getElementById("title").value;

        $http.get('https://www.googleapis.com/books/v1/volumes?q='+searchTitle+'+inauthor:'+searchAuthor+'&key=AIzaSyDEBimHfVEGQYpNLAaGMitQXizvc1w9Zdc').success(function(response){
        angular.forEach(response.items, function(child){
          console.log (child);
          $scope.booksResult.push(child);
        });
      });
    }




  })

.controller('nytimesCtrl', function ($scope, $http) {

       $scope.worldResult = [];
        $scope.techResult = [];
        $scope.diningResult = [];
        $scope.sportsResult = [];
        $scope.fashionResult = [];

    $scope.refreshWorld=function(){

        document.getElementById("a2").classList.remove('active');
        document.getElementById("a1").classList.add('active');
       $http.get('http://api.nytimes.com/svc/topstories/v1/world.json?callback=callbackTopStories&api-key=ed61c93e03a7869f865195212bab69b8:4:73598028').success(function(response){
      angular.forEach(response.results, function(child){
       console.log (child);
           $scope.worldResult.push(child);
      });
    });
    }

    $scope.refreshTech=function(){

     document.getElementById("a1").classList.remove('active');
        document.getElementById("a2").classList.add('active');
       $http.get('http://api.nytimes.com/svc/topstories/v1/technology.json?callback=callbackTopStories&api-key=ed61c93e03a7869f865195212bab69b8:4:73598028').success(function(response){
      angular.forEach(response.results, function(child){
       console.log (child);
           $scope.techResult.push(child);
      });
    });
    }

  $scope.refreshSports=function(){


    $http.get('http://api.nytimes.com/svc/topstories/v1/sports.json?callback=callbackTopStories&api-key=ed61c93e03a7869f865195212bab69b8:4:73598028')
      .success(function(response){
        angular.forEach(response.results, function(child){
          console.log (child);
          $scope.sportsResult.push(child);
        });
      });
  };

  $scope.refreshDining=function(){


    $http.get('http://api.nytimes.com/svc/topstories/v1/dining.json?callback=callbackTopStories&api-key=ed61c93e03a7869f865195212bab69b8:4:73598028')
      .success(function(response){
        angular.forEach(response.results, function(child){
          console.log (child);
          $scope.diningResult.push(child);
        });
      });
  };

  $scope.refreshFashion=function(){


    $http.get('http://api.nytimes.com/svc/topstories/v1/fashion.json?callback=callbackTopStories&api-key=ed61c93e03a7869f865195212bab69b8:4:73598028')
      .success(function(response){
        angular.forEach(response.results, function(child){
          console.log (child);
          $scope.fashionResult.push(child);
        });
      });
  };


})

.controller('feedbackCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.clicked = function(){
        alert("Feedback has been submitted....!! We value your feedback");
    }

}])

.controller('articlesCtrl', function ($scope, $http) {

       $scope.articlesResult = [];



    $scope.searchArticle=function(){

      var searchQuery = document.getElementById("articleWord").value;
       $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+searchQuery+'&facet_field=source&facet_filter=true&begin_date=20160505&end_date=20161005&api-key=ed61c93e03a7869f865195212bab69b8:4:73598028').success(function(response){
      angular.forEach(response.response.docs, function(child){
       console.log (child);
           $scope.articlesResult.push(child);
      });
    });
    }




})

.controller('classesCtrl', function ($scope, $http) {
        $scope.venueList = new Array();
        //$scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("placeName").value;
            var searchQuery = document.getElementById("interestName").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
                document.getElementById('listView').style.display = 'none';
                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=J5Y2UOY5JEQW4QKX2WXBZG4QNAGUZXWIOHLEILLV5SYASEYF" +
                    "&client_secret=UQJCVOYU4MF43X2VIXSIV1HULDYAQOEZW0CZSJ242ROVER43" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);
                handler.success(function (data) {

                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        for (var i = 0; i < data.response.venues.length; i++) {
                            $scope.venueList[i] = {
                                "name": data.response.venues[i].name,
                                "id": data.response.venues[i].id,
                                "location": data.response.venues[i].location
                            };

                        }
                    }

                })

            }
        }
        $scope.getReviews = function (venueSelected) {
            if (venueSelected != null) {
                //This is the API call being made to get the reviews(tips) for the selected place or venue.
                var handler = $http.get("https://api.foursquare.com/v2/venues/" + venueSelected.id + "/tips" +
                    "?sort=recent" +
                    "&client_id=Q0ENF1YHFTNPJ31DCF13ALLENJW0P5MTH13T1SA0ZP1MUOCI" +
                    "&client_secret=ZH4CRZNEWBNTALAE3INIB5XG0QI12R4DT5HKAJLWKYE1LHOG&v=20160215" +
                    "&limit=5");
                handler.success(function (result) {
                    if (result != null && result.response != null && result.response.tips != null &&
                        result.response.tips.items != null) {
                        $scope.mostRecentReview = result.response.tips.items[0];
                        //This is the Alchemy API for getting the sentiment of the most recent review for a place.
                        var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                            "?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8" +
                            "&outputMode=json&text=" + $scope.mostRecentReview.text);
                        callback.success(function (data) {
                            if(data!=null && data.docSentiment!=null)
                            {
                                $scope.ReviewWithSentiment = {"reviewText" : $scope.mostRecentReview.text,
                                                            "sentiment":data.docSentiment.type,
                                                             "score":data.docSentiment.score  };
                                document.getElementById('listView').style.display = 'block';


                            }
                        })
                    }
                })
                handler.error(function (result) {
                    alert("There was some error processing your request. Please try after some time.")
                })
            }

        }



})
