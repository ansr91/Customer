function myCtrl($scope){
  $scope.user = [{name: "", sex: "",age:"",street:"",landmark:"",pincode:"",
                state:"",country:"",office:"",mobile:"",email:"" }];


$scope.save = function(){
  window.localStorage.setItem("user1",JSON.stringify($scope.user));
  $scope.user = [];
  alert("saved");
};

$scope.reset = function(){
  $scope.user = "";
};

$scope.show = function(){
  var obj = window.localStorage.getItem("user1");
   $scope.user = JSON.parse(obj);
};
}
