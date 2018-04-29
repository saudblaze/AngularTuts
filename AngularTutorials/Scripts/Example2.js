/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.Employee = {
            FirstName: "saud",
            LastName: "ansari",
            Gender: "Male",
            PhoneNumber: "9998065220",
        };
        $scope.message = "hello world";

        $scope.Country = {
            Name: "saud",
            Capital: "ansari",
            Flag: "images/IMG_20170901_135114266.jpg",            
        };
    });

//var myController = function ($scope) {
//    $scope.message = "hello world";
//}

//myApp.controller("myController", function ($scope) {
//    $scope.Employee = {
//        FirstName: "saud",
//        LastName: "ansari",
//        Gender: "Male",
//        PhoneNumber: "9998065220",
//    };
//    $scope.message = "hello world";
//})