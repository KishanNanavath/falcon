/**
 * Created by Kishan on 14-Sep-16.
 */
var myapp = angular.module("myApp",['ngMaterial']);

myapp.controller("MainCtrl",MainCtrl);

function MainCtrl($scope){
    $scope.title = "Kishan";
    $scope.states = ["knkl","knkl","knkl","knkl","knkl"];
}