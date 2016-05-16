function myCtrl($scope) {
  $scope.users = [];

  $scope.save = function() {
    $scope.users.push($scope.user);
    window.localStorage.setItem("users", JSON.stringify($scope.users));
  
    alert("saved");
      reset();
  };
show();
reset();


 function show() {
  var user = window.localStorage.getItem("users");
  $scope.users= JSON.parse(user);
    }

    $scope.show = show();

  function reset() {
    $scope.user = {
      name: "",
      sex: "",
      age: "",
      street: "",
      landmark: "",
      pincode: "",
      state: "",
      country: "",
      office: "",
      mobile: "",
      email: ""
    };
  }
  $scope.reset = reset();
}
