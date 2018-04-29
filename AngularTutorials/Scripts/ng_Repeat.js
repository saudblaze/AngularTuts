/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.Employeelist = [
            { name: "saud", age: 29, gender: "male", phone: "9998065220" },
            { name: "sarfaraz", age: 36, gender: "male", phone: "9998065225" },
            { name: "tabrez", age: 38, gender: "male", phone: "9998065224" },
            { name: "javed", age: 34, gender: "male", phone: "9998065223" },
            { name: "imran", age: 35, gender: "male", phone: "9998065222" },
            { name: "fahad", age: 30, gender: "male", phone: "9998065221" }
        ];

        $scope.Countrylist = [
            {
                name: "india",
                cities: [
                    { name: "mahaashtra" },
                    { name: "gujarat" },
                    { name: "rajasthan" },
                    { name: "goa" },
                    ]
            },
            {
                name: "ipakistan",
                cities: [
                    { name: "lahore" },
                    { name: "peshawar" },
                    { name: "islamabad" },                    
                ]
            },
            {
                name: "nepal",
                cities: [
                    { name: "khatmandu" }                    
                ]
            },
        ];
    })