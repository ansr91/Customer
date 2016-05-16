function myCtrl($scope) {
  $scope.users = [];

  $scope.save = function() {
    $scope.users.push($scope.user);
    window.localStorage.setItem("users", JSON.stringify($scope.users));
    $scope.user = {
      name: "",
      age : "",
      sex : "",
      street: "",
      landmark: "",
      pincode: "",
      state: "",
      country: "",
      office: "",
      mobile: "",
      email: ""
    };
    alert("saved");
      reset();
  };
show();
reset();


 function show() {
  var users = window.localStorage.getItem("users");
  $scope.user= JSON.parse(users);
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
