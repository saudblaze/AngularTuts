/// <reference path="angular.js" />

myApp.filter("gender", function () {
    return function (gender) {
        if (gender == 1) {
            return "male";}
        else if (gender == 2) { return "female";}
        else if (gender == 3) { return "not disclosed";}
        
    }
})