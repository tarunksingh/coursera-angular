(function(){
"use strict";
angular.module("LunchCheck",[])
.controller('LunchCheckController', LunchCfunc);

LunchCfunc.$inject =["$scope"];
function LunchCfunc($scope){
	$scope.input_val ="";
	$scope.message = '';
	$scope.class ='';
	$scope.showMsg = function(){
		var array = $scope.input_val.split(',');
		array = array.filter(function(str) {
   	 		return /\S/.test(str);
		});
		if(array.length < 1){
			$scope.message ="Please enter data first";
			$scope.class = "red";
		}
		else if(array.length < 3){
			$scope.message =array.length+" Item. Enjoy!";
			$scope.class = "green";
		}
		else{
			$scope.message =array.length+" Item. Too much!";
			$scope.class = "green";
		}		
	};
};

})();