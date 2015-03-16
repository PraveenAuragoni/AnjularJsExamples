angular.module("sportsStore").constant("baseUrl", "http://localhost:2403/my-products/")
.controller("sportsStoreCtrl", function ($scope,$http,baseUrl) {
 $scope.data ={};
 $http.get(baseUrl)
 .success(function (data) {
 $scope.data.products = data;
 }).error(function (error) {
 $scope.data.error = error;
 });
});


/* {
products: [
{ name: "Product #1", description: "A product",
category: "Category #1", price: 100 },
{ name: "Product #2", description: "A product",
category: "Category #1", price: 110 },
{ name: "Product #3", description: "A product",
category: "Category #2", price: 210 },
{ name: "Product #4", description: "A product",
category: "Category #3", price: 202 }]
};*/