var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope) {
  $scope.photo = "anh1.png";
  $scope.ten = "Nguyễn Văn Tèo";
  $scope.tuoi = "20-15-1995";
  $scope.gioitinh = "Nam";
  $scope.diemtb = 8.5;
});
