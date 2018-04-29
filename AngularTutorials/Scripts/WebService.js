/// <reference path="angular.js" />


var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {
        //debugger;
        //$http.get('EmployeeServices.asmx/GetAllEmployee')
        //    .then(function (res) {
        //        debugger;
        //        $scope.employee = res.data;
        //    });
        //or
        $http({
            method:'GET',
            url:'EmployeeServices.asmx/GetAllEmployee'})
            .then(function (res) {
                $scope.employee = res.data;
                $log.info(res);
            }, function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            }
        );
    })