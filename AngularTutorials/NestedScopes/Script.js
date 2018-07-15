/// <reference path="../scripts/angular.js" />


var myApp = angular.module("myModule", [])
    .controller("CountryController", function () {
        this.name = "India";
    })
    .controller("StateController", function () {
        this.name = "Gujarat";
    })
    .controller("CityController", function () {
        this.name = "vadodara";
    })