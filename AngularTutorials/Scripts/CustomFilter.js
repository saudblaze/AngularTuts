/// <reference path="angular.js" />


var myApp = angular
    .module("myModule", [])    
    .controller("myController", function ($scope) {
        $scope.employee = [
            { name: "saud", dateofbirth: new Date("November 29 1988"), gender: "1", salary: 35000 },
            { name: "fahad", dateofbirth: new Date("May 05 1970"), gender: "1", salary: 55000.788 },
            { name: "dharmesh", dateofbirth: new Date("August 13 1978"), gender: "1", salary: 20000 },
            { name: "nihal", dateofbirth: new Date("July 09 1968"), gender: "3", salary: 12000 },
            { name: "brijal", dateofbirth: new Date("December 25 1994"), gender: "2", salary: 45000 },
        ];

    })