/// <reference path="angular.js" />


var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.technologies = [
            { name: "c#", likes: 0, dislikes: 0 },
            { name: "angular", likes: 0, dislikes: 0 },
            { name: "java", likes: 0, dislikes: 0 },
            { name: "bootstrap", likes: 0, dislikes: 0 },
            { name: "jquery", likes: 0, dislikes: 0 },
            { name: "json", likes: 0, dislikes: 0 },
        ];

        $scope.IncreatementLikes = function (technology) {
            technology.likes++;
        };
        $scope.IncreatementDislikes = function (technology) {
            technology.dislikes++;
        };
    })
                