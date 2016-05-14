function myCtrl($scope){
  $scope.user = {name: "", sex: "",age:"",street:"",landmark:"",pincode:"",
                state:"",country:"",office:"",mobile:"",email:"" };
  $scope.users = [];

$scope.save = function(){
  $scope.users.push($scope.user);
  window.localStorage.setItem("users",JSON.stringify($scope.users));
  $scope.user = {name: "", sex: "",age:"",street:"",landmark:"",pincode:"",
                state:"",country:"",office:"",mobile:"",email:"" };
  alert("saved");

  };
}
