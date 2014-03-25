'use strict';

describe('Controller: IndexCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('starter'));

  var PetIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of pets to the scope', function () {
    scope.pets.should.have.length(4);
  });

});
