var MobileApp=angular.module('app.controllers', ["firebase"])
var shareUserName=null;
MobileApp.controller('homeCtrl', ['$scope', '$stateParams','$timeout','$ionicLoading',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout,$ionicLoading) {
    
  // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  
  // Set a timeout to clear loader
  $timeout(function () {
    $ionicLoading.hide();
  }, 4000);
    
$scope.name=shareUserName;
    
    
(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }
  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();


(function() {
  // cache vars
  var cards = document.querySelectorAll(".card.effect__random");
  var timeMin = 2;
  var timeMax = 5;
  var timeouts = [];

  // loop through cards
  for ( var i = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    var cardID = card.getAttribute("data-id");
    var id = "timeoutID" + cardID;
    var time = randomNum( timeMin, timeMax ) * 1000;
    cardsTimeout( id, time, card );
  }

  // timeout listener
  function cardsTimeout( id, time, card ) {
    if (id in timeouts) {
      clearTimeout(timeouts[id]);
    }
    timeouts[id] = setTimeout( function() {
      var c = card.classList;
      var newTime = randomNum( timeMin, timeMax ) * 1000;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      cardsTimeout( id, newTime, card );
    }, time );
  }

  // random number generator given min and max
  function randomNum( min, max ) {
    return Math.random() * (max - min) + min;
  }
})();

}])


MobileApp.controller('loginCtrl', ['$scope','$state','$stateParams','$firebaseAuth', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$state,$stateParams,$firebaseAuth) {
    
    // Initialize Firebase
       var config = {
        apiKey: "AIzaSyBAQ9oM4_25d-_6wHripf9_WKOwf96eEIo",
        authDomain: "spark4mind-64a5e.firebaseapp.com",
        databaseURL: "https://spark4mind-64a5e.firebaseio.com",
        storageBucket: "spark4mind-64a5e.appspot.com",
        messagingSenderId: "488750004666"
      };
     firebase.initializeApp(config);
     var fbAuth = $firebaseAuth();
      
     //Login into application using Firebase Authencation
     $scope.login=function(username,password){       
         shareUserName=username.split("@")[0];
         console.log("Username:"+shareUserName+" Password:"+password);
         fbAuth.$signInWithEmailAndPassword(username,password).then(function(authData) {
             $state.go("menu.home");
 		}).catch(function(error) {
             alert("UnAuthencated User");
             $state.go("login");
         });
     }
     
     //Register 
     $scope.register = function(username, password) {
        fbAuth.$createUserWithEmailAndPassword(username,password).then(function(userData) {
            return fbAuth.$signInWithEmailAndPassword(username,
                password);
        }).then(function(authData) {
            alert("Register Successfull !! Please Login");
            $state.go("login");
        }).catch(function(error) {
            console.error("ERROR: " + error);
        });
    }

}])

MobileApp.controller('myProgessCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

MobileApp.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

MobileApp.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


MobileApp.controller('musicCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

MobileApp.controller('registerCtrl', ['$scope','$state','$stateParams','$firebaseAuth', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$state,$stateParams,$firebaseAuth) {
    

}])


MobileApp.controller('videoCtrl', ['$scope', '$stateParams','$timeout','$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout,$ionicLoading) {

    // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  
  // Set a timeout to clear loader
  $timeout(function () {
    $ionicLoading.hide();
  }, 5000);


}])

MobileApp.controller('galleryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

MobileApp.controller('booksCtrl', function ($scope, $http) {

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

MobileApp.controller('nytimesCtrl', function ($scope, $http) {

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

MobileApp.controller('feedbackCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.clicked = function(){
        alert("Feedback has been submitted....!! We value your feedback");
    }

}])

MobileApp.controller('articlesCtrl', function ($scope, $http) {

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

MobileApp.controller('classesCtrl', function ($scope, $http) {
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
MobileApp.controller('gameCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

var rows = 10;
var cols = 10;
var squareSize = 30;

// get the container element
var gameBoardContainer = document.getElementById("gameboard");

// make the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;			
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game:
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
var hitCount = 0;

/* create the 2d array that will contain the status of each square on the board
   and place ships on the board (later, create function for random placement!)
   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener("click", fireTorpedo, false);

// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedo(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no ship, change the color and change square's value
		if (gameBoard[row][col] == 0) {
			e.target.style.background = '#bbb';
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard[row][col] = 3;
			
		// if player clicks a square with a ship, change the color and change square's value
		} else if (gameBoard[row][col] == 1) {
			e.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
			gameBoard[row][col] = 2;
			
			// increment hitCount each time a ship is hit
			hitCount++;
			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
			if (hitCount == 17) {
				alert("All enemy battleships have been defeated! You win!");
			}
			
		// if player clicks a square that's been previously hit, let them know
		} else if (gameBoard[row][col] > 1) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}		
    }
    e.stopPropagation();
}
}])