angular.module('starter.controllers', [])

//Intro View Controller
.controller('IntroCtrl', ['$scope', '$state',
  function ($scope, $state) {
    'use strict';
    $scope.startApp = function () {
      $state.go('home');
          window.localStorage.didTutorial = true;
    };



//    if (window.localStorage.didTutorial === 'true') {
//      $scope.startApp(function () {});
//
//    } else {
//      console.log('Need to do into');
//      //    navigator.splashscreen.hide();
//
//    }



    $scope.next = function () {
      $scope.$broadcast('slideBox.nextSlide');
    };
    $scope.previous = function () {
      $scope.$broadcast('slideBox.prevSlide');
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
      $scope.slideIndex = index;
    };



  }])

//Main View Controller
.controller('IndexCtrl', ['PetService', '$scope',
  function (PetService, $scope) {


    // 'Pets' is a service returning mock data (services.js)
    'use strict';
    $scope.pets = PetService.all();

    $scope.enableBackButton = false;

//    setTimeout(function () {
//      navigator.splashscreen.hide();
//    }, 750);
  }])


//Menu Controller
.controller('MenuCtrl', function ($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);
})

//Menu Detail Controller
.controller('DetailCtrl', ['$scope', '$stateParams', 'PetService', '$ionicActionSheet',
  function ($scope, $stateParams, PetService, $ionicActionSheet) {
    'use strict';
    $scope.pet = PetService.get($stateParams.petsId);

    $scope.show = function () {

      // Show the action sheet
      $ionicActionSheet.show({


        buttons: [
          {
            text: 'Manual',
          },
          //{
          //text: 'See on Site'
          //},
        ],
        cancelText: 'Close',
        cancel: function () {},

        buttonClicked: function (index) {
          if (index === 0) { // Manual Button

            var location;
            var phoneModel = device.platform;
            if (phoneModel === 'Android') {
              location = '_system';
            } else if (phoneModel === 'iOS') {
              location = '_blank';

            } else {
              location = '_blank';
            }

            window.open($scope.pet.manual, location);
          } else if (index === 1) {

          }

          return true;
        },

        destructiveButtonClicked: function () {
          return true;

        }
      });

    };

    $scope.enableBackButton = false;
  }]);
