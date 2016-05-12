function myCtrl($scope){
  $scope.user = [];

$scope.save = function(){
  window.localStorage.setItem('user1',JSON.stringify($scope.user));
  $scope.user=[];
  alert("saved");
};

}
