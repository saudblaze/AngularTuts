/// <reference path="../scripts/angular.js" />


var myApp = angular.module("myModule", [])
    .controller("myControllerOne", function ($scope,$rootScope) {
        $scope.one = "One Available";
        $rootScope.global = "Available every where";
    })
    .controller("myControllerTwo", function ($scope) {
        $scope.two = "Two Available";        
    })