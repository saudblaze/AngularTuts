/// <reference path="angular.js" />


var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope, stringServices) {

        $scope.tranformString = function (input) {
            //if (!input) {
            //    return input;
            //}

            //var output = '';
            //for (var i = 0; i < input.length; i++) {
            //    if (i > 0 && input[i] == input[i].toUpperCase()) {
            //        output = output + " ";
            //    }

            //    output = output + input[i];
            //}

            //$scope.output = output;
            $scope.output = stringServices.processString(input);
        }

    })