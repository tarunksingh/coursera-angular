(function(){
"use strict";
angular.module("ShoppingApp",[])
.controller('ToBuyController', LunchCfunc)
.controller('AlreadyBoughtController', LunchCfunc2)
.service('ShoppingListCheckOffService', ShoppingListService);

LunchCfunc.$inject =["$scope","ShoppingListCheckOffService"];
LunchCfunc2.$inject =["$scope","ShoppingListCheckOffService"];

function LunchCfunc($scope ,ShoppingListCheckOffService){
	var list = this;
	list.toBuy =ShoppingListCheckOffService.getToBought();

	list.addBought = function(key){
		console.log("addBought - "+key);
		ShoppingListCheckOffService.moveToBought(key);
		return true;
	};

};
function ShoppingListService(){
	var list1 = [
	{
		name :"apple",
		quantity : "10"
	},
	{
		name :"banana",
		quantity : "20"
	},
	{
		name :"Milk",
		quantity : "5"
	},
	{
		name :"Coffee",
		quantity : "5"
	},
	{
		name :"tomato",
		quantity : "10"
	},
	{
		name :"Orange",
		quantity : "10"
	},
	{
		name :"Cookie",
		quantity : "50"
	},
	{
		name :"Chocolate",
		quantity : "20"
	}
	];
	var list2 = [];
	this.moveToBought = function (key){
		
		list2.push(list1[key]);
		list1.splice(key,1);
		//list1.remove(key);
		return list2;
		console.log(key);
	};
	this.getToBought  = function (){
		return list1;
		console.log(key);
	};
	this.getBought = function (){
		return list2;
		console.log(key);
	};

};

function LunchCfunc2($scope,ShoppingListCheckOffService){
	this.bought =ShoppingListCheckOffService.getBought();
	
};

})();