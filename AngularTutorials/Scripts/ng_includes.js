/// <reference path="angular.js" />


var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.employee = [
            { name: "saud", dateofbirth: new Date("November 29 1988"), gender: "Male", salary: 35000 },
            { name: "fahad", dateofbirth: new Date("May 05 1970"), gender: "Male", salary: 55000.788 },
            { name: "dharmesh", dateofbirth: new Date("August 13 1978"), gender: "Male", salary: 20000 },
            { name: "nihal", dateofbirth: new Date("July 09 1968"), gender: "Male", salary: 12000 },
            { name: "brijal", dateofbirth: new Date("December 25 1994"), gender: "Female", salary: 45000 },
        ];
        $scope.View = 'HTMLtable.html';
    })