angular.module('starter.directives', [])

//Fadebar Directive
.directive('fadeBar', ['$timeout',
  function ($timeout) {
    'use strict';
    return {
      restrict: 'E',

      template: '<div class="fade-bar"></div>',

      replace: true,

      link: function ($scope, $element) {

          $timeout(function () {

            $scope.$watch('$ionicSideMenuDelegate.getOpenRatio()', function (ratio) {

              $element[0].style.opacity = Math.abs(ratio);

            });
          });
    }
    };
}])


//360 Rotator Directive
.directive('imageRotator', ['$timeout',
  function ($timeout) {
    'use strict';
    return {
      restrict: 'A',
      link: function ($scope, $element) {

        $timeout(function () {
          var imgs, clicked, currImg, currPos, imageTotal, lastImg, widthStep;
          imgs = $element.find('img');
          imageTotal = imgs.length - 1;
          clicked = false;
          widthStep = 15;
          currPos = 0;
          currImg = 0;
          lastImg = 0;

          if (imgs.length > 1) {

            imgs




            .bind('mousedown', function (e) {

              e.preventDefault();

            })

            .filter(':gt(0)').addClass('notseen');


            imgs.bind('mousedown touchstart', function (e) {

              if (e.type === 'touchstart') {

                currPos = window.event.touches[0].pageX;

              } else {

                currPos = e.pageX;
              }

              clicked = true;

              return false;

            })

            .bind('mouseup touchend', function () {
              clicked = false;
            })

            .bind('mousemove touchmove', function (e) {

              var pageX;

              if (clicked) {

                pageX = void 0;

                if (e.type === 'touchmove') {

                  pageX = window.event.targetTouches[0].pageX;
                } else {
                  pageX = e.pageX;
                }
                widthStep = 15;
                if (Math.abs(currPos - pageX) >= widthStep) {
                  if (currPos - pageX >= widthStep) {
                    currImg++;
                    if (currImg > imageTotal) {
                      currImg = 0;
                    }
                  } else {
                    currImg--;
                    if (currImg < 0) {
                      currImg = imageTotal;
                    }
                  }
                  currPos = pageX;
                  imgs.eq(lastImg).addClass('notseen');
                  imgs.eq(currImg).removeClass('notseen');
                  lastImg = currImg;
                }
              }
            });
          }

        });



      }
    };
}]);
