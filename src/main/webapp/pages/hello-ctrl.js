/**
 * Created by taolei on 16/7/13.
 */
var app = angular.module('hello', []);
app.controller('helloController', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});