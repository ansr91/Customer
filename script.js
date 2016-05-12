function myCtrl($scope){
  var user = [{name: "", sex: "" }];
  $scope.users = user;

$scope.save = function(){
  window.localStorage.setItem('user1',JSON.stringify($scope.user));
  $scope.users = user;
  alert("saved");
};

}
