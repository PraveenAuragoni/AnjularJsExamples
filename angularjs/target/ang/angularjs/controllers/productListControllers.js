angular.module("sportsStore").constant("productListActiveClass", "btn-primary")
.controller("productListController",function($scope,$filter,productListActiveClass,cart){
	var selectedCategory = null;
	$scope.selectCategory=function(newCategory){
		selectedCategory=newCategory;
	}
	$scope.categoryFilterFn = function (product) {
		 return selectedCategory == null ||
		 product.category == selectedCategory;
		 }
	
	$scope.getCategoryClass = function (category) {
		 return selectedCategory == category ? productListActiveClass : "";
		 }
	$scope.addProductToCart = function (product) {
		 cart.addProduct(product.id, product.name, product.price);
		 }
	
});