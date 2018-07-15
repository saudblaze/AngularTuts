
/// <reference path="../scripts/angular.js" />
/// <reference path="../scripts/angular-route.js" />

var app = angular
    //.module("Demo123", ["ngRoute"])
    .module("Demo123", ["ngRoute"])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Routing/Home.html",
                controller: "homeController",
                CaseInsensitiveMatch: true
            })
            .when("/courses", {
                templateUrl: "Routing/Courses.html",
                controller: "CoursesController"
            })
            .when("/Students", {
                templateUrl: "Routing/Students.html",
                controller: "StudentsController",
                resolve: {
                    StudentListResolve: function ($http) {
                        return $http.get("Services/StudentServices.asmx/GetStudents")
                            .then(function (response) {
                                return response.data;
                            })
                    } 
                },
                //resolve: {
                //    studentslist: function ($http) {
                //        return $http.get("Services/StudentServices.asmx/GetStudents")
                //            .then(function (response) {
                //                return response.data;
                //            })
                //    }
                //}
            })
            .when("/StudentsDetails/:id", {
                templateUrl: "Routing/StudentsDetails.html",
                controller: "StudentsDetailsController"
            })
            .when("/StudentsSearch/:name?", {
                templateUrl: "Routing/StudentsSearch.html",
                controller: "StudentsSearchController"
            })
        //.otherwise({
        //    redirectTo: "/home"
        //})

    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home / this is comming from controller";
    })
    .controller("CoursesController", function ($scope) {
        $scope.message = "Courses / this is comming from controller";
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
    })
    .controller("StudentsController", function ($scope, $http, $route, $rootScope, $log, $location, StudentListResolve) {
        debugger

        //also you can use $locationChangeStart
        //$scope.$on("$routeChangeStart", function (event, next, current) {
        //    if (!confirm("$routeChangeStart : Are you sure to want to navigate away " + next.$$route.originalPath)) {
        //        event.preventDefault();
        //    }
        //});

        //$scope.$on("$locationChangeStart", function (event, next, current) {
        //    if (!confirm("$locationChangeStart : Are you sure to want to navigate away " + next)) {
        //        event.preventDefault();
        //    }
        //});


        $scope.GetStudentSearch = function () {
            
            if ($scope.name) {
                $location.url("/StudentsSearch/" + $scope.name);
            }
            else {
                $location.url("/StudentsSearch/");
            }
        }

        //type of event that occur when route navigation occur        
        //$rootScope.$on("$routeChangeStart", function () {
        //    $log.debug("$routeChangeStart fired");
        //    console.log("$routeChangeStart fired");
        //});
        //$rootScope.$on("$locationChangeStart", function () {
        //    $log.debug("$locationChangeStart fired");
        //    console.log("$locationChangeStart fired");
        //});
        //$rootScope.$on("$routeChangeSuccess", function () {
        //    $log.debug("$routeChangeSuccess fired");
        //    console.log("$routeChangeSuccess fired");
        //});
        //$scope.$on("$locationChangeSuccess", function () {
        //    $log.debug("$locationChangeSuccess fired");
        //    console.log("$locationChangeSuccess fired");
        //});

        $scope.message = "Students / this is comming from controller";

        $scope.DataReload = function () {
            $route.reload();
        }
        debugger
        $scope.students = StudentListResolve;
        //$http.get("Services/StudentServices.asmx/GetStudents")
        //    .then(function (response) {
        //        $scope.students = response.data;
        //    })
    })
    .controller("StudentsDetailsController", function ($scope, $http, $routeParams) {
        $http({
            url: "Services/StudentServices.asmx/GetStudent",
            method: "get",
            params: { id: $routeParams.id }
        }).then(function (response) {
            $scope.student = response.data;
        })
    })
    .controller("StudentsSearchController", function ($scope, $http, $routeParams) {
        if ($routeParams.name) {
            $http({
                url: "Services/StudentServices.asmx/GetStudentByName",
                method: "get",
                params: { strName: $routeParams.name }
            }).then(function (response) {
                debugger;
                $scope.students = response.data;
            })
        }
        else {
            $http.get("Services/StudentServices.asmx/GetStudents")
                .then(function (response) {
                    debugger;
                    $scope.students = response.data;
                })
        }
        
    })